import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Explore.tsx");const useState = __vite__cjsImport1_react["useState"];const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport9_react_jsxDevRuntime["Fragment"];import { useMutation, useQuery, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=0cd69c2d";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=0cd69c2d";
import { ArrowRight, Check, MapPin, Scale, Sparkles } from "/src/lib/lucide-react.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { FALLBACK_OVERVIEW, money } from "/src/lib/types.ts";
import { ConfidenceBadge, SectionEyebrow } from "/src/components/CampusShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Explore.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0cd69c2d";
var _s = $RefreshSig$();
export default function Explore() {
	_s();
	const { data } = useQuery({
		queryKey: ["overview"],
		queryFn: () => apiGet("/campus/overview"),
		retry: false
	});
	const { data: planner } = useQuery({
		queryKey: ["planner"],
		queryFn: () => apiGet("/campus/planner"),
		retry: false
	});
	const overview = data ?? FALLBACK_OVERVIEW;
	const [selected, setSelected] = useState("vit-vellore");
	const queryClient = useQueryClient();
	const shortlist = useMutation({
		mutationFn: (collegeId) => apiPost("/campus/planner", {
			college_id: collegeId,
			status: "Shortlisted"
		}),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["planner"] })
	});
	const selectedCollege = overview.colleges.find((item) => item.id === selected);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		"x-file-name": "Explore",
		"x-line-number": "19",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Explore_19_9",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "max-w-3xl",
				"x-file-name": "Explore",
				"x-line-number": "19",
				"x-column": "71",
				"x-component": "div",
				"x-id": "Explore_19_71",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
						"x-file-name": "Explore",
						"x-line-number": "19",
						"x-column": "98",
						"x-component": "SectionEyebrow",
						"x-id": "Explore_19_98",
						"x-dynamic": "false",
						children: "Explore & compare · P1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 371
					}, this),
					/* @__PURE__ */ _jsxDEV("h1", {
						className: "font-heading text-4xl font-extrabold tracking-tight sm:text-5xl",
						"x-file-name": "Explore",
						"x-line-number": "19",
						"x-column": "153",
						"x-component": "h1",
						"x-id": "Explore_19_153",
						"x-dynamic": "false",
						children: [
							"Don’t pick a college.",
							/* @__PURE__ */ _jsxDEV("br", {
								"x-file-name": "Explore",
								"x-line-number": "19",
								"x-column": "254",
								"x-component": "br",
								"x-id": "Explore_19_254",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 763
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-emerald-700",
								"x-file-name": "Explore",
								"x-line-number": "19",
								"x-column": "260",
								"x-component": "span",
								"x-id": "Explore_19_260",
								"x-dynamic": "false",
								children: "Pick a fit."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 882
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 549
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "mt-5 text-base leading-7 text-slate-600",
						"x-file-name": "Explore",
						"x-line-number": "19",
						"x-column": "318",
						"x-component": "p",
						"x-id": "Explore_19_318",
						"x-dynamic": "false",
						children: "A clear view across cost, outcomes, accreditation, and the route you’ll actually take to get in."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 1055
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 232
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-12",
				"x-file-name": "Explore",
				"x-line-number": "20",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Explore_20_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-end justify-between",
					"x-file-name": "Explore",
					"x-line-number": "20",
					"x-column": "31",
					"x-component": "div",
					"x-id": "Explore_20_31",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Explore",
						"x-line-number": "20",
						"x-column": "79",
						"x-component": "div",
						"x-id": "Explore_20_79",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
							"x-file-name": "Explore",
							"x-line-number": "20",
							"x-column": "84",
							"x-component": "SectionEyebrow",
							"x-id": "Explore_20_84",
							"x-dynamic": "false",
							children: "Career direction"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 423
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							className: "font-heading text-2xl font-bold",
							"x-file-name": "Explore",
							"x-line-number": "20",
							"x-column": "133",
							"x-component": "h2",
							"x-id": "Explore_20_133",
							"x-dynamic": "false",
							children: "What kind of work pulls you in?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 595
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 306
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "hidden font-mono text-[10px] uppercase tracking-wider text-slate-400 sm:block",
						"x-file-name": "Explore",
						"x-line-number": "20",
						"x-column": "223",
						"x-component": "span",
						"x-id": "Explore_20_223",
						"x-dynamic": "false",
						children: "Seeded 2025 signals"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 798
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 146
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					"x-file-name": "Explore",
					"x-line-number": "20",
					"x-column": "351",
					"x-component": "div",
					"x-id": "Explore_20_351",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: overview.careers.map((career, index) => /* @__PURE__ */ _jsxDEV(Card, {
						className: `border-slate-200/80 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-emerald-300 ${index === 0 ? "bg-emerald-50/60" : "bg-white"}`,
						"data-testid": `explore-career-card-${career.id}`,
						"x-file-name": "Explore",
						"x-line-number": "20",
						"x-column": "440",
						"x-component": "Card",
						"x-id": "Explore_20_440",
						"x-dynamic": "true",
						"x-source-type": "external",
						"x-source-var": "overview",
						"x-source-editable": "false",
						"x-array-var": "overview",
						"x-array-item-param": "career",
						children: /* @__PURE__ */ _jsxDEV(CardContent, {
							className: "p-6",
							"x-file-name": "Explore",
							"x-line-number": "20",
							"x-column": "689",
							"x-component": "CardContent",
							"x-id": "Explore_20_689",
							"x-dynamic": "true",
							"x-excluded": "true",
							"x-source-type": "external",
							"x-source-var": "overview",
							"x-source-editable": "false",
							"x-array-var": "overview",
							"x-array-item-param": "career",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									"x-file-name": "Explore",
									"x-line-number": "20",
									"x-column": "718",
									"x-component": "div",
									"x-id": "Explore_20_718",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-700",
										"x-file-name": "Explore",
										"x-line-number": "20",
										"x-column": "769",
										"x-component": "span",
										"x-id": "Explore_20_769",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: ["0", /* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Explore",
											"x-line-number": "20",
											"x-column": "769",
											"x-component": "span",
											"x-id": "Explore_20_769_expr1",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: index + 1
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 39,
											columnNumber: 2492
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 39,
										columnNumber: 2242
									}, this), /* @__PURE__ */ _jsxDEV(Badge, {
										className: "bg-white text-slate-600 shadow-none",
										"data-testid": `explore-career-demand-${career.id}`,
										"x-file-name": "Explore",
										"x-line-number": "20",
										"x-column": "872",
										"x-component": "Badge",
										"x-id": "Explore_20_872",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "overview",
										"x-source-path": "careers.demand",
										"x-source-editable": "false",
										"x-array-var": "overview",
										"x-array-item-param": "career",
										children: career.demand
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 41,
										columnNumber: 216
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 39,
									columnNumber: 2077
								}, this),
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "mt-8 font-heading text-xl font-bold",
									"x-file-name": "Explore",
									"x-line-number": "20",
									"x-column": "1007",
									"x-component": "h3",
									"x-id": "Explore_20_1007",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "overview",
									"x-source-path": "careers.title",
									"x-source-editable": "false",
									"x-array-var": "overview",
									"x-array-item-param": "career",
									children: career.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 630
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "mt-2 text-sm text-slate-600",
									"x-file-name": "Explore",
									"x-line-number": "20",
									"x-column": "1078",
									"x-component": "p",
									"x-id": "Explore_20_1078",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "overview",
									"x-source-path": "careers.tagline",
									"x-source-editable": "false",
									"x-array-var": "overview",
									"x-array-item-param": "career",
									children: career.tagline
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 978
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-6 flex items-end justify-between",
									"x-file-name": "Explore",
									"x-line-number": "20",
									"x-column": "1141",
									"x-component": "div",
									"x-id": "Explore_20_1141",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										"x-file-name": "Explore",
										"x-line-number": "20",
										"x-column": "1194",
										"x-component": "div",
										"x-id": "Explore_20_1194",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("p", {
											className: "font-mono text-lg font-bold text-slate-900",
											"x-file-name": "Explore",
											"x-line-number": "20",
											"x-column": "1199",
											"x-component": "p",
											"x-id": "Explore_20_1199",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: [
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Explore",
													"x-line-number": "20",
													"x-column": "1199",
													"x-component": "p",
													"x-id": "Explore_20_1199_expr0",
													"x-dynamic": "true",
													"x-source-type": "computed",
													"x-source-editable": "false",
													children: money(career.salary_min_lpa)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 41,
													columnNumber: 1831
												}, this),
												"–",
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Explore",
													"x-line-number": "20",
													"x-column": "1199",
													"x-component": "p",
													"x-id": "Explore_20_1199_expr2",
													"x-dynamic": "true",
													"x-source-type": "computed",
													"x-source-editable": "false",
													children: money(career.salary_max_lpa)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 43,
													columnNumber: 230
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 41,
											columnNumber: 1609
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-[11px] text-slate-500",
											"x-file-name": "Explore",
											"x-line-number": "20",
											"x-column": "1322",
											"x-component": "p",
											"x-id": "Explore_20_1322",
											"x-dynamic": "false",
											children: "indicative range"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 233
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 41,
										columnNumber: 1488
									}, this), /* @__PURE__ */ _jsxDEV(Sparkles, {
										size: 18,
										className: "text-amber-600",
										"x-file-name": "Explore",
										"x-line-number": "20",
										"x-column": "1390",
										"x-component": "Sparkles",
										"x-id": "Explore_20_1390",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "overview",
										"x-source-editable": "false",
										"x-array-var": "overview",
										"x-array-item-param": "career"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 45,
										columnNumber: 415
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 1319
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-5 flex flex-wrap gap-1.5",
									"x-file-name": "Explore",
									"x-line-number": "20",
									"x-column": "1445",
									"x-component": "div",
									"x-id": "Explore_20_1445",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: career.skills.map((skill) => /* @__PURE__ */ _jsxDEV("span", {
										className: "rounded-md border border-slate-200 bg-white/70 px-2 py-1 font-mono text-[10px] text-slate-600",
										"data-testid": `explore-skill-${career.id}-${skill.toLowerCase().replaceAll(" ", "-")}`,
										"x-file-name": "Explore",
										"x-line-number": "20",
										"x-column": "1518",
										"x-component": "span",
										"x-id": "Explore_20_1518",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "career",
										"x-source-editable": "false",
										"x-array-var": "career",
										"x-array-item-param": "skill",
										children: skill
									}, skill, false, {
										fileName: _jsxFileName,
										lineNumber: 45,
										columnNumber: 955
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 716
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 1783
						}, this)
					}, career.id, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 1294
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 1041
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-14",
				"x-file-name": "Explore",
				"x-line-number": "21",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Explore_21_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
					"x-file-name": "Explore",
					"x-line-number": "21",
					"x-column": "31",
					"x-component": "div",
					"x-id": "Explore_21_31",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Explore",
						"x-line-number": "21",
						"x-column": "109",
						"x-component": "div",
						"x-id": "Explore_21_109",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
							"x-file-name": "Explore",
							"x-line-number": "21",
							"x-column": "114",
							"x-component": "SectionEyebrow",
							"x-id": "Explore_21_114",
							"x-dynamic": "false",
							children: "College matrix"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 455
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							className: "font-heading text-2xl font-bold",
							"x-file-name": "Explore",
							"x-line-number": "21",
							"x-column": "161",
							"x-component": "h2",
							"x-id": "Explore_21_161",
							"x-dynamic": "false",
							children: "Compare the trade-offs"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 627
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 336
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-xs text-slate-500",
						"x-file-name": "Explore",
						"x-line-number": "21",
						"x-column": "242",
						"x-component": "div",
						"x-id": "Explore_21_242",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(Scale, {
							size: 15,
							className: "text-emerald-700",
							"x-file-name": "Explore",
							"x-line-number": "21",
							"x-column": "306",
							"x-component": "Scale",
							"x-id": "Explore_21_306",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 999
						}, this), " Fees are four-year tuition unless marked otherwise"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 821
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 146
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
					"x-file-name": "Explore",
					"x-line-number": "21",
					"x-column": "417",
					"x-component": "div",
					"x-id": "Explore_21_417",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "overflow-x-auto",
						"x-file-name": "Explore",
						"x-line-number": "21",
						"x-column": "510",
						"x-component": "div",
						"x-id": "Explore_21_510",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV("table", {
							className: "w-full min-w-[850px] text-left",
							"data-testid": "college-comparison-table",
							"x-file-name": "Explore",
							"x-line-number": "21",
							"x-column": "543",
							"x-component": "table",
							"x-id": "Explore_21_543",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("thead", {
								className: "border-b border-slate-200 bg-slate-50/80",
								"x-file-name": "Explore",
								"x-line-number": "21",
								"x-column": "632",
								"x-component": "thead",
								"x-id": "Explore_21_632",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV("tr", {
									"x-file-name": "Explore",
									"x-line-number": "21",
									"x-column": "692",
									"x-component": "tr",
									"x-id": "Explore_21_692",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-slate-500",
											"x-file-name": "Explore",
											"x-line-number": "21",
											"x-column": "696",
											"x-component": "th",
											"x-id": "Explore_21_696",
											"x-dynamic": "false",
											children: "College"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 2078
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-slate-500",
											"x-file-name": "Explore",
											"x-line-number": "21",
											"x-column": "796",
											"x-component": "th",
											"x-id": "Explore_21_796",
											"x-dynamic": "false",
											children: "Total tuition"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 2291
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-slate-500",
											"x-file-name": "Explore",
											"x-line-number": "21",
											"x-column": "902",
											"x-component": "th",
											"x-id": "Explore_21_902",
											"x-dynamic": "false",
											children: "Median placement"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 2510
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-slate-500",
											"x-file-name": "Explore",
											"x-line-number": "21",
											"x-column": "1011",
											"x-component": "th",
											"x-id": "Explore_21_1011",
											"x-dynamic": "false",
											children: "Placed"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 2732
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-slate-500",
											"x-file-name": "Explore",
											"x-line-number": "21",
											"x-column": "1110",
											"x-component": "th",
											"x-id": "Explore_21_1110",
											"x-dynamic": "false",
											children: "Route"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 2946
										}, this),
										/* @__PURE__ */ _jsxDEV("th", {
											className: "px-5 py-4",
											"x-file-name": "Explore",
											"x-line-number": "21",
											"x-column": "1208",
											"x-component": "th",
											"x-id": "Explore_21_1208",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 3159
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 1961
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 1785
							}, this), /* @__PURE__ */ _jsxDEV("tbody", {
								"x-file-name": "Explore",
								"x-line-number": "21",
								"x-column": "1249",
								"x-component": "tbody",
								"x-id": "Explore_21_1249",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: overview.colleges.map((college) => {
									const isShortlisted = planner?.some((item) => item.college_id === college.id && item.status === "Shortlisted");
									return /* @__PURE__ */ _jsxDEV("tr", {
										className: `border-b border-slate-100 transition-colors hover:bg-emerald-50/40 ${selected === college.id ? "bg-emerald-50/50" : ""}`,
										"data-testid": `college-row-${college.id}`,
										"x-file-name": "Explore",
										"x-line-number": "21",
										"x-column": "1409",
										"x-component": "tr",
										"x-id": "Explore_21_1409",
										"x-dynamic": "false",
										children: [
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-5 py-5",
												"x-file-name": "Explore",
												"x-line-number": "21",
												"x-column": "1606",
												"x-component": "td",
												"x-id": "Explore_21_1606",
												"x-dynamic": "false",
												children: /* @__PURE__ */ _jsxDEV("button", {
													className: "text-left",
													onClick: () => setSelected(college.id),
													"data-testid": `college-select-${college.id}`,
													"x-file-name": "Explore",
													"x-line-number": "21",
													"x-column": "1632",
													"x-component": "button",
													"x-id": "Explore_21_1632",
													"x-dynamic": "false",
													children: [/* @__PURE__ */ _jsxDEV("p", {
														className: "font-semibold text-slate-900",
														"x-file-name": "Explore",
														"x-line-number": "21",
														"x-column": "1747",
														"x-component": "p",
														"x-id": "Explore_21_1747",
														"x-dynamic": "true",
														"x-source-type": "static-imported",
														"x-source-var": "overview",
														"x-source-path": "colleges.short_name",
														"x-source-editable": "false",
														"x-array-var": "overview",
														"x-array-item-param": "college",
														children: college.short_name
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 48,
														columnNumber: 711
													}, this), /* @__PURE__ */ _jsxDEV("p", {
														className: "mt-1 flex items-center gap-1 text-xs text-slate-500",
														"x-file-name": "Explore",
														"x-line-number": "21",
														"x-column": "1815",
														"x-component": "p",
														"x-id": "Explore_21_1815",
														"x-dynamic": "true",
														"x-source-type": "static-imported",
														"x-source-var": "overview",
														"x-source-path": "colleges.city",
														"x-source-editable": "false",
														"x-array-var": "overview",
														"x-array-item-param": "college",
														children: [
															/* @__PURE__ */ _jsxDEV(MapPin, {
																size: 11,
																"x-file-name": "Explore",
																"x-line-number": "21",
																"x-column": "1882",
																"x-component": "MapPin",
																"x-id": "Explore_21_1882",
																"x-dynamic": "true",
																"x-source-type": "external",
																"x-source-var": "overview",
																"x-source-editable": "false",
																"x-array-var": "overview",
																"x-array-item-param": "college"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 48,
																columnNumber: 1406
															}, this),
															" ",
															college.city
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 48,
														columnNumber: 1062
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 48,
													columnNumber: 477
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 48,
												columnNumber: 336
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-5 py-5 font-mono text-sm font-bold text-slate-800",
												"x-file-name": "Explore",
												"x-line-number": "21",
												"x-column": "1935",
												"x-component": "td",
												"x-id": "Explore_21_1935",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: [money(college.tuition_lakhs), /* @__PURE__ */ _jsxDEV("span", {
													className: "block font-sans text-[11px] font-normal text-slate-400",
													"x-file-name": "Explore",
													"x-line-number": "21",
													"x-column": "2034",
													"x-component": "span",
													"x-id": "Explore_21_2034",
													"x-dynamic": "true",
													"x-source-type": "computed",
													"x-source-editable": "false",
													children: ["hostel ", /* @__PURE__ */ _jsxDEV("span", {
														"data-ve-dynamic": "true",
														"x-excluded": "true",
														style: { display: "contents" },
														"x-file-name": "Explore",
														"x-line-number": "21",
														"x-column": "2034",
														"x-component": "span",
														"x-id": "Explore_21_2034_expr1",
														"x-dynamic": "true",
														"x-source-type": "computed",
														"x-source-editable": "false",
														children: money(college.hostel_lakhs)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 48,
														columnNumber: 2215
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 48,
													columnNumber: 1968
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 48,
												columnNumber: 1704
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-5 py-5 font-mono text-sm font-bold text-emerald-700",
												"x-file-name": "Explore",
												"x-line-number": "21",
												"x-column": "2155",
												"x-component": "td",
												"x-id": "Explore_21_2155",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: [money(college.median_placement_lpa), /* @__PURE__ */ _jsxDEV("span", {
													className: "block font-sans text-[11px] font-normal text-slate-400",
													"x-file-name": "Explore",
													"x-line-number": "21",
													"x-column": "2263",
													"x-component": "span",
													"x-id": "Explore_21_2263",
													"x-dynamic": "false",
													children: "avg / year"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 50,
													columnNumber: 520
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 50,
												columnNumber: 247
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-5 py-5 text-sm text-slate-700",
												"x-file-name": "Explore",
												"x-line-number": "21",
												"x-column": "2358",
												"x-component": "td",
												"x-id": "Explore_21_2358",
												"x-dynamic": "true",
												"x-source-type": "static-imported",
												"x-source-var": "overview",
												"x-source-path": "colleges.placement_rate",
												"x-source-editable": "false",
												"x-array-var": "overview",
												"x-array-item-param": "college",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Explore",
													"x-line-number": "21",
													"x-column": "2358",
													"x-component": "td",
													"x-id": "Explore_21_2358_expr0",
													"x-dynamic": "true",
													"x-source-type": "static-imported",
													"x-source-var": "overview",
													"x-source-path": "colleges.placement_rate",
													"x-source-editable": "false",
													"x-array-var": "overview",
													"x-array-item-param": "college",
													children: college.placement_rate
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 50,
													columnNumber: 1069
												}, this), "%"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 50,
												columnNumber: 732
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-5 py-5",
												"x-file-name": "Explore",
												"x-line-number": "21",
												"x-column": "2437",
												"x-component": "td",
												"x-id": "Explore_21_2437",
												"x-dynamic": "false",
												children: /* @__PURE__ */ _jsxDEV("div", {
													className: "flex flex-wrap gap-1",
													"x-file-name": "Explore",
													"x-line-number": "21",
													"x-column": "2463",
													"x-component": "div",
													"x-id": "Explore_21_2463",
													"x-dynamic": "true",
													"x-source-type": "computed",
													"x-source-editable": "false",
													children: college.admission_routes.map((route) => /* @__PURE__ */ _jsxDEV("span", {
														className: "rounded bg-slate-100 px-2 py-1 font-mono text-[10px] text-slate-600",
														"x-file-name": "Explore",
														"x-line-number": "21",
														"x-column": "2540",
														"x-component": "span",
														"x-id": "Explore_21_2540",
														"x-dynamic": "true",
														"x-source-type": "static-imported",
														"x-source-var": "college",
														"x-source-editable": "false",
														"x-array-var": "college",
														"x-array-item-param": "route",
														children: route
													}, route, false, {
														fileName: _jsxFileName,
														lineNumber: 52,
														columnNumber: 739
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 52,
													columnNumber: 496
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 52,
												columnNumber: 355
											}, this),
											/* @__PURE__ */ _jsxDEV("td", {
												className: "px-5 py-5",
												"x-file-name": "Explore",
												"x-line-number": "21",
												"x-column": "2665",
												"x-component": "td",
												"x-id": "Explore_21_2665",
												"x-dynamic": "false",
												children: /* @__PURE__ */ _jsxDEV(Button, {
													size: "sm",
													variant: isShortlisted ? "secondary" : "outline",
													disabled: shortlist.isPending,
													onClick: () => shortlist.mutate(college.id),
													"data-testid": `college-shortlist-${college.id}`,
													"x-file-name": "Explore",
													"x-line-number": "21",
													"x-column": "2691",
													"x-component": "Button",
													"x-id": "Explore_21_2691",
													"x-dynamic": "true",
													"x-source-type": "computed",
													"x-source-editable": "false",
													children: isShortlisted ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(Check, { size: 14 }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 52,
														columnNumber: 1631
													}, this), " Saved"] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 52,
														columnNumber: 1629
													}, this) : "Shortlist"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 52,
													columnNumber: 1251
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 52,
												columnNumber: 1110
											}, this)
										]
									}, college.id, true, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 24
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 3315
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 1580
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 1433
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 1226
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 5
			}, this),
			selectedCollege && /* @__PURE__ */ _jsxDEV("section", {
				className: "mt-8 grid gap-6 lg:grid-cols-12",
				"x-file-name": "Explore",
				"x-line-number": "22",
				"x-column": "24",
				"x-component": "section",
				"x-id": "Explore_22_24",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-emerald-200 bg-emerald-50/60 lg:col-span-8",
					"data-testid": "selected-college-detail",
					"x-file-name": "Explore",
					"x-line-number": "22",
					"x-column": "77",
					"x-component": "Card",
					"x-id": "Explore_22_77",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Explore",
						"x-line-number": "22",
						"x-column": "183",
						"x-component": "CardContent",
						"x-id": "Explore_22_183",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-col justify-between gap-4 sm:flex-row",
								"x-file-name": "Explore",
								"x-line-number": "22",
								"x-column": "219",
								"x-component": "div",
								"x-id": "Explore_22_219",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Explore",
									"x-line-number": "22",
									"x-column": "284",
									"x-component": "div",
									"x-id": "Explore_22_284",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
											"x-file-name": "Explore",
											"x-line-number": "22",
											"x-column": "289",
											"x-component": "SectionEyebrow",
											"x-id": "Explore_22_289",
											"x-dynamic": "false",
											children: "Selected lens"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 54,
											columnNumber: 885
										}, this),
										/* @__PURE__ */ _jsxDEV("h2", {
											className: "font-heading text-2xl font-bold",
											"x-file-name": "Explore",
											"x-line-number": "22",
											"x-column": "335",
											"x-component": "h2",
											"x-id": "Explore_22_335",
											"x-dynamic": "true",
											"x-source-type": "unknown",
											"x-source-var": "selectedCollege",
											"x-source-path": "name",
											"x-source-editable": "false",
											children: selectedCollege.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 54,
											columnNumber: 1056
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "mt-2 text-sm text-slate-600",
											"x-file-name": "Explore",
											"x-line-number": "22",
											"x-column": "410",
											"x-component": "p",
											"x-id": "Explore_22_410",
											"x-dynamic": "true",
											"x-source-type": "unknown",
											"x-source-var": "selectedCollege",
											"x-source-path": "accreditation",
											"x-source-editable": "false",
											children: [
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Explore",
													"x-line-number": "22",
													"x-column": "410",
													"x-component": "p",
													"x-id": "Explore_22_410_expr0",
													"x-dynamic": "true",
													"x-source-type": "unknown",
													"x-source-var": "selectedCollege",
													"x-source-path": "accreditation",
													"x-source-editable": "false",
													children: selectedCollege.accreditation
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 54,
													columnNumber: 1610
												}, this),
												" · NIRF #",
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Explore",
													"x-line-number": "22",
													"x-column": "410",
													"x-component": "p",
													"x-id": "Explore_22_410_expr2",
													"x-dynamic": "true",
													"x-source-type": "unknown",
													"x-source-var": "selectedCollege",
													"x-source-path": "nirf_rank",
													"x-source-editable": "false",
													children: selectedCollege.nirf_rank
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 56,
													columnNumber: 295
												}, this),
												" · ",
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Explore",
													"x-line-number": "22",
													"x-column": "410",
													"x-component": "p",
													"x-id": "Explore_22_410_expr4",
													"x-dynamic": "true",
													"x-source-type": "unknown",
													"x-source-var": "selectedCollege",
													"x-source-path": "seats",
													"x-source-editable": "false",
													children: selectedCollege.seats
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 58,
													columnNumber: 281
												}, this),
												" CSE/ECE seats in this view"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 54,
											columnNumber: 1345
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 54,
									columnNumber: 766
								}, this), /* @__PURE__ */ _jsxDEV(ConfidenceBadge, {
									value: selectedCollege.confidence,
									"x-file-name": "Explore",
									"x-line-number": "22",
									"x-column": "583",
									"x-component": "ConfidenceBadge",
									"x-id": "Explore_22_583",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 307
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 587
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4",
								"x-file-name": "Explore",
								"x-line-number": "22",
								"x-column": "643",
								"x-component": "div",
								"x-id": "Explore_22_643",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(Stat, {
										label: "4-year tuition",
										value: money(selectedCollege.tuition_lakhs),
										"x-file-name": "Explore",
										"x-line-number": "22",
										"x-column": "703",
										"x-component": "Stat",
										"x-id": "Explore_22_703",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 666
									}, this),
									/* @__PURE__ */ _jsxDEV(Stat, {
										label: "Hostel estimate",
										value: money(selectedCollege.hostel_lakhs),
										"x-file-name": "Explore",
										"x-line-number": "22",
										"x-column": "779",
										"x-component": "Stat",
										"x-id": "Explore_22_779",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 856
									}, this),
									/* @__PURE__ */ _jsxDEV(Stat, {
										label: "Median salary",
										value: money(selectedCollege.median_placement_lpa),
										"x-file-name": "Explore",
										"x-line-number": "22",
										"x-column": "855",
										"x-component": "Stat",
										"x-id": "Explore_22_855",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 1046
									}, this),
									/* @__PURE__ */ _jsxDEV(Stat, {
										label: "Placement rate",
										value: `${selectedCollege.placement_rate}%`,
										"x-file-name": "Explore",
										"x-line-number": "22",
										"x-column": "937",
										"x-component": "Stat",
										"x-id": "Explore_22_937",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 1242
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 492
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-6 font-mono text-[10px] uppercase tracking-wider text-slate-500",
								"x-file-name": "Explore",
								"x-line-number": "22",
								"x-column": "1019",
								"x-component": "p",
								"x-id": "Explore_22_1019",
								"x-dynamic": "true",
								"x-source-type": "unknown",
								"x-source-var": "selectedCollege",
								"x-source-path": "source",
								"x-source-editable": "false",
								children: ["Source · ", /* @__PURE__ */ _jsxDEV("span", {
									"data-ve-dynamic": "true",
									"x-excluded": "true",
									style: { display: "contents" },
									"x-file-name": "Explore",
									"x-line-number": "22",
									"x-column": "1019",
									"x-component": "p",
									"x-id": "Explore_22_1019_expr1",
									"x-dynamic": "true",
									"x-source-type": "unknown",
									"x-source-var": "selectedCollege",
									"x-source-path": "source",
									"x-source-editable": "false",
									children: selectedCollege.source
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 1746
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 1438
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 412
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 194
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200 bg-white lg:col-span-4",
					"data-testid": "explore-next-step-card",
					"x-file-name": "Explore",
					"x-line-number": "22",
					"x-column": "1159",
					"x-component": "Card",
					"x-id": "Explore_22_1159",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6",
						"x-file-name": "Explore",
						"x-line-number": "22",
						"x-column": "1254",
						"x-component": "CardContent",
						"x-id": "Explore_22_1254",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
								"x-file-name": "Explore",
								"x-line-number": "22",
								"x-column": "1283",
								"x-component": "SectionEyebrow",
								"x-id": "Explore_22_1283",
								"x-dynamic": "false",
								children: "Next useful view"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 676
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "font-heading text-lg font-bold",
								"x-file-name": "Explore",
								"x-line-number": "22",
								"x-column": "1332",
								"x-component": "h3",
								"x-id": "Explore_22_1332",
								"x-dynamic": "false",
								children: "See the real cost stack"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 852
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 text-sm leading-6 text-slate-500",
								"x-file-name": "Explore",
								"x-line-number": "22",
								"x-column": "1407",
								"x-component": "p",
								"x-id": "Explore_22_1407",
								"x-dynamic": "false",
								children: "Tuition is only one line item. Model hostel, living, buffer, and your family’s actual cash flow."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 1042
							}, this),
							/* @__PURE__ */ _jsxDEV(Button, {
								className: "mt-6 w-full bg-emerald-700 text-white hover:bg-emerald-800 hover:text-white",
								onClick: () => window.location.href = `/money?college=${selectedCollege.id}`,
								"data-testid": "open-true-cost-button",
								"x-file-name": "Explore",
								"x-line-number": "22",
								"x-column": "1560",
								"x-component": "Button",
								"x-id": "Explore_22_1560",
								"x-dynamic": "false",
								children: ["Open True Cost ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 15 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 1653
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 1309
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 506
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 295
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 25
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 10
	}, this);
}
_s(Explore, "r+hL7tRD8lsqlgKDzQAhK+kuwjo=", false, function() {
	return [
		useQuery,
		useQuery,
		useQueryClient,
		useMutation
	];
});
_c = Explore;
function Stat({ label, value }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		"x-file-name": "Explore",
		"x-line-number": "25",
		"x-column": "75",
		"x-component": "div",
		"x-id": "Explore_25_75",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("p", {
			className: "font-mono text-xl font-bold text-slate-900",
			"x-file-name": "Explore",
			"x-line-number": "25",
			"x-column": "80",
			"x-component": "p",
			"x-id": "Explore_25_80",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "value",
			"x-source-editable": "false",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 72,
			columnNumber: 127
		}, this), /* @__PURE__ */ _jsxDEV("p", {
			className: "mt-1 text-xs text-slate-500",
			"x-file-name": "Explore",
			"x-line-number": "25",
			"x-column": "149",
			"x-component": "p",
			"x-id": "Explore_25_149",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "label",
			"x-source-editable": "false",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 72,
			columnNumber: 373
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 10
	}, this);
}
_c2 = Stat;
var _c, _c2;
$RefreshReg$(_c, "Explore");
$RefreshReg$(_c2, "Stat");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Explore.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Explore.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Explore.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Explore.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUFDO09BQTJCOzs7OztPQUFDLHdCQUFDLEtBQUQ7UUFBRyxXQUFVO1FBQXVDO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBQztPQUFtRzs7Ozs7T0FBQyx3QkFBQyxRQUFEO1FBQVEsV0FBVTtRQUE4RSxlQUFlQyxPQUFPQyxTQUFTQyxPQUFPLGtCQUFrQnhDLGdCQUFnQkk7UUFBTSxlQUFZO1FBQXVCO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBak4sQ0FBa04sbUJBQWUsd0JBQUMsWUFBRCxFQUFZLE1BQU0sR0FBRzs7OztnQkFBVzs7Ozs7O01BQWM7Ozs7OztJQUFPOzs7O1lBQVU7Ozs7OztFQUNqekQ7Ozs7OztBQUNQOzs7Ozs7Ozs7O0FBQ0EsU0FBU3FDLEtBQUssRUFBRUMsT0FBT0MsU0FBMkM7Q0FBRSxPQUFPLHdCQUFDLE9BQUQ7RUFBSTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7WUFBSixDQUFLLHdCQUFDLEtBQUQ7R0FBRyxXQUFVO0dBQTRDO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUFFQTtFQUFTOzs7O1lBQUMsd0JBQUMsS0FBRDtHQUFHLFdBQVU7R0FBNkI7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO2FBQUVEO0VBQVM7Ozs7VUFBTTs7Ozs7O0FBQUciLCJuYW1lcyI6WyJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VTdGF0ZSIsIkFycm93UmlnaHQiLCJDaGVjayIsIk1hcFBpbiIsIlNjYWxlIiwiU3BhcmtsZXMiLCJCYWRnZSIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsImFwaUdldCIsImFwaVBvc3QiLCJGQUxMQkFDS19PVkVSVklFVyIsIm1vbmV5IiwiQ29uZmlkZW5jZUJhZGdlIiwiU2VjdGlvbkV5ZWJyb3ciLCJFeHBsb3JlIiwiZGF0YSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInJldHJ5IiwicGxhbm5lciIsIm92ZXJ2aWV3Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInF1ZXJ5Q2xpZW50Iiwic2hvcnRsaXN0IiwibXV0YXRpb25GbiIsImNvbGxlZ2VJZCIsImNvbGxlZ2VfaWQiLCJzdGF0dXMiLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsInNlbGVjdGVkQ29sbGVnZSIsImNvbGxlZ2VzIiwiZmluZCIsIml0ZW0iLCJpZCIsImNhcmVlcnMiLCJtYXAiLCJjYXJlZXIiLCJpbmRleCIsImRpc3BsYXkiLCJkZW1hbmQiLCJ0aXRsZSIsInRhZ2xpbmUiLCJzYWxhcnlfbWluX2xwYSIsInNhbGFyeV9tYXhfbHBhIiwic2tpbGxzIiwic2tpbGwiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2VBbGwiLCJjb2xsZWdlIiwiaXNTaG9ydGxpc3RlZCIsInNvbWUiLCJzaG9ydF9uYW1lIiwiY2l0eSIsInR1aXRpb25fbGFraHMiLCJob3N0ZWxfbGFraHMiLCJtZWRpYW5fcGxhY2VtZW50X2xwYSIsInBsYWNlbWVudF9yYXRlIiwiYWRtaXNzaW9uX3JvdXRlcyIsInJvdXRlIiwiaXNQZW5kaW5nIiwibXV0YXRlIiwibmFtZSIsImFjY3JlZGl0YXRpb24iLCJuaXJmX3JhbmsiLCJzZWF0cyIsImNvbmZpZGVuY2UiLCJzb3VyY2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJTdGF0IiwibGFiZWwiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJFeHBsb3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFycm93UmlnaHQsIENoZWNrLCBNYXBQaW4sIFNjYWxlLCBTcGFya2xlcyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBhcGlHZXQsIGFwaVBvc3QgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19PVkVSVklFVywgbW9uZXksIHR5cGUgT3ZlcnZpZXcsIHR5cGUgUGxhbm5lckl0ZW0gfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZGVuY2VCYWRnZSwgU2VjdGlvbkV5ZWJyb3cgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhbXB1c1NoZWxsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4cGxvcmUoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1wib3ZlcnZpZXdcIl0sIHF1ZXJ5Rm46ICgpID0+IGFwaUdldDxPdmVydmlldz4oXCIvY2FtcHVzL292ZXJ2aWV3XCIpLCByZXRyeTogZmFsc2UgfSk7XG4gIGNvbnN0IHsgZGF0YTogcGxhbm5lciB9ID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1wicGxhbm5lclwiXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PFBsYW5uZXJJdGVtW10+KFwiL2NhbXB1cy9wbGFubmVyXCIpLCByZXRyeTogZmFsc2UgfSk7XG4gIGNvbnN0IG92ZXJ2aWV3ID0gZGF0YSA/PyBGQUxMQkFDS19PVkVSVklFVztcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShcInZpdC12ZWxsb3JlXCIpO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IHNob3J0bGlzdCA9IHVzZU11dGF0aW9uKHsgbXV0YXRpb25GbjogKGNvbGxlZ2VJZDogc3RyaW5nKSA9PiBhcGlQb3N0PFBsYW5uZXJJdGVtPihcIi9jYW1wdXMvcGxhbm5lclwiLCB7IGNvbGxlZ2VfaWQ6IGNvbGxlZ2VJZCwgc3RhdHVzOiBcIlNob3J0bGlzdGVkXCIgfSksIG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoeyBxdWVyeUtleTogW1wicGxhbm5lclwiXSB9KSB9KTtcbiAgY29uc3Qgc2VsZWN0ZWRDb2xsZWdlID0gb3ZlcnZpZXcuY29sbGVnZXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHNlbGVjdGVkKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBweS0xMCBzbTpweC02IGxnOnB4LThcIj48ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bFwiPjxTZWN0aW9uRXllYnJvdz5FeHBsb3JlICYgY29tcGFyZSDCtyBQMTwvU2VjdGlvbkV5ZWJyb3c+PGgxIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCBzbTp0ZXh0LTV4bFwiPkRvbuKAmXQgcGljayBhIGNvbGxlZ2UuPGJyIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMFwiPlBpY2sgYSBmaXQuPC9zcGFuPjwvaDE+PHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWJhc2UgbGVhZGluZy03IHRleHQtc2xhdGUtNjAwXCI+QSBjbGVhciB2aWV3IGFjcm9zcyBjb3N0LCBvdXRjb21lcywgYWNjcmVkaXRhdGlvbiwgYW5kIHRoZSByb3V0ZSB5b3XigJlsbCBhY3R1YWxseSB0YWtlIHRvIGdldCBpbi48L3A+PC9kaXY+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTJcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlblwiPjxkaXY+PFNlY3Rpb25FeWVicm93PkNhcmVlciBkaXJlY3Rpb248L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0yeGwgZm9udC1ib2xkXCI+V2hhdCBraW5kIG9mIHdvcmsgcHVsbHMgeW91IGluPzwvaDI+PC9kaXY+PHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS00MDAgc206YmxvY2tcIj5TZWVkZWQgMjAyNSBzaWduYWxzPC9zcGFuPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdhcC00IG1kOmdyaWQtY29scy0zXCI+e292ZXJ2aWV3LmNhcmVlcnMubWFwKChjYXJlZXIsIGluZGV4KSA9PiA8Q2FyZCBrZXk9e2NhcmVlci5pZH0gY2xhc3NOYW1lPXtgYm9yZGVyLXNsYXRlLTIwMC84MCB0cmFuc2l0aW9uLVt0cmFuc2Zvcm0sYm9yZGVyLWNvbG9yXSBkdXJhdGlvbi0yMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6Ym9yZGVyLWVtZXJhbGQtMzAwICR7aW5kZXggPT09IDAgPyBcImJnLWVtZXJhbGQtNTAvNjBcIiA6IFwiYmctd2hpdGVcIn1gfSBkYXRhLXRlc3RpZD17YGV4cGxvcmUtY2FyZWVyLWNhcmQtJHtjYXJlZXIuaWR9YH0+PENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtZW1lcmFsZC03MDBcIj4we2luZGV4ICsgMX08L3NwYW4+PEJhZGdlIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtc2xhdGUtNjAwIHNoYWRvdy1ub25lXCIgZGF0YS10ZXN0aWQ9e2BleHBsb3JlLWNhcmVlci1kZW1hbmQtJHtjYXJlZXIuaWR9YH0+e2NhcmVlci5kZW1hbmR9PC9CYWRnZT48L2Rpdj48aDMgY2xhc3NOYW1lPVwibXQtOCBmb250LWhlYWRpbmcgdGV4dC14bCBmb250LWJvbGRcIj57Y2FyZWVyLnRpdGxlfTwvaDM+PHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtc2xhdGUtNjAwXCI+e2NhcmVlci50YWdsaW5lfTwvcD48ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuXCI+PGRpdj48cCBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1sZyBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDBcIj57bW9uZXkoY2FyZWVyLnNhbGFyeV9taW5fbHBhKX3igJN7bW9uZXkoY2FyZWVyLnNhbGFyeV9tYXhfbHBhKX08L3A+PHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDBcIj5pbmRpY2F0aXZlIHJhbmdlPC9wPjwvZGl2PjxTcGFya2xlcyBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1hbWJlci02MDBcIiAvPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4IGZsZXgtd3JhcCBnYXAtMS41XCI+e2NhcmVlci5za2lsbHMubWFwKHNraWxsID0+IDxzcGFuIGtleT17c2tpbGx9IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgYmctd2hpdGUvNzAgcHgtMiBweS0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTYwMFwiIGRhdGEtdGVzdGlkPXtgZXhwbG9yZS1za2lsbC0ke2NhcmVlci5pZH0tJHtza2lsbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKX1gfT57c2tpbGx9PC9zcGFuPil9PC9kaXY+PC9DYXJkQ29udGVudD48L0NhcmQ+KX08L2Rpdj48L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTRcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGdhcC00IHNtOmZsZXgtcm93IHNtOml0ZW1zLWVuZFwiPjxkaXY+PFNlY3Rpb25FeWVicm93PkNvbGxlZ2UgbWF0cml4PC9TZWN0aW9uRXllYnJvdz48aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtMnhsIGZvbnQtYm9sZFwiPkNvbXBhcmUgdGhlIHRyYWRlLW9mZnM8L2gyPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPjxTY2FsZSBzaXplPXsxNX0gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMFwiIC8+IEZlZXMgYXJlIGZvdXIteWVhciB0dWl0aW9uIHVubGVzcyBtYXJrZWQgb3RoZXJ3aXNlPC9kaXY+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC02IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBiZy13aGl0ZSBzaGFkb3ctc21cIj48ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPjx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLXctWzg1MHB4XSB0ZXh0LWxlZnRcIiBkYXRhLXRlc3RpZD1cImNvbGxlZ2UtY29tcGFyaXNvbi10YWJsZVwiPjx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItc2xhdGUtMjAwIGJnLXNsYXRlLTUwLzgwXCI+PHRyPjx0aCBjbGFzc05hbWU9XCJweC01IHB5LTQgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMFwiPkNvbGxlZ2U8L3RoPjx0aCBjbGFzc05hbWU9XCJweC01IHB5LTQgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMFwiPlRvdGFsIHR1aXRpb248L3RoPjx0aCBjbGFzc05hbWU9XCJweC01IHB5LTQgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMFwiPk1lZGlhbiBwbGFjZW1lbnQ8L3RoPjx0aCBjbGFzc05hbWU9XCJweC01IHB5LTQgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMFwiPlBsYWNlZDwvdGg+PHRoIGNsYXNzTmFtZT1cInB4LTUgcHktNCBmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNTAwXCI+Um91dGU8L3RoPjx0aCBjbGFzc05hbWU9XCJweC01IHB5LTRcIiAvPjwvdHI+PC90aGVhZD48dGJvZHk+e292ZXJ2aWV3LmNvbGxlZ2VzLm1hcChjb2xsZWdlID0+IHsgY29uc3QgaXNTaG9ydGxpc3RlZCA9IHBsYW5uZXI/LnNvbWUoaXRlbSA9PiBpdGVtLmNvbGxlZ2VfaWQgPT09IGNvbGxlZ2UuaWQgJiYgaXRlbS5zdGF0dXMgPT09IFwiU2hvcnRsaXN0ZWRcIik7IHJldHVybiA8dHIga2V5PXtjb2xsZWdlLmlkfSBjbGFzc05hbWU9e2Bib3JkZXItYiBib3JkZXItc2xhdGUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLWVtZXJhbGQtNTAvNDAgJHtzZWxlY3RlZCA9PT0gY29sbGVnZS5pZCA/IFwiYmctZW1lcmFsZC01MC81MFwiIDogXCJcIn1gfSBkYXRhLXRlc3RpZD17YGNvbGxlZ2Utcm93LSR7Y29sbGVnZS5pZH1gfT48dGQgY2xhc3NOYW1lPVwicHgtNSBweS01XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChjb2xsZWdlLmlkKX0gZGF0YS10ZXN0aWQ9e2Bjb2xsZWdlLXNlbGVjdC0ke2NvbGxlZ2UuaWR9YH0+PHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPntjb2xsZWdlLnNob3J0X25hbWV9PC9wPjxwIGNsYXNzTmFtZT1cIm10LTEgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPjxNYXBQaW4gc2l6ZT17MTF9IC8+IHtjb2xsZWdlLmNpdHl9PC9wPjwvYnV0dG9uPjwvdGQ+PHRkIGNsYXNzTmFtZT1cInB4LTUgcHktNSBmb250LW1vbm8gdGV4dC1zbSBmb250LWJvbGQgdGV4dC1zbGF0ZS04MDBcIj57bW9uZXkoY29sbGVnZS50dWl0aW9uX2xha2hzKX08c3BhbiBjbGFzc05hbWU9XCJibG9jayBmb250LXNhbnMgdGV4dC1bMTFweF0gZm9udC1ub3JtYWwgdGV4dC1zbGF0ZS00MDBcIj5ob3N0ZWwge21vbmV5KGNvbGxlZ2UuaG9zdGVsX2xha2hzKX08L3NwYW4+PC90ZD48dGQgY2xhc3NOYW1lPVwicHgtNSBweS01IGZvbnQtbW9ubyB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtNzAwXCI+e21vbmV5KGNvbGxlZ2UubWVkaWFuX3BsYWNlbWVudF9scGEpfTxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtc2FucyB0ZXh0LVsxMXB4XSBmb250LW5vcm1hbCB0ZXh0LXNsYXRlLTQwMFwiPmF2ZyAvIHllYXI8L3NwYW4+PC90ZD48dGQgY2xhc3NOYW1lPVwicHgtNSBweS01IHRleHQtc20gdGV4dC1zbGF0ZS03MDBcIj57Y29sbGVnZS5wbGFjZW1lbnRfcmF0ZX0lPC90ZD48dGQgY2xhc3NOYW1lPVwicHgtNSBweS01XCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMVwiPntjb2xsZWdlLmFkbWlzc2lvbl9yb3V0ZXMubWFwKHJvdXRlID0+IDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctc2xhdGUtMTAwIHB4LTIgcHktMSBmb250LW1vbm8gdGV4dC1bMTBweF0gdGV4dC1zbGF0ZS02MDBcIiBrZXk9e3JvdXRlfT57cm91dGV9PC9zcGFuPil9PC9kaXY+PC90ZD48dGQgY2xhc3NOYW1lPVwicHgtNSBweS01XCI+PEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50PXtpc1Nob3J0bGlzdGVkID8gXCJzZWNvbmRhcnlcIiA6IFwib3V0bGluZVwifSBkaXNhYmxlZD17c2hvcnRsaXN0LmlzUGVuZGluZ30gb25DbGljaz17KCkgPT4gc2hvcnRsaXN0Lm11dGF0ZShjb2xsZWdlLmlkKX0gZGF0YS10ZXN0aWQ9e2Bjb2xsZWdlLXNob3J0bGlzdC0ke2NvbGxlZ2UuaWR9YH0+e2lzU2hvcnRsaXN0ZWQgPyA8PjxDaGVjayBzaXplPXsxNH0gLz4gU2F2ZWQ8Lz4gOiBcIlNob3J0bGlzdFwifTwvQnV0dG9uPjwvdGQ+PC90cj4gfSl9PC90Ym9keT48L3RhYmxlPjwvZGl2PjwvZGl2Pjwvc2VjdGlvbj5cbiAgICB7c2VsZWN0ZWRDb2xsZWdlICYmIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTggZ3JpZCBnYXAtNiBsZzpncmlkLWNvbHMtMTJcIj48Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItZW1lcmFsZC0yMDAgYmctZW1lcmFsZC01MC82MCBsZzpjb2wtc3Bhbi04XCIgZGF0YS10ZXN0aWQ9XCJzZWxlY3RlZC1jb2xsZWdlLWRldGFpbFwiPjxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgc206cC04XCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBzbTpmbGV4LXJvd1wiPjxkaXY+PFNlY3Rpb25FeWVicm93PlNlbGVjdGVkIGxlbnM8L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0yeGwgZm9udC1ib2xkXCI+e3NlbGVjdGVkQ29sbGVnZS5uYW1lfTwvaDI+PHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtc2xhdGUtNjAwXCI+e3NlbGVjdGVkQ29sbGVnZS5hY2NyZWRpdGF0aW9ufSDCtyBOSVJGICN7c2VsZWN0ZWRDb2xsZWdlLm5pcmZfcmFua30gwrcge3NlbGVjdGVkQ29sbGVnZS5zZWF0c30gQ1NFL0VDRSBzZWF0cyBpbiB0aGlzIHZpZXc8L3A+PC9kaXY+PENvbmZpZGVuY2VCYWRnZSB2YWx1ZT17c2VsZWN0ZWRDb2xsZWdlLmNvbmZpZGVuY2V9IC8+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC04IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgc206Z3JpZC1jb2xzLTRcIj48U3RhdCBsYWJlbD1cIjQteWVhciB0dWl0aW9uXCIgdmFsdWU9e21vbmV5KHNlbGVjdGVkQ29sbGVnZS50dWl0aW9uX2xha2hzKX0gLz48U3RhdCBsYWJlbD1cIkhvc3RlbCBlc3RpbWF0ZVwiIHZhbHVlPXttb25leShzZWxlY3RlZENvbGxlZ2UuaG9zdGVsX2xha2hzKX0gLz48U3RhdCBsYWJlbD1cIk1lZGlhbiBzYWxhcnlcIiB2YWx1ZT17bW9uZXkoc2VsZWN0ZWRDb2xsZWdlLm1lZGlhbl9wbGFjZW1lbnRfbHBhKX0gLz48U3RhdCBsYWJlbD1cIlBsYWNlbWVudCByYXRlXCIgdmFsdWU9e2Ake3NlbGVjdGVkQ29sbGVnZS5wbGFjZW1lbnRfcmF0ZX0lYH0gLz48L2Rpdj48cCBjbGFzc05hbWU9XCJtdC02IGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS01MDBcIj5Tb3VyY2Ugwrcge3NlbGVjdGVkQ29sbGVnZS5zb3VyY2V9PC9wPjwvQ2FyZENvbnRlbnQ+PC9DYXJkPjxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1zbGF0ZS0yMDAgYmctd2hpdGUgbGc6Y29sLXNwYW4tNFwiIGRhdGEtdGVzdGlkPVwiZXhwbG9yZS1uZXh0LXN0ZXAtY2FyZFwiPjxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj48U2VjdGlvbkV5ZWJyb3c+TmV4dCB1c2VmdWwgdmlldzwvU2VjdGlvbkV5ZWJyb3c+PGgzIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LWxnIGZvbnQtYm9sZFwiPlNlZSB0aGUgcmVhbCBjb3N0IHN0YWNrPC9oMz48cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gbGVhZGluZy02IHRleHQtc2xhdGUtNTAwXCI+VHVpdGlvbiBpcyBvbmx5IG9uZSBsaW5lIGl0ZW0uIE1vZGVsIGhvc3RlbCwgbGl2aW5nLCBidWZmZXIsIGFuZCB5b3VyIGZhbWlseeKAmXMgYWN0dWFsIGNhc2ggZmxvdy48L3A+PEJ1dHRvbiBjbGFzc05hbWU9XCJtdC02IHctZnVsbCBiZy1lbWVyYWxkLTcwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWVtZXJhbGQtODAwIGhvdmVyOnRleHQtd2hpdGVcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbW9uZXk/Y29sbGVnZT0ke3NlbGVjdGVkQ29sbGVnZS5pZH1gfSBkYXRhLXRlc3RpZD1cIm9wZW4tdHJ1ZS1jb3N0LWJ1dHRvblwiPk9wZW4gVHJ1ZSBDb3N0IDxBcnJvd1JpZ2h0IHNpemU9ezE1fSAvPjwvQnV0dG9uPjwvQ2FyZENvbnRlbnQ+PC9DYXJkPjwvc2VjdGlvbj59XG4gIDwvZGl2Pjtcbn1cbmZ1bmN0aW9uIFN0YXQoeyBsYWJlbCwgdmFsdWUgfTogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0pIHsgcmV0dXJuIDxkaXY+PHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+e3ZhbHVlfTwvcD48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj57bGFiZWx9PC9wPjwvZGl2PjsgfSJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvcGFnZXMvRXhwbG9yZS50c3gifQ==