import { b as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as AppShell } from "./_ssr/sophia-carter-CPbN4m2N.mjs";
import { t as Route } from "./_template-UD-JxjH1.mjs";
import { t as EmailTemplateDetail } from "./_ssr/EmailTemplatesApp-f2RyQWrU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_template-CbzJNJ51.js
var import_jsx_runtime = require_jsx_runtime();
function EmailTemplateRoute() {
	const { template } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailTemplateDetail, { id: template }) });
}
//#endregion
export { EmailTemplateRoute as component };
