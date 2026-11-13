import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Money.tsx");const useMemo = __vite__cjsImport1_react["useMemo"]; const useState = __vite__cjsImport1_react["useState"];const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport9_react_jsxDevRuntime["Fragment"];import { useMutation, useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=0cd69c2d";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=0cd69c2d";
import { useSearchParams } from "/node_modules/.vite/deps/react-router-dom.js?v=0cd69c2d";
import { AlertTriangle, ArrowRight, Calculator, CheckCircle2, Info, SlidersHorizontal } from "/src/lib/lucide-react.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { FALLBACK_OVERVIEW, money } from "/src/lib/types.ts";
import { SectionEyebrow } from "/src/components/CampusShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Money.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0cd69c2d";
var _s = $RefreshSig$();
export default function Money() {
	_s();
	const { data } = useQuery({
		queryKey: ["overview"],
		queryFn: () => apiGet("/campus/overview"),
		retry: false
	});
	const overview = data ?? FALLBACK_OVERVIEW;
	const colleges = overview.colleges;
	const [searchParams] = useSearchParams();
	const [collegeId, setCollegeId] = useState(searchParams.get("college") ?? "vit-vellore");
	const [income, setIncome] = useState(115e3);
	const [savings, setSavings] = useState(7e5);
	const [emi, setEmi] = useState(12e3);
	const [loanShare, setLoanShare] = useState(50);
	const [affordability, setAffordability] = useState(null);
	const [roi, setRoi] = useState(null);
	const selected = colleges.find((college) => college.id === collegeId) ?? colleges[0];
	const affordabilityMutation = useMutation({
		mutationFn: () => apiPost("/campus/simulate/affordability", {
			college_id: collegeId,
			monthly_income: income,
			savings,
			existing_emi: emi
		}),
		onSuccess: setAffordability
	});
	const roiMutation = useMutation({
		mutationFn: () => apiPost("/campus/simulate/roi", {
			college_id: collegeId,
			loan_share: loanShare
		}),
		onSuccess: setRoi
	});
	const preview = useMemo(() => {
		const total = selected ? selected.tuition_lakhs + selected.hostel_lakhs + 3.8 : 21.7;
		const gap = Math.max(0, total - savings / 1e5);
		const score = Math.min(98, Math.max(8, Math.round(gap / total * 65 + emi / income * 45)));
		return {
			total,
			gap,
			score
		};
	}, [
		selected,
		savings,
		emi,
		income
	]);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		"x-file-name": "Money",
		"x-line-number": "19",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Money_19_9",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "max-w-3xl",
				"x-file-name": "Money",
				"x-line-number": "19",
				"x-column": "71",
				"x-component": "div",
				"x-id": "Money_19_71",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
						"x-file-name": "Money",
						"x-line-number": "19",
						"x-column": "98",
						"x-component": "SectionEyebrow",
						"x-id": "Money_19_98",
						"x-dynamic": "false",
						children: "Money & ROI · P1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 313
					}, this),
					/* @__PURE__ */ _jsxDEV("h1", {
						className: "font-heading text-4xl font-extrabold tracking-tight sm:text-5xl",
						"x-file-name": "Money",
						"x-line-number": "19",
						"x-column": "147",
						"x-component": "h1",
						"x-id": "Money_19_147",
						"x-dynamic": "false",
						children: [
							"Know the cost",
							/* @__PURE__ */ _jsxDEV("br", {
								"x-file-name": "Money",
								"x-line-number": "19",
								"x-column": "240",
								"x-component": "br",
								"x-id": "Money_19_240",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 683
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-amber-700",
								"x-file-name": "Money",
								"x-line-number": "19",
								"x-column": "246",
								"x-component": "span",
								"x-id": "Money_19_246",
								"x-dynamic": "false",
								children: "before the commitment."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 798
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 481
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "mt-5 text-base leading-7 text-slate-600",
						"x-file-name": "Money",
						"x-line-number": "19",
						"x-column": "313",
						"x-component": "p",
						"x-id": "Money_19_313",
						"x-dynamic": "false",
						children: "A transparent estimate for the four-year journey, then a stress test that uses your family’s numbers — not a generic calculator."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 976
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 178
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-12 grid gap-6 lg:grid-cols-12",
				"x-file-name": "Money",
				"x-line-number": "20",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Money_20_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white lg:col-span-7",
					"data-testid": "true-cost-card",
					"x-file-name": "Money",
					"x-line-number": "20",
					"x-column": "58",
					"x-component": "Card",
					"x-id": "Money_20_58",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Money",
						"x-line-number": "20",
						"x-column": "148",
						"x-component": "CardContent",
						"x-id": "Money_20_148",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-start",
								"x-file-name": "Money",
								"x-line-number": "20",
								"x-column": "184",
								"x-component": "div",
								"x-id": "Money_20_184",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Money",
									"x-line-number": "20",
									"x-column": "264",
									"x-component": "div",
									"x-id": "Money_20_264",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "269",
										"x-component": "SectionEyebrow",
										"x-id": "Money_20_269",
										"x-dynamic": "false",
										children: "True Cost engine"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 56,
										columnNumber: 843
									}, this), /* @__PURE__ */ _jsxDEV("h2", {
										className: "font-heading text-2xl font-bold",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "318",
										"x-component": "h2",
										"x-id": "Money_20_318",
										"x-dynamic": "false",
										children: "Itemized four-year estimate"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 56,
										columnNumber: 1013
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 728
								}, this), /* @__PURE__ */ _jsxDEV("select", {
									value: collegeId,
									onChange: (event) => {
										setCollegeId(event.target.value);
										setAffordability(null);
										setRoi(null);
									},
									className: "rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none focus:border-emerald-600",
									"data-testid": "money-college-select",
									"x-file-name": "Money",
									"x-line-number": "20",
									"x-column": "404",
									"x-component": "select",
									"x-id": "Money_20_404",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: colleges.map((college) => /* @__PURE__ */ _jsxDEV("option", {
										value: college.id,
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "727",
										"x-component": "option",
										"x-id": "Money_20_727",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "colleges",
										"x-source-path": "short_name",
										"x-source-editable": "false",
										"x-array-var": "colleges",
										"x-array-item-param": "college",
										children: college.short_name
									}, college.id, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 380
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 1208
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 538
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-8 space-y-4",
								"x-file-name": "Money",
								"x-line-number": "20",
								"x-column": "817",
								"x-component": "div",
								"x-id": "Money_20_817",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: selected ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
									/* @__PURE__ */ _jsxDEV(CostRow, {
										label: "Tuition & academic fees",
										value: selected.tuition_lakhs,
										source: "Official brochure",
										confidence: selected.confidence,
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "863",
										"x-component": "CostRow",
										"x-id": "Money_20_863",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 949
									}, this),
									/* @__PURE__ */ _jsxDEV(CostRow, {
										label: "Hostel + mess",
										value: selected.hostel_lakhs,
										source: "2025 campus estimate",
										confidence: "Medium",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "997",
										"x-component": "CostRow",
										"x-id": "Money_20_997",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 1196
									}, this),
									/* @__PURE__ */ _jsxDEV(CostRow, {
										label: "Books, device & travel",
										value: 1.8,
										source: "Planning assumption",
										confidence: "Medium",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "1110",
										"x-component": "CostRow",
										"x-id": "Money_20_1110",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 1422
									}, this),
									/* @__PURE__ */ _jsxDEV(CostRow, {
										label: "Living & personal buffer",
										value: 1.2,
										source: "Conservative estimate",
										confidence: "Medium",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "1213",
										"x-component": "CostRow",
										"x-id": "Money_20_1213",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 1640
									}, this),
									/* @__PURE__ */ _jsxDEV(CostRow, {
										label: "One-time setup buffer",
										value: .8,
										source: "Planning assumption",
										confidence: "Medium",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "1320",
										"x-component": "CostRow",
										"x-id": "Money_20_1320",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 1862
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 947
								}, this) : /* @__PURE__ */ _jsxDEV("div", {
									className: "text-sm text-slate-500",
									"x-file-name": "Money",
									"x-line-number": "20",
									"x-column": "1428",
									"x-component": "div",
									"x-id": "Money_20_1428",
									"x-dynamic": "false",
									children: "Loading cost rows…"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 2085
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 743
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-7 flex items-end justify-between border-t border-slate-200 pt-5",
								"x-file-name": "Money",
								"x-line-number": "20",
								"x-column": "1499",
								"x-component": "div",
								"x-id": "Money_20_1499",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Money",
									"x-line-number": "20",
									"x-column": "1583",
									"x-component": "div",
									"x-id": "Money_20_1583",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "1588",
										"x-component": "p",
										"x-id": "Money_20_1588",
										"x-dynamic": "false",
										children: "Estimated total"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 2581
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "mt-1 font-mono text-3xl font-bold text-slate-900",
										"data-testid": "true-cost-total",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "1687",
										"x-component": "p",
										"x-id": "Money_20_1687",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: money(preview.total)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 2790
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 2464
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-right",
									"x-file-name": "Money",
									"x-line-number": "20",
									"x-column": "1813",
									"x-component": "div",
									"x-id": "Money_20_1813",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-slate-500",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "1841",
										"x-component": "p",
										"x-id": "Money_20_1841",
										"x-dynamic": "false",
										children: "Range can move with"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 3216
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "mt-1 text-sm font-semibold text-amber-700",
										"x-file-name": "Money",
										"x-line-number": "20",
										"x-column": "1902",
										"x-component": "p",
										"x-id": "Money_20_1902",
										"x-dynamic": "false",
										children: "rent · travel · fee revisions"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 3387
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 3076
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 2268
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 367
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 169
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-emerald-900/10 bg-[#102a25] text-white lg:col-span-5",
					"data-testid": "affordability-simulator-card",
					"x-file-name": "Money",
					"x-line-number": "21",
					"x-column": "6",
					"x-component": "Card",
					"x-id": "Money_21_6",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Money",
						"x-line-number": "21",
						"x-column": "127",
						"x-component": "CardContent",
						"x-id": "Money_21_127",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
								"x-file-name": "Money",
								"x-line-number": "21",
								"x-column": "163",
								"x-component": "SectionEyebrow",
								"x-id": "Money_21_163",
								"x-dynamic": "false",
								children: "Family stress simulator"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 405
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "font-heading text-2xl font-bold",
								"x-file-name": "Money",
								"x-line-number": "21",
								"x-column": "219",
								"x-component": "h2",
								"x-id": "Money_21_219",
								"x-dynamic": "false",
								children: "What feels safe for you?"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 582
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 text-sm leading-6 text-emerald-50/70",
								"x-file-name": "Money",
								"x-line-number": "21",
								"x-column": "296",
								"x-component": "p",
								"x-id": "Money_21_296",
								"x-dynamic": "false",
								children: "Change one number at a time. We’ll show the funding gap and pressure signal."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 768
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-7 space-y-6",
								"x-file-name": "Money",
								"x-line-number": "21",
								"x-column": "433",
								"x-component": "div",
								"x-id": "Money_21_433",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(SliderRow, {
										label: "Monthly household income",
										value: income,
										min: 25e3,
										max: 25e4,
										step: 5e3,
										suffix: "₹",
										display: `₹${income.toLocaleString("en-IN")}`,
										onChange: setIncome,
										testId: "affordability-income-slider",
										"x-file-name": "Money",
										"x-line-number": "21",
										"x-column": "465",
										"x-component": "SliderRow",
										"x-id": "Money_21_465",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 61,
										columnNumber: 1155
									}, this),
									/* @__PURE__ */ _jsxDEV(SliderRow, {
										label: "Savings pool",
										value: savings,
										min: 0,
										max: 3e6,
										step: 5e4,
										suffix: "₹",
										display: `₹${(savings / 1e5).toFixed(1)}L`,
										onChange: setSavings,
										testId: "affordability-savings-slider",
										"x-file-name": "Money",
										"x-line-number": "21",
										"x-column": "679",
										"x-component": "SliderRow",
										"x-id": "Money_21_679",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 61,
										columnNumber: 1484
									}, this),
									/* @__PURE__ */ _jsxDEV(SliderRow, {
										label: "Existing monthly EMIs",
										value: emi,
										min: 0,
										max: 8e4,
										step: 2e3,
										suffix: "₹",
										display: `₹${emi.toLocaleString("en-IN")}`,
										onChange: setEmi,
										testId: "affordability-emi-slider",
										"x-file-name": "Money",
										"x-line-number": "21",
										"x-column": "882",
										"x-component": "SliderRow",
										"x-id": "Money_21_882",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 61,
										columnNumber: 1802
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 1013
							}, this),
							/* @__PURE__ */ _jsxDEV(Button, {
								className: "mt-8 w-full bg-amber-400 text-slate-950 hover:bg-amber-300 hover:text-slate-950",
								onClick: () => affordabilityMutation.mutate(),
								disabled: affordabilityMutation.isPending,
								"data-testid": "run-affordability-button",
								"x-file-name": "Money",
								"x-line-number": "21",
								"x-column": "1082",
								"x-component": "Button",
								"x-id": "Money_21_1082",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(Calculator, {
										size: 16,
										"x-file-name": "Money",
										"x-line-number": "21",
										"x-column": "1311",
										"x-component": "Calculator",
										"x-id": "Money_21_1311",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 61,
										columnNumber: 2511
									}, this),
									" ",
									affordabilityMutation.isPending ? "Calculating…" : "Run affordability check"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 2117
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 234
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-6 grid gap-6 lg:grid-cols-12",
				"x-file-name": "Money",
				"x-line-number": "22",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Money_22_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white lg:col-span-7",
					"data-testid": "affordability-result-card",
					"x-file-name": "Money",
					"x-line-number": "22",
					"x-column": "57",
					"x-component": "Card",
					"x-id": "Money_22_57",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Money",
						"x-line-number": "22",
						"x-column": "158",
						"x-component": "CardContent",
						"x-id": "Money_22_158",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between",
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "194",
								"x-component": "div",
								"x-id": "Money_22_194",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Money",
									"x-line-number": "22",
									"x-column": "245",
									"x-component": "div",
									"x-id": "Money_22_245",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
										"x-file-name": "Money",
										"x-line-number": "22",
										"x-column": "250",
										"x-component": "SectionEyebrow",
										"x-id": "Money_22_250",
										"x-dynamic": "false",
										children: "Funding signal"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 824
									}, this), /* @__PURE__ */ _jsxDEV("h2", {
										className: "font-heading text-xl font-bold",
										"x-file-name": "Money",
										"x-line-number": "22",
										"x-column": "297",
										"x-component": "h2",
										"x-id": "Money_22_297",
										"x-dynamic": "false",
										children: "Your affordability snapshot"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 992
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 709
								}, this), /* @__PURE__ */ _jsxDEV(SlidersHorizontal, {
									size: 20,
									className: "text-emerald-700",
									"x-file-name": "Money",
									"x-line-number": "22",
									"x-column": "382",
									"x-component": "SlidersHorizontal",
									"x-id": "Money_22_382",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 1186
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 548
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-7 grid grid-cols-3 gap-4",
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "448",
								"x-component": "div",
								"x-id": "Money_22_448",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(ResultMetric, {
										label: "Funding gap",
										value: money(affordability?.funding_gap_lakhs ?? preview.gap),
										testId: "funding-gap-value",
										"x-file-name": "Money",
										"x-line-number": "22",
										"x-column": "493",
										"x-component": "ResultMetric",
										"x-id": "Money_22_493",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 1531
									}, this),
									/* @__PURE__ */ _jsxDEV(ResultMetric, {
										label: "Stress score",
										value: `${affordability?.stress_score ?? preview.score}/100`,
										tone: (affordability?.stress_score ?? preview.score) > 60 ? "amber" : "green",
										testId: "stress-score-value",
										"x-file-name": "Money",
										"x-line-number": "22",
										"x-column": "619",
										"x-component": "ResultMetric",
										"x-id": "Money_22_619",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 1775
									}, this),
									/* @__PURE__ */ _jsxDEV(ResultMetric, {
										label: "Monthly pressure",
										value: money(affordability?.monthly_burden_lakhs ?? preview.gap / 4),
										testId: "monthly-pressure-value",
										"x-file-name": "Money",
										"x-line-number": "22",
										"x-column": "825",
										"x-component": "ResultMetric",
										"x-id": "Money_22_825",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 2099
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 1376
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: `mt-7 rounded-xl border p-4 ${(affordability?.stress_score ?? preview.score) > 60 ? "border-amber-200 bg-amber-50" : "border-emerald-200 bg-emerald-50"}`,
								"data-testid": "stress-level-note",
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "974",
								"x-component": "div",
								"x-id": "Money_22_974",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("p", {
									className: "flex items-center gap-2 text-sm font-semibold text-slate-800",
									"x-file-name": "Money",
									"x-line-number": "22",
									"x-column": "1177",
									"x-component": "p",
									"x-id": "Money_22_1177",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Money",
											"x-line-number": "22",
											"x-column": "1177",
											"x-component": "p",
											"x-id": "Money_22_1177_expr0",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: (affordability?.stress_score ?? preview.score) > 60 ? /* @__PURE__ */ _jsxDEV(AlertTriangle, {
												size: 16,
												className: "text-amber-700",
												"x-file-name": "Money",
												"x-line-number": "22",
												"x-column": "1308",
												"x-component": "AlertTriangle",
												"x-id": "Money_22_1308",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 64,
												columnNumber: 239
											}, this) : /* @__PURE__ */ _jsxDEV(CheckCircle2, {
												size: 16,
												className: "text-emerald-700",
												"x-file-name": "Money",
												"x-line-number": "22",
												"x-column": "1365",
												"x-component": "CheckCircle2",
												"x-id": "Money_22_1365",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 64,
												columnNumber: 418
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 62,
											columnNumber: 2915
										}, this),
										" ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Money",
											"x-line-number": "22",
											"x-column": "1177",
											"x-component": "p",
											"x-id": "Money_22_1177_expr2",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: affordability?.stress_level ?? (preview.score > 60 ? "High" : preview.score > 30 ? "Watch" : "Low")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 64,
											columnNumber: 603
										}, this),
										" pressure signal"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 2679
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "mt-2 text-xs leading-5 text-slate-600",
									"x-file-name": "Money",
									"x-line-number": "22",
									"x-column": "1543",
									"x-component": "p",
									"x-id": "Money_22_1543",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: affordability?.notes?.[0] ?? "Run the check to see personalized sensitivity notes based on this family profile."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 312
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 2366
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 377
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 168
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white lg:col-span-5",
					"data-testid": "roi-simulator-card",
					"x-file-name": "Money",
					"x-line-number": "22",
					"x-column": "1741",
					"x-component": "Card",
					"x-id": "Money_22_1741",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Money",
						"x-line-number": "22",
						"x-column": "1835",
						"x-component": "CardContent",
						"x-id": "Money_22_1835",
						"x-dynamic": "true",
						"x-excluded": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "1871",
								"x-component": "SectionEyebrow",
								"x-id": "Money_22_1871",
								"x-dynamic": "false",
								children: "ROI lens"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 1100
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "font-heading text-xl font-bold",
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "1912",
								"x-component": "h2",
								"x-id": "Money_22_1912",
								"x-dynamic": "false",
								children: "When does it pay back?"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 1264
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 text-sm leading-6 text-slate-500",
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "1986",
								"x-component": "p",
								"x-id": "Money_22_1986",
								"x-dynamic": "false",
								children: "A directional view, never a promise. Change how much you expect to fund through a loan."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 1449
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-6",
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "2130",
								"x-component": "div",
								"x-id": "Money_22_2130",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV(SliderRow, {
									label: "Share funded by loan",
									value: loanShare,
									min: 0,
									max: 100,
									step: 10,
									suffix: "%",
									display: `${loanShare}%`,
									onChange: setLoanShare,
									testId: "roi-loan-slider",
									light: true,
									"x-file-name": "Money",
									"x-line-number": "22",
									"x-column": "2152",
									"x-component": "SliderRow",
									"x-id": "Money_22_2152",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 1837
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 1703
							}, this),
							/* @__PURE__ */ _jsxDEV(Button, {
								variant: "outline",
								className: "mt-6 w-full border-emerald-200 text-emerald-800 hover:bg-emerald-700 hover:text-white",
								onClick: () => roiMutation.mutate(),
								disabled: roiMutation.isPending,
								"data-testid": "run-roi-button",
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "2338",
								"x-component": "Button",
								"x-id": "Money_22_2338",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									roiMutation.isPending ? "Calculating…" : "Calculate indicative ROI",
									" ",
									/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 15 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 2598
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 2140
							}, this),
							roi && /* @__PURE__ */ _jsxDEV("div", {
								className: "mt-6 grid grid-cols-2 gap-4",
								"data-testid": "roi-result-grid",
								"x-file-name": "Money",
								"x-line-number": "22",
								"x-column": "2672",
								"x-component": "div",
								"x-id": "Money_22_2672",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(ResultMetric, {
										label: "Break-even",
										value: `${roi.break_even_months} mo`,
										tone: "green",
										testId: "roi-break-even-value",
										"x-file-name": "Money",
										"x-line-number": "22",
										"x-column": "2747",
										"x-component": "ResultMetric",
										"x-id": "Money_22_2747",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 2826
									}, this),
									/* @__PURE__ */ _jsxDEV(ResultMetric, {
										label: "4y multiple",
										value: `${roi.roi_multiple}×`,
										tone: "green",
										testId: "roi-multiple-value",
										"x-file-name": "Money",
										"x-line-number": "22",
										"x-column": "2863",
										"x-component": "ResultMetric",
										"x-id": "Money_22_2863",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 3062
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "col-span-2 flex gap-2 text-[11px] leading-5 text-slate-500",
										"x-file-name": "Money",
										"x-line-number": "22",
										"x-column": "2971",
										"x-component": "p",
										"x-id": "Money_22_2971",
										"x-dynamic": "true",
										"x-source-type": "state",
										"x-source-var": "roi",
										"x-source-path": "disclaimer",
										"x-source-editable": "false",
										children: [/* @__PURE__ */ _jsxDEV(Info, {
											size: 14,
											className: "mt-0.5 shrink-0",
											"x-file-name": "Money",
											"x-line-number": "22",
											"x-column": "3045",
											"x-component": "Info",
											"x-id": "Money_22_3045",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 66,
											columnNumber: 3567
										}, this), roi.disclaimer]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 3290
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 2639
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 876
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 670
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 10
	}, this);
}
_s(Money, "DlM+l4fLvCTPDF7AD8CYachNPcM=", false, function() {
	return [
		useQuery,
		useSearchParams,
		useMutation,
		useMutation
	];
});
_c = Money;
function CostRow({ label, value, source, confidence }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex items-center justify-between gap-3",
		"data-testid": `cost-row-${label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`,
		"x-file-name": "Money",
		"x-line-number": "25",
		"x-column": "134",
		"x-component": "div",
		"x-id": "Money_25_134",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			"x-file-name": "Money",
			"x-line-number": "25",
			"x-column": "283",
			"x-component": "div",
			"x-id": "Money_25_283",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("p", {
				className: "text-sm font-semibold text-slate-800",
				"x-file-name": "Money",
				"x-line-number": "25",
				"x-column": "288",
				"x-component": "p",
				"x-id": "Money_25_288",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "label",
				"x-source-editable": "false",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 384
			}, this), /* @__PURE__ */ _jsxDEV("p", {
				className: "mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-400",
				"x-file-name": "Money",
				"x-line-number": "25",
				"x-column": "351",
				"x-component": "p",
				"x-id": "Money_25_351",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "source",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("span", {
						"data-ve-dynamic": "true",
						"x-excluded": "true",
						style: { display: "contents" },
						"x-file-name": "Money",
						"x-line-number": "25",
						"x-column": "351",
						"x-component": "p",
						"x-id": "Money_25_351_expr0",
						"x-dynamic": "true",
						"x-source-type": "prop",
						"x-source-var": "source",
						"x-source-editable": "false",
						children: source
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 880
					}, this),
					" · ",
					/* @__PURE__ */ _jsxDEV("span", {
						"data-ve-dynamic": "true",
						"x-excluded": "true",
						style: { display: "contents" },
						"x-file-name": "Money",
						"x-line-number": "25",
						"x-column": "351",
						"x-component": "p",
						"x-id": "Money_25_351_expr2",
						"x-dynamic": "true",
						"x-source-type": "prop",
						"x-source-var": "confidence",
						"x-source-editable": "false",
						children: confidence
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 212
					}, this),
					" confidence"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 622
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 80,
			columnNumber: 269
		}, this), /* @__PURE__ */ _jsxDEV("p", {
			className: "font-mono text-sm font-bold text-slate-900",
			"x-file-name": "Money",
			"x-line-number": "25",
			"x-column": "477",
			"x-component": "p",
			"x-id": "Money_25_477",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: money(value)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 238
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 80,
		columnNumber: 10
	}, this);
}
_c2 = CostRow;
function SliderRow({ label, value, min, max, step, display, onChange, testId, light = false }) {
	return /* @__PURE__ */ _jsxDEV("label", {
		className: "block",
		"data-testid": `${testId}-group`,
		"x-file-name": "Money",
		"x-line-number": "26",
		"x-column": "279",
		"x-component": "label",
		"x-id": "Money_26_279",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("span", {
			className: `flex items-center justify-between text-xs font-semibold ${light ? "text-slate-700" : "text-emerald-50/80"}`,
			"x-file-name": "Money",
			"x-line-number": "26",
			"x-column": "336",
			"x-component": "span",
			"x-id": "Money_26_336",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("span", {
				"x-file-name": "Money",
				"x-line-number": "26",
				"x-column": "463",
				"x-component": "span",
				"x-id": "Money_26_463",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "label",
				"x-source-editable": "false",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 417
			}, this), /* @__PURE__ */ _jsxDEV("strong", {
				className: `font-mono text-sm ${light ? "text-emerald-700" : "text-amber-300"}`,
				"data-testid": `${testId}-value`,
				"x-file-name": "Money",
				"x-line-number": "26",
				"x-column": "483",
				"x-component": "strong",
				"x-id": "Money_26_483",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "display",
				"x-source-editable": "false",
				children: display
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 615
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 108,
			columnNumber: 179
		}, this), /* @__PURE__ */ _jsxDEV("input", {
			type: "range",
			min,
			max,
			step,
			value,
			onChange: (event) => onChange(Number(event.target.value)),
			className: "mt-3 w-full accent-emerald-600",
			"data-testid": testId,
			"x-file-name": "Money",
			"x-line-number": "26",
			"x-column": "629",
			"x-component": "input",
			"x-id": "Money_26_629",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 108,
			columnNumber: 943
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 108,
		columnNumber: 10
	}, this);
}
_c3 = SliderRow;
function ResultMetric({ label, value, tone = "default", testId }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		"data-testid": testId,
		"x-file-name": "Money",
		"x-line-number": "27",
		"x-column": "163",
		"x-component": "div",
		"x-id": "Money_27_163",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("p", {
			className: `font-mono text-xl font-bold ${tone === "green" ? "text-emerald-700" : tone === "amber" ? "text-amber-700" : "text-slate-900"}`,
			"x-file-name": "Money",
			"x-line-number": "27",
			"x-column": "189",
			"x-component": "p",
			"x-id": "Money_27_189",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "value",
			"x-source-editable": "false",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 121,
			columnNumber: 146
		}, this), /* @__PURE__ */ _jsxDEV("p", {
			className: "mt-1 text-xs text-slate-500",
			"x-file-name": "Money",
			"x-line-number": "27",
			"x-column": "343",
			"x-component": "p",
			"x-id": "Money_27_343",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "label",
			"x-source-editable": "false",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 121,
			columnNumber: 475
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 121,
		columnNumber: 10
	}, this);
}
_c4 = ResultMetric;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "Money");
$RefreshReg$(_c2, "CostRow");
$RefreshReg$(_c3, "SliderRow");
$RefreshReg$(_c4, "ResultMetric");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Money.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Money.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Money.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Money.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QkFBK0JJLFNBQVMsVUFBVSxxQkFBcUJBLFNBQVMsVUFBVSxtQkFBbUI7R0FBbUI7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO2FBQUU3QjtFQUFTOzs7O1lBQUMsd0JBQUMsS0FBRDtHQUFHLFdBQVU7R0FBNkI7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO2FBQUVrQjtFQUFTOzs7O1VBQU07Ozs7OztBQUFHIiwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaFBhcmFtcyIsIkFsZXJ0VHJpYW5nbGUiLCJBcnJvd1JpZ2h0IiwiQ2FsY3VsYXRvciIsIkNoZWNrQ2lyY2xlMiIsIkluZm8iLCJTbGlkZXJzSG9yaXpvbnRhbCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsImFwaUdldCIsImFwaVBvc3QiLCJGQUxMQkFDS19PVkVSVklFVyIsIm1vbmV5IiwiU2VjdGlvbkV5ZWJyb3ciLCJNb25leSIsImRhdGEiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJyZXRyeSIsIm92ZXJ2aWV3IiwiY29sbGVnZXMiLCJzZWFyY2hQYXJhbXMiLCJjb2xsZWdlSWQiLCJzZXRDb2xsZWdlSWQiLCJnZXQiLCJpbmNvbWUiLCJzZXRJbmNvbWUiLCJzYXZpbmdzIiwic2V0U2F2aW5ncyIsImVtaSIsInNldEVtaSIsImxvYW5TaGFyZSIsInNldExvYW5TaGFyZSIsImFmZm9yZGFiaWxpdHkiLCJzZXRBZmZvcmRhYmlsaXR5Iiwicm9pIiwic2V0Um9pIiwic2VsZWN0ZWQiLCJmaW5kIiwiY29sbGVnZSIsImlkIiwiYWZmb3JkYWJpbGl0eU11dGF0aW9uIiwibXV0YXRpb25GbiIsImNvbGxlZ2VfaWQiLCJtb250aGx5X2luY29tZSIsImV4aXN0aW5nX2VtaSIsIm9uU3VjY2VzcyIsInJvaU11dGF0aW9uIiwibG9hbl9zaGFyZSIsInByZXZpZXciLCJ0b3RhbCIsInR1aXRpb25fbGFraHMiLCJob3N0ZWxfbGFraHMiLCJnYXAiLCJNYXRoIiwibWF4Iiwic2NvcmUiLCJtaW4iLCJyb3VuZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJzaG9ydF9uYW1lIiwiY29uZmlkZW5jZSIsInRvTG9jYWxlU3RyaW5nIiwidG9GaXhlZCIsIm11dGF0ZSIsImlzUGVuZGluZyIsImZ1bmRpbmdfZ2FwX2xha2hzIiwic3RyZXNzX3Njb3JlIiwibW9udGhseV9idXJkZW5fbGFraHMiLCJkaXNwbGF5Iiwic3RyZXNzX2xldmVsIiwibm90ZXMiLCJicmVha19ldmVuX21vbnRocyIsInJvaV9tdWx0aXBsZSIsImRpc2NsYWltZXIiLCJDb3N0Um93IiwibGFiZWwiLCJzb3VyY2UiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2VBbGwiLCJTbGlkZXJSb3ciLCJzdGVwIiwib25DaGFuZ2UiLCJ0ZXN0SWQiLCJsaWdodCIsIk51bWJlciIsIlJlc3VsdE1ldHJpYyIsInRvbmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTW9uZXkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQWxlcnRUcmlhbmdsZSwgQXJyb3dSaWdodCwgQ2FsY3VsYXRvciwgQ2hlY2tDaXJjbGUyLCBJbmZvLCBTbGlkZXJzSG9yaXpvbnRhbCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgYXBpR2V0LCBhcGlQb3N0IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgRkFMTEJBQ0tfT1ZFUlZJRVcsIG1vbmV5LCB0eXBlIEFmZm9yZGFiaWxpdHlSZXN1bHQsIHR5cGUgT3ZlcnZpZXcsIHR5cGUgUk9JUmVzdWx0IH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBTZWN0aW9uRXllYnJvdyB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FtcHVzU2hlbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9uZXkoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1wib3ZlcnZpZXdcIl0sIHF1ZXJ5Rm46ICgpID0+IGFwaUdldDxPdmVydmlldz4oXCIvY2FtcHVzL292ZXJ2aWV3XCIpLCByZXRyeTogZmFsc2UgfSk7XG4gIGNvbnN0IG92ZXJ2aWV3ID0gZGF0YSA/PyBGQUxMQkFDS19PVkVSVklFVzsgY29uc3QgY29sbGVnZXMgPSBvdmVydmlldy5jb2xsZWdlczsgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgW2NvbGxlZ2VJZCwgc2V0Q29sbGVnZUlkXSA9IHVzZVN0YXRlKHNlYXJjaFBhcmFtcy5nZXQoXCJjb2xsZWdlXCIpID8/IFwidml0LXZlbGxvcmVcIik7IGNvbnN0IFtpbmNvbWUsIHNldEluY29tZV0gPSB1c2VTdGF0ZSgxMTUwMDApOyBjb25zdCBbc2F2aW5ncywgc2V0U2F2aW5nc10gPSB1c2VTdGF0ZSg3MDAwMDApOyBjb25zdCBbZW1pLCBzZXRFbWldID0gdXNlU3RhdGUoMTIwMDApOyBjb25zdCBbbG9hblNoYXJlLCBzZXRMb2FuU2hhcmVdID0gdXNlU3RhdGUoNTApOyBjb25zdCBbYWZmb3JkYWJpbGl0eSwgc2V0QWZmb3JkYWJpbGl0eV0gPSB1c2VTdGF0ZTxBZmZvcmRhYmlsaXR5UmVzdWx0IHwgbnVsbD4obnVsbCk7IGNvbnN0IFtyb2ksIHNldFJvaV0gPSB1c2VTdGF0ZTxST0lSZXN1bHQgfCBudWxsPihudWxsKTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBjb2xsZWdlcy5maW5kKGNvbGxlZ2UgPT4gY29sbGVnZS5pZCA9PT0gY29sbGVnZUlkKSA/PyBjb2xsZWdlc1swXTtcbiAgY29uc3QgYWZmb3JkYWJpbGl0eU11dGF0aW9uID0gdXNlTXV0YXRpb24oeyBtdXRhdGlvbkZuOiAoKSA9PiBhcGlQb3N0PEFmZm9yZGFiaWxpdHlSZXN1bHQ+KFwiL2NhbXB1cy9zaW11bGF0ZS9hZmZvcmRhYmlsaXR5XCIsIHsgY29sbGVnZV9pZDogY29sbGVnZUlkLCBtb250aGx5X2luY29tZTogaW5jb21lLCBzYXZpbmdzLCBleGlzdGluZ19lbWk6IGVtaSB9KSwgb25TdWNjZXNzOiBzZXRBZmZvcmRhYmlsaXR5IH0pO1xuICBjb25zdCByb2lNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHsgbXV0YXRpb25GbjogKCkgPT4gYXBpUG9zdDxST0lSZXN1bHQ+KFwiL2NhbXB1cy9zaW11bGF0ZS9yb2lcIiwgeyBjb2xsZWdlX2lkOiBjb2xsZWdlSWQsIGxvYW5fc2hhcmU6IGxvYW5TaGFyZSB9KSwgb25TdWNjZXNzOiBzZXRSb2kgfSk7XG4gIGNvbnN0IHByZXZpZXcgPSB1c2VNZW1vKCgpID0+IHsgY29uc3QgdG90YWwgPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnR1aXRpb25fbGFraHMgKyBzZWxlY3RlZC5ob3N0ZWxfbGFraHMgKyAzLjggOiAyMS43OyBjb25zdCBnYXAgPSBNYXRoLm1heCgwLCB0b3RhbCAtIHNhdmluZ3MgLyAxMDAwMDApOyBjb25zdCBzY29yZSA9IE1hdGgubWluKDk4LCBNYXRoLm1heCg4LCBNYXRoLnJvdW5kKChnYXAgLyB0b3RhbCkgKiA2NSArIChlbWkgLyBpbmNvbWUpICogNDUpKSk7IHJldHVybiB7IHRvdGFsLCBnYXAsIHNjb3JlIH07IH0sIFtzZWxlY3RlZCwgc2F2aW5ncywgZW1pLCBpbmNvbWVdKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBweS0xMCBzbTpweC02IGxnOnB4LThcIj48ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bFwiPjxTZWN0aW9uRXllYnJvdz5Nb25leSAmIFJPSSDCtyBQMTwvU2VjdGlvbkV5ZWJyb3c+PGgxIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCBzbTp0ZXh0LTV4bFwiPktub3cgdGhlIGNvc3Q8YnIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTcwMFwiPmJlZm9yZSB0aGUgY29tbWl0bWVudC48L3NwYW4+PC9oMT48cCBjbGFzc05hbWU9XCJtdC01IHRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1zbGF0ZS02MDBcIj5BIHRyYW5zcGFyZW50IGVzdGltYXRlIGZvciB0aGUgZm91ci15ZWFyIGpvdXJuZXksIHRoZW4gYSBzdHJlc3MgdGVzdCB0aGF0IHVzZXMgeW91ciBmYW1pbHnigJlzIG51bWJlcnMg4oCUIG5vdCBhIGdlbmVyaWMgY2FsY3VsYXRvci48L3A+PC9kaXY+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTIgZ3JpZCBnYXAtNiBsZzpncmlkLWNvbHMtMTJcIj48Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItc2xhdGUtMjAwLzgwIGJnLXdoaXRlIGxnOmNvbC1zcGFuLTdcIiBkYXRhLXRlc3RpZD1cInRydWUtY29zdC1jYXJkXCI+PENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGdhcC00IHNtOmZsZXgtcm93IHNtOml0ZW1zLXN0YXJ0XCI+PGRpdj48U2VjdGlvbkV5ZWJyb3c+VHJ1ZSBDb3N0IGVuZ2luZTwvU2VjdGlvbkV5ZWJyb3c+PGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTJ4bCBmb250LWJvbGRcIj5JdGVtaXplZCBmb3VyLXllYXIgZXN0aW1hdGU8L2gyPjwvZGl2PjxzZWxlY3QgdmFsdWU9e2NvbGxlZ2VJZH0gb25DaGFuZ2U9e2V2ZW50ID0+IHsgc2V0Q29sbGVnZUlkKGV2ZW50LnRhcmdldC52YWx1ZSk7IHNldEFmZm9yZGFiaWxpdHkobnVsbCk7IHNldFJvaShudWxsKTsgfX0gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBiZy13aGl0ZSBweC0zIHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNzAwIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZW1lcmFsZC02MDBcIiBkYXRhLXRlc3RpZD1cIm1vbmV5LWNvbGxlZ2Utc2VsZWN0XCI+e2NvbGxlZ2VzLm1hcChjb2xsZWdlID0+IDxvcHRpb24ga2V5PXtjb2xsZWdlLmlkfSB2YWx1ZT17Y29sbGVnZS5pZH0+e2NvbGxlZ2Uuc2hvcnRfbmFtZX08L29wdGlvbj4pfTwvc2VsZWN0PjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtOCBzcGFjZS15LTRcIj57c2VsZWN0ZWQgPyA8PjxDb3N0Um93IGxhYmVsPVwiVHVpdGlvbiAmIGFjYWRlbWljIGZlZXNcIiB2YWx1ZT17c2VsZWN0ZWQudHVpdGlvbl9sYWtoc30gc291cmNlPVwiT2ZmaWNpYWwgYnJvY2h1cmVcIiBjb25maWRlbmNlPXtzZWxlY3RlZC5jb25maWRlbmNlfSAvPjxDb3N0Um93IGxhYmVsPVwiSG9zdGVsICsgbWVzc1wiIHZhbHVlPXtzZWxlY3RlZC5ob3N0ZWxfbGFraHN9IHNvdXJjZT1cIjIwMjUgY2FtcHVzIGVzdGltYXRlXCIgY29uZmlkZW5jZT1cIk1lZGl1bVwiIC8+PENvc3RSb3cgbGFiZWw9XCJCb29rcywgZGV2aWNlICYgdHJhdmVsXCIgdmFsdWU9ezEuOH0gc291cmNlPVwiUGxhbm5pbmcgYXNzdW1wdGlvblwiIGNvbmZpZGVuY2U9XCJNZWRpdW1cIiAvPjxDb3N0Um93IGxhYmVsPVwiTGl2aW5nICYgcGVyc29uYWwgYnVmZmVyXCIgdmFsdWU9ezEuMn0gc291cmNlPVwiQ29uc2VydmF0aXZlIGVzdGltYXRlXCIgY29uZmlkZW5jZT1cIk1lZGl1bVwiIC8+PENvc3RSb3cgbGFiZWw9XCJPbmUtdGltZSBzZXR1cCBidWZmZXJcIiB2YWx1ZT17MC44fSBzb3VyY2U9XCJQbGFubmluZyBhc3N1bXB0aW9uXCIgY29uZmlkZW5jZT1cIk1lZGl1bVwiIC8+PC8+IDogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+TG9hZGluZyBjb3N0IHJvd3PigKY8L2Rpdj59PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC03IGZsZXggaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItc2xhdGUtMjAwIHB0LTVcIj48ZGl2PjxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMThlbV0gdGV4dC1zbGF0ZS01MDBcIj5Fc3RpbWF0ZWQgdG90YWw8L3A+PHAgY2xhc3NOYW1lPVwibXQtMSBmb250LW1vbm8gdGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCIgZGF0YS10ZXN0aWQ9XCJ0cnVlLWNvc3QtdG90YWxcIj57bW9uZXkocHJldmlldy50b3RhbCl9PC9wPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj5SYW5nZSBjYW4gbW92ZSB3aXRoPC9wPjxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtYW1iZXItNzAwXCI+cmVudCDCtyB0cmF2ZWwgwrcgZmVlIHJldmlzaW9uczwvcD48L2Rpdj48L2Rpdj48L0NhcmRDb250ZW50PjwvQ2FyZD5cbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1lbWVyYWxkLTkwMC8xMCBiZy1bIzEwMmEyNV0gdGV4dC13aGl0ZSBsZzpjb2wtc3Bhbi01XCIgZGF0YS10ZXN0aWQ9XCJhZmZvcmRhYmlsaXR5LXNpbXVsYXRvci1jYXJkXCI+PENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj48U2VjdGlvbkV5ZWJyb3c+RmFtaWx5IHN0cmVzcyBzaW11bGF0b3I8L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0yeGwgZm9udC1ib2xkXCI+V2hhdCBmZWVscyBzYWZlIGZvciB5b3U/PC9oMj48cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gbGVhZGluZy02IHRleHQtZW1lcmFsZC01MC83MFwiPkNoYW5nZSBvbmUgbnVtYmVyIGF0IGEgdGltZS4gV2XigJlsbCBzaG93IHRoZSBmdW5kaW5nIGdhcCBhbmQgcHJlc3N1cmUgc2lnbmFsLjwvcD48ZGl2IGNsYXNzTmFtZT1cIm10LTcgc3BhY2UteS02XCI+PFNsaWRlclJvdyBsYWJlbD1cIk1vbnRobHkgaG91c2Vob2xkIGluY29tZVwiIHZhbHVlPXtpbmNvbWV9IG1pbj17MjUwMDB9IG1heD17MjUwMDAwfSBzdGVwPXs1MDAwfSBzdWZmaXg9XCLigrlcIiBkaXNwbGF5PXtg4oK5JHtpbmNvbWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1JTlwiKX1gfSBvbkNoYW5nZT17c2V0SW5jb21lfSB0ZXN0SWQ9XCJhZmZvcmRhYmlsaXR5LWluY29tZS1zbGlkZXJcIiAvPjxTbGlkZXJSb3cgbGFiZWw9XCJTYXZpbmdzIHBvb2xcIiB2YWx1ZT17c2F2aW5nc30gbWluPXswfSBtYXg9ezMwMDAwMDB9IHN0ZXA9ezUwMDAwfSBzdWZmaXg9XCLigrlcIiBkaXNwbGF5PXtg4oK5JHsoc2F2aW5ncyAvIDEwMDAwMCkudG9GaXhlZCgxKX1MYH0gb25DaGFuZ2U9e3NldFNhdmluZ3N9IHRlc3RJZD1cImFmZm9yZGFiaWxpdHktc2F2aW5ncy1zbGlkZXJcIiAvPjxTbGlkZXJSb3cgbGFiZWw9XCJFeGlzdGluZyBtb250aGx5IEVNSXNcIiB2YWx1ZT17ZW1pfSBtaW49ezB9IG1heD17ODAwMDB9IHN0ZXA9ezIwMDB9IHN1ZmZpeD1cIuKCuVwiIGRpc3BsYXk9e2Digrkke2VtaS50b0xvY2FsZVN0cmluZyhcImVuLUlOXCIpfWB9IG9uQ2hhbmdlPXtzZXRFbWl9IHRlc3RJZD1cImFmZm9yZGFiaWxpdHktZW1pLXNsaWRlclwiIC8+PC9kaXY+PEJ1dHRvbiBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBiZy1hbWJlci00MDAgdGV4dC1zbGF0ZS05NTAgaG92ZXI6YmctYW1iZXItMzAwIGhvdmVyOnRleHQtc2xhdGUtOTUwXCIgb25DbGljaz17KCkgPT4gYWZmb3JkYWJpbGl0eU11dGF0aW9uLm11dGF0ZSgpfSBkaXNhYmxlZD17YWZmb3JkYWJpbGl0eU11dGF0aW9uLmlzUGVuZGluZ30gZGF0YS10ZXN0aWQ9XCJydW4tYWZmb3JkYWJpbGl0eS1idXR0b25cIj48Q2FsY3VsYXRvciBzaXplPXsxNn0gLz4ge2FmZm9yZGFiaWxpdHlNdXRhdGlvbi5pc1BlbmRpbmcgPyBcIkNhbGN1bGF0aW5n4oCmXCIgOiBcIlJ1biBhZmZvcmRhYmlsaXR5IGNoZWNrXCJ9PC9CdXR0b24+PC9DYXJkQ29udGVudD48L0NhcmQ+PC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBnYXAtNiBsZzpncmlkLWNvbHMtMTJcIj48Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItc2xhdGUtMjAwLzgwIGJnLXdoaXRlIGxnOmNvbC1zcGFuLTdcIiBkYXRhLXRlc3RpZD1cImFmZm9yZGFiaWxpdHktcmVzdWx0LWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHNtOnAtOFwiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+PGRpdj48U2VjdGlvbkV5ZWJyb3c+RnVuZGluZyBzaWduYWw8L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC14bCBmb250LWJvbGRcIj5Zb3VyIGFmZm9yZGFiaWxpdHkgc25hcHNob3Q8L2gyPjwvZGl2PjxTbGlkZXJzSG9yaXpvbnRhbCBzaXplPXsyMH0gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMFwiIC8+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC03IGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj48UmVzdWx0TWV0cmljIGxhYmVsPVwiRnVuZGluZyBnYXBcIiB2YWx1ZT17bW9uZXkoYWZmb3JkYWJpbGl0eT8uZnVuZGluZ19nYXBfbGFraHMgPz8gcHJldmlldy5nYXApfSB0ZXN0SWQ9XCJmdW5kaW5nLWdhcC12YWx1ZVwiIC8+PFJlc3VsdE1ldHJpYyBsYWJlbD1cIlN0cmVzcyBzY29yZVwiIHZhbHVlPXtgJHthZmZvcmRhYmlsaXR5Py5zdHJlc3Nfc2NvcmUgPz8gcHJldmlldy5zY29yZX0vMTAwYH0gdG9uZT17KGFmZm9yZGFiaWxpdHk/LnN0cmVzc19zY29yZSA/PyBwcmV2aWV3LnNjb3JlKSA+IDYwID8gXCJhbWJlclwiIDogXCJncmVlblwifSB0ZXN0SWQ9XCJzdHJlc3Mtc2NvcmUtdmFsdWVcIiAvPjxSZXN1bHRNZXRyaWMgbGFiZWw9XCJNb250aGx5IHByZXNzdXJlXCIgdmFsdWU9e21vbmV5KGFmZm9yZGFiaWxpdHk/Lm1vbnRobHlfYnVyZGVuX2xha2hzID8/IHByZXZpZXcuZ2FwIC8gNCl9IHRlc3RJZD1cIm1vbnRobHktcHJlc3N1cmUtdmFsdWVcIiAvPjwvZGl2PjxkaXYgY2xhc3NOYW1lPXtgbXQtNyByb3VuZGVkLXhsIGJvcmRlciBwLTQgJHsoYWZmb3JkYWJpbGl0eT8uc3RyZXNzX3Njb3JlID8/IHByZXZpZXcuc2NvcmUpID4gNjAgPyBcImJvcmRlci1hbWJlci0yMDAgYmctYW1iZXItNTBcIiA6IFwiYm9yZGVyLWVtZXJhbGQtMjAwIGJnLWVtZXJhbGQtNTBcIn1gfSBkYXRhLXRlc3RpZD1cInN0cmVzcy1sZXZlbC1ub3RlXCI+PHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+eyhhZmZvcmRhYmlsaXR5Py5zdHJlc3Nfc2NvcmUgPz8gcHJldmlldy5zY29yZSkgPiA2MCA/IDxBbGVydFRyaWFuZ2xlIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTcwMFwiIC8+IDogPENoZWNrQ2lyY2xlMiBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMFwiIC8+fSB7YWZmb3JkYWJpbGl0eT8uc3RyZXNzX2xldmVsID8/IChwcmV2aWV3LnNjb3JlID4gNjAgPyBcIkhpZ2hcIiA6IHByZXZpZXcuc2NvcmUgPiAzMCA/IFwiV2F0Y2hcIiA6IFwiTG93XCIpfSBwcmVzc3VyZSBzaWduYWw8L3A+PHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXhzIGxlYWRpbmctNSB0ZXh0LXNsYXRlLTYwMFwiPnthZmZvcmRhYmlsaXR5Py5ub3Rlcz8uWzBdID8/IFwiUnVuIHRoZSBjaGVjayB0byBzZWUgcGVyc29uYWxpemVkIHNlbnNpdGl2aXR5IG5vdGVzIGJhc2VkIG9uIHRoaXMgZmFtaWx5IHByb2ZpbGUuXCJ9PC9wPjwvZGl2PjwvQ2FyZENvbnRlbnQ+PC9DYXJkPjxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1zbGF0ZS0yMDAvODAgYmctd2hpdGUgbGc6Y29sLXNwYW4tNVwiIGRhdGEtdGVzdGlkPVwicm9pLXNpbXVsYXRvci1jYXJkXCI+PENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj48U2VjdGlvbkV5ZWJyb3c+Uk9JIGxlbnM8L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC14bCBmb250LWJvbGRcIj5XaGVuIGRvZXMgaXQgcGF5IGJhY2s/PC9oMj48cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gbGVhZGluZy02IHRleHQtc2xhdGUtNTAwXCI+QSBkaXJlY3Rpb25hbCB2aWV3LCBuZXZlciBhIHByb21pc2UuIENoYW5nZSBob3cgbXVjaCB5b3UgZXhwZWN0IHRvIGZ1bmQgdGhyb3VnaCBhIGxvYW4uPC9wPjxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPjxTbGlkZXJSb3cgbGFiZWw9XCJTaGFyZSBmdW5kZWQgYnkgbG9hblwiIHZhbHVlPXtsb2FuU2hhcmV9IG1pbj17MH0gbWF4PXsxMDB9IHN0ZXA9ezEwfSBzdWZmaXg9XCIlXCIgZGlzcGxheT17YCR7bG9hblNoYXJlfSVgfSBvbkNoYW5nZT17c2V0TG9hblNoYXJlfSB0ZXN0SWQ9XCJyb2ktbG9hbi1zbGlkZXJcIiBsaWdodCAvPjwvZGl2PjxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJtdC02IHctZnVsbCBib3JkZXItZW1lcmFsZC0yMDAgdGV4dC1lbWVyYWxkLTgwMCBob3ZlcjpiZy1lbWVyYWxkLTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgb25DbGljaz17KCkgPT4gcm9pTXV0YXRpb24ubXV0YXRlKCl9IGRpc2FibGVkPXtyb2lNdXRhdGlvbi5pc1BlbmRpbmd9IGRhdGEtdGVzdGlkPVwicnVuLXJvaS1idXR0b25cIj57cm9pTXV0YXRpb24uaXNQZW5kaW5nID8gXCJDYWxjdWxhdGluZ+KAplwiIDogXCJDYWxjdWxhdGUgaW5kaWNhdGl2ZSBST0lcIn0gPEFycm93UmlnaHQgc2l6ZT17MTV9IC8+PC9CdXR0b24+e3JvaSAmJiA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiIGRhdGEtdGVzdGlkPVwicm9pLXJlc3VsdC1ncmlkXCI+PFJlc3VsdE1ldHJpYyBsYWJlbD1cIkJyZWFrLWV2ZW5cIiB2YWx1ZT17YCR7cm9pLmJyZWFrX2V2ZW5fbW9udGhzfSBtb2B9IHRvbmU9XCJncmVlblwiIHRlc3RJZD1cInJvaS1icmVhay1ldmVuLXZhbHVlXCIgLz48UmVzdWx0TWV0cmljIGxhYmVsPVwiNHkgbXVsdGlwbGVcIiB2YWx1ZT17YCR7cm9pLnJvaV9tdWx0aXBsZX3Dl2B9IHRvbmU9XCJncmVlblwiIHRlc3RJZD1cInJvaS1tdWx0aXBsZS12YWx1ZVwiIC8+PHAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGdhcC0yIHRleHQtWzExcHhdIGxlYWRpbmctNSB0ZXh0LXNsYXRlLTUwMFwiPjxJbmZvIHNpemU9ezE0fSBjbGFzc05hbWU9XCJtdC0wLjUgc2hyaW5rLTBcIiAvPntyb2kuZGlzY2xhaW1lcn08L3A+PC9kaXY+fTwvQ2FyZENvbnRlbnQ+PC9DYXJkPjwvc2VjdGlvbj5cbiAgPC9kaXY+O1xufVxuZnVuY3Rpb24gQ29zdFJvdyh7IGxhYmVsLCB2YWx1ZSwgc291cmNlLCBjb25maWRlbmNlIH06IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlcjsgc291cmNlOiBzdHJpbmc7IGNvbmZpZGVuY2U6IHN0cmluZyB9KSB7IHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiIGRhdGEtdGVzdGlkPXtgY29zdC1yb3ctJHtsYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKS5yZXBsYWNlQWxsKFwiJlwiLCBcImFuZFwiKX1gfT48ZGl2PjxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPntsYWJlbH08L3A+PHAgY2xhc3NOYW1lPVwibXQtMSBmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNDAwXCI+e3NvdXJjZX0gwrcge2NvbmZpZGVuY2V9IGNvbmZpZGVuY2U8L3A+PC9kaXY+PHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+e21vbmV5KHZhbHVlKX08L3A+PC9kaXY+OyB9XG5mdW5jdGlvbiBTbGlkZXJSb3coeyBsYWJlbCwgdmFsdWUsIG1pbiwgbWF4LCBzdGVwLCBkaXNwbGF5LCBvbkNoYW5nZSwgdGVzdElkLCBsaWdodCA9IGZhbHNlIH06IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlcjsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyOyBzdGVwOiBudW1iZXI7IHN1ZmZpeDogc3RyaW5nOyBkaXNwbGF5OiBzdHJpbmc7IG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDsgdGVzdElkOiBzdHJpbmc7IGxpZ2h0PzogYm9vbGVhbiB9KSB7IHJldHVybiA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2tcIiBkYXRhLXRlc3RpZD17YCR7dGVzdElkfS1ncm91cGB9PjxzcGFuIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgJHtsaWdodCA/IFwidGV4dC1zbGF0ZS03MDBcIiA6IFwidGV4dC1lbWVyYWxkLTUwLzgwXCJ9YH0+PHNwYW4+e2xhYmVsfTwvc3Bhbj48c3Ryb25nIGNsYXNzTmFtZT17YGZvbnQtbW9ubyB0ZXh0LXNtICR7bGlnaHQgPyBcInRleHQtZW1lcmFsZC03MDBcIiA6IFwidGV4dC1hbWJlci0zMDBcIn1gfSBkYXRhLXRlc3RpZD17YCR7dGVzdElkfS12YWx1ZWB9PntkaXNwbGF5fTwvc3Ryb25nPjwvc3Bhbj48aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXttaW59IG1heD17bWF4fSBzdGVwPXtzdGVwfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZShOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSl9IGNsYXNzTmFtZT1cIm10LTMgdy1mdWxsIGFjY2VudC1lbWVyYWxkLTYwMFwiIGRhdGEtdGVzdGlkPXt0ZXN0SWR9IC8+PC9sYWJlbD47IH1cbmZ1bmN0aW9uIFJlc3VsdE1ldHJpYyh7IGxhYmVsLCB2YWx1ZSwgdG9uZSA9IFwiZGVmYXVsdFwiLCB0ZXN0SWQgfTogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0b25lPzogXCJkZWZhdWx0XCIgfCBcImdyZWVuXCIgfCBcImFtYmVyXCI7IHRlc3RJZDogc3RyaW5nIH0pIHsgcmV0dXJuIDxkaXYgZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+PHAgY2xhc3NOYW1lPXtgZm9udC1tb25vIHRleHQteGwgZm9udC1ib2xkICR7dG9uZSA9PT0gXCJncmVlblwiID8gXCJ0ZXh0LWVtZXJhbGQtNzAwXCIgOiB0b25lID09PSBcImFtYmVyXCIgPyBcInRleHQtYW1iZXItNzAwXCIgOiBcInRleHQtc2xhdGUtOTAwXCJ9YH0+e3ZhbHVlfTwvcD48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj57bGFiZWx9PC9wPjwvZGl2PjsgfSJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvcGFnZXMvTW9uZXkudHN4In0=