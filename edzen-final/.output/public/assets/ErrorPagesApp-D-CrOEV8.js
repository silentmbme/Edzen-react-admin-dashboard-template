import{i as e,t}from"./react-SIfiwpqq.js";import{s as n}from"./nova-settings-D8JM0dj7.js";import{o as r}from"./useStore-DxjG8tPc.js";import{i,n as a,r as o,t as s}from"./BrandLogo-BwQozLEC.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h}from"./dist-Dzy8-bC_.js";var g=e(t(),1),_=r(),v={brandName:`Edzen`,dashboardRoute:`/`,supportUrl:`/pages/faq`,statusUrl:void 0},y={404:{eyebrow:`NAVIGATION ERROR`,title:`Looks like you're off route`,description:`The page you're looking for may have been moved, deleted, or the address could be incorrect.`,documentTitle:`404  Page Not Found`},500:{eyebrow:`SERVER ERROR`,title:`Something went wrong`,description:`An unexpected server error occurred while processing your request.`,documentTitle:`500  Server Error`},503:{eyebrow:`SERVICE STATUS`,title:`Service temporarily unavailable`,description:`We're currently unable to complete your request. Please try again shortly.`,documentTitle:`503  Service Unavailable`},maintenance:{eyebrow:`SCHEDULED MAINTENANCE`,title:`We're making things better`,description:`We're performing scheduled maintenance to improve performance, reliability and overall experience.`,documentTitle:`Maintenance`}},b=[`404`,`500`,`503`,`maintenance`];function x({id:e,children:t}){let n=y[e];return(0,g.useEffect)(()=>{document.title=`${n.documentTitle} | ${v.brandName}`},[n.documentTitle]),(0,_.jsxs)(`main`,{className:`relative min-h-screen overflow-hidden bg-background px-5 py-6 text-foreground sm:px-10 sm:py-8`,children:[(0,_.jsx)(`div`,{"aria-hidden":!0,className:`
          pointer-events-none
          absolute
          inset-0
          opacity-[.45]
          bg-muted/40
          [background-size:44px_44px]
        `}),(0,_.jsx)(`div`,{"aria-hidden":!0,className:`
          pointer-events-none
          absolute
          -start-44
          top-1/3
          size-[34rem]
          rounded-full
          bg-primary/10
          blur-3xl
        `}),(0,_.jsx)(`div`,{"aria-hidden":!0,className:`
          pointer-events-none
          absolute
          -end-44
          -top-40
          size-[32rem]
          rounded-full
          bg-primary/10
          blur-3xl
        `}),(0,_.jsxs)(`div`,{className:`relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col`,children:[(0,_.jsxs)(`header`,{className:`flex items-center justify-between gap-4`,children:[(0,_.jsx)(`a`,{href:v.dashboardRoute,className:`flex items-center gap-2.5 text-base font-semibold tracking-tight`,children:(0,_.jsx)(s,{className:`h-9 w-[112px]`})}),(0,_.jsx)(`div`,{className:`hidden rounded-full border border-border bg-card/90 p-1 shadow-sm sm:flex`,children:b.map(t=>(0,_.jsx)(`a`,{href:`/auth/errors/${t}`,className:i(`rounded-full px-3 py-1.5 text-xs font-semibold transition`,e===t?`bg-primary text-primary-foreground`:`text-muted-foreground hover:bg-muted hover:text-foreground`),children:t===`maintenance`?`Maintenance`:t},t))})]}),t,(0,_.jsxs)(`footer`,{className:`mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5 text-xs text-muted-foreground`,children:[(0,_.jsxs)(`span`,{children:[`2026 `,v.brandName]}),(0,_.jsxs)(`div`,{className:`flex gap-4`,children:[(0,_.jsx)(`a`,{href:v.supportUrl,className:`hover:text-primary`,children:`Help Center`}),v.statusUrl&&(0,_.jsx)(`a`,{href:v.statusUrl,className:`hover:text-primary`,children:`Status`}),(0,_.jsx)(`a`,{href:`/`,className:`hover:text-primary`,children:`Privacy`})]})]})]})]})}function S(){return(0,_.jsxs)(`main`,{className:`relative grid min-h-screen place-items-center overflow-hidden bg-background px-5 py-8`,children:[(0,_.jsx)(`div`,{"aria-hidden":!0,className:`
          absolute
          inset-0
          bg-primary/5
        `}),(0,_.jsx)(`div`,{"aria-hidden":!0,className:`
          absolute
          inset-0
          opacity-40
          bg-muted/40
          [background-size:48px_48px]
        `}),(0,_.jsx)(`a`,{href:v.dashboardRoute,className:`sm:absolute mb-4 start-5 top-6 flex items-center gap-2.5 text-base font-semibold tracking-tight sm:start-10 sm:top-8`,children:(0,_.jsx)(s,{className:`h-9 w-[112px]`})}),(0,_.jsxs)(`section`,{className:`relative w-full max-w-2xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-[clamp(8rem,25vw,14rem)] font-black leading-none tracking-[-.02em] text-primary drop-shadow-[0_18px_25px_hsl(var(--primary)/.16)]`,children:`404`}),(0,_.jsx)(`h1`,{className:`mt-5 text-3xl font-semibold tracking-tight sm:text-4xl`,children:`Page not found`}),(0,_.jsx)(`p`,{className:`mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg`,children:`The page you're looking for doesn't exist or has been moved. Let's get you back on track.`}),(0,_.jsxs)(`div`,{className:`my-10 flex flex-col justify-center gap-3 sm:flex-row`,children:[(0,_.jsxs)(`a`,{href:v.dashboardRoute,className:i(o({size:`lg`}),`shadow-xl shadow-primary/25`),children:[(0,_.jsx)(p,{className:`me-2 size-4`}),`Back to dashboard`]}),(0,_.jsx)(`a`,{href:`mailto:support@edzenadmin.demo`,className:o({size:`lg`,variant:`outline`}),children:`Contact support`})]})]}),(0,_.jsx)(C,{})]})}function C(){return(0,_.jsxs)(`footer`,{className:`absolute bottom-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground sm:bottom-8`,children:[(0,_.jsx)(`a`,{href:v.supportUrl,className:`hover:text-primary`,children:`Help Center`}),(0,_.jsxs)(`span`,{children:[`2026 `,v.brandName]}),(0,_.jsx)(`a`,{href:`/`,className:`hover:text-primary`,children:`Privacy`})]})}function w(){let[e,t]=(0,g.useState)(!1);return(0,_.jsxs)(`main`,{className:`relative grid min-h-screen place-items-center overflow-hidden bg-background px-5 py-8`,children:[(0,_.jsx)(`div`,{"aria-hidden":!0,className:`absolute inset-0 bg-primary/5`}),(0,_.jsx)(`a`,{href:v.dashboardRoute,className:`sm:absolute mb-4 start-5 top-6 flex items-center gap-2.5 text-base font-semibold tracking-tight sm:start-10 sm:top-8`,children:(0,_.jsx)(s,{className:`h-9 w-[112px]`})}),(0,_.jsxs)(`section`,{className:`relative w-full max-w-2xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-xs font-bold tracking-[.18em] text-primary`,children:`SERVER ERROR`}),(0,_.jsx)(`p`,{className:`mt-5 text-[clamp(8rem,25vw,14rem)] font-black leading-none tracking-[-.02em] text-primary drop-shadow-[0_18px_25px_hsl(var(--primary)/.16)]`,children:`500`}),(0,_.jsx)(`h1`,{className:`mt-5 text-3xl font-semibold tracking-tight sm:text-4xl`,children:`Something went wrong`}),(0,_.jsx)(`p`,{className:`mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg`,children:`An unexpected server error occurred while processing your request. Our team has been notified.`}),(0,_.jsxs)(`div`,{className:`my-10 flex flex-col justify-center gap-3 sm:flex-row`,children:[(0,_.jsxs)(a,{size:`lg`,onClick:()=>window.location.reload(),className:`shadow-xl shadow-primary/25`,children:[(0,_.jsx)(c,{className:`me-2 size-4`}),`Try again`]}),(0,_.jsxs)(`a`,{href:v.dashboardRoute,className:o({size:`lg`,variant:`outline`}),children:[(0,_.jsx)(p,{className:`me-2 size-4`}),`Back to dashboard`]})]})]}),(0,_.jsx)(C,{})]})}function T(){return(0,_.jsxs)(`main`,{className:`relative grid min-h-screen place-items-center overflow-hidden bg-background px-5 py-8`,children:[(0,_.jsx)(`div`,{"aria-hidden":!0,className:`absolute inset-0 bg-primary/5`}),(0,_.jsx)(`a`,{href:v.dashboardRoute,className:`sm:absolute mb-4 start-5 top-6 flex items-center gap-2.5 text-base font-semibold tracking-tight sm:start-10 sm:top-8`,children:(0,_.jsx)(s,{className:`h-9 w-[112px]`})}),(0,_.jsxs)(`section`,{className:`relative w-full max-w-2xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-xs font-bold tracking-[.18em] text-primary`,children:`SERVICE STATUS`}),(0,_.jsx)(`p`,{className:`mt-5 text-[clamp(8rem,25vw,14rem)] font-black leading-none tracking-[-.02em] text-primary drop-shadow-[0_18px_25px_hsl(var(--primary)/.16)]`,children:`503`}),(0,_.jsx)(`h1`,{className:`mt-5 text-3xl font-semibold tracking-tight sm:text-4xl`,children:`Service temporarily unavailable`}),(0,_.jsx)(`p`,{className:`mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg`,children:`We're currently unable to complete your request. Please try again shortly.`}),(0,_.jsxs)(`div`,{className:`my-10 flex flex-col justify-center gap-3 sm:flex-row`,children:[(0,_.jsxs)(a,{size:`lg`,onClick:()=>window.location.reload(),className:`shadow-xl shadow-primary/25`,children:[(0,_.jsx)(c,{className:`me-2 size-4`}),`Try again`]}),(0,_.jsx)(`a`,{href:v.supportUrl,className:o({size:`lg`,variant:`outline`}),children:`Contact support`})]})]}),(0,_.jsx)(C,{})]})}function E(){let[e,t]=(0,g.useState)(``),[n,r]=(0,g.useState)(()=>225429);(0,g.useEffect)(()=>{let e=window.setInterval(()=>{r(e=>Math.max(0,e-1))},1e3);return()=>window.clearInterval(e)},[]);let i=()=>{if(!/^\S+@\S+\.\S+$/.test(e)){f.error(`Enter a valid email address`);return}f.success(`Notification preference saved for this demo.`),t(``)},o=Math.floor(n/86400),c=Math.floor(n%86400/3600),l=Math.floor(n%3600/60),u=n%60,p=[[o,`Days`],[c,`Hours`],[l,`Mins`],[u,`Secs`]];return(0,_.jsxs)(`main`,{className:`relative grid min-h-screen place-items-center overflow-hidden bg-background px-5 py-8`,children:[(0,_.jsx)(`div`,{"aria-hidden":!0,className:`absolute inset-0 bg-primary/5`}),(0,_.jsx)(`div`,{"aria-hidden":!0,className:`
          absolute
          inset-0
          opacity-35
          bg-muted/40
          [background-size:52px_52px]
        `}),(0,_.jsx)(`a`,{href:v.dashboardRoute,className:`sm:absolute mb-4 start-5 top-6 flex items-center gap-2.5 text-base font-semibold tracking-tight sm:start-10 sm:top-8`,children:(0,_.jsx)(s,{className:`h-9 w-[112px]`})}),(0,_.jsxs)(`section`,{className:`relative w-full max-w-3xl text-center`,children:[(0,_.jsx)(`span`,{className:`mx-auto grid size-24 place-items-center rounded-[1.7rem] bg-warning/10 text-warning shadow-sm`,children:(0,_.jsx)(m,{className:`size-10`})}),(0,_.jsx)(`p`,{className:`mt-8 text-xs font-bold tracking-[.18em] text-primary`,children:`SCHEDULED MAINTENANCE`}),(0,_.jsx)(`h1`,{className:`mt-4 text-4xl font-semibold tracking-tight sm:text-5xl`,children:`Under maintenance`}),(0,_.jsx)(`p`,{className:`mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg`,children:`We're upgrading for a better experience. We'll be back shortly.`}),(0,_.jsx)(`div`,{className:`mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4`,children:p.map(([e,t])=>(0,_.jsxs)(`div`,{className:`
                  rounded-2xl
                  border
                  border-border
                  bg-card/90
                  px-3
                  py-6
                  shadow-sm
                `,children:[(0,_.jsx)(`p`,{className:`text-4xl font-black tracking-tight text-primary sm:text-5xl`,children:String(e).padStart(2,`0`)}),(0,_.jsx)(`p`,{className:`mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground`,children:t})]},String(t)))}),(0,_.jsxs)(`form`,{className:`mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row`,onSubmit:e=>{e.preventDefault(),i()},children:[(0,_.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),type:`email`,placeholder:`Notify me when back...`,"aria-label":`Email address`,className:`
              h-14
              min-w-0 sm:py-0 py-4
              flex-1
              rounded-2xl
              border
              border-border
              bg-card
              px-5
              text-base
              outline-none
              transition
              focus:ring-2
              focus:ring-primary/30
            `}),(0,_.jsxs)(a,{type:`submit`,size:`lg`,className:`h-14 shadow-xl shadow-primary/25`,children:[(0,_.jsx)(d,{className:`me-2 size-4`}),`Notify me`]})]}),(0,_.jsx)(`p`,{className:`mt-3 mb-12 text-xs text-muted-foreground`,children:`Demo notification preference no email will be sent.`})]}),(0,_.jsx)(C,{})]})}function D({id:e}){let t=b.includes(e)?e:`404`;return t===`500`?(0,_.jsx)(w,{}):t===`503`?(0,_.jsx)(T,{}):t===`maintenance`?(0,_.jsx)(E,{}):(0,_.jsx)(S,{})}function O(){return(0,_.jsx)(S,{})}function k(){return(0,_.jsx)(w,{})}function A(){return(0,_.jsx)(T,{})}function j(){return(0,_.jsx)(E,{})}function M(){return(0,_.jsx)(x,{id:`404`,children:(0,_.jsxs)(`div`,{className:`my-auto flex-1 py-14`,children:[(0,_.jsx)(`p`,{className:`text-xs font-bold tracking-[.18em] text-primary`,children:`SYSTEM PAGES`}),(0,_.jsx)(`h1`,{className:`mt-4 text-4xl font-semibold tracking-tight`,children:`Error & maintenance`}),(0,_.jsx)(`p`,{className:`mt-3 max-w-xl text-muted-foreground`,children:`Four intentional recovery experiences for Edzen.`}),(0,_.jsx)(`div`,{className:`mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4`,children:b.map(e=>(0,_.jsxs)(n,{to:`/auth/errors/$error`,params:{error:e},className:`
                rounded-3xl
                border
                border-border
                bg-card
                p-5
                shadow-sm
                transition
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-lg
              `,children:[(0,_.jsx)(`span`,{className:`grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary`,children:e===`404`?(0,_.jsx)(h,{className:`size-5`}):e===`500`?(0,_.jsx)(u,{className:`size-5`}):e===`503`?(0,_.jsx)(l,{className:`size-5`}):(0,_.jsx)(m,{className:`size-5`})}),(0,_.jsx)(`p`,{className:`mt-6 text-3xl font-black tracking-tight text-primary/35`,children:e===`maintenance`?`UP`:e}),(0,_.jsx)(`p`,{className:`mt-3 font-semibold`,children:y[e].title}),(0,_.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-muted-foreground`,children:y[e].description})]},e))})]})})}export{D as a,M as i,k as n,j as o,A as r,O as t};