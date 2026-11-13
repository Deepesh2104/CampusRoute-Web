import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Planner.tsx");const useState = __vite__cjsImport1_react["useState"];const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"];import { useMutation, useQuery, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=0cd69c2d";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=0cd69c2d";
import { BriefcaseBusiness, Check, ChevronRight, Circle, Clock3, FileText, GraduationCap, HandCoins, MapPin, UserRound } from "/src/lib/lucide-react.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { FALLBACK_OVERVIEW, money } from "/src/lib/types.ts";
import { SectionEyebrow } from "/src/components/CampusShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Planner.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0cd69c2d";
var _s = $RefreshSig$();
const stages = [
	"Researching",
	"Shortlisted",
	"Applied",
	"Decision"
];
export default function Planner() {
	_s();
	const { data: overviewData } = useQuery({
		queryKey: ["overview"],
		queryFn: () => apiGet("/campus/overview"),
		retry: false
	});
	const { data: plannerData } = useQuery({
		queryKey: ["planner"],
		queryFn: () => apiGet("/campus/planner"),
		retry: false
	});
	const overview = overviewData ?? FALLBACK_OVERVIEW;
	const planner = plannerData ?? [{
		college_id: "vit-vellore",
		status: "Shortlisted",
		next_action: "Check VITEEE dates"
	}, {
		college_id: "rvce",
		status: "Researching",
		next_action: "Review COMEDK cut-offs"
	}];
	const queryClient = useQueryClient();
	const [selectedStage, setSelectedStage] = useState("Shortlisted");
	const update = useMutation({
		mutationFn: (payload) => apiPost("/campus/planner", payload),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["planner"] })
	});
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		"x-file-name": "Planner",
		"x-line-number": "19",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Planner_19_9",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "max-w-3xl",
				"x-file-name": "Planner",
				"x-line-number": "19",
				"x-column": "71",
				"x-component": "div",
				"x-id": "Planner_19_71",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
						"x-file-name": "Planner",
						"x-line-number": "19",
						"x-column": "98",
						"x-component": "SectionEyebrow",
						"x-id": "Planner_19_98",
						"x-dynamic": "false",
						children: "Planner & career execution · P2 / P3"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 321
					}, this),
					/* @__PURE__ */ _jsxDEV("h1", {
						className: "font-heading text-4xl font-extrabold tracking-tight sm:text-5xl",
						"x-file-name": "Planner",
						"x-line-number": "19",
						"x-column": "167",
						"x-component": "h1",
						"x-id": "Planner_19_167",
						"x-dynamic": "false",
						children: [
							"Turn a shortlist",
							/* @__PURE__ */ _jsxDEV("br", {
								"x-file-name": "Planner",
								"x-line-number": "19",
								"x-column": "263",
								"x-component": "br",
								"x-id": "Planner_19_263",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 722
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-emerald-700",
								"x-file-name": "Planner",
								"x-line-number": "19",
								"x-column": "269",
								"x-component": "span",
								"x-id": "Planner_19_269",
								"x-dynamic": "false",
								children: "into a route."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 841
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 513
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "mt-5 text-base leading-7 text-slate-600",
						"x-file-name": "Planner",
						"x-line-number": "19",
						"x-column": "329",
						"x-component": "p",
						"x-id": "Planner_19_329",
						"x-dynamic": "false",
						children: "Keep the admission work, money questions, and career proof in one visible place. No spreadsheet archaeology."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 1016
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 182
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-12 grid gap-6 lg:grid-cols-12",
				"x-file-name": "Planner",
				"x-line-number": "20",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Planner_20_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white lg:col-span-8",
					"data-testid": "application-pipeline-card",
					"x-file-name": "Planner",
					"x-line-number": "20",
					"x-column": "58",
					"x-component": "Card",
					"x-id": "Planner_20_58",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Planner",
						"x-line-number": "20",
						"x-column": "159",
						"x-component": "CardContent",
						"x-id": "Planner_20_159",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
								"x-file-name": "Planner",
								"x-line-number": "20",
								"x-column": "195",
								"x-component": "div",
								"x-id": "Planner_20_195",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Planner",
									"x-line-number": "20",
									"x-column": "273",
									"x-component": "div",
									"x-id": "Planner_20_273",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
										"x-file-name": "Planner",
										"x-line-number": "20",
										"x-column": "278",
										"x-component": "SectionEyebrow",
										"x-id": "Planner_20_278",
										"x-dynamic": "false",
										children: "Application pipeline"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 872
									}, this), /* @__PURE__ */ _jsxDEV("h2", {
										className: "font-heading text-2xl font-bold",
										"x-file-name": "Planner",
										"x-line-number": "20",
										"x-column": "331",
										"x-component": "h2",
										"x-id": "Planner_20_331",
										"x-dynamic": "false",
										children: "Aarav’s active options"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 1050
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 753
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex gap-1 rounded-lg bg-slate-100 p-1",
									"x-file-name": "Planner",
									"x-line-number": "20",
									"x-column": "412",
									"x-component": "div",
									"x-id": "Planner_20_412",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: stages.map((stage) => /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => setSelectedStage(stage),
										className: `rounded-md px-2.5 py-1.5 text-[10px] font-semibold transition-[color,background-color] duration-200 ${selectedStage === stage ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500 hover:text-slate-900"}`,
										"data-testid": `planner-stage-${stage.toLowerCase()}-filter`,
										"x-file-name": "Planner",
										"x-line-number": "20",
										"x-column": "489",
										"x-component": "button",
										"x-id": "Planner_20_489",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "stages",
										"x-source-file-abs": "/app/frontend/src/pages/Planner.tsx",
										"x-source-line": "11",
										"x-source-editable": "true",
										"x-array-var": "stages",
										"x-array-line": "11",
										"x-array-item-param": "stage",
										children: stage
									}, stage, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 1485
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 1244
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 561
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-7 space-y-3",
								"x-file-name": "Planner",
								"x-line-number": "20",
								"x-column": "860",
								"x-component": "div",
								"x-id": "Planner_20_860",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: planner.map((item) => {
									const college = overview.colleges.find((row) => row.id === item.college_id);
									if (!college) return null;
									return /* @__PURE__ */ _jsxDEV("div", {
										className: "rounded-xl border border-slate-200 p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-emerald-300",
										"data-testid": `planner-item-${item.college_id}`,
										"x-file-name": "Planner",
										"x-line-number": "20",
										"x-column": "1024",
										"x-component": "div",
										"x-id": "Planner_20_1024",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
											"x-file-name": "Planner",
											"x-line-number": "20",
											"x-column": "1247",
											"x-component": "div",
											"x-id": "Planner_20_1247",
											"x-dynamic": "false",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center gap-3",
												"x-file-name": "Planner",
												"x-line-number": "20",
												"x-column": "1331",
												"x-component": "div",
												"x-id": "Planner_20_1331",
												"x-dynamic": "false",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: "grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700",
													"x-file-name": "Planner",
													"x-line-number": "20",
													"x-column": "1372",
													"x-component": "span",
													"x-id": "Planner_20_1372",
													"x-dynamic": "false",
													children: /* @__PURE__ */ _jsxDEV(GraduationCap, {
														size: 19,
														"x-file-name": "Planner",
														"x-line-number": "20",
														"x-column": "1466",
														"x-component": "GraduationCap",
														"x-id": "Planner_20_1466",
														"x-dynamic": "true",
														"x-source-type": "external",
														"x-source-var": "planner",
														"x-source-editable": "false",
														"x-array-var": "planner",
														"x-array-item-param": "item"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 51,
														columnNumber: 929
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 51,
													columnNumber: 718
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													"x-file-name": "Planner",
													"x-line-number": "20",
													"x-column": "1500",
													"x-component": "div",
													"x-id": "Planner_20_1500",
													"x-dynamic": "false",
													children: [/* @__PURE__ */ _jsxDEV("p", {
														className: "font-semibold text-slate-900",
														"x-file-name": "Planner",
														"x-line-number": "20",
														"x-column": "1505",
														"x-component": "p",
														"x-id": "Planner_20_1505",
														"x-dynamic": "true",
														"x-source-type": "unknown",
														"x-source-var": "college",
														"x-source-path": "short_name",
														"x-source-editable": "false",
														children: college.short_name
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 51,
														columnNumber: 1331
													}, this), /* @__PURE__ */ _jsxDEV("p", {
														className: "mt-1 flex items-center gap-1 text-xs text-slate-500",
														"x-file-name": "Planner",
														"x-line-number": "20",
														"x-column": "1573",
														"x-component": "p",
														"x-id": "Planner_20_1573",
														"x-dynamic": "true",
														"x-source-type": "unknown",
														"x-source-var": "college",
														"x-source-path": "city",
														"x-source-editable": "false",
														children: [
															/* @__PURE__ */ _jsxDEV(MapPin, {
																size: 11,
																"x-file-name": "Planner",
																"x-line-number": "20",
																"x-column": "1640",
																"x-component": "MapPin",
																"x-id": "Planner_20_1640",
																"x-dynamic": "true",
																"x-source-type": "external",
																"x-source-var": "planner",
																"x-source-editable": "false",
																"x-array-var": "planner",
																"x-array-item-param": "item"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 51,
																columnNumber: 1886
															}, this),
															" ",
															college.city
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 51,
														columnNumber: 1612
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 51,
													columnNumber: 1210
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 51,
												columnNumber: 561
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center gap-3",
												"x-file-name": "Planner",
												"x-line-number": "20",
												"x-column": "1691",
												"x-component": "div",
												"x-id": "Planner_20_1691",
												"x-dynamic": "false",
												children: [/* @__PURE__ */ _jsxDEV(Badge, {
													variant: "outline",
													className: "border-amber-200 bg-amber-50 text-amber-800",
													"data-testid": `planner-status-${college.id}`,
													"x-file-name": "Planner",
													"x-line-number": "20",
													"x-column": "1732",
													"x-component": "Badge",
													"x-id": "Planner_20_1732",
													"x-dynamic": "true",
													"x-source-type": "static-imported",
													"x-source-var": "planner",
													"x-source-path": "status",
													"x-source-editable": "false",
													"x-array-var": "planner",
													"x-array-item-param": "item",
													children: item.status
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 51,
													columnNumber: 2334
												}, this), /* @__PURE__ */ _jsxDEV("select", {
													value: item.status,
													onChange: (event) => update.mutate({
														college_id: item.college_id,
														status: event.target.value
													}),
													className: "rounded-md border border-slate-200 bg-white px-2 py-1.5 text-[11px] font-semibold text-slate-600",
													"data-testid": `planner-status-select-${college.id}`,
													"x-file-name": "Planner",
													"x-line-number": "20",
													"x-column": "1879",
													"x-component": "select",
													"x-id": "Planner_20_1879",
													"x-dynamic": "true",
													"x-source-type": "computed",
													"x-source-editable": "false",
													children: stages.map((stage) => /* @__PURE__ */ _jsxDEV("option", {
														"x-file-name": "Planner",
														"x-line-number": "20",
														"x-column": "2184",
														"x-component": "option",
														"x-id": "Planner_20_2184",
														"x-dynamic": "true",
														"x-source-type": "static-imported",
														"x-source-var": "stages",
														"x-source-file-abs": "/app/frontend/src/pages/Planner.tsx",
														"x-source-line": "11",
														"x-source-editable": "true",
														"x-array-var": "stages",
														"x-array-line": "11",
														"x-array-item-param": "stage",
														children: stage
													}, stage, false, {
														fileName: _jsxFileName,
														lineNumber: 54,
														columnNumber: 376
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 51,
													columnNumber: 2750
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 51,
												columnNumber: 2177
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 361
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3",
											"x-file-name": "Planner",
											"x-line-number": "20",
											"x-column": "2243",
											"x-component": "div",
											"x-id": "Planner_20_2243",
											"x-dynamic": "false",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "flex items-center gap-2 text-xs text-slate-500",
												"x-file-name": "Planner",
												"x-line-number": "20",
												"x-column": "2346",
												"x-component": "span",
												"x-id": "Planner_20_2346",
												"x-dynamic": "false",
												children: [
													/* @__PURE__ */ _jsxDEV(Clock3, {
														size: 14,
														className: "text-amber-600",
														"x-file-name": "Planner",
														"x-line-number": "20",
														"x-column": "2411",
														"x-component": "Clock3",
														"x-id": "Planner_20_2411",
														"x-dynamic": "true",
														"x-source-type": "external",
														"x-source-var": "planner",
														"x-source-editable": "false",
														"x-array-var": "planner",
														"x-array-item-param": "item"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 54,
														columnNumber: 1174
													}, this),
													" Next: ",
													/* @__PURE__ */ _jsxDEV("strong", {
														className: "text-slate-700",
														"x-file-name": "Planner",
														"x-line-number": "20",
														"x-column": "2465",
														"x-component": "strong",
														"x-id": "Planner_20_2465",
														"x-dynamic": "true",
														"x-source-type": "static-imported",
														"x-source-var": "planner",
														"x-source-path": "next_action",
														"x-source-editable": "false",
														"x-array-var": "planner",
														"x-array-item-param": "item",
														children: item.next_action
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 54,
														columnNumber: 1468
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 54,
												columnNumber: 992
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-mono text-[10px] uppercase tracking-wider text-slate-400",
												"x-file-name": "Planner",
												"x-line-number": "20",
												"x-column": "2534",
												"x-component": "span",
												"x-id": "Planner_20_2534",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: [
													/* @__PURE__ */ _jsxDEV("span", {
														"data-ve-dynamic": "true",
														"x-excluded": "true",
														style: { display: "contents" },
														"x-file-name": "Planner",
														"x-line-number": "20",
														"x-column": "2534",
														"x-component": "span",
														"x-id": "Planner_20_2534_expr0",
														"x-dynamic": "true",
														"x-source-type": "computed",
														"x-source-editable": "false",
														children: money(college.tuition_lakhs)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 54,
														columnNumber: 2059
													}, this),
													" tuition · ",
													/* @__PURE__ */ _jsxDEV("span", {
														"data-ve-dynamic": "true",
														"x-excluded": "true",
														style: { display: "contents" },
														"x-file-name": "Planner",
														"x-line-number": "20",
														"x-column": "2534",
														"x-component": "span",
														"x-id": "Planner_20_2534_expr2",
														"x-dynamic": "true",
														"x-source-type": "unknown",
														"x-source-var": "college",
														"x-source-path": "median_placement_lpa",
														"x-source-editable": "false",
														children: college.median_placement_lpa
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 56,
														columnNumber: 245
													}, this),
													"L median"
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 54,
												columnNumber: 1812
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 54,
											columnNumber: 773
										}, this)]
									}, item.college_id, true, {
										fileName: _jsxFileName,
										lineNumber: 51,
										columnNumber: 22
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 2192
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-5 flex items-center gap-2 text-xs text-slate-500",
								"x-file-name": "Planner",
								"x-line-number": "20",
								"x-column": "2722",
								"x-component": "div",
								"x-id": "Planner_20_2722",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(Circle, {
									size: 13,
									className: "text-slate-300",
									"x-file-name": "Planner",
									"x-line-number": "20",
									"x-column": "2791",
									"x-component": "Circle",
									"x-id": "Planner_20_2791",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 207
								}, this), " Choose a stage to make the next action concrete"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 22
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 386
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 173
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-amber-200 bg-amber-50/70 lg:col-span-4",
					"data-testid": "scholarship-match-card",
					"x-file-name": "Planner",
					"x-line-number": "20",
					"x-column": "2913",
					"x-component": "Card",
					"x-id": "Planner_20_2913",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Planner",
						"x-line-number": "20",
						"x-column": "3014",
						"x-component": "CardContent",
						"x-id": "Planner_20_3014",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between",
							"x-file-name": "Planner",
							"x-line-number": "20",
							"x-column": "3050",
							"x-component": "div",
							"x-id": "Planner_20_3050",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Planner",
								"x-line-number": "20",
								"x-column": "3101",
								"x-component": "div",
								"x-id": "Planner_20_3101",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
									"x-file-name": "Planner",
									"x-line-number": "20",
									"x-column": "3106",
									"x-component": "SectionEyebrow",
									"x-id": "Planner_20_3106",
									"x-dynamic": "false",
									children: "Matched for Aarav"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 1130
								}, this), /* @__PURE__ */ _jsxDEV("h2", {
									className: "font-heading text-xl font-bold",
									"x-file-name": "Planner",
									"x-line-number": "20",
									"x-column": "3156",
									"x-component": "h2",
									"x-id": "Planner_20_3156",
									"x-dynamic": "false",
									children: "Scholarship signals"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 1307
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 1009
							}, this), /* @__PURE__ */ _jsxDEV(HandCoins, {
								className: "text-amber-700",
								size: 22,
								"x-file-name": "Planner",
								"x-line-number": "20",
								"x-column": "3233",
								"x-component": "HandCoins",
								"x-id": "Planner_20_3233",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 1499
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 842
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "mt-6 space-y-4",
							"x-file-name": "Planner",
							"x-line-number": "20",
							"x-column": "3289",
							"x-component": "div",
							"x-id": "Planner_20_3289",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: overview.scholarships.map((scholarship) => /* @__PURE__ */ _jsxDEV("div", {
								className: "border-b border-amber-200/70 pb-4 last:border-0 last:pb-0",
								"data-testid": `scholarship-card-${scholarship.id}`,
								"x-file-name": "Planner",
								"x-line-number": "20",
								"x-column": "3363",
								"x-component": "div",
								"x-id": "Planner_20_3363",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-start justify-between gap-3",
										"x-file-name": "Planner",
										"x-line-number": "20",
										"x-column": "3510",
										"x-component": "div",
										"x-id": "Planner_20_3510",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("p", {
											className: "text-sm font-semibold text-amber-950",
											"x-file-name": "Planner",
											"x-line-number": "20",
											"x-column": "3566",
											"x-component": "p",
											"x-id": "Planner_20_3566",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "scholarships.name",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "scholarship",
											children: scholarship.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 59,
											columnNumber: 2352
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-xs font-bold text-amber-800",
											"x-file-name": "Planner",
											"x-line-number": "20",
											"x-column": "3640",
											"x-component": "span",
											"x-id": "Planner_20_3640",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: money(scholarship.amount_lakhs)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 59,
											columnNumber: 2711
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 2180
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-1 text-xs leading-5 text-amber-950/65",
										"x-file-name": "Planner",
										"x-line-number": "20",
										"x-column": "3747",
										"x-component": "p",
										"x-id": "Planner_20_3747",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "overview",
										"x-source-path": "scholarships.match_reason",
										"x-source-editable": "false",
										"x-array-var": "overview",
										"x-array-item-param": "scholarship",
										children: scholarship.match_reason
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 2985
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-2 font-mono text-[10px] uppercase tracking-wider text-amber-800/70",
										"x-file-name": "Planner",
										"x-line-number": "20",
										"x-column": "3833",
										"x-component": "p",
										"x-id": "Planner_20_3833",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "overview",
										"x-source-path": "scholarships.deadline",
										"x-source-editable": "false",
										"x-array-var": "overview",
										"x-array-item-param": "scholarship",
										children: ["Deadline · ", /* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Planner",
											"x-line-number": "20",
											"x-column": "3833",
											"x-component": "p",
											"x-id": "Planner_20_3833_expr1",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "scholarships.deadline",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "scholarship",
											children: scholarship.deadline
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 59,
											columnNumber: 3749
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 3364
									}, this)
								]
							}, scholarship.id, true, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 1917
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 1677
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 665
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 448
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-8 grid gap-6 lg:grid-cols-12",
				"x-file-name": "Planner",
				"x-line-number": "21",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Planner_21_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white lg:col-span-5",
					"data-testid": "career-execution-card",
					"x-file-name": "Planner",
					"x-line-number": "21",
					"x-column": "57",
					"x-component": "Card",
					"x-id": "Planner_21_57",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Planner",
						"x-line-number": "21",
						"x-column": "154",
						"x-component": "CardContent",
						"x-id": "Planner_21_154",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between",
								"x-file-name": "Planner",
								"x-line-number": "21",
								"x-column": "190",
								"x-component": "div",
								"x-id": "Planner_21_190",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Planner",
									"x-line-number": "21",
									"x-column": "241",
									"x-component": "div",
									"x-id": "Planner_21_241",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "246",
										"x-component": "SectionEyebrow",
										"x-id": "Planner_21_246",
										"x-dynamic": "false",
										children: "Career execution · P3"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 840
									}, this), /* @__PURE__ */ _jsxDEV("h2", {
										className: "font-heading text-xl font-bold",
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "300",
										"x-component": "h2",
										"x-id": "Planner_21_300",
										"x-dynamic": "false",
										children: "Skill gap, honestly"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 1019
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 721
								}, this), /* @__PURE__ */ _jsxDEV(BriefcaseBusiness, {
									className: "text-emerald-700",
									size: 21,
									"x-file-name": "Planner",
									"x-line-number": "21",
									"x-column": "377",
									"x-component": "BriefcaseBusiness",
									"x-id": "Planner_21_377",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 1209
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 556
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-7 space-y-5",
								"x-file-name": "Planner",
								"x-line-number": "21",
								"x-column": "443",
								"x-component": "div",
								"x-id": "Planner_21_443",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: overview.skill_gaps.map((gap) => /* @__PURE__ */ _jsxDEV("div", {
									"data-testid": `skill-gap-${gap.skill.toLowerCase().replaceAll(" ", "-")}`,
									"x-file-name": "Planner",
									"x-line-number": "21",
									"x-column": "507",
									"x-component": "div",
									"x-id": "Planner_21_507",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex justify-between text-xs",
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "602",
										"x-component": "div",
										"x-id": "Planner_21_602",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "font-semibold text-slate-700",
											"x-file-name": "Planner",
											"x-line-number": "21",
											"x-column": "648",
											"x-component": "span",
											"x-id": "Planner_21_648",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "skill_gaps.skill",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "gap",
											children: gap.skill
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 62,
											columnNumber: 2e3
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-slate-500",
											"x-file-name": "Planner",
											"x-line-number": "21",
											"x-column": "713",
											"x-component": "span",
											"x-id": "Planner_21_713",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "skill_gaps.current",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "gap",
											children: [
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Planner",
													"x-line-number": "21",
													"x-column": "713",
													"x-component": "span",
													"x-id": "Planner_21_713_expr0",
													"x-dynamic": "true",
													"x-source-type": "static-imported",
													"x-source-var": "overview",
													"x-source-path": "skill_gaps.current",
													"x-source-editable": "false",
													"x-array-var": "overview",
													"x-array-item-param": "gap",
													children: gap.current
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 62,
													columnNumber: 2664
												}, this),
												"% ",
												/* @__PURE__ */ _jsxDEV("span", {
													className: "text-slate-300",
													"x-file-name": "Planner",
													"x-line-number": "21",
													"x-column": "771",
													"x-component": "span",
													"x-id": "Planner_21_771",
													"x-dynamic": "false",
													children: "→"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 64,
													columnNumber: 329
												}, this),
												" ",
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Planner",
													"x-line-number": "21",
													"x-column": "713",
													"x-component": "span",
													"x-id": "Planner_21_713_expr4",
													"x-dynamic": "true",
													"x-source-type": "static-imported",
													"x-source-var": "overview",
													"x-source-path": "skill_gaps.target",
													"x-source-editable": "false",
													"x-array-var": "overview",
													"x-array-item-param": "gap",
													children: gap.target
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 64,
													columnNumber: 486
												}, this),
												"%"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 62,
											columnNumber: 2342
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 1840
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "mt-2 h-2 rounded-full bg-slate-100",
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "839",
										"x-component": "div",
										"x-id": "Planner_21_839",
										"x-dynamic": "false",
										children: /* @__PURE__ */ _jsxDEV("div", {
											className: "h-full rounded-full bg-emerald-600",
											style: { width: `${gap.current}%` },
											"x-file-name": "Planner",
											"x-line-number": "21",
											"x-column": "891",
											"x-component": "div",
											"x-id": "Planner_21_891",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 66,
											columnNumber: 505
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 339
									}, this)]
								}, gap.skill, true, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 1631
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 1403
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-7 rounded-xl bg-slate-50 p-4",
								"x-file-name": "Planner",
								"x-line-number": "21",
								"x-column": "1002",
								"x-component": "div",
								"x-id": "Planner_21_1002",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs font-semibold text-slate-800",
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "1051",
										"x-component": "p",
										"x-id": "Planner_21_1051",
										"x-dynamic": "false",
										children: "Resume snapshot"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 68,
										columnNumber: 321
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-1 text-xs leading-5 text-slate-500",
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "1122",
										"x-component": "p",
										"x-id": "Planner_21_1122",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "overview",
										"x-source-path": "resume.headline",
										"x-source-editable": "false",
										children: overview.resume.headline
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 68,
										columnNumber: 506
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "mt-3 flex items-center gap-3",
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "1205",
										"x-component": "div",
										"x-id": "Planner_21_1205",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-lg font-bold text-emerald-700",
											"x-file-name": "Planner",
											"x-line-number": "21",
											"x-column": "1251",
											"x-component": "span",
											"x-id": "Planner_21_1251",
											"x-dynamic": "true",
											"x-source-type": "unknown",
											"x-source-var": "overview",
											"x-source-path": "resume.readiness",
											"x-source-editable": "false",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Planner",
												"x-line-number": "21",
												"x-column": "1251",
												"x-component": "span",
												"x-id": "Planner_21_1251_expr0",
												"x-dynamic": "true",
												"x-source-type": "unknown",
												"x-source-var": "overview",
												"x-source-path": "resume.readiness",
												"x-source-editable": "false",
												children: overview.resume.readiness
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 68,
												columnNumber: 1256
											}, this), "%"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 68,
											columnNumber: 970
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-xs text-slate-500",
											"x-file-name": "Planner",
											"x-line-number": "21",
											"x-column": "1349",
											"x-component": "span",
											"x-id": "Planner_21_1349",
											"x-dynamic": "false",
											children: "ready for a first review"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 70,
											columnNumber: 291
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 68,
										columnNumber: 808
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 156
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 381
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 172
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white lg:col-span-7",
					"data-testid": "interview-prep-card",
					"x-file-name": "Planner",
					"x-line-number": "21",
					"x-column": "1454",
					"x-component": "Card",
					"x-id": "Planner_21_1454",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Planner",
						"x-line-number": "21",
						"x-column": "1549",
						"x-component": "CardContent",
						"x-id": "Planner_21_1549",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between",
								"x-file-name": "Planner",
								"x-line-number": "21",
								"x-column": "1585",
								"x-component": "div",
								"x-id": "Planner_21_1585",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Planner",
									"x-line-number": "21",
									"x-column": "1636",
									"x-component": "div",
									"x-id": "Planner_21_1636",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "1641",
										"x-component": "SectionEyebrow",
										"x-id": "Planner_21_1641",
										"x-dynamic": "false",
										children: "Practice loop"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 1189
									}, this), /* @__PURE__ */ _jsxDEV("h2", {
										className: "font-heading text-xl font-bold",
										"x-file-name": "Planner",
										"x-line-number": "21",
										"x-column": "1687",
										"x-component": "h2",
										"x-id": "Planner_21_1687",
										"x-dynamic": "false",
										children: "Interview prep, one proof at a time"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 1362
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 1068
								}, this), /* @__PURE__ */ _jsxDEV(FileText, {
									className: "text-amber-700",
									size: 21,
									"x-file-name": "Planner",
									"x-line-number": "21",
									"x-column": "1780",
									"x-component": "FileText",
									"x-id": "Planner_21_1780",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 1570
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 901
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-7 grid gap-3 sm:grid-cols-3",
								"x-file-name": "Planner",
								"x-line-number": "21",
								"x-column": "1835",
								"x-component": "div",
								"x-id": "Planner_21_1835",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: overview.interview_tasks.map((task) => /* @__PURE__ */ _jsxDEV("div", {
									className: "rounded-xl border border-slate-200 p-4",
									"data-testid": `interview-task-${task.id}`,
									"x-file-name": "Planner",
									"x-line-number": "21",
									"x-column": "1921",
									"x-component": "div",
									"x-id": "Planner_21_1921",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											className: `grid h-8 w-8 place-items-center rounded-full ${task.done ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`,
											"x-file-name": "Planner",
											"x-line-number": "21",
											"x-column": "2033",
											"x-component": "span",
											"x-id": "Planner_21_2033",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: task.done ? /* @__PURE__ */ _jsxDEV(Check, { size: 15 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 70,
												columnNumber: 2552
											}, this) : /* @__PURE__ */ _jsxDEV(ChevronRight, { size: 15 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 70,
												columnNumber: 2574
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 70,
											columnNumber: 2226
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "mt-4 text-sm font-semibold text-slate-800",
											"x-file-name": "Planner",
											"x-line-number": "21",
											"x-column": "2248",
											"x-component": "p",
											"x-id": "Planner_21_2248",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "interview_tasks.title",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "task",
											children: task.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 70,
											columnNumber: 2608
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "mt-2 text-xs leading-5 text-slate-500",
											"x-file-name": "Planner",
											"x-line-number": "21",
											"x-column": "2321",
											"x-component": "p",
											"x-id": "Planner_21_2321",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "interview_tasks.detail",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "task",
											children: task.detail
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 70,
											columnNumber: 2963
										}, this)
									]
								}, task.id, true, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 1998
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 1746
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-7 flex items-center gap-2 text-xs text-slate-500",
								"x-file-name": "Planner",
								"x-line-number": "21",
								"x-column": "2405",
								"x-component": "div",
								"x-id": "Planner_21_2405",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(UserRound, {
									size: 14,
									className: "text-emerald-700",
									"x-file-name": "Planner",
									"x-line-number": "21",
									"x-column": "2474",
									"x-component": "UserRound",
									"x-id": "Planner_21_2474",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 3515
								}, this), " A future mentor can review this snapshot with you."]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 3330
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 724
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 513
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				"x-file-name": "Planner",
				"x-line-number": "22",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Planner_22_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white",
					"data-testid": "job-board-card",
					"x-file-name": "Planner",
					"x-line-number": "22",
					"x-column": "56",
					"x-component": "Card",
					"x-id": "Planner_22_56",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Planner",
						"x-line-number": "22",
						"x-column": "132",
						"x-component": "CardContent",
						"x-id": "Planner_22_132",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
								"x-file-name": "Planner",
								"x-line-number": "22",
								"x-column": "168",
								"x-component": "SectionEyebrow",
								"x-id": "Planner_22_168",
								"x-dynamic": "false",
								children: "Early ecosystem glimpse · P4"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 534
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "font-heading text-xl font-bold",
								"x-file-name": "Planner",
								"x-line-number": "22",
								"x-column": "229",
								"x-component": "h2",
								"x-id": "Planner_22_229",
								"x-dynamic": "false",
								children: "Jobs that make skills tangible"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 720
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-6 space-y-3",
								"x-file-name": "Planner",
								"x-line-number": "22",
								"x-column": "311",
								"x-component": "div",
								"x-id": "Planner_22_311",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: overview.jobs.map((job) => /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-3",
									"data-testid": `job-card-${job.id}`,
									"x-file-name": "Planner",
									"x-line-number": "22",
									"x-column": "369",
									"x-component": "div",
									"x-id": "Planner_22_369",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										"x-file-name": "Planner",
										"x-line-number": "22",
										"x-column": "513",
										"x-component": "div",
										"x-id": "Planner_22_513",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("p", {
											className: "text-sm font-semibold text-slate-800",
											"x-file-name": "Planner",
											"x-line-number": "22",
											"x-column": "518",
											"x-component": "p",
											"x-id": "Planner_22_518",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "jobs.role",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "job",
											children: job.role
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 1514
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "mt-1 text-xs text-slate-500",
											"x-file-name": "Planner",
											"x-line-number": "22",
											"x-column": "584",
											"x-component": "p",
											"x-id": "Planner_22_584",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "jobs.company",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "job",
											children: [
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Planner",
													"x-line-number": "22",
													"x-column": "584",
													"x-component": "p",
													"x-id": "Planner_22_584_expr0",
													"x-dynamic": "true",
													"x-source-type": "static-imported",
													"x-source-var": "overview",
													"x-source-path": "jobs.company",
													"x-source-editable": "false",
													"x-array-var": "overview",
													"x-array-item-param": "job",
													children: job.company
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 71,
													columnNumber: 2160
												}, this),
												" · ",
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Planner",
													"x-line-number": "22",
													"x-column": "584",
													"x-component": "p",
													"x-id": "Planner_22_584_expr2",
													"x-dynamic": "true",
													"x-source-type": "static-imported",
													"x-source-var": "overview",
													"x-source-path": "jobs.location",
													"x-source-editable": "false",
													"x-array-var": "overview",
													"x-array-item-param": "job",
													children: job.location
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 73,
													columnNumber: 321
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 1847
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 71,
										columnNumber: 1395
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-right",
										"x-file-name": "Planner",
										"x-line-number": "22",
										"x-column": "667",
										"x-component": "div",
										"x-id": "Planner_22_667",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("p", {
											className: "font-mono text-sm font-bold text-emerald-700",
											"x-file-name": "Planner",
											"x-line-number": "22",
											"x-column": "695",
											"x-component": "p",
											"x-id": "Planner_22_695",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "jobs.salary_lpa",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "job",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Planner",
												"x-line-number": "22",
												"x-column": "695",
												"x-component": "p",
												"x-id": "Planner_22_695_expr0",
												"x-dynamic": "true",
												"x-source-type": "static-imported",
												"x-source-var": "overview",
												"x-source-path": "jobs.salary_lpa",
												"x-source-editable": "false",
												"x-array-var": "overview",
												"x-array-item-param": "job",
												children: job.salary_lpa
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 75,
												columnNumber: 805
											}, this), "L"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 75,
											columnNumber: 472
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-[10px] text-slate-400",
											"x-file-name": "Planner",
											"x-line-number": "22",
											"x-column": "776",
											"x-component": "p",
											"x-id": "Planner_22_776",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "jobs.posted",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "job",
											children: job.posted
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 77,
											columnNumber: 329
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 75,
										columnNumber: 330
									}, this)]
								}, job.id, true, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 1137
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 915
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 359
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 171
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white",
					"data-testid": "mentor-board-card",
					"x-file-name": "Planner",
					"x-line-number": "22",
					"x-column": "875",
					"x-component": "Card",
					"x-id": "Planner_22_875",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Planner",
						"x-line-number": "22",
						"x-column": "954",
						"x-component": "CardContent",
						"x-id": "Planner_22_954",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
								"x-file-name": "Planner",
								"x-line-number": "22",
								"x-column": "990",
								"x-component": "SectionEyebrow",
								"x-id": "Planner_22_990",
								"x-dynamic": "false",
								children: "Mentor network · P5"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 1065
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "font-heading text-xl font-bold",
								"x-file-name": "Planner",
								"x-line-number": "22",
								"x-column": "1042",
								"x-component": "h2",
								"x-id": "Planner_22_1042",
								"x-dynamic": "false",
								children: "People one step ahead"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 1242
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-6 grid gap-3 sm:grid-cols-3",
								"x-file-name": "Planner",
								"x-line-number": "22",
								"x-column": "1115",
								"x-component": "div",
								"x-id": "Planner_22_1115",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: overview.mentors.map((mentor) => /* @__PURE__ */ _jsxDEV("div", {
									className: "rounded-xl bg-slate-50 p-4",
									"data-testid": `mentor-card-${mentor.id}`,
									"x-file-name": "Planner",
									"x-line-number": "22",
									"x-column": "1195",
									"x-component": "div",
									"x-id": "Planner_22_1195",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											className: "grid h-9 w-9 place-items-center rounded-full bg-emerald-100 font-mono text-xs font-bold text-emerald-800",
											"x-file-name": "Planner",
											"x-line-number": "22",
											"x-column": "1296",
											"x-component": "span",
											"x-id": "Planner_22_1296",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "mentors.initials",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "mentor",
											children: mentor.initials
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 77,
											columnNumber: 1893
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "mt-4 text-sm font-semibold text-slate-800",
											"x-file-name": "Planner",
											"x-line-number": "22",
											"x-column": "1443",
											"x-component": "p",
											"x-id": "Planner_22_1443",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "mentors.name",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "mentor",
											children: mentor.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 77,
											columnNumber: 2322
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "mt-1 text-xs text-slate-500",
											"x-file-name": "Planner",
											"x-line-number": "22",
											"x-column": "1517",
											"x-component": "p",
											"x-id": "Planner_22_1517",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "mentors.role",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "mentor",
											children: [
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Planner",
													"x-line-number": "22",
													"x-column": "1517",
													"x-component": "p",
													"x-id": "Planner_22_1517_expr0",
													"x-dynamic": "true",
													"x-source-type": "static-imported",
													"x-source-var": "overview",
													"x-source-path": "mentors.role",
													"x-source-editable": "false",
													"x-array-var": "overview",
													"x-array-item-param": "mentor",
													children: mentor.role
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 77,
													columnNumber: 2989
												}, this),
												", ",
												/* @__PURE__ */ _jsxDEV("span", {
													"data-ve-dynamic": "true",
													"x-excluded": "true",
													style: { display: "contents" },
													"x-file-name": "Planner",
													"x-line-number": "22",
													"x-column": "1517",
													"x-component": "p",
													"x-id": "Planner_22_1517_expr2",
													"x-dynamic": "true",
													"x-source-type": "static-imported",
													"x-source-var": "overview",
													"x-source-path": "mentors.company",
													"x-source-editable": "false",
													"x-array-var": "overview",
													"x-array-item-param": "mentor",
													children: mentor.company
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 79,
													columnNumber: 323
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 77,
											columnNumber: 2671
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "mt-3 text-[11px] leading-5 text-slate-500",
											"x-file-name": "Planner",
											"x-line-number": "22",
											"x-column": "1595",
											"x-component": "p",
											"x-id": "Planner_22_1595",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "mentors.focus",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "mentor",
											children: mentor.focus
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 81,
											columnNumber: 331
										}, this)
									]
								}, mentor.id, true, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 1676
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 1430
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 890
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 697
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 10
	}, this);
}
_s(Planner, "ZTVgHwuDjF/9Kds1x4SRMTd8olc=", false, function() {
	return [
		useQuery,
		useQuery,
		useQueryClient,
		useMutation
	];
});
_c = Planner;
var _c;
$RefreshReg$(_c, "Planner");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Planner.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Planner.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Planner.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Planner.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7cUJBQTFDO1lBQTJDO2FBQUE7YUFBQTthQUFBLFNBQUFMLFNBQUE7YUFBQTthQUFBO2FBQUE7YUFBQTthQUFBO2FBQUE7YUFBQTthQUFBO2FBQUE7YUFBQTthQUFBO2FBQUE7dUJBQUMrQixPQUFPTjtZQUFLOzs7OztZQUFBO1lBQUU7YUFBQTthQUFBO2FBQUEsU0FBQXpCLFNBQUE7YUFBQTthQUFBO2FBQUE7YUFBQTthQUFBO2FBQUE7YUFBQTthQUFBO2FBQUE7YUFBQTthQUFBO2FBQUE7dUJBQUMrQixPQUFPTDtZQUFROzs7OztXQUFHOzs7Ozs7VUFBQyx3QkFBQyxLQUFEO1dBQUcsV0FBVTtXQUEyQztXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7cUJBQUVLLE9BQU9FO1VBQVM7Ozs7O1NBQU07V0FBL2FGLE9BQU90Qzs7OztlQUF3YSxDQUFDO09BQU87Ozs7O01BQWM7Ozs7OztJQUFPOzs7O1lBQVU7Ozs7OztFQUMzcUQ7Ozs7OztBQUNQIiwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlU3RhdGUiLCJCcmllZmNhc2VCdXNpbmVzcyIsIkNoZWNrIiwiQ2hldnJvblJpZ2h0IiwiQ2lyY2xlIiwiQ2xvY2szIiwiRmlsZVRleHQiLCJHcmFkdWF0aW9uQ2FwIiwiSGFuZENvaW5zIiwiTWFwUGluIiwiVXNlclJvdW5kIiwiQmFkZ2UiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJhcGlHZXQiLCJhcGlQb3N0IiwiRkFMTEJBQ0tfT1ZFUlZJRVciLCJtb25leSIsIlNlY3Rpb25FeWVicm93Iiwic3RhZ2VzIiwiUGxhbm5lciIsImRhdGEiLCJvdmVydmlld0RhdGEiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJyZXRyeSIsInBsYW5uZXJEYXRhIiwib3ZlcnZpZXciLCJwbGFubmVyIiwiY29sbGVnZV9pZCIsInN0YXR1cyIsIm5leHRfYWN0aW9uIiwicXVlcnlDbGllbnQiLCJzZWxlY3RlZFN0YWdlIiwic2V0U2VsZWN0ZWRTdGFnZSIsInVwZGF0ZSIsIm11dGF0aW9uRm4iLCJwYXlsb2FkIiwib25TdWNjZXNzIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJtYXAiLCJzdGFnZSIsInRvTG93ZXJDYXNlIiwiaXRlbSIsImNvbGxlZ2UiLCJjb2xsZWdlcyIsImZpbmQiLCJyb3ciLCJpZCIsInNob3J0X25hbWUiLCJjaXR5IiwiZXZlbnQiLCJtdXRhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc3BsYXkiLCJ0dWl0aW9uX2xha2hzIiwibWVkaWFuX3BsYWNlbWVudF9scGEiLCJzY2hvbGFyc2hpcHMiLCJzY2hvbGFyc2hpcCIsIm5hbWUiLCJhbW91bnRfbGFraHMiLCJtYXRjaF9yZWFzb24iLCJkZWFkbGluZSIsInNraWxsX2dhcHMiLCJnYXAiLCJza2lsbCIsInJlcGxhY2VBbGwiLCJjdXJyZW50Iiwid2lkdGgiLCJyZXN1bWUiLCJoZWFkbGluZSIsInJlYWRpbmVzcyIsImludGVydmlld190YXNrcyIsInRhc2siLCJkb25lIiwidGl0bGUiLCJkZXRhaWwiLCJqb2JzIiwiam9iIiwicm9sZSIsImNvbXBhbnkiLCJsb2NhdGlvbiIsInNhbGFyeV9scGEiLCJwb3N0ZWQiLCJtZW50b3JzIiwibWVudG9yIiwiaW5pdGlhbHMiLCJmb2N1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQbGFubmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJyaWVmY2FzZUJ1c2luZXNzLCBDaGVjaywgQ2hldnJvblJpZ2h0LCBDaXJjbGUsIENsb2NrMywgRmlsZVRleHQsIEdyYWR1YXRpb25DYXAsIEhhbmRDb2lucywgTWFwUGluLCBVc2VyUm91bmQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgYXBpR2V0LCBhcGlQb3N0IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgRkFMTEJBQ0tfT1ZFUlZJRVcsIG1vbmV5LCB0eXBlIE92ZXJ2aWV3LCB0eXBlIFBsYW5uZXJJdGVtIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBTZWN0aW9uRXllYnJvdyB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FtcHVzU2hlbGxcIjtcblxuY29uc3Qgc3RhZ2VzID0gW1wiUmVzZWFyY2hpbmdcIiwgXCJTaG9ydGxpc3RlZFwiLCBcIkFwcGxpZWRcIiwgXCJEZWNpc2lvblwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhbm5lcigpIHtcbiAgY29uc3QgeyBkYXRhOiBvdmVydmlld0RhdGEgfSA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcIm92ZXJ2aWV3XCJdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8T3ZlcnZpZXc+KFwiL2NhbXB1cy9vdmVydmlld1wiKSwgcmV0cnk6IGZhbHNlIH0pO1xuICBjb25zdCB7IGRhdGE6IHBsYW5uZXJEYXRhIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbXCJwbGFubmVyXCJdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8UGxhbm5lckl0ZW1bXT4oXCIvY2FtcHVzL3BsYW5uZXJcIiksIHJldHJ5OiBmYWxzZSB9KTtcbiAgY29uc3Qgb3ZlcnZpZXcgPSBvdmVydmlld0RhdGEgPz8gRkFMTEJBQ0tfT1ZFUlZJRVc7IGNvbnN0IHBsYW5uZXIgPSBwbGFubmVyRGF0YSA/PyBbeyBjb2xsZWdlX2lkOiBcInZpdC12ZWxsb3JlXCIsIHN0YXR1czogXCJTaG9ydGxpc3RlZFwiLCBuZXh0X2FjdGlvbjogXCJDaGVjayBWSVRFRUUgZGF0ZXNcIiB9LCB7IGNvbGxlZ2VfaWQ6IFwicnZjZVwiLCBzdGF0dXM6IFwiUmVzZWFyY2hpbmdcIiwgbmV4dF9hY3Rpb246IFwiUmV2aWV3IENPTUVESyBjdXQtb2Zmc1wiIH1dO1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7IGNvbnN0IFtzZWxlY3RlZFN0YWdlLCBzZXRTZWxlY3RlZFN0YWdlXSA9IHVzZVN0YXRlKFwiU2hvcnRsaXN0ZWRcIik7XG4gIGNvbnN0IHVwZGF0ZSA9IHVzZU11dGF0aW9uKHsgbXV0YXRpb25GbjogKHBheWxvYWQ6IHsgY29sbGVnZV9pZDogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9KSA9PiBhcGlQb3N0PFBsYW5uZXJJdGVtPihcIi9jYW1wdXMvcGxhbm5lclwiLCBwYXlsb2FkKSwgb25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbXCJwbGFubmVyXCJdIH0pIH0pO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHB5LTEwIHNtOnB4LTYgbGc6cHgtOFwiPjxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsXCI+PFNlY3Rpb25FeWVicm93PlBsYW5uZXIgJiBjYXJlZXIgZXhlY3V0aW9uIMK3IFAyIC8gUDM8L1NlY3Rpb25FeWVicm93PjxoMSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC00eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgc206dGV4dC01eGxcIj5UdXJuIGEgc2hvcnRsaXN0PGJyIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMFwiPmludG8gYSByb3V0ZS48L3NwYW4+PC9oMT48cCBjbGFzc05hbWU9XCJtdC01IHRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1zbGF0ZS02MDBcIj5LZWVwIHRoZSBhZG1pc3Npb24gd29yaywgbW9uZXkgcXVlc3Rpb25zLCBhbmQgY2FyZWVyIHByb29mIGluIG9uZSB2aXNpYmxlIHBsYWNlLiBObyBzcHJlYWRzaGVldCBhcmNoYWVvbG9neS48L3A+PC9kaXY+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTIgZ3JpZCBnYXAtNiBsZzpncmlkLWNvbHMtMTJcIj48Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItc2xhdGUtMjAwLzgwIGJnLXdoaXRlIGxnOmNvbC1zcGFuLThcIiBkYXRhLXRlc3RpZD1cImFwcGxpY2F0aW9uLXBpcGVsaW5lLWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHNtOnAtOFwiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgc206ZmxleC1yb3cgc206aXRlbXMtZW5kXCI+PGRpdj48U2VjdGlvbkV5ZWJyb3c+QXBwbGljYXRpb24gcGlwZWxpbmU8L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC0yeGwgZm9udC1ib2xkXCI+QWFyYXbigJlzIGFjdGl2ZSBvcHRpb25zPC9oMj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgcm91bmRlZC1sZyBiZy1zbGF0ZS0xMDAgcC0xXCI+e3N0YWdlcy5tYXAoc3RhZ2UgPT4gPGJ1dHRvbiBrZXk9e3N0YWdlfSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFN0YWdlKHN0YWdlKX0gY2xhc3NOYW1lPXtgcm91bmRlZC1tZCBweC0yLjUgcHktMS41IHRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1bY29sb3IsYmFja2dyb3VuZC1jb2xvcl0gZHVyYXRpb24tMjAwICR7c2VsZWN0ZWRTdGFnZSA9PT0gc3RhZ2UgPyBcImJnLXdoaXRlIHRleHQtZW1lcmFsZC04MDAgc2hhZG93LXNtXCIgOiBcInRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtc2xhdGUtOTAwXCJ9YH0gZGF0YS10ZXN0aWQ9e2BwbGFubmVyLXN0YWdlLSR7c3RhZ2UudG9Mb3dlckNhc2UoKX0tZmlsdGVyYH0+e3N0YWdlfTwvYnV0dG9uPil9PC9kaXY+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC03IHNwYWNlLXktM1wiPntwbGFubmVyLm1hcChpdGVtID0+IHsgY29uc3QgY29sbGVnZSA9IG92ZXJ2aWV3LmNvbGxlZ2VzLmZpbmQocm93ID0+IHJvdy5pZCA9PT0gaXRlbS5jb2xsZWdlX2lkKTsgaWYgKCFjb2xsZWdlKSByZXR1cm4gbnVsbDsgcmV0dXJuIDxkaXYga2V5PXtpdGVtLmNvbGxlZ2VfaWR9IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC00IHRyYW5zaXRpb24tW2JvcmRlci1jb2xvcix0cmFuc2Zvcm1dIGR1cmF0aW9uLTIwMCBob3ZlcjotdHJhbnNsYXRlLXktMC41IGhvdmVyOmJvcmRlci1lbWVyYWxkLTMwMFwiIGRhdGEtdGVzdGlkPXtgcGxhbm5lci1pdGVtLSR7aXRlbS5jb2xsZWdlX2lkfWB9PjxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuXCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPjxzcGFuIGNsYXNzTmFtZT1cImdyaWQgaC0xMCB3LTEwIHBsYWNlLWl0ZW1zLWNlbnRlciByb3VuZGVkLXhsIGJnLWVtZXJhbGQtNTAgdGV4dC1lbWVyYWxkLTcwMFwiPjxHcmFkdWF0aW9uQ2FwIHNpemU9ezE5fSAvPjwvc3Bhbj48ZGl2PjxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS05MDBcIj57Y29sbGVnZS5zaG9ydF9uYW1lfTwvcD48cCBjbGFzc05hbWU9XCJtdC0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj48TWFwUGluIHNpemU9ezExfSAvPiB7Y29sbGVnZS5jaXR5fTwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+PEJhZGdlIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWFtYmVyLTIwMCBiZy1hbWJlci01MCB0ZXh0LWFtYmVyLTgwMFwiIGRhdGEtdGVzdGlkPXtgcGxhbm5lci1zdGF0dXMtJHtjb2xsZWdlLmlkfWB9PntpdGVtLnN0YXR1c308L0JhZGdlPjxzZWxlY3QgdmFsdWU9e2l0ZW0uc3RhdHVzfSBvbkNoYW5nZT17ZXZlbnQgPT4gdXBkYXRlLm11dGF0ZSh7IGNvbGxlZ2VfaWQ6IGl0ZW0uY29sbGVnZV9pZCwgc3RhdHVzOiBldmVudC50YXJnZXQudmFsdWUgfSl9IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgYmctd2hpdGUgcHgtMiBweS0xLjUgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTYwMFwiIGRhdGEtdGVzdGlkPXtgcGxhbm5lci1zdGF0dXMtc2VsZWN0LSR7Y29sbGVnZS5pZH1gfT57c3RhZ2VzLm1hcChzdGFnZSA9PiA8b3B0aW9uIGtleT17c3RhZ2V9PntzdGFnZX08L29wdGlvbj4pfTwvc2VsZWN0PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIGJvcmRlci10IGJvcmRlci1zbGF0ZS0xMDAgcHQtM1wiPjxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj48Q2xvY2szIHNpemU9ezE0fSBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTYwMFwiIC8+IE5leHQ6IDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS03MDBcIj57aXRlbS5uZXh0X2FjdGlvbn08L3N0cm9uZz48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTQwMFwiPnttb25leShjb2xsZWdlLnR1aXRpb25fbGFraHMpfSB0dWl0aW9uIMK3IHtjb2xsZWdlLm1lZGlhbl9wbGFjZW1lbnRfbHBhfUwgbWVkaWFuPC9zcGFuPjwvZGl2PjwvZGl2PiB9KX08L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPjxDaXJjbGUgc2l6ZT17MTN9IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCIgLz4gQ2hvb3NlIGEgc3RhZ2UgdG8gbWFrZSB0aGUgbmV4dCBhY3Rpb24gY29uY3JldGU8L2Rpdj48L0NhcmRDb250ZW50PjwvQ2FyZD48Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItYW1iZXItMjAwIGJnLWFtYmVyLTUwLzcwIGxnOmNvbC1zcGFuLTRcIiBkYXRhLXRlc3RpZD1cInNjaG9sYXJzaGlwLW1hdGNoLWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHNtOnAtOFwiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+PGRpdj48U2VjdGlvbkV5ZWJyb3c+TWF0Y2hlZCBmb3IgQWFyYXY8L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC14bCBmb250LWJvbGRcIj5TY2hvbGFyc2hpcCBzaWduYWxzPC9oMj48L2Rpdj48SGFuZENvaW5zIGNsYXNzTmFtZT1cInRleHQtYW1iZXItNzAwXCIgc2l6ZT17MjJ9IC8+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC02IHNwYWNlLXktNFwiPntvdmVydmlldy5zY2hvbGFyc2hpcHMubWFwKHNjaG9sYXJzaGlwID0+IDxkaXYga2V5PXtzY2hvbGFyc2hpcC5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWFtYmVyLTIwMC83MCBwYi00IGxhc3Q6Ym9yZGVyLTAgbGFzdDpwYi0wXCIgZGF0YS10ZXN0aWQ9e2BzY2hvbGFyc2hpcC1jYXJkLSR7c2Nob2xhcnNoaXAuaWR9YH0+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPjxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWFtYmVyLTk1MFwiPntzY2hvbGFyc2hpcC5uYW1lfTwvcD48c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14cyBmb250LWJvbGQgdGV4dC1hbWJlci04MDBcIj57bW9uZXkoc2Nob2xhcnNoaXAuYW1vdW50X2xha2hzKX08L3NwYW4+PC9kaXY+PHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXhzIGxlYWRpbmctNSB0ZXh0LWFtYmVyLTk1MC82NVwiPntzY2hvbGFyc2hpcC5tYXRjaF9yZWFzb259PC9wPjxwIGNsYXNzTmFtZT1cIm10LTIgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWFtYmVyLTgwMC83MFwiPkRlYWRsaW5lIMK3IHtzY2hvbGFyc2hpcC5kZWFkbGluZX08L3A+PC9kaXY+KX08L2Rpdj48L0NhcmRDb250ZW50PjwvQ2FyZD48L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtOCBncmlkIGdhcC02IGxnOmdyaWQtY29scy0xMlwiPjxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1zbGF0ZS0yMDAvODAgYmctd2hpdGUgbGc6Y29sLXNwYW4tNVwiIGRhdGEtdGVzdGlkPVwiY2FyZWVyLWV4ZWN1dGlvbi1jYXJkXCI+PENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPjxkaXY+PFNlY3Rpb25FeWVicm93PkNhcmVlciBleGVjdXRpb24gwrcgUDM8L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC14bCBmb250LWJvbGRcIj5Ta2lsbCBnYXAsIGhvbmVzdGx5PC9oMj48L2Rpdj48QnJpZWZjYXNlQnVzaW5lc3MgY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMFwiIHNpemU9ezIxfSAvPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtNyBzcGFjZS15LTVcIj57b3ZlcnZpZXcuc2tpbGxfZ2Fwcy5tYXAoZ2FwID0+IDxkaXYga2V5PXtnYXAuc2tpbGx9IGRhdGEtdGVzdGlkPXtgc2tpbGwtZ2FwLSR7Z2FwLnNraWxsLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfWB9PjxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC14c1wiPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS03MDBcIj57Z2FwLnNraWxsfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1zbGF0ZS01MDBcIj57Z2FwLmN1cnJlbnR9JSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPuKGkjwvc3Bhbj4ge2dhcC50YXJnZXR9JTwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1zbGF0ZS0xMDBcIj48ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCByb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC02MDBcIiBzdHlsZT17eyB3aWR0aDogYCR7Z2FwLmN1cnJlbnR9JWAgfX0gLz48L2Rpdj48L2Rpdj4pfTwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtNyByb3VuZGVkLXhsIGJnLXNsYXRlLTUwIHAtNFwiPjxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPlJlc3VtZSBzbmFwc2hvdDwvcD48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgbGVhZGluZy01IHRleHQtc2xhdGUtNTAwXCI+e292ZXJ2aWV3LnJlc3VtZS5oZWFkbGluZX08L3A+PGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtbGcgZm9udC1ib2xkIHRleHQtZW1lcmFsZC03MDBcIj57b3ZlcnZpZXcucmVzdW1lLnJlYWRpbmVzc30lPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj5yZWFkeSBmb3IgYSBmaXJzdCByZXZpZXc8L3NwYW4+PC9kaXY+PC9kaXY+PC9DYXJkQ29udGVudD48L0NhcmQ+PENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLXNsYXRlLTIwMC84MCBiZy13aGl0ZSBsZzpjb2wtc3Bhbi03XCIgZGF0YS10ZXN0aWQ9XCJpbnRlcnZpZXctcHJlcC1jYXJkXCI+PENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPjxkaXY+PFNlY3Rpb25FeWVicm93PlByYWN0aWNlIGxvb3A8L1NlY3Rpb25FeWVicm93PjxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC14bCBmb250LWJvbGRcIj5JbnRlcnZpZXcgcHJlcCwgb25lIHByb29mIGF0IGEgdGltZTwvaDI+PC9kaXY+PEZpbGVUZXh0IGNsYXNzTmFtZT1cInRleHQtYW1iZXItNzAwXCIgc2l6ZT17MjF9IC8+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC03IGdyaWQgZ2FwLTMgc206Z3JpZC1jb2xzLTNcIj57b3ZlcnZpZXcuaW50ZXJ2aWV3X3Rhc2tzLm1hcCh0YXNrID0+IDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBwLTRcIiBrZXk9e3Rhc2suaWR9IGRhdGEtdGVzdGlkPXtgaW50ZXJ2aWV3LXRhc2stJHt0YXNrLmlkfWB9PjxzcGFuIGNsYXNzTmFtZT17YGdyaWQgaC04IHctOCBwbGFjZS1pdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsICR7dGFzay5kb25lID8gXCJiZy1lbWVyYWxkLTEwMCB0ZXh0LWVtZXJhbGQtNzAwXCIgOiBcImJnLWFtYmVyLTEwMCB0ZXh0LWFtYmVyLTcwMFwifWB9Pnt0YXNrLmRvbmUgPyA8Q2hlY2sgc2l6ZT17MTV9IC8+IDogPENoZXZyb25SaWdodCBzaXplPXsxNX0gLz59PC9zcGFuPjxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+e3Rhc2sudGl0bGV9PC9wPjxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC14cyBsZWFkaW5nLTUgdGV4dC1zbGF0ZS01MDBcIj57dGFzay5kZXRhaWx9PC9wPjwvZGl2Pil9PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC03IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj48VXNlclJvdW5kIHNpemU9ezE0fSBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNzAwXCIgLz4gQSBmdXR1cmUgbWVudG9yIGNhbiByZXZpZXcgdGhpcyBzbmFwc2hvdCB3aXRoIHlvdS48L2Rpdj48L0NhcmRDb250ZW50PjwvQ2FyZD48L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtOCBncmlkIGdhcC02IGxnOmdyaWQtY29scy0yXCI+PENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLXNsYXRlLTIwMC84MCBiZy13aGl0ZVwiIGRhdGEtdGVzdGlkPVwiam9iLWJvYXJkLWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHNtOnAtOFwiPjxTZWN0aW9uRXllYnJvdz5FYXJseSBlY29zeXN0ZW0gZ2xpbXBzZSDCtyBQNDwvU2VjdGlvbkV5ZWJyb3c+PGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LXhsIGZvbnQtYm9sZFwiPkpvYnMgdGhhdCBtYWtlIHNraWxscyB0YW5naWJsZTwvaDI+PGRpdiBjbGFzc05hbWU9XCJtdC02IHNwYWNlLXktM1wiPntvdmVydmlldy5qb2JzLm1hcChqb2IgPT4gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMCBwLTNcIiBrZXk9e2pvYi5pZH0gZGF0YS10ZXN0aWQ9e2Bqb2ItY2FyZC0ke2pvYi5pZH1gfT48ZGl2PjxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPntqb2Iucm9sZX08L3A+PHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXhzIHRleHQtc2xhdGUtNTAwXCI+e2pvYi5jb21wYW55fSDCtyB7am9iLmxvY2F0aW9ufTwvcD48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj48cCBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1zbSBmb250LWJvbGQgdGV4dC1lbWVyYWxkLTcwMFwiPntqb2Iuc2FsYXJ5X2xwYX1MPC9wPjxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc2xhdGUtNDAwXCI+e2pvYi5wb3N0ZWR9PC9wPjwvZGl2PjwvZGl2Pil9PC9kaXY+PC9DYXJkQ29udGVudD48L0NhcmQ+PENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLXNsYXRlLTIwMC84MCBiZy13aGl0ZVwiIGRhdGEtdGVzdGlkPVwibWVudG9yLWJvYXJkLWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHNtOnAtOFwiPjxTZWN0aW9uRXllYnJvdz5NZW50b3IgbmV0d29yayDCtyBQNTwvU2VjdGlvbkV5ZWJyb3c+PGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LXhsIGZvbnQtYm9sZFwiPlBlb3BsZSBvbmUgc3RlcCBhaGVhZDwvaDI+PGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ2FwLTMgc206Z3JpZC1jb2xzLTNcIj57b3ZlcnZpZXcubWVudG9ycy5tYXAobWVudG9yID0+IDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBiZy1zbGF0ZS01MCBwLTRcIiBrZXk9e21lbnRvci5pZH0gZGF0YS10ZXN0aWQ9e2BtZW50b3ItY2FyZC0ke21lbnRvci5pZH1gfT48c3BhbiBjbGFzc05hbWU9XCJncmlkIGgtOSB3LTkgcGxhY2UtaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTEwMCBmb250LW1vbm8gdGV4dC14cyBmb250LWJvbGQgdGV4dC1lbWVyYWxkLTgwMFwiPnttZW50b3IuaW5pdGlhbHN9PC9zcGFuPjxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+e21lbnRvci5uYW1lfTwvcD48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1zbGF0ZS01MDBcIj57bWVudG9yLnJvbGV9LCB7bWVudG9yLmNvbXBhbnl9PC9wPjxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1bMTFweF0gbGVhZGluZy01IHRleHQtc2xhdGUtNTAwXCI+e21lbnRvci5mb2N1c308L3A+PC9kaXY+KX08L2Rpdj48L0NhcmRDb250ZW50PjwvQ2FyZD48L3NlY3Rpb24+XG4gIDwvZGl2Pjtcbn0iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL3BhZ2VzL1BsYW5uZXIudHN4In0=