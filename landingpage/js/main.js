(() => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const top = document.querySelector(".back-top");
  const header = document.querySelector(".nav");
  const closeMenu = () => {
    nav?.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  };
  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const navLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const navSections = navLinks
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter(({ section }) => section);
  const setActiveNavLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };
  const syncActiveNavLink = () => {
    const scrollPosition = window.scrollY + (header?.offsetHeight || 0) + 24;
    let activeSection = navSections[0]?.section;
    navSections.forEach(({ section }) => {
      if (section.offsetTop <= scrollPosition) activeSection = section;
    });
    if (activeSection) setActiveNavLink(activeSection.id);
  };
  navLinks.forEach((link) =>
    link.addEventListener("click", () => setActiveNavLink(link.getAttribute("href").slice(1))),
  );

  document.querySelectorAll(".faq-q").forEach((button, index) => {
    const panel = button.nextElementSibling;
    const id = `faq-answer-${index + 1}`;
    panel.id = id;
    panel.setAttribute("role", "region");
    button.setAttribute("aria-controls", id);
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      button.querySelector("span").textContent = open ? "-" : "+";
    });
  });


  const previewImage = document.querySelector(".customize-dashboard-image");
  const appearanceButtons = document.querySelectorAll(".appearance-option");
  const systemAppearance = window.matchMedia("(prefers-color-scheme: dark)");
  const setPreviewAppearance = (appearance) => {
    if (!previewImage) return;
    const darkPreview = appearance === "dark" || (appearance === "system" && systemAppearance.matches);
    previewImage.src = darkPreview ? previewImage.dataset.darkSrc : previewImage.dataset.lightSrc;
    previewImage.alt = darkPreview ? "Edzen dark SaaS dashboard preview" : "Edzen light dashboard preview";
    previewImage.closest(".customize-preview")?.classList.toggle("is-dark", darkPreview);
    appearanceButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.appearance === appearance));
  };
  appearanceButtons.forEach((button) => button.addEventListener("click", () => setPreviewAppearance(button.dataset.appearance)));
  systemAppearance.addEventListener?.("change", () => {
    if (document.querySelector(".appearance-option.is-active")?.dataset.appearance === "system") setPreviewAppearance("system");
  });
  const visual = document.querySelector(".theme-visual");
  document.querySelectorAll(".theme-tab").forEach((button) =>
    button.addEventListener("click", () => {
      document.querySelectorAll(".theme-tab").forEach((tab) => tab.classList.remove("is-active"));
      button.classList.add("is-active");
      visual?.classList.toggle("theme-dark", button.dataset.theme === "dark");
    }),
  );

  const board = document.querySelector(".control-board");
  const status = document.querySelector(".customizer-status");
  const customizerState = { mode: "light", skin: "multicolor", sidebar: "light", width: "fluid" };
  const skinLabels = {
    multicolor: "Multicolor",
    sapphire: "Sapphire",
    emerald: "Emerald",
    violet: "Violet",
    rose: "Rose",
    orange: "Orange",
    cyan: "Cyan",
    graphite: "Graphite",
  };
  document.querySelectorAll("[data-customizer] button").forEach((button) =>
    button.addEventListener("click", () => {
      const setting = button.dataset.setting;
      const value = button.dataset.value;
      customizerState[setting] = value;
      document
        .querySelectorAll(`[data-setting="${setting}"]`)
        .forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      board?.classList.toggle("is-dark", customizerState.mode === "dark");
      board?.classList.toggle("sidebar-dark", customizerState.sidebar === "dark");
      board?.classList.toggle("width-boxed", customizerState.width === "boxed");
      if (board) board.dataset.skin = customizerState.skin;
      if (status)
        status.textContent = `Live preview  ${skinLabels[customizerState.skin]}  ${customizerState.mode.charAt(0).toUpperCase() + customizerState.mode.slice(1)}`;
    }),
  );

  const revealTargets = document.querySelectorAll(".section > .container, .stats, .browser");
  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    revealTargets.forEach((element) => element.classList.add("reveal"));
    const observer = new IntersectionObserver(
      (entries, active) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            active.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    revealTargets.forEach((element) => observer.observe(element));
  }
  const syncScrollState = () => {
    top?.classList.toggle("show", window.scrollY > 420);
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
    syncActiveNavLink();
  };
  window.addEventListener("scroll", syncScrollState, { passive: true });
  syncScrollState();
  top?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();


