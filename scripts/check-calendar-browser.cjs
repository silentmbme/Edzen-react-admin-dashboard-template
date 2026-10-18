const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const { spawn } = require("node:child_process");

(async () => {
  const port = 9337;
  const folder = path.resolve(".branding-backups/calendar-review");
  fs.mkdirSync(folder, { recursive: true });
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "edzen-calendar-review-"));
  const chrome = spawn("C:/Program Files/Google/Chrome/Application/chrome.exe", [
    "--headless=new", "--disable-gpu", "--disable-background-networking", "--no-first-run", "--no-default-browser-check",
    `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank",
  ], { windowsHide: true, stdio: "ignore" });
  let socket;
  try {
    let pages;
    for (let attempt = 0; attempt < 80; attempt++) {
      try { pages = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); if (pages.length) break; } catch {}
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    if (!pages?.length) throw Error("Chrome debugging endpoint did not start");
    socket = new WebSocket(pages.find((page) => page.type === "page").webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
    let id = 0;
    const pending = new Map();
    socket.addEventListener("message", ({ data }) => {
      const response = JSON.parse(data);
      if (response.id && pending.has(response.id)) {
        const { resolve, reject } = pending.get(response.id); pending.delete(response.id);
        response.error ? reject(Error(response.error.message)) : resolve(response.result);
      }
    });
    const call = (method, params = {}) => new Promise((resolve, reject) => {
      const request = ++id;
      pending.set(request, { resolve, reject });
      socket.send(JSON.stringify({ id: request, method, params }));
    });
    const evaluate = async (expression) => {
      const response = await call("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
      if (response.exceptionDetails) throw Error(response.exceptionDetails.text + " " + (response.exceptionDetails.exception?.description ?? ""));
      return response.result.value;
    };
    const until = async (expression) => {
      for (let attempt = 0; attempt < 120; attempt++) {
        if (await evaluate(`Boolean(${expression})`)) return;
        await new Promise((resolve) => setTimeout(resolve, 250));
      }
      throw Error("Timed out waiting for " + expression);
    };
    const click = (label) => evaluate(`(() => { const button = [...document.querySelectorAll('button')].find((item) => item.textContent.trim() === ${JSON.stringify(label)}); if (!button) throw Error('Missing button: '+${JSON.stringify(label)}); button.click(); })()`);
    const screenshot = async (name) => {
      await new Promise((resolve) => setTimeout(resolve, 350));
      const result = await call("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(path.join(folder, name), Buffer.from(result.data, "base64"));
    };
    await call("Page.enable");
    await call("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1050, deviceScaleFactor: 1, mobile: false });
    await call("Page.navigate", { url: (process.argv[2] ?? "http://127.0.0.1:4179") + "/apps/calendar" });
    await until(`document.querySelector('section[aria-label="Calendar workspace"]') && localStorage.getItem('edzen-calendar-events-v1')`);
    await screenshot("calendar-month.png");
    await click("Week");
    await until(`document.querySelector('[aria-label="Create event '+new Intl.DateTimeFormat('en-US',{weekday:'short',month:'short',day:'numeric'}).format(new Date())+' at 9:00"]') || [...document.querySelectorAll('button')].some((item) => (item.getAttribute('aria-label')||'').startsWith('Create event ') && (item.getAttribute('aria-label')||'').includes(' at 9:00'))`);
    await screenshot("calendar-week.png");
    await click("Day");
    await click("Agenda");
    await until(`document.body.innerText.includes('No events · Add to your day') || [...document.querySelectorAll('button')].some((item)=>item.textContent.includes('Team Standup'))`);
    await click("New event");
    await until(`document.querySelector('input[aria-label="Event title"]')`);
    await evaluate(`(() => { const input = document.querySelector('input[aria-label="Event title"]'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(input,'Calendar browser check'); input.dispatchEvent(new Event('input',{bubbles:true})); })()`);
    await click("Save event");
    await until(`JSON.parse(localStorage.getItem('edzen-calendar-events-v1')).some((event)=>event.title==='Calendar browser check') && document.querySelector('[role="dialog"]')?.innerText.includes('Event details')`);
    await click("Duplicate");
    await until(`document.querySelector('input[aria-label="Event title"]')?.value === 'Calendar browser check copy'`);
    await click("Cancel");
    await call("Page.reload");
    await until(`document.querySelector('section[aria-label="Calendar workspace"]') && document.body.innerText.includes('Calendar browser check')`);
    await evaluate(`(() => { const button = [...document.querySelectorAll('section[aria-label="Calendar workspace"] button')].find((item)=>item.textContent.includes('Calendar browser check')); button.click(); })()`);
    await until(`document.querySelector('[role="dialog"]')?.innerText.includes('Event details')`);
    await click("Delete");
    await until(`document.body.innerText.includes('Delete this event?')`);
    await click("Delete event");
    await until(`!JSON.parse(localStorage.getItem('edzen-calendar-events-v1')).some((event)=>event.title==='Calendar browser check')`);
    await call("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    await call("Page.reload");
    await until(`[...document.querySelectorAll('button')].some((item)=>item.textContent.trim()==='Agenda' && item.getAttribute('aria-pressed')==='true')`);
    await screenshot("calendar-mobile.png");
    console.log("Browser checks passed: all four views, create, duplicate, delete, reload persistence, and mobile agenda.");
    console.log("Screenshots: " + folder);
    await call("Browser.close");
  } finally {
    socket?.close();
    chrome.kill();
  }
})().catch((error) => { console.error(error.stack); process.exitCode = 1; });
