globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"467f-waS6qMhm+N10KjIQSGvSoc9NFGQ\"",
		"mtime": "2026-10-13T11:02:04.891Z",
		"size": 18047,
		"path": "../public/favicon.ico"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"4669-94acAI9F421vqAimydYV71xLd7I\"",
		"mtime": "2026-10-13T11:02:04.844Z",
		"size": 18025,
		"path": "../public/favicon.png"
	},
	"/assets/404-Co0DW0zc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-nM2AN2qkmcOT5sSJiSWekv5QABY\"",
		"mtime": "2026-10-13T11:49:35.429Z",
		"size": 79,
		"path": "../public/assets/404-Co0DW0zc.js"
	},
	"/assets/-create-PjHsqEel.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b4b-oWHK/7hvqdx4obUjVJfSQ2bX+gk\"",
		"mtime": "2026-10-13T11:49:35.429Z",
		"size": 15179,
		"path": "../public/assets/-create-PjHsqEel.js"
	},
	"/assets/503-CFROIrCn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-pXF89SBAf946PogqfvV+F/dqeOw\"",
		"mtime": "2026-10-13T11:49:35.429Z",
		"size": 79,
		"path": "../public/assets/503-CFROIrCn.js"
	},
	"/assets/500-PFqzkDKc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-eI4aqtwPAgScuFKtxbV/mW+HGO0\"",
		"mtime": "2026-10-13T11:49:35.429Z",
		"size": 79,
		"path": "../public/assets/500-PFqzkDKc.js"
	},
	"/assets/add-CRIFeIN0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49-C2bgC5kdCoREHbmwYucsQxOISTI\"",
		"mtime": "2026-10-13T11:49:35.441Z",
		"size": 73,
		"path": "../public/assets/add-CRIFeIN0.js"
	},
	"/assets/add-product-CRIFeIN0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49-C2bgC5kdCoREHbmwYucsQxOISTI\"",
		"mtime": "2026-10-13T11:49:35.441Z",
		"size": 73,
		"path": "../public/assets/add-product-CRIFeIN0.js"
	},
	"/assets/advanced-DlllMm7q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eb-adtYBZvdQ62jKzWCXjnJIzM55IA\"",
		"mtime": "2026-10-13T11:49:35.441Z",
		"size": 235,
		"path": "../public/assets/advanced-DlllMm7q.js"
	},
	"/assets/ai-chat-dl-LkDT1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39e5-k/c0KfCTiesPDXxz9E6DmZf1l0Y\"",
		"mtime": "2026-10-13T11:49:35.443Z",
		"size": 14821,
		"path": "../public/assets/ai-chat-dl-LkDT1.js"
	},
	"/assets/ambulance-C6VhRtBV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-KQE+oQjQNywQv59/M+5idusmHdo\"",
		"mtime": "2026-10-13T11:49:35.443Z",
		"size": 157,
		"path": "../public/assets/ambulance-C6VhRtBV.js"
	},
	"/assets/ai-analytics-mhBiQqUv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6429-ir9VkktpYZF+79AfYzTO7B8+A2Y\"",
		"mtime": "2026-10-13T11:49:35.443Z",
		"size": 25641,
		"path": "../public/assets/ai-analytics-mhBiQqUv.js"
	},
	"/assets/analytics-w3laylOj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"250e-/nKs/ZBC239X+/usg4amo5sY9os\"",
		"mtime": "2026-10-13T11:49:35.443Z",
		"size": 9486,
		"path": "../public/assets/analytics-w3laylOj.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"5e75-ev9G00Y67pxeAoBP+F1/fo132Fg\"",
		"mtime": "2026-10-13T11:02:04.891Z",
		"size": 24181,
		"path": "../public/favicon.svg"
	},
	"/assets/AiAnalyticsPages-zCDI0wZR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fad1-iih7p4Jj811o3Ccw5J19hy1Akb8\"",
		"mtime": "2026-10-13T11:49:35.429Z",
		"size": 64209,
		"path": "../public/assets/AiAnalyticsPages-zCDI0wZR.js"
	},
	"/assets/apex-Ch24EPRf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-K/0eHlyblAMfK+6fpnQ2hbRQsd0\"",
		"mtime": "2026-10-13T11:49:35.443Z",
		"size": 233,
		"path": "../public/assets/apex-Ch24EPRf.js"
	},
	"/assets/appointments-Da1wrCEr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a0-ufKkd9pYvqBLEMVdML4D5VEs2pQ\"",
		"mtime": "2026-10-13T11:49:35.445Z",
		"size": 160,
		"path": "../public/assets/appointments-Da1wrCEr.js"
	},
	"/assets/area-BYti6XIV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-zQsrQAqrEh9XRvNPeV3oFdIVJCA\"",
		"mtime": "2026-10-13T11:49:35.445Z",
		"size": 233,
		"path": "../public/assets/area-BYti6XIV.js"
	},
	"/assets/attendance-HmQQI3oG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-BoOGz287VND9N0RD8Ym/SnRv+sw\"",
		"mtime": "2026-10-13T11:49:35.445Z",
		"size": 156,
		"path": "../public/assets/attendance-HmQQI3oG.js"
	},
	"/edzen-favicon.png": {
		"type": "image/png",
		"etag": "\"4669-94acAI9F421vqAimydYV71xLd7I\"",
		"mtime": "2026-10-13T11:02:04.844Z",
		"size": 18025,
		"path": "../public/edzen-favicon.png"
	},
	"/assets/AuthFlowApp-Bob6FHls.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c3c-+35KVliPNtQRwdsKiASg+b4jGTg\"",
		"mtime": "2026-10-13T11:49:35.429Z",
		"size": 15420,
		"path": "../public/assets/AuthFlowApp-Bob6FHls.js"
	},
	"/assets/avatar-DCX-tRWJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa2-pTMwdERHVddaciJw35rxGyIocZc\"",
		"mtime": "2026-10-13T11:49:35.445Z",
		"size": 2722,
		"path": "../public/assets/avatar-DCX-tRWJ.js"
	},
	"/assets/amelia-brooks-CRUwN0s8.jpg": {
		"type": "image/jpeg",
		"etag": "\"7680-44SeKP4gWvqO/+jO1TkIgwZZFfY\"",
		"mtime": "2026-10-13T11:49:35.518Z",
		"size": 30336,
		"path": "../public/assets/amelia-brooks-CRUwN0s8.jpg"
	},
	"/assets/badge-CpPpFqD0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32b-o+Qe9K1wu8RSypeD9WChAKQuFKo\"",
		"mtime": "2026-10-13T11:49:35.445Z",
		"size": 811,
		"path": "../public/assets/badge-CpPpFqD0.js"
	},
	"/assets/basic-CaaL1uqn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-nuWzAefQUUv86iJSSTYh10seCVg\"",
		"mtime": "2026-10-13T11:49:35.453Z",
		"size": 169,
		"path": "../public/assets/basic-CaaL1uqn.js"
	},
	"/assets/basic-B3w8iU1f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-RRUi0YvzcNf9MdUB6WfSgDvzkwQ\"",
		"mtime": "2026-10-13T11:49:35.447Z",
		"size": 174,
		"path": "../public/assets/basic-B3w8iU1f.js"
	},
	"/assets/basic-CKLh6xDo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-Fd/33ug/N5cxFHSF7VEZQayUSN0\"",
		"mtime": "2026-10-13T11:49:35.447Z",
		"size": 232,
		"path": "../public/assets/basic-CKLh6xDo.js"
	},
	"/assets/bar-2Ou_TdCb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-MozVczPtlPEp0nMIKle92I5S8Ms\"",
		"mtime": "2026-10-13T11:49:35.447Z",
		"size": 232,
		"path": "../public/assets/bar-2Ou_TdCb.js"
	},
	"/assets/basic-CMqMPBYf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0-265LMmOxnaKc6KzX7/sEUjMO45k\"",
		"mtime": "2026-10-13T11:49:35.447Z",
		"size": 176,
		"path": "../public/assets/basic-CMqMPBYf.js"
	},
	"/assets/basic-CY-uhSVN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa-Pb7R4bdzns1pygqyh/8ZmFdL6WU\"",
		"mtime": "2026-10-13T11:49:35.452Z",
		"size": 170,
		"path": "../public/assets/basic-CY-uhSVN.js"
	},
	"/assets/basic-DSsJKRoX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-3D+dR4AXR5iND66mjTJzS8rwjGY\"",
		"mtime": "2026-10-13T11:49:35.454Z",
		"size": 173,
		"path": "../public/assets/basic-DSsJKRoX.js"
	},
	"/assets/basic-D-S2Hzjj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-KxVCa8ZbfGX++mvhwC+EHLnBi2Q\"",
		"mtime": "2026-10-13T11:49:35.454Z",
		"size": 169,
		"path": "../public/assets/basic-D-S2Hzjj.js"
	},
	"/assets/basic-VEaBWIW-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1-ylSSNe/3wdIhncoHTYQjMDDLEh0\"",
		"mtime": "2026-10-13T11:49:35.454Z",
		"size": 177,
		"path": "../public/assets/basic-VEaBWIW-.js"
	},
	"/assets/billing-DO4cx1fg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-pyDXLfrdd4xD4q1v1YnGCcvBMIk\"",
		"mtime": "2026-10-13T11:49:35.456Z",
		"size": 155,
		"path": "../public/assets/billing-DO4cx1fg.js"
	},
	"/assets/budgets-BtsL176K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-HNhpm/qaRj2Shmw8+TEi79mjiR0\"",
		"mtime": "2026-10-13T11:49:35.457Z",
		"size": 154,
		"path": "../public/assets/budgets-BtsL176K.js"
	},
	"/assets/calendar-CsMC3ubX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-i5PY2F2Zv8rszAGjfpnjyus8MN0\"",
		"mtime": "2026-10-13T11:49:35.457Z",
		"size": 240,
		"path": "../public/assets/calendar-CsMC3ubX.js"
	},
	"/assets/BrandLogo-BwQozLEC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a9c-9OpIbl7Yaw2Bu4QfcmZdxRxX6Hg\"",
		"mtime": "2026-10-13T11:49:35.429Z",
		"size": 35484,
		"path": "../public/assets/BrandLogo-BwQozLEC.js"
	},
	"/assets/chat-BZzrJzp_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-iiphgfHcgHYbknHx7yT4qPMF4DU\"",
		"mtime": "2026-10-13T11:49:35.457Z",
		"size": 236,
		"path": "../public/assets/chat-BZzrJzp_.js"
	},
	"/assets/chatbot-conversations-CSB90z0e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-MrDtrDfzDLKYFafsGJlJjdfW6Fs\"",
		"mtime": "2026-10-13T11:49:35.459Z",
		"size": 158,
		"path": "../public/assets/chatbot-conversations-CSB90z0e.js"
	},
	"/assets/ChartsShowcaseApp-BttxA8Sj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3145-WbYyugpbVJYR129vsphQfJbsv78\"",
		"mtime": "2026-10-13T11:49:35.432Z",
		"size": 12613,
		"path": "../public/assets/ChartsShowcaseApp-BttxA8Sj.js"
	},
	"/assets/checkbox-BBH-e1eU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b7-GHKeicOV1820qKxsr1xfey7FT18\"",
		"mtime": "2026-10-13T11:49:35.473Z",
		"size": 4535,
		"path": "../public/assets/checkbox-BBH-e1eU.js"
	},
	"/assets/checks-switches-radios-C9Zfdpwb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"33a3-521iPWioGaxguSB4+IjR6UEGvwA\"",
		"mtime": "2026-10-13T11:49:35.473Z",
		"size": 13219,
		"path": "../public/assets/checks-switches-radios-C9Zfdpwb.js"
	},
	"/assets/classes-DTq9hgQv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-cp9p7VwXfuJSbXztbYZLdR8f2cU\"",
		"mtime": "2026-10-13T11:49:35.473Z",
		"size": 153,
		"path": "../public/assets/classes-DTq9hgQv.js"
	},
	"/assets/checkout-qcg0o3R9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3cc7-wwYp2retRSK8zHEKsbAXiPQxIos\"",
		"mtime": "2026-10-13T11:49:35.473Z",
		"size": 15559,
		"path": "../public/assets/checkout-qcg0o3R9.js"
	},
	"/assets/companies-D6U2f_z9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-CBB5b4GWl+4ISnojIWlZ1p++aUs\"",
		"mtime": "2026-10-13T11:49:35.473Z",
		"size": 240,
		"path": "../public/assets/companies-D6U2f_z9.js"
	},
	"/assets/aurora-desk-lamp-5Uj4hdCW.png": {
		"type": "image/png",
		"etag": "\"166f92-nLmK9UvrfhxgridlESiBi1ezjGU\"",
		"mtime": "2026-10-13T11:49:35.520Z",
		"size": 1470354,
		"path": "../public/assets/aurora-desk-lamp-5Uj4hdCW.png"
	},
	"/assets/contacts-jcR2L1G6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-jjV397dJSFw/iVaSuePA5elgcq0\"",
		"mtime": "2026-10-13T11:49:35.473Z",
		"size": 239,
		"path": "../public/assets/contacts-jcR2L1G6.js"
	},
	"/assets/cover-B-W5za8N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0-vn2Ar+aH5d5X0TWXu0gAWXHOClg\"",
		"mtime": "2026-10-13T11:49:35.473Z",
		"size": 176,
		"path": "../public/assets/cover-B-W5za8N.js"
	},
	"/assets/cover-Bib27gHt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-AHJ0hYXSb/XXRMU4cMsh0IqAE+8\"",
		"mtime": "2026-10-13T11:49:35.475Z",
		"size": 174,
		"path": "../public/assets/cover-Bib27gHt.js"
	},
	"/assets/cover-BYF6Ef1A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-DMTUcj2cv4v6qxaL8BET1wN+D0Y\"",
		"mtime": "2026-10-13T11:49:35.473Z",
		"size": 169,
		"path": "../public/assets/cover-BYF6Ef1A.js"
	},
	"/assets/cover-BzrKt3Wn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1-loEEJyuuJiaCnDmxEbKwLHFx6hs\"",
		"mtime": "2026-10-13T11:49:35.475Z",
		"size": 177,
		"path": "../public/assets/cover-BzrKt3Wn.js"
	},
	"/assets/cover-Cqd1-kph.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa-SDlbMC/5J4JJdK08jsQevoX//Rk\"",
		"mtime": "2026-10-13T11:49:35.475Z",
		"size": 170,
		"path": "../public/assets/cover-Cqd1-kph.js"
	},
	"/assets/cover-DiyPlzy5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-u4fao5Ogb0Jfvradut0Si9AiybQ\"",
		"mtime": "2026-10-13T11:49:35.475Z",
		"size": 173,
		"path": "../public/assets/cover-DiyPlzy5.js"
	},
	"/assets/cover-TEgtTN1T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-NHfobQ/7H8HZY85AjdDgBEE2csg\"",
		"mtime": "2026-10-13T11:49:35.475Z",
		"size": 169,
		"path": "../public/assets/cover-TEgtTN1T.js"
	},
	"/assets/crypto-dashboard-data-CknEbKaa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8dc-kEh0CGd9vZm9T4PJFabKlguLjnc\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 2268,
		"path": "../public/assets/crypto-dashboard-data-CknEbKaa.js"
	},
	"/assets/create-DGy4pFQL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bd6-Txm3ZE0VhfN5YnvX7OCvsEZTo0k\"",
		"mtime": "2026-10-13T11:49:35.475Z",
		"size": 11222,
		"path": "../public/assets/create-DGy4pFQL.js"
	},
	"/assets/crypto-xv39SSyQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f54-n1mwdJUJ+f1gGu/PoFW97BkoFtE\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 20308,
		"path": "../public/assets/crypto-xv39SSyQ.js"
	},
	"/assets/customers-Ca_rR8dc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-NdVVxF/FbsVxIj7Gs8riEKyYk4w\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 246,
		"path": "../public/assets/customers-Ca_rR8dc.js"
	},
	"/assets/crm-DbIvqbiT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5110-734nyVWdAD6ZISuwyim5vOYI1i4\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 20752,
		"path": "../public/assets/crm-DbIvqbiT.js"
	},
	"/assets/data-CXnsCaCH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-O48vREsaBYB3OaGDy64DfU/jIRE\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 231,
		"path": "../public/assets/data-CXnsCaCH.js"
	},
	"/assets/CryptoPages-BIFdS6GU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65c2-EuQeT/CwfuV+HWJy6V0e+AqxcUk\"",
		"mtime": "2026-10-13T11:49:35.433Z",
		"size": 26050,
		"path": "../public/assets/CryptoPages-BIFdS6GU.js"
	},
	"/assets/deals-Bwgbya9l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-jSwLEQbGVQy9pGA9Qrh57Yx8dfI\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 236,
		"path": "../public/assets/deals-Bwgbya9l.js"
	},
	"/assets/detail-99PJQoOf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc-4ZXmRAghAENrrp08M2yneIzk9Co\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 252,
		"path": "../public/assets/detail-99PJQoOf.js"
	},
	"/assets/detail-Clzt360y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2769-7UniuzuLf2PlwGgehw0TldAKjW0\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 10089,
		"path": "../public/assets/detail-Clzt360y.js"
	},
	"/assets/chat-onboarding-flow-Dqbl2MuA.png": {
		"type": "image/png",
		"etag": "\"1033ab-mtt9k9MPKN8KtV6xj2b3/PQepEw\"",
		"mtime": "2026-10-13T11:49:35.520Z",
		"size": 1061803,
		"path": "../public/assets/chat-onboarding-flow-Dqbl2MuA.png"
	},
	"/assets/detail-ptDQKmeT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de-wZmOfmpu7+bfayAtOQ1HcVHl6BA\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 222,
		"path": "../public/assets/detail-ptDQKmeT.js"
	},
	"/assets/date-pickers-BmGBOFY5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1074c-8hW3U0Bdt6sMVgFWX2SjwZDTS7o\"",
		"mtime": "2026-10-13T11:49:35.477Z",
		"size": 67404,
		"path": "../public/assets/date-pickers-BmGBOFY5.js"
	},
	"/assets/daniel-chen-CDpMTLin.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e84-K7UhhMZBSGbY16RTQGBXrCzB0v4\"",
		"mtime": "2026-10-13T11:49:35.520Z",
		"size": 28292,
		"path": "../public/assets/daniel-chen-CDpMTLin.jpg"
	},
	"/assets/dialog-DbxneGpE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ff-/IsJeiZWvZ9wGBzN0DdUqoJphVU\"",
		"mtime": "2026-10-13T11:49:35.479Z",
		"size": 2303,
		"path": "../public/assets/dialog-DbxneGpE.js"
	},
	"/assets/dist-B5QuMlCe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fe-GJNQZuox+iHKNH/YtDqprWpi8kc\"",
		"mtime": "2026-10-13T11:49:35.479Z",
		"size": 510,
		"path": "../public/assets/dist-B5QuMlCe.js"
	},
	"/assets/dist-BriAqOeZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1197-jGVl1ZqJCC3wyynmSMJBd4FkiCk\"",
		"mtime": "2026-10-13T11:49:35.479Z",
		"size": 4503,
		"path": "../public/assets/dist-BriAqOeZ.js"
	},
	"/assets/dist-BybcxA6J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e4-YSYo+rYByXuZYLsjxIjN5kF/VuY\"",
		"mtime": "2026-10-13T11:49:35.479Z",
		"size": 484,
		"path": "../public/assets/dist-BybcxA6J.js"
	},
	"/assets/dist-CbN8sP4i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"400-p+SwHo+8Ylo03qK7TBhruz2lpcY\"",
		"mtime": "2026-10-13T11:49:35.479Z",
		"size": 1024,
		"path": "../public/assets/dist-CbN8sP4i.js"
	},
	"/assets/dist-Dzy8-bC_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c35-UcKRjAdhfFhoRQZft/qisnTtUuM\"",
		"mtime": "2026-10-13T11:49:35.479Z",
		"size": 35893,
		"path": "../public/assets/dist-Dzy8-bC_.js"
	},
	"/assets/dist-XNqIeU6w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29aa-+pWz20Vui2uQEus2r1D9J1e8R5I\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 10666,
		"path": "../public/assets/dist-XNqIeU6w.js"
	},
	"/assets/doctors-DEuNhUSP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-z0cVmxLc1ubtaI6zLWD3fJ5uEwk\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 155,
		"path": "../public/assets/doctors-DEuNhUSP.js"
	},
	"/assets/ecommerce-3keBnHpr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4140-iWvQFDQzfZnH/Dvbmy1DB6zO+io\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 16704,
		"path": "../public/assets/ecommerce-3keBnHpr.js"
	},
	"/assets/editors-CyoMIT9P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"268c-WRYv7ZLAEH6AlP2bWsvbjK1zP64\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 9868,
		"path": "../public/assets/editors-CyoMIT9P.js"
	},
	"/assets/email-Bi9zsgdK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-HEzyVIS/cGhI7yzCyLD1Eqres14\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 237,
		"path": "../public/assets/email-Bi9zsgdK.js"
	},
	"/assets/elements-BNVhyF4m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-BYaW0pQW+OCWHHx19BjPENLR/cY\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 240,
		"path": "../public/assets/elements-BNVhyF4m.js"
	},
	"/assets/elements-DdvKB7Wi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"360c-wLkibtLC06Z13SCCa5iwjMlxPE8\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 13836,
		"path": "../public/assets/elements-DdvKB7Wi.js"
	},
	"/assets/email-templates-C2YvWVXf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9-fJIakC1z10Z3T1gjPwLNDtJzlks\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 217,
		"path": "../public/assets/email-templates-C2YvWVXf.js"
	},
	"/assets/email-templates-CeOXfkre.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-63FrjgDtPKs0/V3Cttq7dmZD990\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 71,
		"path": "../public/assets/email-templates-CeOXfkre.js"
	},
	"/assets/EmailTemplatesApp-BOcnccDq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3881-fms87dHQ1gO8Oqz0ryi2TFnWsEI\"",
		"mtime": "2026-10-13T11:49:35.433Z",
		"size": 14465,
		"path": "../public/assets/EmailTemplatesApp-BOcnccDq.js"
	},
	"/assets/employees-CqE41Qbj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-2kU6Ikb41ywwVWEJZVe7rUvIXWU\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 152,
		"path": "../public/assets/employees-CqE41Qbj.js"
	},
	"/assets/ErrorPagesApp-D-CrOEV8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35ab-Y4rnzJhtD+o7yBqjGafn8W9cxFU\"",
		"mtime": "2026-10-13T11:49:35.433Z",
		"size": 13739,
		"path": "../public/assets/ErrorPagesApp-D-CrOEV8.js"
	},
	"/assets/errors-CeOXfkre.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-63FrjgDtPKs0/V3Cttq7dmZD990\"",
		"mtime": "2026-10-13T11:49:35.481Z",
		"size": 71,
		"path": "../public/assets/errors-CeOXfkre.js"
	},
	"/assets/errors-DqO28QwG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-hfzFWEFnX4RsoVlnmAmr1HqjTo4\"",
		"mtime": "2026-10-13T11:49:35.484Z",
		"size": 79,
		"path": "../public/assets/errors-DqO28QwG.js"
	},
	"/assets/exams-rl2wHTnS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-b6+7j1DteYMvpF3CYiGJ5OLqzxg\"",
		"mtime": "2026-10-13T11:49:35.484Z",
		"size": 151,
		"path": "../public/assets/exams-rl2wHTnS.js"
	},
	"/assets/edzen-logo-Cv32CoTW.png": {
		"type": "image/png",
		"etag": "\"5b798-XpOV9tMVIVz3l2p4uJ6PS996gSI\"",
		"mtime": "2026-10-13T11:49:35.524Z",
		"size": 374680,
		"path": "../public/assets/edzen-logo-Cv32CoTW.png"
	},
	"/assets/exchange-ysk3Dc02.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-BEwqv+65inUSMDJ+ZTzhaemu46g\"",
		"mtime": "2026-10-13T11:49:35.484Z",
		"size": 154,
		"path": "../public/assets/exchange-ysk3Dc02.js"
	},
	"/assets/expenses-nq582tJ1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-LcDu9Kga9zPn4QKzDV+dt9byZyE\"",
		"mtime": "2026-10-13T11:49:35.484Z",
		"size": 155,
		"path": "../public/assets/expenses-nq582tJ1.js"
	},
	"/assets/faq-CEx4eLhR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-s4V8DtfD/K6sMB3YkC3NOpHCwI0\"",
		"mtime": "2026-10-13T11:49:35.484Z",
		"size": 236,
		"path": "../public/assets/faq-CEx4eLhR.js"
	},
	"/assets/files-KOl2anCw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-G5NpWQcFkgA/LM2O6iKBkRSomGE\"",
		"mtime": "2026-10-13T11:49:35.484Z",
		"size": 237,
		"path": "../public/assets/files-KOl2anCw.js"
	},
	"/assets/filter-BG5SLZLl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-kZ6s/wWMzjWIx74mdA3lW09i248\"",
		"mtime": "2026-10-13T11:49:35.486Z",
		"size": 233,
		"path": "../public/assets/filter-BG5SLZLl.js"
	},
	"/assets/forgot-password-VEaBWIW-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1-ylSSNe/3wdIhncoHTYQjMDDLEh0\"",
		"mtime": "2026-10-13T11:49:35.486Z",
		"size": 177,
		"path": "../public/assets/forgot-password-VEaBWIW-.js"
	},
	"/assets/FinancePages-BpKur9xC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5dd1-tkw6E5fwl4eLoXL3Dtq1vj25tz4\"",
		"mtime": "2026-10-13T11:49:35.433Z",
		"size": 24017,
		"path": "../public/assets/FinancePages-BpKur9xC.js"
	},
	"/assets/finance-CKXCPzWx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"258f-+UNJh3968FNm3dZTdsPV5VRe/t0\"",
		"mtime": "2026-10-13T11:49:35.486Z",
		"size": 9615,
		"path": "../public/assets/finance-CKXCPzWx.js"
	},
	"/assets/grid-932_KUQs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-+Na1fYuxdWzqsWhrWbxYIIKyyHE\"",
		"mtime": "2026-10-13T11:49:35.486Z",
		"size": 240,
		"path": "../public/assets/grid-932_KUQs.js"
	},
	"/assets/greek-salad-LryOd0jr.jpg": {
		"type": "image/jpeg",
		"etag": "\"2181a-8PsOLaHENYQYw+iiEsRXsn0qh+A\"",
		"mtime": "2026-10-13T11:49:35.524Z",
		"size": 137242,
		"path": "../public/assets/greek-salad-LryOd0jr.jpg"
	},
	"/assets/heatmap-Bvju40cZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-rTxUUa3yjE4zC264NiCbbY2pSTs\"",
		"mtime": "2026-10-13T11:49:35.486Z",
		"size": 236,
		"path": "../public/assets/heatmap-Bvju40cZ.js"
	},
	"/assets/hospital-management-C9LZxW3x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d-pkxCnwTcyxYuI4lFX+Ia+7h/VsU\"",
		"mtime": "2026-10-13T11:49:35.486Z",
		"size": 93,
		"path": "../public/assets/hospital-management-C9LZxW3x.js"
	},
	"/assets/hospital-dashboard-data-Ci6k84y2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc2-u8+WJHnPVqjyPw5E9wkWpG3WUnE\"",
		"mtime": "2026-10-13T11:49:35.486Z",
		"size": 3266,
		"path": "../public/assets/hospital-dashboard-data-Ci6k84y2.js"
	},
	"/assets/hospital-management_._html-C9LZxW3x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d-pkxCnwTcyxYuI4lFX+Ia+7h/VsU\"",
		"mtime": "2026-10-13T11:49:35.488Z",
		"size": 93,
		"path": "../public/assets/hospital-management_._html-C9LZxW3x.js"
	},
	"/assets/garden-salad-D7_OAF3X.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f808-4UUdmfhrZwYDstC3ULgcEUx9BPM\"",
		"mtime": "2026-10-13T11:49:35.524Z",
		"size": 129032,
		"path": "../public/assets/garden-salad-D7_OAF3X.jpg"
	},
	"/assets/hrm-dashboard-Dv1baUJc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"442c-T0O76gur8d7LHyaPg/f1cTeDOVY\"",
		"mtime": "2026-10-13T11:49:35.488Z",
		"size": 17452,
		"path": "../public/assets/hrm-dashboard-Dv1baUJc.js"
	},
	"/assets/HospitalPages-DgmBJej7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d875-6h+UEo/vW+6kA6hY3qtmLrCJWls\"",
		"mtime": "2026-10-13T11:49:35.435Z",
		"size": 55413,
		"path": "../public/assets/HospitalPages-DgmBJej7.js"
	},
	"/assets/HospitalManagementDashboard-C4kWU4HX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"552c-6MrlNyODyBCDI7ydIdNMcCGMVZ8\"",
		"mtime": "2026-10-13T11:49:35.433Z",
		"size": 21804,
		"path": "../public/assets/HospitalManagementDashboard-C4kWU4HX.js"
	},
	"/assets/HrmPages-FxM6Zdz3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8b2-0jtyWfJXGjh+rJU0mucSqQlvF9c\"",
		"mtime": "2026-10-13T11:49:35.435Z",
		"size": 59570,
		"path": "../public/assets/HrmPages-FxM6Zdz3.js"
	},
	"/assets/iced-latte-BRVytxmM.jpg": {
		"type": "image/jpeg",
		"etag": "\"156b8-999MfcUPiSY9CHQZhDs6pemScaI\"",
		"mtime": "2026-10-13T11:49:35.524Z",
		"size": 87736,
		"path": "../public/assets/iced-latte-BRVytxmM.jpg"
	},
	"/assets/index-RZffZpV5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bb8d-5KlB8jlFJUEjFlX3y7lX3li/EuE\"",
		"mtime": "2026-10-13T11:49:35.429Z",
		"size": 310157,
		"path": "../public/assets/index-RZffZpV5.js"
	},
	"/assets/input-8U80Pjbp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"339-tuZxi9nBDo3qj4+JRzf4xDh/DHI\"",
		"mtime": "2026-10-13T11:49:35.489Z",
		"size": 825,
		"path": "../public/assets/input-8U80Pjbp.js"
	},
	"/assets/grilled-chicken-D7ngbXMh.jpg": {
		"type": "image/jpeg",
		"etag": "\"21e74-E72GLCZXT2OmhCupClacClj6NNc\"",
		"mtime": "2026-10-13T11:49:35.524Z",
		"size": 138868,
		"path": "../public/assets/grilled-chicken-D7ngbXMh.jpg"
	},
	"/assets/inline-editable-kG-cTRXb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2682-AhyuzMMpU94dfX9IZcYWSsZGRxg\"",
		"mtime": "2026-10-13T11:49:35.488Z",
		"size": 9858,
		"path": "../public/assets/inline-editable-kG-cTRXb.js"
	},
	"/assets/edzen-icon-DpHgihnd.png": {
		"type": "image/png",
		"etag": "\"62a1d-NJhDLy026Cv95UQCSQZlwNI2q4U\"",
		"mtime": "2026-10-13T11:49:35.522Z",
		"size": 403997,
		"path": "../public/assets/edzen-icon-DpHgihnd.png"
	},
	"/assets/insights-CUdARzyh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-3ejH0GCF6RowxSPR8ynp9yTA1GY\"",
		"mtime": "2026-10-13T11:49:35.489Z",
		"size": 159,
		"path": "../public/assets/insights-CUdARzyh.js"
	},
	"/assets/inventory-BvhxxDYm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-EL4WE2XRUL1whAK8SpzFWDZKzok\"",
		"mtime": "2026-10-13T11:49:35.489Z",
		"size": 158,
		"path": "../public/assets/inventory-BvhxxDYm.js"
	},
	"/assets/invoices-BSbbsAbs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-lq/7Snl3Xj0TnW03qmMZRUkd6DM\"",
		"mtime": "2026-10-13T11:49:35.491Z",
		"size": 155,
		"path": "../public/assets/invoices-BSbbsAbs.js"
	},
	"/assets/kanban-DmgEN49Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee-k/PPa6IrHhk1oH6V0eA6rbTSox8\"",
		"mtime": "2026-10-13T11:49:35.491Z",
		"size": 238,
		"path": "../public/assets/kanban-DmgEN49Q.js"
	},
	"/assets/isSameMonth-BAZX7yR6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e83-0Q2TcFSmKo1xQJG2Sl5Ap/jaT+s\"",
		"mtime": "2026-10-13T11:49:35.491Z",
		"size": 20099,
		"path": "../public/assets/isSameMonth-BAZX7yR6.js"
	},
	"/assets/label-BYsvmWox.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c5-V54AdpnWn/KA7ZAmZv9U8yBp37U\"",
		"mtime": "2026-10-13T11:49:35.493Z",
		"size": 709,
		"path": "../public/assets/label-BYsvmWox.js"
	},
	"/assets/lazyRouteComponent-pNAA852i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd8-FA8tr7+Liisr1AiYT9dPpfustZk\"",
		"mtime": "2026-10-13T11:49:35.493Z",
		"size": 4056,
		"path": "../public/assets/lazyRouteComponent-pNAA852i.js"
	},
	"/assets/layouts-iMAPZRBp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3975-DwHtKvcregG8XVYRLaoqGeIifjw\"",
		"mtime": "2026-10-13T11:49:35.493Z",
		"size": 14709,
		"path": "../public/assets/layouts-iMAPZRBp.js"
	},
	"/assets/james-wilson-DO7D1uJw.jpg": {
		"type": "image/jpeg",
		"etag": "\"709d-JhpDeQiMZtaExY6EKq5c0hSkln0\"",
		"mtime": "2026-10-13T11:49:35.524Z",
		"size": 28829,
		"path": "../public/assets/james-wilson-DO7D1uJw.jpg"
	},
	"/assets/leads-DHRGYdlK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-iwkDwK960BBsbGjNuVQSlzf5z2k\"",
		"mtime": "2026-10-13T11:49:35.493Z",
		"size": 236,
		"path": "../public/assets/leads-DHRGYdlK.js"
	},
	"/assets/leave-requests-DRRaDpQr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-elDa//tMZ5hwGzU051tm+9W1wIk\"",
		"mtime": "2026-10-13T11:49:35.493Z",
		"size": 157,
		"path": "../public/assets/leave-requests-DRRaDpQr.js"
	},
	"/assets/list-8ZkxKy-g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-UD7Sl26Uk3ODtqrwgdCksO1v1L8\"",
		"mtime": "2026-10-13T11:49:35.495Z",
		"size": 240,
		"path": "../public/assets/list-8ZkxKy-g.js"
	},
	"/assets/line-Tyeqda6i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-o6XaJxg2EHmwN+pwVh5v6Ec/ddU\"",
		"mtime": "2026-10-13T11:49:35.493Z",
		"size": 233,
		"path": "../public/assets/line-Tyeqda6i.js"
	},
	"/assets/list-BPBrM9kd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10f9-RTxwJ2b6QBNldlL4KJCmmcEZzq4\"",
		"mtime": "2026-10-13T11:49:35.495Z",
		"size": 4345,
		"path": "../public/assets/list-BPBrM9kd.js"
	},
	"/assets/lms-dashboard-DYf3N3Ea.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62fa-PZxm1GZ+ZtvgrYvmgUKGabkBPEo\"",
		"mtime": "2026-10-13T11:49:35.495Z",
		"size": 25338,
		"path": "../public/assets/lms-dashboard-DYf3N3Ea.js"
	},
	"/assets/lemonade-CXRIIPnI.jpg": {
		"type": "image/jpeg",
		"etag": "\"18160-4x1S/00s37E+vl1yihl89dM+T88\"",
		"mtime": "2026-10-13T11:49:35.527Z",
		"size": 98656,
		"path": "../public/assets/lemonade-CXRIIPnI.jpg"
	},
	"/assets/local-images-C71M-kOL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c0-QLRCy+cU3UFLPD4NMDTNay6pFnw\"",
		"mtime": "2026-10-13T11:49:35.495Z",
		"size": 704,
		"path": "../public/assets/local-images-C71M-kOL.js"
	},
	"/assets/logistics-dashboard-m8huTKTg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54-ap1mr73uToSEDHy/y6E6bouBtxY\"",
		"mtime": "2026-10-13T11:49:35.495Z",
		"size": 84,
		"path": "../public/assets/logistics-dashboard-m8huTKTg.js"
	},
	"/assets/login-CaaL1uqn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-nuWzAefQUUv86iJSSTYh10seCVg\"",
		"mtime": "2026-10-13T11:49:35.495Z",
		"size": 169,
		"path": "../public/assets/login-CaaL1uqn.js"
	},
	"/assets/logistics-dashboard_._html-m8huTKTg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54-ap1mr73uToSEDHy/y6E6bouBtxY\"",
		"mtime": "2026-10-13T11:49:35.495Z",
		"size": 84,
		"path": "../public/assets/logistics-dashboard_._html-m8huTKTg.js"
	},
	"/assets/maintenance-Csetmjmc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-ESYHyk5waqWbWKHUHgL/RLhGUxQ\"",
		"mtime": "2026-10-13T11:49:35.497Z",
		"size": 79,
		"path": "../public/assets/maintenance-Csetmjmc.js"
	},
	"/assets/LogisticsDashboard-DavpVS_8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c3a-4U3tOpbNoK+WyLWTybksr7icJcE\"",
		"mtime": "2026-10-13T11:49:35.435Z",
		"size": 15418,
		"path": "../public/assets/LogisticsDashboard-DavpVS_8.js"
	},
	"/assets/LogisticsPages-B6v_CD5d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c63a-JB7gQZ53XpRZI6WLDAO3msqVtiI\"",
		"mtime": "2026-10-13T11:49:35.435Z",
		"size": 50746,
		"path": "../public/assets/LogisticsPages-B6v_CD5d.js"
	},
	"/assets/margherita-pizza-FSOndywA.jpg": {
		"type": "image/jpeg",
		"etag": "\"21c9c-IrZD7EU0KwLCSl2JcdvpZqKlN9w\"",
		"mtime": "2026-10-13T11:49:35.527Z",
		"size": 138396,
		"path": "../public/assets/margherita-pizza-FSOndywA.jpg"
	},
	"/assets/market-6E1FIxRl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-vrdOxl32RUH86eR/F5KGgCk4nfk\"",
		"mtime": "2026-10-13T11:49:35.497Z",
		"size": 152,
		"path": "../public/assets/market-6E1FIxRl.js"
	},
	"/assets/marketing-B3D1XnJU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e1-N63A2dFgrSz1d9h2VjffFvN++Jk\"",
		"mtime": "2026-10-13T11:49:35.497Z",
		"size": 9953,
		"path": "../public/assets/marketing-B3D1XnJU.js"
	},
	"/assets/matchContext-wwozvuHw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"83-2eVKroxmdNLvWlG7Q2qSPy/RGbo\"",
		"mtime": "2026-10-13T11:49:35.497Z",
		"size": 131,
		"path": "../public/assets/matchContext-wwozvuHw.js"
	},
	"/assets/Match-DsmBR-Jv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bdf7-w4FrWKbwNxVv+EiBw/5xJbVj6zY\"",
		"mtime": "2026-10-13T11:49:35.437Z",
		"size": 48631,
		"path": "../public/assets/Match-DsmBR-Jv.js"
	},
	"/assets/mixed-au3wIJ7c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-ao0Bm2rh8tBzBhvjh8MlCHZh9CI\"",
		"mtime": "2026-10-13T11:49:35.497Z",
		"size": 234,
		"path": "../public/assets/mixed-au3wIJ7c.js"
	},
	"/assets/model-settings-YZTsUwoM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-daWr8FUzTHZ9FFFcmDtiV1aG/ac\"",
		"mtime": "2026-10-13T11:49:35.497Z",
		"size": 157,
		"path": "../public/assets/model-settings-YZTsUwoM.js"
	},
	"/assets/multi-step-wizard-CtKRUdRa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d80-HtlEgu/YzpmTO7K/Po2YnRJc+Zs\"",
		"mtime": "2026-10-13T11:49:35.499Z",
		"size": 11648,
		"path": "../public/assets/multi-step-wizard-CtKRUdRa.js"
	},
	"/assets/maya-patel-Byn_bHHe.jpg": {
		"type": "image/jpeg",
		"etag": "\"71c4-CSEtGZ503leGGQnswb5wj2S9Boo\"",
		"mtime": "2026-10-13T11:49:35.527Z",
		"size": 29124,
		"path": "../public/assets/maya-patel-Byn_bHHe.jpg"
	},
	"/assets/leather-backpack-CKo9P0Re.png": {
		"type": "image/png",
		"etag": "\"1f208f-Am8FzZf3hLYtsQTLFfJViucRQZ4\"",
		"mtime": "2026-10-13T11:49:35.527Z",
		"size": 2039951,
		"path": "../public/assets/leather-backpack-CKo9P0Re.png"
	},
	"/assets/notes-Ck_yJ7wP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a-8uWHzKCZKBBkZIjXIkYUAbmL5Vc\"",
		"mtime": "2026-10-13T11:49:35.499Z",
		"size": 74,
		"path": "../public/assets/notes-Ck_yJ7wP.js"
	},
	"/assets/notes_._html-Ck_yJ7wP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a-8uWHzKCZKBBkZIjXIkYUAbmL5Vc\"",
		"mtime": "2026-10-13T11:49:35.499Z",
		"size": 74,
		"path": "../public/assets/notes_._html-Ck_yJ7wP.js"
	},
	"/edzen-favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"467f-waS6qMhm+N10KjIQSGvSoc9NFGQ\"",
		"mtime": "2026-10-13T11:02:04.891Z",
		"size": 18047,
		"path": "../public/edzen-favicon.ico"
	},
	"/assets/NotesApp-BX_d7xCR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ace-N8rd7kKK4ReavQGP1s/It9U3mi0\"",
		"mtime": "2026-10-13T11:49:35.437Z",
		"size": 10958,
		"path": "../public/assets/NotesApp-BX_d7xCR.js"
	},
	"/assets/nova-settings-D8JM0dj7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2966-yPK537XSZi/1Lr4dP7fr2upnRkM\"",
		"mtime": "2026-10-13T11:49:35.499Z",
		"size": 10598,
		"path": "../public/assets/nova-settings-D8JM0dj7.js"
	},
	"/assets/patients-B07aYqZ6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-qYqjCPTh0wKMJ6Qnvij2vPzSeGY\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 156,
		"path": "../public/assets/patients-B07aYqZ6.js"
	},
	"/assets/orders-C5v1HPVt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f3-exHu/pQfHtKFgHfZHJ749ltn1z0\"",
		"mtime": "2026-10-13T11:49:35.499Z",
		"size": 243,
		"path": "../public/assets/orders-C5v1HPVt.js"
	},
	"/assets/payroll-CRlndHTw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-E2Ijs5VdYBNoYa0mHgLahHtN0g0\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 150,
		"path": "../public/assets/payroll-CRlndHTw.js"
	},
	"/assets/mushroom-pasta-CBGcaAUl.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e0ba-uSoJEy+eCPsoqS58Isw1HsceMqA\"",
		"mtime": "2026-10-13T11:49:35.529Z",
		"size": 123066,
		"path": "../public/assets/mushroom-pasta-CBGcaAUl.jpg"
	},
	"/assets/pie-Bo658-m0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-J4gsdzQyiT+3K8YyEvmS99Dv/aU\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 232,
		"path": "../public/assets/pie-Bo658-m0.js"
	},
	"/assets/pharmacy-BDrUuzFP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-fkv+3sbckRFYrYEY/mWIG0SJTeE\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 156,
		"path": "../public/assets/pharmacy-BDrUuzFP.js"
	},
	"/assets/plugins-5Yh6Qyeh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2716-EOBq6/OQwZIXe6Iw1GMjVtE127A\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 10006,
		"path": "../public/assets/plugins-5Yh6Qyeh.js"
	},
	"/assets/pipeline-U33tAytA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-+zJqxfppJCwPx9uMBG1vINpL7Hs\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 239,
		"path": "../public/assets/pipeline-U33tAytA.js"
	},
	"/assets/predictions-1WujxHSR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-OyeiKF43qvFvSpuZhPdr9XueXPs\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 162,
		"path": "../public/assets/predictions-1WujxHSR.js"
	},
	"/assets/preload-helper-Czpn1I53.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ac-sE+5KsaRXTMfwOfrOATQajMSGV4\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 1196,
		"path": "../public/assets/preload-helper-Czpn1I53.js"
	},
	"/assets/pricing-Cn3FYsxf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-adCiDfxCj2q/Qf6k9vjoKZUoHFo\"",
		"mtime": "2026-10-13T11:49:35.501Z",
		"size": 240,
		"path": "../public/assets/pricing-Cn3FYsxf.js"
	},
	"/assets/product-details-CiV_URie.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc-aHF+m6GqI5R9JqZQfOFWCdVXA54\"",
		"mtime": "2026-10-13T11:49:35.503Z",
		"size": 252,
		"path": "../public/assets/product-details-CiV_URie.js"
	},
	"/assets/products-C1CYsJcr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5-Wv7phBzg9NxBWFfodrI/m7K1exs\"",
		"mtime": "2026-10-13T11:49:35.503Z",
		"size": 245,
		"path": "../public/assets/products-C1CYsJcr.js"
	},
	"/assets/ProjectDetailsApp-BO4aYY8T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3778-iP0dzxgkWXiQ2E9lh57v0VO3MU0\"",
		"mtime": "2026-10-13T11:49:35.437Z",
		"size": 14200,
		"path": "../public/assets/ProjectDetailsApp-BO4aYY8T.js"
	},
	"/assets/profile-r8UHt7xj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0-h3iydDywIImB/v/GSHL/Df5zUG4\"",
		"mtime": "2026-10-13T11:49:35.503Z",
		"size": 240,
		"path": "../public/assets/profile-r8UHt7xj.js"
	},
	"/assets/projects-C0yCRU13.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c9b-pAzGxJgOtDgyA3fO1KXemnJvOL8\"",
		"mtime": "2026-10-13T11:49:35.503Z",
		"size": 19611,
		"path": "../public/assets/projects-C0yCRU13.js"
	},
	"/assets/purchase-orders-DHNmzqeJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-fGfSdNzqjvrYIq7kqXgvP36wpMk\"",
		"mtime": "2026-10-13T11:49:35.503Z",
		"size": 164,
		"path": "../public/assets/purchase-orders-DHNmzqeJ.js"
	},
	"/assets/radar-CjBIrM6g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ea-Na6vMauW0PfkCDSsAv05Np+gmXA\"",
		"mtime": "2026-10-13T11:49:35.503Z",
		"size": 234,
		"path": "../public/assets/radar-CjBIrM6g.js"
	},
	"/assets/radial-B58yvov2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eb-Vf+hjyClZ7cusI9FbPbqs6BaMdU\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 235,
		"path": "../public/assets/radial-B58yvov2.js"
	},
	"/assets/react-SIfiwpqq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ff9-FGVdof4/lFGmrdRsB9EIvuwBlYc\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 8185,
		"path": "../public/assets/react-SIfiwpqq.js"
	},
	"/assets/radio-group-lTEu-6LZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f1-7H2M/y7p5+lQYSJfQ5P9oP/84mA\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 6129,
		"path": "../public/assets/radio-group-lTEu-6LZ.js"
	},
	"/assets/redirect-1Dss4sOM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"216-AhfiXwQqYdLrM+uQAOtPHfIddmI\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 534,
		"path": "../public/assets/redirect-1Dss4sOM.js"
	},
	"/assets/register-D-S2Hzjj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-KxVCa8ZbfGX++mvhwC+EHLnBi2Q\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 169,
		"path": "../public/assets/register-D-S2Hzjj.js"
	},
	"/assets/responsive-H5714tEM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-rXz+YAsLfp2FpPluwwcfcspdXiM\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 237,
		"path": "../public/assets/responsive-H5714tEM.js"
	},
	"/assets/restaurant-pos-CoJXqzMK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-bISKPALiZv8gEPHlcQxwpmxKrsU\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 79,
		"path": "../public/assets/restaurant-pos-CoJXqzMK.js"
	},
	"/assets/restaurant-pos_._html-CoJXqzMK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f-bISKPALiZv8gEPHlcQxwpmxKrsU\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 79,
		"path": "../public/assets/restaurant-pos_._html-CoJXqzMK.js"
	},
	"/assets/reviews-DR7PzcvC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-0YBu/43BHK4UDw5AudM3WPlrUPA\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 150,
		"path": "../public/assets/reviews-DR7PzcvC.js"
	},
	"/assets/RestaurantPos-Cc8tfdy5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a61-cwUalgrqnYYSRTkY/NnBAn+7xoQ\"",
		"mtime": "2026-10-13T11:49:35.437Z",
		"size": 14945,
		"path": "../public/assets/RestaurantPos-Cc8tfdy5.js"
	},
	"/assets/routes-CsMKlgZy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1db8-UUcEMyxW7hrc5emSPB7IuJMmrp0\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 7608,
		"path": "../public/assets/routes-CsMKlgZy.js"
	},
	"/assets/saas-BfHuSsqn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d27-xXVZlFZLKgI5b05XdRE7BPVxhoc\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 11559,
		"path": "../public/assets/saas-BfHuSsqn.js"
	},
	"/assets/portable-speaker-mini-B7ZaTGpB.png": {
		"type": "image/png",
		"etag": "\"19c38a-6u6OvCl3a/1eggc+MQ7iUAczsx0\"",
		"mtime": "2026-10-13T11:49:35.529Z",
		"size": 1688458,
		"path": "../public/assets/portable-speaker-mini-B7ZaTGpB.png"
	},
	"/assets/react-apexcharts.esm-BXc_zsRH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e46d7-oQsjZg/i5SrMOFZ0hvtZnA/rpI4\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 935639,
		"path": "../public/assets/react-apexcharts.esm-BXc_zsRH.js"
	},
	"/assets/scatter-Bsk9Qq8Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-QzlVBZ2EuNXJkd/rBbbwAtPRkWg\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 236,
		"path": "../public/assets/scatter-Bsk9Qq8Y.js"
	},
	"/assets/school-management-mm7Rr_JY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"115-uJ+7mdQ3T3kqdD6Wzm3GpS5MHW0\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 277,
		"path": "../public/assets/school-management-mm7Rr_JY.js"
	},
	"/assets/SchoolManagementDashboard-CxNO-Dat.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6033-CwT5VeqYkgnuN3UntoDNWMiJSEs\"",
		"mtime": "2026-10-13T11:49:35.437Z",
		"size": 24627,
		"path": "../public/assets/SchoolManagementDashboard-CxNO-Dat.js"
	},
	"/assets/school-management_._html-mm7Rr_JY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"115-uJ+7mdQ3T3kqdD6Wzm3GpS5MHW0\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 277,
		"path": "../public/assets/school-management_._html-mm7Rr_JY.js"
	},
	"/assets/SchoolPages-Djw6I1Pr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97f0-dy1StHDUNiyrL3kEGpslifJvlJU\"",
		"mtime": "2026-10-13T11:49:35.439Z",
		"size": 38896,
		"path": "../public/assets/SchoolPages-Djw6I1Pr.js"
	},
	"/assets/school-management_._htmlhtml-mm7Rr_JY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"115-uJ+7mdQ3T3kqdD6Wzm3GpS5MHW0\"",
		"mtime": "2026-10-13T11:49:35.505Z",
		"size": 277,
		"path": "../public/assets/school-management_._htmlhtml-mm7Rr_JY.js"
	},
	"/assets/select-B-bE3Bm2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5634-Qswy40+6xYTNukqQby+J5fpSArE\"",
		"mtime": "2026-10-13T11:49:35.510Z",
		"size": 22068,
		"path": "../public/assets/select-B-bE3Bm2.js"
	},
	"/assets/select-components-CH3fQWiX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"250c-LTBjugyhzk6TO2Mx7NL3vzHJI3M\"",
		"mtime": "2026-10-13T11:49:35.510Z",
		"size": 9484,
		"path": "../public/assets/select-components-CH3fQWiX.js"
	},
	"/assets/settings-Dgz5SR-w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f1-+DOOUOdsu5YcS7ldaf+R9sxVB3Y\"",
		"mtime": "2026-10-13T11:49:35.510Z",
		"size": 241,
		"path": "../public/assets/settings-Dgz5SR-w.js"
	},
	"/assets/sheet-DhxnGJrT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aab-bLz1v3lRhMeZ0PeyyjkwybTPZa8\"",
		"mtime": "2026-10-13T11:49:35.510Z",
		"size": 2731,
		"path": "../public/assets/sheet-DhxnGJrT.js"
	},
	"/assets/shipments-Bng9Rd7g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-W+KDNFLWA2HE8mSDP7J5p/izgnI\"",
		"mtime": "2026-10-13T11:49:35.510Z",
		"size": 158,
		"path": "../public/assets/shipments-Bng9Rd7g.js"
	},
	"/assets/slider-BNoaMn4V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2804-zWQpgLkvVLTUYVC5/CEys2VNow8\"",
		"mtime": "2026-10-13T11:49:35.512Z",
		"size": 10244,
		"path": "../public/assets/slider-BNoaMn4V.js"
	},
	"/assets/sparkline-CPGtwwny.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee-3Uj6YHzE4oSA5Mtf5ZpgYf5fvs8\"",
		"mtime": "2026-10-13T11:49:35.512Z",
		"size": 238,
		"path": "../public/assets/sparkline-CPGtwwny.js"
	},
	"/assets/students-dSRDSdPm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-NhRNi4EBiXk/pZcoCBJOWDSVotU\"",
		"mtime": "2026-10-13T11:49:35.513Z",
		"size": 154,
		"path": "../public/assets/students-dSRDSdPm.js"
	},
	"/assets/running-shoes-x2-DSkE_V9u.png": {
		"type": "image/png",
		"etag": "\"1c2ca9-vMrOpCOw7HW2sPCdQfiHdxdLddE\"",
		"mtime": "2026-10-13T11:49:35.530Z",
		"size": 1846441,
		"path": "../public/assets/running-shoes-x2-DSkE_V9u.png"
	},
	"/assets/suppliers-CEVCKJxY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-5TynA3y+0u1YrgkWSZokJqjtMHs\"",
		"mtime": "2026-10-13T11:49:35.513Z",
		"size": 158,
		"path": "../public/assets/suppliers-CEVCKJxY.js"
	},
	"/assets/product-catalog-ClVqwWDz.png": {
		"type": "image/png",
		"etag": "\"229725-WR8470uQ9/fKWJxD/TmQSzColh0\"",
		"mtime": "2026-10-13T11:49:35.530Z",
		"size": 2266917,
		"path": "../public/assets/product-catalog-ClVqwWDz.png"
	},
	"/assets/stock-transfer-CbsRYexG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-9wQZoxCpijEmUO6rtj1iEwSdw7g\"",
		"mtime": "2026-10-13T11:49:35.513Z",
		"size": 163,
		"path": "../public/assets/stock-transfer-CbsRYexG.js"
	},
	"/assets/switch-BVmoxURn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1157-YR0LfxQLiEpACBVwwal8l2vx02A\"",
		"mtime": "2026-10-13T11:49:35.513Z",
		"size": 4439,
		"path": "../public/assets/switch-BVmoxURn.js"
	},
	"/assets/table-Hbjvje15.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b4-jfxaOmwvvGzqsMk84wZFcby72ks\"",
		"mtime": "2026-10-13T11:49:35.513Z",
		"size": 1716,
		"path": "../public/assets/table-Hbjvje15.js"
	},
	"/assets/styles-BIqrWN5u.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"300fb-zFDG7jGjfQE/EHbovsxGVpMB9zc\"",
		"mtime": "2026-10-13T11:49:35.532Z",
		"size": 196859,
		"path": "../public/assets/styles-BIqrWN5u.css"
	},
	"/assets/TablesModuleApp-Br5Dsz_Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d7c-TxjmrGS/sh1WGkQUkfdsMiqx8LM\"",
		"mtime": "2026-10-13T11:49:35.439Z",
		"size": 15740,
		"path": "../public/assets/TablesModuleApp-Br5Dsz_Z.js"
	},
	"/assets/sophia-carter-CgBbJ8K6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0bc7-F+gExPqVRloy8iA6+lofp7WKAF8\"",
		"mtime": "2026-10-13T11:49:35.512Z",
		"size": 723911,
		"path": "../public/assets/sophia-carter-CgBbJ8K6.js"
	},
	"/assets/tasks-DFt0HvFz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-eepEfymOQhw6Sp2Uv5iIGQJABVc\"",
		"mtime": "2026-10-13T11:49:35.513Z",
		"size": 237,
		"path": "../public/assets/tasks-DFt0HvFz.js"
	},
	"/assets/team-4cd-0UQ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36bc-XP8f1Dz9/Q8sj6XXk2R3GdDFfgY\"",
		"mtime": "2026-10-13T11:49:35.513Z",
		"size": 14012,
		"path": "../public/assets/team-4cd-0UQ3.js"
	},
	"/assets/textarea-7tUkSx0T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"224-NHqvTklgg5uJPbRRzfB6IDcdUZs\"",
		"mtime": "2026-10-13T11:49:35.513Z",
		"size": 548,
		"path": "../public/assets/textarea-7tUkSx0T.js"
	},
	"/assets/smart-watch-series-x-BvYDHXQ_.png": {
		"type": "image/png",
		"etag": "\"160427-vCC7zwjYyPsXJAHC5i4hwLS+7Zk\"",
		"mtime": "2026-10-13T11:49:35.532Z",
		"size": 1442855,
		"path": "../public/assets/smart-watch-series-x-BvYDHXQ_.png"
	},
	"/assets/transactions-B4S5EsYr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-sHVp5ejWDPKX8SgUfsVr77GH8XA\"",
		"mtime": "2026-10-13T11:49:35.516Z",
		"size": 159,
		"path": "../public/assets/transactions-B4S5EsYr.js"
	},
	"/assets/transactions-BWbsbsU_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-69+WMVYKjoE+ona+C95mkJ1j84A\"",
		"mtime": "2026-10-13T11:49:35.516Z",
		"size": 158,
		"path": "../public/assets/transactions-BWbsbsU_.js"
	},
	"/assets/treemap-rYki_Dja.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-uhVojKQiCG1Cn5tGIBD92yLGnQw\"",
		"mtime": "2026-10-13T11:49:35.516Z",
		"size": 236,
		"path": "../public/assets/treemap-rYki_Dja.js"
	},
	"/assets/UiElementDetailApp-CI6kA9Q2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45870-uePQoW9LpHDxNs8y6p8IMbTYY3s\"",
		"mtime": "2026-10-13T11:49:35.439Z",
		"size": 284784,
		"path": "../public/assets/UiElementDetailApp-CI6kA9Q2.js"
	},
	"/assets/useStore-DxjG8tPc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c59-g5vcQw4rQICOKetJ05Lg8IksiF0\"",
		"mtime": "2026-10-13T11:49:35.518Z",
		"size": 19545,
		"path": "../public/assets/useStore-DxjG8tPc.js"
	},
	"/assets/user-3-4pybPHCX.jpg": {
		"type": "image/jpeg",
		"etag": "\"9a4a-XsBlsqSI75phJDX3HqFR5swdoV0\"",
		"mtime": "2026-10-13T11:49:35.534Z",
		"size": 39498,
		"path": "../public/assets/user-3-4pybPHCX.jpg"
	},
	"/assets/validation-CeFbEkxX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32b8-492o/YMXblzGBKxhxyTaaeb1cms\"",
		"mtime": "2026-10-13T11:49:35.518Z",
		"size": 12984,
		"path": "../public/assets/validation-CeFbEkxX.js"
	},
	"/assets/user-1-B8eILjC2.jpg": {
		"type": "image/jpeg",
		"etag": "\"8834-3FCBIWbHG9R2+IN89kh7XaF82U4\"",
		"mtime": "2026-10-13T11:49:35.532Z",
		"size": 34868,
		"path": "../public/assets/user-1-B8eILjC2.jpg"
	},
	"/assets/user-2-Gq5saRZ_.jpg": {
		"type": "image/jpeg",
		"etag": "\"83b5-lyo0/4oGs0GR+6Ezp3C7kAltXbU\"",
		"mtime": "2026-10-13T11:49:35.532Z",
		"size": 33717,
		"path": "../public/assets/user-2-Gq5saRZ_.jpg"
	},
	"/assets/wards-BIUx1f8P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-Uu2MUBXP91XkLX+HtqNy/0TgKJM\"",
		"mtime": "2026-10-13T11:49:35.518Z",
		"size": 153,
		"path": "../public/assets/wards-BIUx1f8P.js"
	},
	"/assets/vegetable-pizza-kdDOimrq.jpg": {
		"type": "image/jpeg",
		"etag": "\"24e00-dESGBhJbmMIlpIYntde6EgEUkmE\"",
		"mtime": "2026-10-13T11:49:35.534Z",
		"size": 151040,
		"path": "../public/assets/vegetable-pizza-kdDOimrq.jpg"
	},
	"/assets/widgets-nsqFMOuu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2910-67XcqIlgXQ9W2rF/xWVkTEKMfSI\"",
		"mtime": "2026-10-13T11:49:35.518Z",
		"size": 10512,
		"path": "../public/assets/widgets-nsqFMOuu.js"
	},
	"/assets/user-4-D6I0TlPc.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d81-EorXEjZ8EoOQ39OdeV0WDBogedw\"",
		"mtime": "2026-10-13T11:49:35.534Z",
		"size": 32129,
		"path": "../public/assets/user-4-D6I0TlPc.jpg"
	},
	"/assets/wallet-BRatBZvu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-YBLziVG+3nWwu03pW8QCYeCdXcc\"",
		"mtime": "2026-10-13T11:49:35.518Z",
		"size": 152,
		"path": "../public/assets/wallet-BRatBZvu.js"
	},
	"/assets/_-BGaLTBm6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-WoxdvtqLEX7yP6J1FFBg9q0jW1s\"",
		"mtime": "2026-10-13T11:49:35.441Z",
		"size": 154,
		"path": "../public/assets/_-BGaLTBm6.js"
	},
	"/assets/_element-CqHvQFKQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a33-QG3S574D4s8zAQZb+5aNGJniK0k\"",
		"mtime": "2026-10-13T11:49:35.441Z",
		"size": 2611,
		"path": "../public/assets/_element-CqHvQFKQ.js"
	},
	"/assets/WorkspacePages-fscM8Tb8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"566fe-DxNkLapPKYHkyr8j1r+pkTFiPmE\"",
		"mtime": "2026-10-13T11:49:35.439Z",
		"size": 354046,
		"path": "../public/assets/WorkspacePages-fscM8Tb8.js"
	},
	"/assets/workspace-dashboard-BQlhbaS1.png": {
		"type": "image/png",
		"etag": "\"29e94-WCb1MKHMu1VyaXCSbKbvdyfmWJM\"",
		"mtime": "2026-10-13T11:49:35.536Z",
		"size": 171668,
		"path": "../public/assets/workspace-dashboard-BQlhbaS1.png"
	},
	"/assets/_template-B0G__R1D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-cfAsrjo7F5X7YzKtUyhkATzLttw\"",
		"mtime": "2026-10-13T11:49:35.441Z",
		"size": 309,
		"path": "../public/assets/_template-B0G__R1D.js"
	},
	"/images/vexui-preview.png": {
		"type": "image/png",
		"etag": "\"29e94-WCb1MKHMu1VyaXCSbKbvdyfmWJM\"",
		"mtime": "2026-10-09T11:11:28.000Z",
		"size": 171668,
		"path": "../public/images/vexui-preview.png"
	},
	"/assets/wireless-headphones-pro-CoAS31Vt.png": {
		"type": "image/png",
		"etag": "\"1a1e04-YsM7Bz+U33g/U+YlAeL8tlT2mK8\"",
		"mtime": "2026-10-13T11:49:35.534Z",
		"size": 1711620,
		"path": "../public/assets/wireless-headphones-pro-CoAS31Vt.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_j3L_Ya = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_j3L_Ya
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
