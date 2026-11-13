import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Consent.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=0cd69c2d";
import { Check, Eye, FileKey2, LockKeyhole, ShieldCheck } from "/src/lib/lucide-react.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { SectionEyebrow } from "/src/components/CampusShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Consent.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0cd69c2d";
var _s = $RefreshSig$();
const settings = [
	{
		id: "personal",
		label: "Personal profile",
		detail: "Name, city, class and goal",
		enabled: true
	},
	{
		id: "academic",
		label: "Academic context",
		detail: "Stream and entrance-plan signals",
		enabled: true
	},
	{
		id: "budget",
		label: "Budget context",
		detail: "Only used in this device’s simulator",
		enabled: false
	}
];
export default function Consent() {
	_s();
	const [values, setValues] = useState(Object.fromEntries(settings.map((item) => [item.id, item.enabled])));
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8",
		"x-file-name": "Consent",
		"x-line-number": "8",
		"x-column": "148",
		"x-component": "div",
		"x-id": "Consent_8_148",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-3xl",
			"x-file-name": "Consent",
			"x-line-number": "8",
			"x-column": "210",
			"x-component": "div",
			"x-id": "Consent_8_210",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
					"x-file-name": "Consent",
					"x-line-number": "8",
					"x-column": "237",
					"x-component": "SectionEyebrow",
					"x-id": "Consent_8_237",
					"x-dynamic": "false",
					children: "Trust centre · P0"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 323
				}, this),
				/* @__PURE__ */ _jsxDEV("h1", {
					className: "font-heading text-4xl font-extrabold tracking-tight sm:text-5xl",
					"x-file-name": "Consent",
					"x-line-number": "8",
					"x-column": "287",
					"x-component": "h1",
					"x-id": "Consent_8_287",
					"x-dynamic": "false",
					children: [
						"Your route.",
						/* @__PURE__ */ _jsxDEV("br", {
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "378",
							"x-component": "br",
							"x-id": "Consent_8_378",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 698
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-emerald-700",
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "384",
							"x-component": "span",
							"x-id": "Consent_8_384",
							"x-dynamic": "false",
							children: "Your control."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 815
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 496
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "mt-5 text-base leading-7 text-slate-600",
					"x-file-name": "Consent",
					"x-line-number": "8",
					"x-column": "444",
					"x-component": "p",
					"x-id": "Consent_8_444",
					"x-dynamic": "false",
					children: "CampusRoute is a no-login demo. These controls show the trust foundation we would carry into a full learner product."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 988
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 184
		}, this), /* @__PURE__ */ _jsxDEV("section", {
			className: "mt-12 grid gap-6 lg:grid-cols-5",
			"x-file-name": "Consent",
			"x-line-number": "8",
			"x-column": "625",
			"x-component": "section",
			"x-id": "Consent_8_625",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV(Card, {
				className: "border-slate-200/80 bg-white lg:col-span-3",
				"data-testid": "consent-controls-card",
				"x-file-name": "Consent",
				"x-line-number": "8",
				"x-column": "678",
				"x-component": "Card",
				"x-id": "Consent_8_678",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(CardContent, {
					className: "p-6 sm:p-8",
					"x-file-name": "Consent",
					"x-line-number": "8",
					"x-column": "775",
					"x-component": "CardContent",
					"x-id": "Consent_8_775",
					"x-dynamic": "true",
					"x-excluded": "true",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-start gap-4",
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "811",
							"x-component": "div",
							"x-id": "Consent_8_811",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-emerald-800",
								"x-file-name": "Consent",
								"x-line-number": "8",
								"x-column": "851",
								"x-component": "span",
								"x-id": "Consent_8_851",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV(ShieldCheck, {
									size: 21,
									"x-file-name": "Consent",
									"x-line-number": "8",
									"x-column": "946",
									"x-component": "ShieldCheck",
									"x-id": "Consent_8_946",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 24,
									columnNumber: 2190
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 1982
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Consent",
								"x-line-number": "8",
								"x-column": "978",
								"x-component": "div",
								"x-id": "Consent_8_978",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("h2", {
									className: "font-heading text-xl font-bold",
									"x-file-name": "Consent",
									"x-line-number": "8",
									"x-column": "983",
									"x-component": "h2",
									"x-id": "Consent_8_983",
									"x-dynamic": "false",
									children: "Visibility controls"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 24,
									columnNumber: 2459
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "mt-1 text-sm leading-6 text-slate-500",
									"x-file-name": "Consent",
									"x-line-number": "8",
									"x-column": "1054",
									"x-component": "p",
									"x-id": "Consent_8_1054",
									"x-dynamic": "false",
									children: "Toggle what an eventual mentor or counsellor could see. The demo keeps everything on this workspace."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 24,
									columnNumber: 2641
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 2342
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 1830
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-8 space-y-3",
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "1223",
							"x-component": "div",
							"x-id": "Consent_8_1223",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: settings.map((setting) => /* @__PURE__ */ _jsxDEV("label", {
								className: "flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-emerald-300",
								"data-testid": `consent-setting-${setting.id}`,
								"x-file-name": "Consent",
								"x-line-number": "8",
								"x-column": "1280",
								"x-component": "label",
								"x-id": "Consent_8_1280",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									"x-file-name": "Consent",
									"x-line-number": "8",
									"x-column": "1547",
									"x-component": "span",
									"x-id": "Consent_8_1547",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "block text-sm font-semibold text-slate-800",
										"x-file-name": "Consent",
										"x-line-number": "8",
										"x-column": "1553",
										"x-component": "span",
										"x-id": "Consent_8_1553",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "settings",
										"x-source-file-abs": "/app/frontend/src/pages/Consent.tsx",
										"x-source-line": "7",
										"x-source-path": "label",
										"x-source-editable": "true",
										"x-array-var": "settings",
										"x-array-line": "7",
										"x-array-item-param": "setting",
										children: setting.label
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 24,
										columnNumber: 3647
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "mt-1 block text-xs text-slate-500",
										"x-file-name": "Consent",
										"x-line-number": "8",
										"x-column": "1636",
										"x-component": "span",
										"x-id": "Consent_8_1636",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "settings",
										"x-source-file-abs": "/app/frontend/src/pages/Consent.tsx",
										"x-source-line": "7",
										"x-source-path": "detail",
										"x-source-editable": "true",
										"x-array-var": "settings",
										"x-array-line": "7",
										"x-array-item-param": "setting",
										children: setting.detail
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 24,
										columnNumber: 4090
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 24,
									columnNumber: 3526
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "relative",
									"x-file-name": "Consent",
									"x-line-number": "8",
									"x-column": "1718",
									"x-component": "span",
									"x-id": "Consent_8_1718",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("input", {
											type: "checkbox",
											checked: values[setting.id],
											onChange: (event) => setValues((current) => ({
												...current,
												[setting.id]: event.target.checked
											})),
											className: "peer sr-only",
											"data-testid": `consent-${setting.id}-toggle`,
											"x-file-name": "Consent",
											"x-line-number": "8",
											"x-column": "1745",
											"x-component": "input",
											"x-id": "Consent_8_1745",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 24,
											columnNumber: 4675
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "block h-6 w-11 rounded-full bg-slate-200 transition-colors peer-checked:bg-emerald-600",
											"x-file-name": "Consent",
											"x-line-number": "8",
											"x-column": "1964",
											"x-component": "span",
											"x-id": "Consent_8_1964",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 27,
											columnNumber: 210
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5",
											"x-file-name": "Consent",
											"x-line-number": "8",
											"x-column": "2071",
											"x-component": "span",
											"x-id": "Consent_8_2071",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 27,
											columnNumber: 432
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 24,
									columnNumber: 4533
								}, this)]
							}, setting.id, true, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 3143
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 2922
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-6 flex items-center gap-2 text-xs text-emerald-800",
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "2214",
							"x-component": "div",
							"x-id": "Consent_8_2214",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(LockKeyhole, {
								size: 14,
								"x-file-name": "Consent",
								"x-line-number": "8",
								"x-column": "2285",
								"x-component": "LockKeyhole",
								"x-id": "Consent_8_2285",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 875
							}, this), " Settings are illustrative and reset with this demo workspace"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 690
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 1657
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 1448
			}, this), /* @__PURE__ */ _jsxDEV(Card, {
				className: "border-amber-200 bg-amber-50/70 lg:col-span-2",
				"data-testid": "access-log-card",
				"x-file-name": "Consent",
				"x-line-number": "8",
				"x-column": "2398",
				"x-component": "Card",
				"x-id": "Consent_8_2398",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(CardContent, {
					className: "p-6 sm:p-8",
					"x-file-name": "Consent",
					"x-line-number": "8",
					"x-column": "2492",
					"x-component": "CardContent",
					"x-id": "Consent_8_2492",
					"x-dynamic": "true",
					"x-excluded": "true",
					children: [
						/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "2528",
							"x-component": "SectionEyebrow",
							"x-id": "Consent_8_2528",
							"x-dynamic": "false",
							children: "Access log"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 1493
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "font-heading text-xl font-bold",
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "2571",
							"x-component": "h2",
							"x-id": "Consent_8_2571",
							"x-dynamic": "false",
							children: "Who saw what?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 1661
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-7 space-y-5",
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "2636",
							"x-component": "div",
							"x-id": "Consent_8_2636",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(Log, {
									icon: /* @__PURE__ */ _jsxDEV(Eye, {
										size: 15,
										"x-file-name": "Consent",
										"x-line-number": "8",
										"x-column": "2679",
										"x-component": "Eye",
										"x-id": "Consent_8_2679",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 27,
										columnNumber: 1996
									}, this),
									title: "Aarav profile",
									detail: "You · just now",
									"x-file-name": "Consent",
									"x-line-number": "8",
									"x-column": "2668",
									"x-component": "Log",
									"x-id": "Consent_8_2668",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 27,
									columnNumber: 1985
								}, this),
								/* @__PURE__ */ _jsxDEV(Log, {
									icon: /* @__PURE__ */ _jsxDEV(FileKey2, {
										size: 15,
										"x-file-name": "Consent",
										"x-line-number": "8",
										"x-column": "2757",
										"x-component": "FileKey2",
										"x-id": "Consent_8_2757",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 27,
										columnNumber: 2301
									}, this),
									title: "Career signals",
									detail: "CampusRoute demo · today",
									"x-file-name": "Consent",
									"x-line-number": "8",
									"x-column": "2746",
									"x-component": "Log",
									"x-id": "Consent_8_2746",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 27,
									columnNumber: 2290
								}, this),
								/* @__PURE__ */ _jsxDEV(Log, {
									icon: /* @__PURE__ */ _jsxDEV(Check, { size: 15 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 27,
										columnNumber: 2627
									}, this),
									title: "Budget simulator",
									detail: "Local only · never shared",
									"x-file-name": "Consent",
									"x-line-number": "8",
									"x-column": "2840",
									"x-component": "Log",
									"x-id": "Consent_8_2840",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 27,
									columnNumber: 2616
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 1839
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-8 border-t border-amber-200 pt-5 text-xs leading-5 text-amber-950/65",
							"x-file-name": "Consent",
							"x-line-number": "8",
							"x-column": "2940",
							"x-component": "p",
							"x-id": "Consent_8_2940",
							"x-dynamic": "false",
							children: "In a production version, every access would be revocable, timestamped, and exportable."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 2829
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 1318
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 1110
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 1279
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 10
	}, this);
}
_s(Consent, "qAFsv85+pgcgmVS0FEqGeGQ62rc=");
_c = Consent;
function Log({ icon, title, detail }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex gap-3",
		"data-testid": `access-log-${title.toLowerCase().replaceAll(" ", "-")}`,
		"x-file-name": "Consent",
		"x-line-number": "9",
		"x-column": "99",
		"x-component": "div",
		"x-id": "Consent_9_99",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("span", {
			className: "grid h-8 w-8 place-items-center rounded-full bg-white text-amber-700",
			"x-file-name": "Consent",
			"x-line-number": "9",
			"x-column": "198",
			"x-component": "span",
			"x-id": "Consent_9_198",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "icon",
			"x-source-editable": "false",
			children: icon
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 219
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			"x-file-name": "Consent",
			"x-line-number": "9",
			"x-column": "298",
			"x-component": "div",
			"x-id": "Consent_9_298",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("p", {
				className: "text-sm font-semibold text-amber-950",
				"x-file-name": "Consent",
				"x-line-number": "9",
				"x-column": "303",
				"x-component": "p",
				"x-id": "Consent_9_303",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "title",
				"x-source-editable": "false",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 615
			}, this), /* @__PURE__ */ _jsxDEV("p", {
				className: "mt-1 font-mono text-[10px] uppercase tracking-wider text-amber-900/55",
				"x-file-name": "Consent",
				"x-line-number": "9",
				"x-column": "366",
				"x-component": "p",
				"x-id": "Consent_9_366",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "detail",
				"x-source-editable": "false",
				children: detail
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 855
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 498
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 10
	}, this);
}
_c2 = Log;
var _c, _c2;
$RefreshReg$(_c, "Consent");
$RefreshReg$(_c2, "Log");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Consent.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Consent.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Consent.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Consent.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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V0FBVTtFQUFhLGVBQWEsY0FBY2dCLE1BQU1DLFlBQVksQ0FBQyxDQUFDQyxXQUFXLEtBQUssR0FBRztFQUFJO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtZQUFsRyxDQUFtRyx3QkFBQyxRQUFEO0dBQU0sV0FBVTtHQUFzRTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBRUg7RUFBVzs7OztZQUFDLHdCQUFDLE9BQUQ7R0FBSTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBSixDQUFLLHdCQUFDLEtBQUQ7SUFBRyxXQUFVO0lBQXNDO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUFFQztHQUFTOzs7O2FBQUMsd0JBQUMsS0FBRDtJQUFHLFdBQVU7SUFBdUU7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQUVoQjtHQUFVOzs7O1dBQU07Ozs7O1VBQU07Ozs7OztBQUFHIiwibmFtZXMiOlsidXNlU3RhdGUiLCJDaGVjayIsIkV5ZSIsIkZpbGVLZXkyIiwiTG9ja0tleWhvbGUiLCJTaGllbGRDaGVjayIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlNlY3Rpb25FeWVicm93Iiwic2V0dGluZ3MiLCJpZCIsImxhYmVsIiwiZGV0YWlsIiwiZW5hYmxlZCIsIkNvbnNlbnQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsIm1hcCIsIml0ZW0iLCJzZXR0aW5nIiwiZXZlbnQiLCJjdXJyZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsIkxvZyIsImljb24iLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZUFsbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDb25zZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrLCBFeWUsIEZpbGVLZXkyLCBMb2NrS2V5aG9sZSwgU2hpZWxkQ2hlY2sgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgU2VjdGlvbkV5ZWJyb3cgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhbXB1c1NoZWxsXCI7XG5cbmNvbnN0IHNldHRpbmdzID0gW3sgaWQ6IFwicGVyc29uYWxcIiwgbGFiZWw6IFwiUGVyc29uYWwgcHJvZmlsZVwiLCBkZXRhaWw6IFwiTmFtZSwgY2l0eSwgY2xhc3MgYW5kIGdvYWxcIiwgZW5hYmxlZDogdHJ1ZSB9LCB7IGlkOiBcImFjYWRlbWljXCIsIGxhYmVsOiBcIkFjYWRlbWljIGNvbnRleHRcIiwgZGV0YWlsOiBcIlN0cmVhbSBhbmQgZW50cmFuY2UtcGxhbiBzaWduYWxzXCIsIGVuYWJsZWQ6IHRydWUgfSwgeyBpZDogXCJidWRnZXRcIiwgbGFiZWw6IFwiQnVkZ2V0IGNvbnRleHRcIiwgZGV0YWlsOiBcIk9ubHkgdXNlZCBpbiB0aGlzIGRldmljZeKAmXMgc2ltdWxhdG9yXCIsIGVuYWJsZWQ6IGZhbHNlIH1dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc2VudCgpIHsgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKE9iamVjdC5mcm9tRW50cmllcyhzZXR0aW5ncy5tYXAoaXRlbSA9PiBbaXRlbS5pZCwgaXRlbS5lbmFibGVkXSkpKTsgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy01eGwgcHgtNCBweS0xMCBzbTpweC02IGxnOnB4LThcIj48ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bFwiPjxTZWN0aW9uRXllYnJvdz5UcnVzdCBjZW50cmUgwrcgUDA8L1NlY3Rpb25FeWVicm93PjxoMSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC00eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgc206dGV4dC01eGxcIj5Zb3VyIHJvdXRlLjxiciAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC03MDBcIj5Zb3VyIGNvbnRyb2wuPC9zcGFuPjwvaDE+PHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWJhc2UgbGVhZGluZy03IHRleHQtc2xhdGUtNjAwXCI+Q2FtcHVzUm91dGUgaXMgYSBuby1sb2dpbiBkZW1vLiBUaGVzZSBjb250cm9scyBzaG93IHRoZSB0cnVzdCBmb3VuZGF0aW9uIHdlIHdvdWxkIGNhcnJ5IGludG8gYSBmdWxsIGxlYXJuZXIgcHJvZHVjdC48L3A+PC9kaXY+PHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTIgZ3JpZCBnYXAtNiBsZzpncmlkLWNvbHMtNVwiPjxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1zbGF0ZS0yMDAvODAgYmctd2hpdGUgbGc6Y29sLXNwYW4tM1wiIGRhdGEtdGVzdGlkPVwiY29uc2VudC1jb250cm9scy1jYXJkXCI+PENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTRcIj48c3BhbiBjbGFzc05hbWU9XCJncmlkIGgtMTEgdy0xMSBwbGFjZS1pdGVtcy1jZW50ZXIgcm91bmRlZC14bCBiZy1lbWVyYWxkLTEwMCB0ZXh0LWVtZXJhbGQtODAwXCI+PFNoaWVsZENoZWNrIHNpemU9ezIxfSAvPjwvc3Bhbj48ZGl2PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC14bCBmb250LWJvbGRcIj5WaXNpYmlsaXR5IGNvbnRyb2xzPC9oMj48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gbGVhZGluZy02IHRleHQtc2xhdGUtNTAwXCI+VG9nZ2xlIHdoYXQgYW4gZXZlbnR1YWwgbWVudG9yIG9yIGNvdW5zZWxsb3IgY291bGQgc2VlLiBUaGUgZGVtbyBrZWVwcyBldmVyeXRoaW5nIG9uIHRoaXMgd29ya3NwYWNlLjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTggc3BhY2UteS0zXCI+e3NldHRpbmdzLm1hcChzZXR0aW5nID0+IDxsYWJlbCBrZXk9e3NldHRpbmcuaWR9IGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHAtNCB0cmFuc2l0aW9uLVtib3JkZXItY29sb3IsdHJhbnNmb3JtXSBkdXJhdGlvbi0yMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSBob3Zlcjpib3JkZXItZW1lcmFsZC0zMDBcIiBkYXRhLXRlc3RpZD17YGNvbnNlbnQtc2V0dGluZy0ke3NldHRpbmcuaWR9YH0+PHNwYW4+PHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+e3NldHRpbmcubGFiZWx9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPntzZXR0aW5nLmRldGFpbH08L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3ZhbHVlc1tzZXR0aW5nLmlkXX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldFZhbHVlcyhjdXJyZW50ID0+ICh7IC4uLmN1cnJlbnQsIFtzZXR0aW5nLmlkXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSkpfSBjbGFzc05hbWU9XCJwZWVyIHNyLW9ubHlcIiBkYXRhLXRlc3RpZD17YGNvbnNlbnQtJHtzZXR0aW5nLmlkfS10b2dnbGVgfSAvPjxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTExIHJvdW5kZWQtZnVsbCBiZy1zbGF0ZS0yMDAgdHJhbnNpdGlvbi1jb2xvcnMgcGVlci1jaGVja2VkOmJnLWVtZXJhbGQtNjAwXCIgLz48c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEgdG9wLTEgaC00IHctNCByb3VuZGVkLWZ1bGwgYmctd2hpdGUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gcGVlci1jaGVja2VkOnRyYW5zbGF0ZS14LTVcIiAvPjwvc3Bhbj48L2xhYmVsPil9PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1lbWVyYWxkLTgwMFwiPjxMb2NrS2V5aG9sZSBzaXplPXsxNH0gLz4gU2V0dGluZ3MgYXJlIGlsbHVzdHJhdGl2ZSBhbmQgcmVzZXQgd2l0aCB0aGlzIGRlbW8gd29ya3NwYWNlPC9kaXY+PC9DYXJkQ29udGVudD48L0NhcmQ+PENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLWFtYmVyLTIwMCBiZy1hbWJlci01MC83MCBsZzpjb2wtc3Bhbi0yXCIgZGF0YS10ZXN0aWQ9XCJhY2Nlc3MtbG9nLWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHNtOnAtOFwiPjxTZWN0aW9uRXllYnJvdz5BY2Nlc3MgbG9nPC9TZWN0aW9uRXllYnJvdz48aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQteGwgZm9udC1ib2xkXCI+V2hvIHNhdyB3aGF0PzwvaDI+PGRpdiBjbGFzc05hbWU9XCJtdC03IHNwYWNlLXktNVwiPjxMb2cgaWNvbj17PEV5ZSBzaXplPXsxNX0gLz59IHRpdGxlPVwiQWFyYXYgcHJvZmlsZVwiIGRldGFpbD1cIllvdSDCtyBqdXN0IG5vd1wiIC8+PExvZyBpY29uPXs8RmlsZUtleTIgc2l6ZT17MTV9IC8+fSB0aXRsZT1cIkNhcmVlciBzaWduYWxzXCIgZGV0YWlsPVwiQ2FtcHVzUm91dGUgZGVtbyDCtyB0b2RheVwiIC8+PExvZyBpY29uPXs8Q2hlY2sgc2l6ZT17MTV9IC8+fSB0aXRsZT1cIkJ1ZGdldCBzaW11bGF0b3JcIiBkZXRhaWw9XCJMb2NhbCBvbmx5IMK3IG5ldmVyIHNoYXJlZFwiIC8+PC9kaXY+PHAgY2xhc3NOYW1lPVwibXQtOCBib3JkZXItdCBib3JkZXItYW1iZXItMjAwIHB0LTUgdGV4dC14cyBsZWFkaW5nLTUgdGV4dC1hbWJlci05NTAvNjVcIj5JbiBhIHByb2R1Y3Rpb24gdmVyc2lvbiwgZXZlcnkgYWNjZXNzIHdvdWxkIGJlIHJldm9jYWJsZSwgdGltZXN0YW1wZWQsIGFuZCBleHBvcnRhYmxlLjwvcD48L0NhcmRDb250ZW50PjwvQ2FyZD48L3NlY3Rpb24+PC9kaXY+OyB9XG5mdW5jdGlvbiBMb2coeyBpY29uLCB0aXRsZSwgZGV0YWlsIH06IHsgaWNvbjogUmVhY3ROb2RlOyB0aXRsZTogc3RyaW5nOyBkZXRhaWw6IHN0cmluZyB9KSB7IHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIiBkYXRhLXRlc3RpZD17YGFjY2Vzcy1sb2ctJHt0aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKX1gfT48c3BhbiBjbGFzc05hbWU9XCJncmlkIGgtOCB3LTggcGxhY2UtaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSB0ZXh0LWFtYmVyLTcwMFwiPntpY29ufTwvc3Bhbj48ZGl2PjxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWFtYmVyLTk1MFwiPnt0aXRsZX08L3A+PHAgY2xhc3NOYW1lPVwibXQtMSBmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtYW1iZXItOTAwLzU1XCI+e2RldGFpbH08L3A+PC9kaXY+PC9kaXY+OyB9Il0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9wYWdlcy9Db25zZW50LnRzeCJ9