import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Store, Bt as PackageCheck, Gr as ChevronRight, Or as CloudUpload, Zr as ChartNoAxesCombined, ji as ArrowLeft, o as Warehouse, ot as Send, q as Sparkles, sr as FilePen, ut as Save } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { n as productImages } from "./local-images-CzJZp8c2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/-create-b7lylxaC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputClass = "mt-1.5 h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15";
var labelClass = "text-sm font-medium text-foreground";
function CreateProduct() {
	const [status, setStatus] = (0, import_react.useState)("Draft");
	const [name, setName] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("129.00");
	const [cost, setCost] = (0, import_react.useState)("64.00");
	const [trackInventory, setTrackInventory] = (0, import_react.useState)(true);
	const [media, setMedia] = (0, import_react.useState)([productImages.wirelessHeadphonesPro]);
	const margin = (0, import_react.useMemo)(() => {
		const selling = Number(price) || 0;
		const itemCost = Number(cost) || 0;
		return selling > 0 ? Math.max(0, (selling - itemCost) / selling * 100).toFixed(1) : "0.0";
	}, [price, cost]);
	const save = (nextStatus) => {
		if (!name.trim()) {
			toast.error("Add a product name before saving");
			return;
		}
		setStatus(nextStatus);
		toast.success(nextStatus === "Active" ? "Product published" : "Draft saved");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap items-start gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						onClick: () => window.history.back(),
						"aria-label": "Back to products",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "me-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "eCommerce" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Products" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: "Add product"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl",
								children: "Create a new product"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Build a complete catalog entry, prepare inventory, and publish when ready."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => save("Draft"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), "Save draft"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => save("Active"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Publish product"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 grid overflow-hidden rounded-2xl border bg-card sm:grid-cols-3",
				children: [
					{
						icon: PackageCheck,
						label: "Catalog setup",
						detail: "Product details and media",
						active: true
					},
					{
						icon: Warehouse,
						label: "Inventory ready",
						detail: "Stock and fulfillment",
						active: trackInventory
					},
					{
						icon: Store,
						label: "Sales channel",
						detail: status === "Active" ? "Live on storefront" : "Draft not published",
						active: status === "Active"
					}
				].map(({ icon: Icon, label, detail, active }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border-b p-4 last:border-b-0 sm:border-b-0 sm:border-e sm:last:border-e-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid size-9 place-items-center rounded-xl ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						children: [
							index + 1,
							". ",
							label
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: detail
					})] })]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (event) => {
					event.preventDefault();
					save("Active");
				},
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Product information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Start with the details customers will see first."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary",
									children: "Required"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: labelClass,
											children: ["Product name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: name,
											onChange: (event) => setName(event.target.value),
											className: inputClass,
											placeholder: "e.g. Wireless Headphones Pro"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "SKU"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										defaultValue: "WHP-1048"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Brand"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										defaultValue: "Edzen"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: inputClass,
										defaultValue: "Electronics",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Electronics" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Accessories" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sports" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Home & Living" })
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Product type"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: inputClass,
										defaultValue: "Physical product",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Physical product" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Digital product" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Service" })
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "Description"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											className: "mt-1.5 min-h-32 w-full rounded-lg border bg-background p-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15",
											defaultValue: "Premium wireless headphones with noise cancellation, all-day comfort, and 40-hour battery life."
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Media gallery"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Use high-quality images to make the product stand out."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-[1.4fr_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "group relative flex min-h-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-primary/35 bg-primary/[0.035] p-4 text-center transition hover:bg-primary/[0.07]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											multiple: true,
											accept: "image/*",
											className: "hidden",
											onChange: (event) => {
												if (event.target.files?.length) {
													setMedia((items) => [...items, productImages.smartWatchSeriesX]);
													toast.success(`${event.target.files.length} image${event.target.files.length > 1 ? "s" : ""} added`);
												}
											}
										}),
										media[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: media[0],
											alt: "Product preview",
											className: "absolute inset-0 size-full object-cover opacity-90 transition group-hover:scale-[1.02]"
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative grid size-12 place-items-center rounded-2xl bg-card text-primary shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative mt-3 text-sm font-semibold",
											children: "Drop images here or browse"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative mt-1 text-xs text-muted-foreground",
											children: "PNG, JPG or WEBP up to 10 MB"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-3",
									children: Object.values(productImages).slice(1, 5).map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMedia((items) => [image, ...items.filter((item) => item !== image)]),
										className: "relative overflow-hidden rounded-xl border bg-muted transition hover:border-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: image,
											alt: `Product image ${index + 2}`,
											className: "size-full object-cover"
										}), index === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute inset-x-2 bottom-2 rounded-md bg-background/90 px-2 py-1 text-[10px] font-semibold",
											children: "Set as cover"
										})]
									}, image))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid gap-6 rounded-2xl border bg-card p-5 shadow-sm sm:p-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Pricing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Set the selling price and margin target."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "Selling price"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute start-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
												children: "$"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: price,
												onChange: (event) => setPrice(event.target.value),
												type: "number",
												min: "0",
												step: "0.01",
												className: `${inputClass} ps-7`
											})]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "Compare-at price"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute start-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
												children: "$"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												defaultValue: "159.00",
												min: "0",
												step: "0.01",
												className: `${inputClass} ps-7`
											})]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelClass,
											children: "Cost per item"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute start-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
												children: "$"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: cost,
												onChange: (event) => setCost(event.target.value),
												type: "number",
												min: "0",
												step: "0.01",
												className: `${inputClass} ps-7`
											})]
										})] })
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-muted/45 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold",
											children: "Margin preview"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesCombined, { className: "size-4 text-primary" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 text-3xl font-semibold text-primary",
										children: [margin, "%"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Estimated gross margin per sale"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 space-y-3 border-t pt-4 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Selling price"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["$", Number(price || 0).toFixed(2)] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Item cost"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["$", Number(cost || 0).toFixed(2)] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between border-t pt-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium",
													children: "Estimated profit"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
													className: "text-success",
													children: ["$", Math.max(0, Number(price || 0) - Number(cost || 0)).toFixed(2)]
												})]
											})
										]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Inventory & shipping"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Keep stock and fulfillment details accurate."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setTrackInventory((value) => !value),
									className: `inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${trackInventory ? "bg-success/12 text-success" : "bg-muted text-muted-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${trackInventory ? "bg-success" : "bg-muted-foreground"}` }), trackInventory ? "Inventory tracking on" : "Inventory tracking off"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Available stock"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										disabled: !trackInventory,
										defaultValue: "24",
										className: inputClass
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Reorder level"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										disabled: !trackInventory,
										defaultValue: "10",
										className: inputClass
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Weight"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											defaultValue: "0.42",
											className: `${inputClass} rounded-e-none`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1.5 flex h-10 items-center rounded-e-lg border border-s-0 bg-muted px-3 text-sm text-muted-foreground",
											children: "kg"
										})]
									})] })
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6 xl:sticky xl:top-6 xl:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-2xl border bg-card p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-semibold",
									children: "Publishing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2.5 py-1 text-xs font-medium ${status === "Active" ? "bg-success/12 text-success" : "bg-muted text-muted-foreground"}`,
									children: status
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block rounded-xl border p-3 transition has-[:checked]:border-primary has-[:checked]:bg-primary/[0.04]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "status",
										checked: status === "Draft",
										onChange: () => setStatus("Draft"),
										className: "sr-only"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-8 place-items-center rounded-lg bg-muted",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePen, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "block text-sm",
											children: "Save as draft"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
											className: "text-xs text-muted-foreground",
											children: "Keep it private while you prepare."
										})] })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block rounded-xl border p-3 transition has-[:checked]:border-success has-[:checked]:bg-success/[0.04]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "status",
										checked: status === "Active",
										onChange: () => setStatus("Active"),
										className: "sr-only"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-8 place-items-center rounded-lg bg-success/12 text-success",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "block text-sm",
											children: "Active"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
											className: "text-xs text-muted-foreground",
											children: "Available on the storefront."
										})] })]
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-2xl border bg-card p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-semibold",
								children: "Product organization"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Collections"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										placeholder: "e.g. New arrivals"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Tags"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										defaultValue: "audio, wireless, premium"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelClass,
										children: "Sales channel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: inputClass,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Online store" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "POS" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Wholesale" })
										]
									})] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-2xl border bg-primary/[0.1] p-5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-semibold",
										children: "Ready to publish?"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-6 text-muted-foreground",
									children: "Add a name, cover image, price, and inventory to complete your listing."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "mt-4 w-full",
									onClick: () => save("Active"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Publish product"]
								})
							]
						})
					]
				})]
			})
		]
	}) });
}
//#endregion
export { CreateProduct as t };
