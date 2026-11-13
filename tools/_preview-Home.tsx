import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.tsx");const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"];import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=0cd69c2d";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=0cd69c2d";
import { ArrowRight, CheckCircle2, CircleDollarSign, GraduationCap, MapPin, Sparkles, Target, TrendingUp } from "/src/lib/lucide-react.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { apiGet } from "/src/lib/api.ts";
import { FALLBACK_OVERVIEW, money } from "/src/lib/types.ts";
import { SectionEyebrow } from "/src/components/CampusShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Home.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0cd69c2d";
var _s = $RefreshSig$();
export default function Home() {
	_s();
	const { data } = useQuery({
		queryKey: ["overview"],
		queryFn: () => apiGet("/campus/overview"),
		retry: false
	});
	const overview = data ?? FALLBACK_OVERVIEW;
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12",
		"x-file-name": "Home",
		"x-line-number": "14",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Home_14_9",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("section", {
				className: "relative overflow-hidden rounded-3xl bg-[#102a25] px-6 py-8 text-white shadow-xl shadow-emerald-950/10 sm:px-10 sm:py-12 lg:px-14",
				"x-file-name": "Home",
				"x-line-number": "15",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Home_15_4",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "absolute -right-20 -top-32 h-80 w-80 rounded-full border-[36px] border-emerald-400/10",
						"x-file-name": "Home",
						"x-line-number": "16",
						"x-column": "6",
						"x-component": "div",
						"x-id": "Home_16_6",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "absolute -bottom-40 right-28 h-72 w-72 rounded-full border-[18px] border-amber-300/10",
						"x-file-name": "Home",
						"x-line-number": "16",
						"x-column": "111",
						"x-component": "div",
						"x-id": "Home_16_111",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 216
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "relative max-w-3xl animate-[fade-up_0.5s_ease-out_both]",
						"x-file-name": "Home",
						"x-line-number": "17",
						"x-column": "6",
						"x-component": "div",
						"x-id": "Home_17_6",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-6 flex items-center gap-2",
								"x-file-name": "Home",
								"x-line-number": "18",
								"x-column": "8",
								"x-component": "div",
								"x-id": "Home_18_8",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "rounded-full bg-emerald-400/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-200",
										"data-testid": "demo-mode-badge",
										"x-file-name": "Home",
										"x-line-number": "18",
										"x-column": "54",
										"x-component": "span",
										"x-id": "Home_18_54",
										"x-dynamic": "false",
										children: "Decision workspace · demo mode"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 159
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "h-1 w-1 rounded-full bg-amber-300",
										"x-file-name": "Home",
										"x-line-number": "18",
										"x-column": "246",
										"x-component": "span",
										"x-id": "Home_18_246",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 458
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs text-emerald-100/70",
										"data-testid": "today-label",
										"x-file-name": "Home",
										"x-line-number": "18",
										"x-column": "300",
										"x-component": "span",
										"x-id": "Home_18_300",
										"x-dynamic": "false",
										children: "Updated for 2025 intake"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 23,
										columnNumber: 621
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 9
							}, this),
							/* @__PURE__ */ _jsxDEV("h1", {
								className: "font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl",
								"x-file-name": "Home",
								"x-line-number": "19",
								"x-column": "8",
								"x-component": "h1",
								"x-id": "Home_19_8",
								"x-dynamic": "false",
								children: [
									"Make the next",
									/* @__PURE__ */ _jsxDEV("br", {
										"x-file-name": "Home",
										"x-line-number": "19",
										"x-column": "120",
										"x-component": "br",
										"x-id": "Home_19_120",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 24,
										columnNumber: 224
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-amber-300",
										"x-file-name": "Home",
										"x-line-number": "19",
										"x-column": "126",
										"x-component": "span",
										"x-id": "Home_19_126",
										"x-dynamic": "false",
										children: "four years count."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 24,
										columnNumber: 337
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 9
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-6 max-w-xl text-sm leading-7 text-emerald-50/75 sm:text-base",
								"x-file-name": "Home",
								"x-line-number": "20",
								"x-column": "8",
								"x-component": "p",
								"x-id": "Home_20_8",
								"x-dynamic": "false",
								children: "CampusRoute helps families compare the real cost, fit, and first career signal of an engineering choice — before the application fee."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 25,
								columnNumber: 9
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-8 flex flex-wrap gap-3",
								"x-file-name": "Home",
								"x-line-number": "21",
								"x-column": "8",
								"x-component": "div",
								"x-id": "Home_21_8",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(Link, {
									to: "/explore",
									"data-testid": "hero-explore-link",
									children: /* @__PURE__ */ _jsxDEV(Button, {
										className: "bg-amber-400 text-slate-950 hover:bg-amber-300 hover:text-slate-950",
										"x-file-name": "Home",
										"x-line-number": "21",
										"x-column": "103",
										"x-component": "Button",
										"x-id": "Home_21_103",
										"x-dynamic": "false",
										children: ["Explore colleges ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 26,
											columnNumber: 424
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 26,
										columnNumber: 208
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 26,
									columnNumber: 156
								}, this), /* @__PURE__ */ _jsxDEV(Link, {
									to: "/counsellor",
									"data-testid": "hero-counsellor-link",
									children: /* @__PURE__ */ _jsxDEV(Button, {
										variant: "outline",
										className: "border-white/20 bg-white/5 text-white hover:bg-white hover:text-slate-900",
										"x-file-name": "Home",
										"x-line-number": "21",
										"x-column": "306",
										"x-component": "Button",
										"x-id": "Home_21_306",
										"x-dynamic": "false",
										children: ["Ask the counsellor ", /* @__PURE__ */ _jsxDEV(Sparkles, {
											size: 16,
											"x-file-name": "Home",
											"x-line-number": "21",
											"x-column": "437",
											"x-component": "Sparkles",
											"x-id": "Home_21_437",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 26,
											columnNumber: 764
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 26,
										columnNumber: 522
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 26,
									columnNumber: 464
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 9
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 7
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "relative mt-10 grid max-w-xl grid-cols-3 gap-2 border-t border-white/10 pt-5 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0 sm:max-w-sm sm:border-t-0 sm:pt-0",
						"x-file-name": "Home",
						"x-line-number": "23",
						"x-column": "6",
						"x-component": "div",
						"x-id": "Home_23_6",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(Metric, {
								value: "6",
								label: "colleges",
								testId: "hero-colleges-metric",
								"x-file-name": "Home",
								"x-line-number": "23",
								"x-column": "179",
								"x-component": "Metric",
								"x-id": "Home_23_179",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 284
							}, this),
							/* @__PURE__ */ _jsxDEV(Metric, {
								value: "3",
								label: "career paths",
								testId: "hero-careers-metric",
								"x-file-name": "Home",
								"x-line-number": "23",
								"x-column": "246",
								"x-component": "Metric",
								"x-id": "Home_23_246",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 461
							}, this),
							/* @__PURE__ */ _jsxDEV(Metric, {
								value: "1",
								label: "grounded guide",
								testId: "hero-guide-metric",
								"x-file-name": "Home",
								"x-line-number": "23",
								"x-column": "316",
								"x-component": "Metric",
								"x-id": "Home_23_316",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 641
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-8 grid gap-6 lg:grid-cols-12",
				"x-file-name": "Home",
				"x-line-number": "26",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Home_26_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] lg:col-span-7",
					"data-testid": "learner-profile-card",
					"x-file-name": "Home",
					"x-line-number": "27",
					"x-column": "6",
					"x-component": "Card",
					"x-id": "Home_27_6",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Home",
						"x-line-number": "27",
						"x-column": "144",
						"x-component": "CardContent",
						"x-id": "Home_27_144",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
							"x-file-name": "Home",
							"x-line-number": "27",
							"x-column": "180",
							"x-component": "SectionEyebrow",
							"x-id": "Home_27_180",
							"x-dynamic": "false",
							children: "Your route so far"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 418
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-col justify-between gap-6 sm:flex-row sm:items-end",
							"x-file-name": "Home",
							"x-line-number": "27",
							"x-column": "230",
							"x-component": "div",
							"x-id": "Home_27_230",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Home",
								"x-line-number": "27",
								"x-column": "308",
								"x-component": "div",
								"x-id": "Home_27_308",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("h2", {
										className: "font-heading text-2xl font-bold tracking-tight",
										"data-testid": "learner-name",
										"x-file-name": "Home",
										"x-line-number": "27",
										"x-column": "313",
										"x-component": "h2",
										"x-id": "Home_27_313",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "overview",
										"x-source-path": "learner.name",
										"x-source-editable": "false",
										children: overview.learner.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 32,
										columnNumber: 886
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-2 flex items-center gap-2 text-sm text-slate-500",
										"data-testid": "learner-profile-summary",
										"x-file-name": "Home",
										"x-line-number": "27",
										"x-column": "431",
										"x-component": "p",
										"x-id": "Home_27_431",
										"x-dynamic": "false",
										children: [
											/* @__PURE__ */ _jsxDEV("span", {
												"x-file-name": "Home",
												"x-line-number": "27",
												"x-column": "536",
												"x-component": "span",
												"x-id": "Home_27_536",
												"x-dynamic": "true",
												"x-source-type": "unknown",
												"x-source-var": "overview",
												"x-source-path": "learner.class_level",
												"x-source-editable": "false",
												children: [
													/* @__PURE__ */ _jsxDEV("span", {
														"data-ve-dynamic": "true",
														"x-excluded": "true",
														style: { display: "contents" },
														"x-file-name": "Home",
														"x-line-number": "27",
														"x-column": "536",
														"x-component": "span",
														"x-id": "Home_27_536_expr0",
														"x-dynamic": "true",
														"x-source-type": "unknown",
														"x-source-var": "overview",
														"x-source-path": "learner.class_level",
														"x-source-editable": "false",
														children: overview.learner.class_level
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 32,
														columnNumber: 1648
													}, this),
													" · ",
													/* @__PURE__ */ _jsxDEV("span", {
														"data-ve-dynamic": "true",
														"x-excluded": "true",
														style: { display: "contents" },
														"x-file-name": "Home",
														"x-line-number": "27",
														"x-column": "536",
														"x-component": "span",
														"x-id": "Home_27_536_expr2",
														"x-dynamic": "true",
														"x-source-type": "unknown",
														"x-source-var": "overview",
														"x-source-path": "learner.stream",
														"x-source-editable": "false",
														children: overview.learner.stream
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 34,
														columnNumber: 286
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 32,
												columnNumber: 1424
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												className: "text-slate-300",
												"x-file-name": "Home",
												"x-line-number": "27",
												"x-column": "607",
												"x-component": "span",
												"x-id": "Home_27_607",
												"x-dynamic": "false",
												children: "/"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 36,
												columnNumber: 280
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												className: "flex items-center gap-1",
												"x-file-name": "Home",
												"x-line-number": "27",
												"x-column": "648",
												"x-component": "span",
												"x-id": "Home_27_648",
												"x-dynamic": "true",
												"x-source-type": "unknown",
												"x-source-var": "overview",
												"x-source-path": "learner.city",
												"x-source-editable": "false",
												children: [
													/* @__PURE__ */ _jsxDEV(MapPin, {
														size: 13,
														"x-file-name": "Home",
														"x-line-number": "27",
														"x-column": "690",
														"x-component": "MapPin",
														"x-id": "Home_27_690",
														"x-dynamic": "false"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 36,
														columnNumber: 683
													}, this),
													" ",
													overview.learner.city
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 36,
												columnNumber: 430
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 32,
										columnNumber: 1213
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-5 max-w-md text-sm leading-6 text-slate-600",
										"x-file-name": "Home",
										"x-line-number": "27",
										"x-column": "745",
										"x-component": "p",
										"x-id": "Home_27_745",
										"x-dynamic": "false",
										children: ["Goal: ", /* @__PURE__ */ _jsxDEV("strong", {
											className: "font-semibold text-slate-900",
											"x-file-name": "Home",
											"x-line-number": "27",
											"x-column": "813",
											"x-component": "strong",
											"x-id": "Home_27_813",
											"x-dynamic": "true",
											"x-source-type": "unknown",
											"x-source-var": "overview",
											"x-source-path": "learner.goal",
											"x-source-editable": "false",
											children: overview.learner.goal
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 36,
											columnNumber: 1023
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 36,
										columnNumber: 849
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 773
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "rounded-2xl bg-amber-50 p-4 sm:min-w-44",
								"data-testid": "profile-goal-card",
								"x-file-name": "Home",
								"x-line-number": "27",
								"x-column": "904",
								"x-component": "div",
								"x-id": "Home_27_904",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(Target, {
										size: 17,
										className: "text-amber-700",
										"x-file-name": "Home",
										"x-line-number": "27",
										"x-column": "993",
										"x-component": "Target",
										"x-id": "Home_27_993",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 36,
										columnNumber: 1524
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-3 font-mono text-[10px] uppercase tracking-wider text-amber-700",
										"x-file-name": "Home",
										"x-line-number": "27",
										"x-column": "1040",
										"x-component": "p",
										"x-id": "Home_27_1040",
										"x-dynamic": "false",
										children: "Your north star"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 36,
										columnNumber: 1682
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-1 text-sm font-semibold text-amber-950",
										"x-file-name": "Home",
										"x-line-number": "27",
										"x-column": "1141",
										"x-component": "p",
										"x-id": "Home_27_1141",
										"x-dynamic": "false",
										children: "Strong fit, sensible cost"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 36,
										columnNumber: 1891
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 1327
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 587
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 249
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 7
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-emerald-900/10 bg-emerald-50/70 shadow-none lg:col-span-5",
					"data-testid": "decision-score-card",
					"x-file-name": "Home",
					"x-line-number": "28",
					"x-column": "6",
					"x-component": "Card",
					"x-id": "Home_28_6",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Home",
						"x-line-number": "28",
						"x-column": "123",
						"x-component": "CardContent",
						"x-id": "Home_28_123",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
								"x-file-name": "Home",
								"x-line-number": "28",
								"x-column": "159",
								"x-component": "SectionEyebrow",
								"x-id": "Home_28_159",
								"x-dynamic": "false",
								children: "Decision snapshot"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 397
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-end justify-between",
								"x-file-name": "Home",
								"x-line-number": "28",
								"x-column": "209",
								"x-component": "div",
								"x-id": "Home_28_209",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Home",
									"x-line-number": "28",
									"x-column": "257",
									"x-component": "div",
									"x-id": "Home_28_257",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("p", {
										className: "font-mono text-4xl font-bold tracking-tight text-emerald-900",
										"data-testid": "decision-score-value",
										"x-file-name": "Home",
										"x-line-number": "28",
										"x-column": "262",
										"x-component": "p",
										"x-id": "Home_28_262",
										"x-dynamic": "false",
										children: ["46", /* @__PURE__ */ _jsxDEV("span", {
											className: "text-lg text-emerald-700/60",
											"x-file-name": "Home",
											"x-line-number": "28",
											"x-column": "375",
											"x-component": "span",
											"x-id": "Home_28_375",
											"x-dynamic": "false",
											children: "/100"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 37,
											columnNumber: 1054
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 37,
										columnNumber: 835
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "mt-1 text-sm text-emerald-950/70",
										"x-file-name": "Home",
										"x-line-number": "28",
										"x-column": "436",
										"x-component": "p",
										"x-id": "Home_28_436",
										"x-dynamic": "false",
										children: "Evidence to decision"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 37,
										columnNumber: 1224
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 722
								}, this), /* @__PURE__ */ _jsxDEV(TrendingUp, {
									className: "mb-2 text-emerald-700",
									size: 26,
									"x-file-name": "Home",
									"x-line-number": "28",
									"x-column": "514",
									"x-component": "TrendingUp",
									"x-id": "Home_28_514",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 1408
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 566
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-6 h-2 overflow-hidden rounded-full bg-emerald-900/10",
								"x-file-name": "Home",
								"x-line-number": "28",
								"x-column": "578",
								"x-component": "div",
								"x-id": "Home_28_578",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV("div", {
									className: "h-full w-[46%] rounded-full bg-emerald-700",
									"x-file-name": "Home",
									"x-line-number": "28",
									"x-column": "651",
									"x-component": "div",
									"x-id": "Home_28_651",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 1768
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 1587
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-4 text-xs leading-5 text-emerald-900/70",
								"data-testid": "decision-score-note",
								"x-file-name": "Home",
								"x-line-number": "28",
								"x-column": "719",
								"x-component": "p",
								"x-id": "Home_28_719",
								"x-dynamic": "false",
								children: "You have enough context to shortlist. Next: test the family affordability of two options."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 1944
							}, this),
							/* @__PURE__ */ _jsxDEV(Link, {
								to: "/money",
								className: "mt-5 inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950",
								"data-testid": "snapshot-money-link",
								children: ["Run money check ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 2409
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 2235
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 228
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-12",
				"x-file-name": "Home",
				"x-line-number": "31",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Home_31_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-end justify-between",
					"x-file-name": "Home",
					"x-line-number": "31",
					"x-column": "31",
					"x-component": "div",
					"x-id": "Home_31_31",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Home",
						"x-line-number": "31",
						"x-column": "79",
						"x-component": "div",
						"x-id": "Home_31_79",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
							"x-file-name": "Home",
							"x-line-number": "31",
							"x-column": "84",
							"x-component": "SectionEyebrow",
							"x-id": "Home_31_84",
							"x-dynamic": "false",
							children: "Start with a direction"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 405
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							className: "font-heading text-2xl font-bold tracking-tight sm:text-3xl",
							"x-file-name": "Home",
							"x-line-number": "31",
							"x-column": "139",
							"x-component": "h2",
							"x-id": "Home_31_139",
							"x-dynamic": "false",
							children: "Three routes worth exploring"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 577
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 294
					}, this), /* @__PURE__ */ _jsxDEV(Link, {
						to: "/explore",
						className: "hidden items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 sm:flex",
						"data-testid": "all-careers-link",
						children: ["See all comparisons ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 973
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 798
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 140
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					"x-file-name": "Home",
					"x-line-number": "31",
					"x-column": "465",
					"x-component": "div",
					"x-id": "Home_31_465",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: overview.careers.length ? overview.careers.map((career, index) => /* @__PURE__ */ _jsxDEV(Card, {
						className: "group border-slate-200/80 bg-white transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md",
						"data-testid": `career-card-${career.id}`,
						"x-file-name": "Home",
						"x-line-number": "31",
						"x-column": "580",
						"x-component": "Card",
						"x-id": "Home_31_580",
						"x-dynamic": "true",
						"x-source-type": "external",
						"x-source-var": "overview",
						"x-source-editable": "false",
						"x-array-var": "overview",
						"x-array-item-param": "career",
						children: /* @__PURE__ */ _jsxDEV(CardContent, {
							className: "p-6",
							"x-file-name": "Home",
							"x-line-number": "31",
							"x-column": "810",
							"x-component": "CardContent",
							"x-id": "Home_31_810",
							"x-dynamic": "true",
							"x-excluded": "true",
							"x-source-type": "external",
							"x-source-var": "overview",
							"x-source-editable": "false",
							"x-array-var": "overview",
							"x-array-item-param": "career",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-start justify-between",
									"x-file-name": "Home",
									"x-line-number": "31",
									"x-column": "839",
									"x-component": "div",
									"x-id": "Home_31_839",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: `grid h-10 w-10 place-items-center rounded-xl ${index === 1 ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`,
										"x-file-name": "Home",
										"x-line-number": "31",
										"x-column": "889",
										"x-component": "span",
										"x-id": "Home_31_889",
										"x-dynamic": "false",
										children: /* @__PURE__ */ _jsxDEV(GraduationCap, {
											size: 19,
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "1037",
											"x-component": "GraduationCap",
											"x-id": "Home_31_1037",
											"x-dynamic": "true",
											"x-source-type": "external",
											"x-source-var": "overview",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "career"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 40,
											columnNumber: 2450
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 2193
									}, this), /* @__PURE__ */ _jsxDEV(Badge, {
										variant: "outline",
										className: "border-slate-200 font-mono text-[10px] uppercase tracking-wider",
										"data-testid": `career-demand-${career.id}`,
										"x-file-name": "Home",
										"x-line-number": "31",
										"x-column": "1071",
										"x-component": "Badge",
										"x-id": "Home_31_1071",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "overview",
										"x-source-path": "careers.demand",
										"x-source-editable": "false",
										"x-array-var": "overview",
										"x-array-item-param": "career",
										children: [career.demand, " demand"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 2729
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 2035
								}, this),
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "mt-7 font-heading text-lg font-bold",
									"data-testid": `career-title-${career.id}`,
									"x-file-name": "Home",
									"x-line-number": "31",
									"x-column": "1251",
									"x-component": "h3",
									"x-id": "Home_31_1251",
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
									lineNumber: 40,
									columnNumber: 3184
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "mt-2 text-sm leading-6 text-slate-500",
									"x-file-name": "Home",
									"x-line-number": "31",
									"x-column": "1364",
									"x-component": "p",
									"x-id": "Home_31_1364",
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
									lineNumber: 40,
									columnNumber: 3568
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "mt-5 font-mono text-sm font-bold text-emerald-700",
									"data-testid": `career-salary-${career.id}`,
									"x-file-name": "Home",
									"x-line-number": "31",
									"x-column": "1437",
									"x-component": "p",
									"x-id": "Home_31_1437",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "1437",
											"x-component": "p",
											"x-id": "Home_31_1437_expr0",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: money(career.salary_min_lpa)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 40,
											columnNumber: 4179
										}, this),
										" — ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "1437",
											"x-component": "p",
											"x-id": "Home_31_1437_expr2",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: money(career.salary_max_lpa)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 222
										}, this),
										" ",
										/* @__PURE__ */ _jsxDEV("span", {
											className: "font-sans font-normal text-slate-400",
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "1609",
											"x-component": "span",
											"x-id": "Home_31_1609",
											"x-dynamic": "false",
											children: "starting range"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 44,
											columnNumber: 220
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 3913
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-5 flex flex-wrap gap-1.5",
									"x-file-name": "Home",
									"x-line-number": "31",
									"x-column": "1689",
									"x-component": "div",
									"x-id": "Home_31_1689",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: career.skills.map((skill) => /* @__PURE__ */ _jsxDEV("span", {
										className: "rounded-md bg-slate-100 px-2 py-1 font-mono text-[10px] text-slate-600",
										"data-testid": `career-skill-${career.id}-${skill.toLowerCase().replaceAll(" ", "-")}`,
										"x-file-name": "Home",
										"x-line-number": "31",
										"x-column": "1762",
										"x-component": "span",
										"x-id": "Home_31_1762",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "career",
										"x-source-editable": "false",
										"x-array-var": "career",
										"x-array-item-param": "skill",
										children: skill
									}, skill, false, {
										fileName: _jsxFileName,
										lineNumber: 44,
										columnNumber: 644
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 44,
									columnNumber: 411
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 1747
						}, this)
					}, career.id, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 1283
					}, this)) : /* @__PURE__ */ _jsxDEV(EmptyData, {
						text: "Career paths are loading from your grounded workspace.",
						"x-file-name": "Home",
						"x-line-number": "31",
						"x-column": "1996",
						"x-component": "EmptyData",
						"x-id": "Home_31_1996",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 1116
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 1010
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-12 grid gap-6 lg:grid-cols-12",
				"x-file-name": "Home",
				"x-line-number": "33",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Home_33_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white lg:col-span-7",
					"data-testid": "timeline-card",
					"x-file-name": "Home",
					"x-line-number": "33",
					"x-column": "58",
					"x-component": "Card",
					"x-id": "Home_33_58",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Home",
						"x-line-number": "33",
						"x-column": "147",
						"x-component": "CardContent",
						"x-id": "Home_33_147",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between",
							"x-file-name": "Home",
							"x-line-number": "33",
							"x-column": "183",
							"x-component": "div",
							"x-id": "Home_33_183",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "234",
								"x-component": "div",
								"x-id": "Home_33_234",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "239",
									"x-component": "SectionEyebrow",
									"x-id": "Home_33_239",
									"x-dynamic": "false",
									children: "Longitudinal record"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 803
								}, this), /* @__PURE__ */ _jsxDEV("h2", {
									className: "font-heading text-xl font-bold",
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "291",
									"x-component": "h2",
									"x-id": "Home_33_291",
									"x-dynamic": "false",
									children: "Your decision trail"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 974
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 690
							}, this), /* @__PURE__ */ _jsxDEV(CircleDollarSign, {
								className: "text-amber-700",
								size: 22,
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "368",
								"x-component": "CircleDollarSign",
								"x-id": "Home_33_368",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 1158
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 531
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "mt-7 space-y-6",
							"x-file-name": "Home",
							"x-line-number": "33",
							"x-column": "431",
							"x-component": "div",
							"x-id": "Home_33_431",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: overview.timeline.length ? overview.timeline.map((item) => /* @__PURE__ */ _jsxDEV("div", {
								className: "flex gap-4",
								"data-testid": `timeline-item-${item.id}`,
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "521",
								"x-component": "div",
								"x-id": "Home_33_521",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "relative flex w-5 justify-center",
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "604",
									"x-component": "div",
									"x-id": "Home_33_604",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: `z-10 mt-1.5 h-2.5 w-2.5 rounded-full ${item.status === "current" ? "bg-amber-500 ring-4 ring-amber-100" : item.status === "done" ? "bg-emerald-600" : "border-2 border-slate-300 bg-white"}`,
										"x-file-name": "Home",
										"x-line-number": "33",
										"x-column": "654",
										"x-component": "span",
										"x-id": "Home_33_654",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 1989
									}, this), item.id !== overview.timeline.at(-1)?.id && /* @__PURE__ */ _jsxDEV("span", {
										className: "absolute top-4 h-12 w-px bg-slate-200",
										"x-file-name": "Home",
										"x-line-number": "33",
										"x-column": "909",
										"x-component": "span",
										"x-id": "Home_33_909",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 2353
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 1781
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex flex-1 items-start justify-between gap-3",
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "974",
									"x-component": "div",
									"x-id": "Home_33_974",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										"x-file-name": "Home",
										"x-line-number": "33",
										"x-column": "1037",
										"x-component": "div",
										"x-id": "Home_33_1037",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("p", {
											className: "text-sm font-semibold text-slate-800",
											"x-file-name": "Home",
											"x-line-number": "33",
											"x-column": "1042",
											"x-component": "p",
											"x-id": "Home_33_1042",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "timeline.label",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "item",
											children: item.label
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 2813
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "mt-1 text-xs leading-5 text-slate-500",
											"x-file-name": "Home",
											"x-line-number": "33",
											"x-column": "1110",
											"x-component": "p",
											"x-id": "Home_33_1110",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "overview",
											"x-source-path": "timeline.detail",
											"x-source-editable": "false",
											"x-array-var": "overview",
											"x-array-item-param": "item",
											children: item.detail
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 3150
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 2698
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "shrink-0 font-mono text-[10px] uppercase tracking-wider text-slate-400",
										"x-file-name": "Home",
										"x-line-number": "33",
										"x-column": "1186",
										"x-component": "span",
										"x-id": "Home_33_1186",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "overview",
										"x-source-path": "timeline.date",
										"x-source-editable": "false",
										"x-array-var": "overview",
										"x-array-item-param": "item",
										children: item.date
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 3496
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 2527
								}, this)]
							}, item.id, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 1590
							}, this)) : /* @__PURE__ */ _jsxDEV(EmptyData, {
								text: "Your decision trail will appear here.",
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "1309",
								"x-component": "EmptyData",
								"x-id": "Home_33_1309",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 3890
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 1342
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 362
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 167
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white lg:col-span-5",
					"data-testid": "next-step-card",
					"x-file-name": "Home",
					"x-line-number": "33",
					"x-column": "1395",
					"x-component": "Card",
					"x-id": "Home_33_1395",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6 sm:p-8",
						"x-file-name": "Home",
						"x-line-number": "33",
						"x-column": "1485",
						"x-component": "CardContent",
						"x-id": "Home_33_1485",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "1521",
								"x-component": "SectionEyebrow",
								"x-id": "Home_33_1521",
								"x-dynamic": "false",
								children: "One useful next step"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 4462
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "font-heading text-xl font-bold",
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "1574",
								"x-component": "h2",
								"x-id": "Home_33_1574",
								"x-dynamic": "false",
								children: "Stress-test the shortlist"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 4636
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-3 text-sm leading-6 text-slate-500",
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "1651",
								"x-component": "p",
								"x-id": "Home_33_1651",
								"x-dynamic": "false",
								children: "A college can look affordable on paper and still feel tight month to month. Model income, savings, and EMI pressure before you commit."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 4822
							}, this),
							/* @__PURE__ */ _jsxDEV(Link, {
								to: "/money",
								"data-testid": "next-step-money-link",
								children: /* @__PURE__ */ _jsxDEV(Button, {
									className: "mt-7 w-full bg-emerald-700 text-white hover:bg-emerald-800 hover:text-white",
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "1895",
									"x-component": "Button",
									"x-id": "Home_33_1895",
									"x-dynamic": "false",
									children: ["Open True Cost & ROI ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 5404
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 5174
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 5121
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-6 flex items-center gap-2 text-xs text-slate-500",
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "2052",
								"x-component": "div",
								"x-id": "Home_33_2052",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, {
									size: 15,
									className: "text-emerald-600",
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "2121",
									"x-component": "CheckCircle2",
									"x-id": "Home_33_2121",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 5623
								}, this), " No signup · your demo data stays local to this workspace"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 5444
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 4291
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 4091
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 10
	}, this);
}
_s(Home, "bhZJDCapdpSsOPSBfHy8+VuGL+Y=", false, function() {
	return [useQuery];
});
_c = Home;
function Metric({ value, label, testId }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		"data-testid": testId,
		"x-file-name": "Home",
		"x-line-number": "37",
		"x-column": "101",
		"x-component": "div",
		"x-id": "Home_37_101",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("p", {
			className: "font-mono text-2xl font-bold text-white",
			"x-file-name": "Home",
			"x-line-number": "37",
			"x-column": "127",
			"x-component": "p",
			"x-id": "Home_37_127",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "value",
			"x-source-editable": "false",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 144
		}, this), /* @__PURE__ */ _jsxDEV("p", {
			className: "mt-1 text-[10px] uppercase tracking-wider text-emerald-100/60",
			"x-file-name": "Home",
			"x-line-number": "37",
			"x-column": "193",
			"x-component": "p",
			"x-id": "Home_37_193",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "label",
			"x-source-editable": "false",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 383
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 58,
		columnNumber: 10
	}, this);
}
_c2 = Metric;
function EmptyData({ text }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "rounded-xl border border-dashed border-slate-200 p-6 text-sm text-slate-500",
		"data-testid": "data-loading-state",
		"x-file-name": "Home",
		"x-line-number": "38",
		"x-column": "56",
		"x-component": "div",
		"x-id": "Home_38_56",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "text",
		"x-source-editable": "false",
		children: text
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 65,
		columnNumber: 10
	}, this);
}
_c3 = EmptyData;
var _c, _c2, _c3;
$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Metric");
$RefreshReg$(_c3, "EmptyData");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Home.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Home.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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RG9sbGFyU2lnbiIsIkdyYWR1YXRpb25DYXAiLCJNYXBQaW4iLCJTcGFya2xlcyIsIlRhcmdldCIsIlRyZW5kaW5nVXAiLCJCYWRnZSIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsImFwaUdldCIsIkZBTExCQUNLX09WRVJWSUVXIiwibW9uZXkiLCJTZWN0aW9uRXllYnJvdyIsIkhvbWUiLCJkYXRhIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwicmV0cnkiLCJvdmVydmlldyIsImxlYXJuZXIiLCJuYW1lIiwiZGlzcGxheSIsImNsYXNzX2xldmVsIiwic3RyZWFtIiwiY2l0eSIsImdvYWwiLCJjYXJlZXJzIiwibGVuZ3RoIiwibWFwIiwiY2FyZWVyIiwiaW5kZXgiLCJpZCIsImRlbWFuZCIsInRpdGxlIiwidGFnbGluZSIsInNhbGFyeV9taW5fbHBhIiwic2FsYXJ5X21heF9scGEiLCJza2lsbHMiLCJza2lsbCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZUFsbCIsInRpbWVsaW5lIiwiaXRlbSIsInN0YXR1cyIsImF0IiwibGFiZWwiLCJkZXRhaWwiLCJkYXRlIiwiTWV0cmljIiwidmFsdWUiLCJ0ZXN0SWQiLCJFbXB0eURhdGEiLCJ0ZXh0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkhvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBDaGVja0NpcmNsZTIsIENpcmNsZURvbGxhclNpZ24sIEdyYWR1YXRpb25DYXAsIE1hcFBpbiwgU3BhcmtsZXMsIFRhcmdldCwgVHJlbmRpbmdVcCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBhcGlHZXQgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19PVkVSVklFVywgbW9uZXksIHR5cGUgT3ZlcnZpZXcgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcbmltcG9ydCB7IFNlY3Rpb25FeWVicm93IH0gZnJvbSBcIkAvY29tcG9uZW50cy9DYW1wdXNTaGVsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcIm92ZXJ2aWV3XCJdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8T3ZlcnZpZXc+KFwiL2NhbXB1cy9vdmVydmlld1wiKSwgcmV0cnk6IGZhbHNlIH0pO1xuICBjb25zdCBvdmVydmlldyA9IGRhdGEgPz8gRkFMTEJBQ0tfT1ZFUlZJRVc7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgcHktOCBzbTpweC02IGxnOnB4LTggbGc6cHktMTJcIj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgYmctWyMxMDJhMjVdIHB4LTYgcHktOCB0ZXh0LXdoaXRlIHNoYWRvdy14bCBzaGFkb3ctZW1lcmFsZC05NTAvMTAgc206cHgtMTAgc206cHktMTIgbGc6cHgtMTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXJpZ2h0LTIwIC10b3AtMzIgaC04MCB3LTgwIHJvdW5kZWQtZnVsbCBib3JkZXItWzM2cHhdIGJvcmRlci1lbWVyYWxkLTQwMC8xMFwiIC8+PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTQwIHJpZ2h0LTI4IGgtNzIgdy03MiByb3VuZGVkLWZ1bGwgYm9yZGVyLVsxOHB4XSBib3JkZXItYW1iZXItMzAwLzEwXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctM3hsIGFuaW1hdGUtW2ZhZGUtdXBfMC41c19lYXNlLW91dF9ib3RoXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj48c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC00MDAvMTUgcHgtMyBweS0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LWVtZXJhbGQtMjAwXCIgZGF0YS10ZXN0aWQ9XCJkZW1vLW1vZGUtYmFkZ2VcIj5EZWNpc2lvbiB3b3Jrc3BhY2UgwrcgZGVtbyBtb2RlPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImgtMSB3LTEgcm91bmRlZC1mdWxsIGJnLWFtYmVyLTMwMFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWVtZXJhbGQtMTAwLzcwXCIgZGF0YS10ZXN0aWQ9XCJ0b2RheS1sYWJlbFwiPlVwZGF0ZWQgZm9yIDIwMjUgaW50YWtlPC9zcGFuPjwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtNHhsIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctWzAuOThdIHRyYWNraW5nLVstMC4wNGVtXSBzbTp0ZXh0LTZ4bFwiPk1ha2UgdGhlIG5leHQ8YnIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTMwMFwiPmZvdXIgeWVhcnMgY291bnQuPC9zcGFuPjwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTYgbWF4LXcteGwgdGV4dC1zbSBsZWFkaW5nLTcgdGV4dC1lbWVyYWxkLTUwLzc1IHNtOnRleHQtYmFzZVwiPkNhbXB1c1JvdXRlIGhlbHBzIGZhbWlsaWVzIGNvbXBhcmUgdGhlIHJlYWwgY29zdCwgZml0LCBhbmQgZmlyc3QgY2FyZWVyIHNpZ25hbCBvZiBhbiBlbmdpbmVlcmluZyBjaG9pY2Ug4oCUIGJlZm9yZSB0aGUgYXBwbGljYXRpb24gZmVlLjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGZsZXggZmxleC13cmFwIGdhcC0zXCI+PExpbmsgdG89XCIvZXhwbG9yZVwiIGRhdGEtdGVzdGlkPVwiaGVyby1leHBsb3JlLWxpbmtcIj48QnV0dG9uIGNsYXNzTmFtZT1cImJnLWFtYmVyLTQwMCB0ZXh0LXNsYXRlLTk1MCBob3ZlcjpiZy1hbWJlci0zMDAgaG92ZXI6dGV4dC1zbGF0ZS05NTBcIj5FeHBsb3JlIGNvbGxlZ2VzIDxBcnJvd1JpZ2h0IHNpemU9ezE2fSAvPjwvQnV0dG9uPjwvTGluaz48TGluayB0bz1cIi9jb3Vuc2VsbG9yXCIgZGF0YS10ZXN0aWQ9XCJoZXJvLWNvdW5zZWxsb3ItbGlua1wiPjxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJib3JkZXItd2hpdGUvMjAgYmctd2hpdGUvNSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtc2xhdGUtOTAwXCI+QXNrIHRoZSBjb3Vuc2VsbG9yIDxTcGFya2xlcyBzaXplPXsxNn0gLz48L0J1dHRvbj48L0xpbms+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMTAgZ3JpZCBtYXgtdy14bCBncmlkLWNvbHMtMyBnYXAtMiBib3JkZXItdCBib3JkZXItd2hpdGUvMTAgcHQtNSBzbTphYnNvbHV0ZSBzbTpib3R0b20tMTAgc206cmlnaHQtMTAgc206bXQtMCBzbTptYXgtdy1zbSBzbTpib3JkZXItdC0wIHNtOnB0LTBcIj48TWV0cmljIHZhbHVlPVwiNlwiIGxhYmVsPVwiY29sbGVnZXNcIiB0ZXN0SWQ9XCJoZXJvLWNvbGxlZ2VzLW1ldHJpY1wiIC8+PE1ldHJpYyB2YWx1ZT1cIjNcIiBsYWJlbD1cImNhcmVlciBwYXRoc1wiIHRlc3RJZD1cImhlcm8tY2FyZWVycy1tZXRyaWNcIiAvPjxNZXRyaWMgdmFsdWU9XCIxXCIgbGFiZWw9XCJncm91bmRlZCBndWlkZVwiIHRlc3RJZD1cImhlcm8tZ3VpZGUtbWV0cmljXCIgLz48L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC04IGdyaWQgZ2FwLTYgbGc6Z3JpZC1jb2xzLTEyXCI+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItc2xhdGUtMjAwLzgwIGJnLXdoaXRlIHNoYWRvdy1bMF8ycHhfMTBweF8tM3B4X3JnYmEoMCwwLDAsMC4wNSldIGxnOmNvbC1zcGFuLTdcIiBkYXRhLXRlc3RpZD1cImxlYXJuZXItcHJvZmlsZS1jYXJkXCI+PENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBzbTpwLThcIj48U2VjdGlvbkV5ZWJyb3c+WW91ciByb3V0ZSBzbyBmYXI8L1NlY3Rpb25FeWVicm93PjxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTYgc206ZmxleC1yb3cgc206aXRlbXMtZW5kXCI+PGRpdj48aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodFwiIGRhdGEtdGVzdGlkPVwibGVhcm5lci1uYW1lXCI+e292ZXJ2aWV3LmxlYXJuZXIubmFtZX08L2gyPjxwIGNsYXNzTmFtZT1cIm10LTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LXNsYXRlLTUwMFwiIGRhdGEtdGVzdGlkPVwibGVhcm5lci1wcm9maWxlLXN1bW1hcnlcIj48c3Bhbj57b3ZlcnZpZXcubGVhcm5lci5jbGFzc19sZXZlbH0gwrcge292ZXJ2aWV3LmxlYXJuZXIuc3RyZWFtfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPi88L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj48TWFwUGluIHNpemU9ezEzfSAvPiB7b3ZlcnZpZXcubGVhcm5lci5jaXR5fTwvc3Bhbj48L3A+PHAgY2xhc3NOYW1lPVwibXQtNSBtYXgtdy1tZCB0ZXh0LXNtIGxlYWRpbmctNiB0ZXh0LXNsYXRlLTYwMFwiPkdvYWw6IDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPntvdmVydmlldy5sZWFybmVyLmdvYWx9PC9zdHJvbmc+PC9wPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYmctYW1iZXItNTAgcC00IHNtOm1pbi13LTQ0XCIgZGF0YS10ZXN0aWQ9XCJwcm9maWxlLWdvYWwtY2FyZFwiPjxUYXJnZXQgc2l6ZT17MTd9IGNsYXNzTmFtZT1cInRleHQtYW1iZXItNzAwXCIgLz48cCBjbGFzc05hbWU9XCJtdC0zIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1hbWJlci03MDBcIj5Zb3VyIG5vcnRoIHN0YXI8L3A+PHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1hbWJlci05NTBcIj5TdHJvbmcgZml0LCBzZW5zaWJsZSBjb3N0PC9wPjwvZGl2PjwvZGl2PjwvQ2FyZENvbnRlbnQ+PC9DYXJkPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLWVtZXJhbGQtOTAwLzEwIGJnLWVtZXJhbGQtNTAvNzAgc2hhZG93LW5vbmUgbGc6Y29sLXNwYW4tNVwiIGRhdGEtdGVzdGlkPVwiZGVjaXNpb24tc2NvcmUtY2FyZFwiPjxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgc206cC04XCI+PFNlY3Rpb25FeWVicm93PkRlY2lzaW9uIHNuYXBzaG90PC9TZWN0aW9uRXllYnJvdz48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlblwiPjxkaXY+PHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWVtZXJhbGQtOTAwXCIgZGF0YS10ZXN0aWQ9XCJkZWNpc2lvbi1zY29yZS12YWx1ZVwiPjQ2PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWVtZXJhbGQtNzAwLzYwXCI+LzEwMDwvc3Bhbj48L3A+PHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZW1lcmFsZC05NTAvNzBcIj5FdmlkZW5jZSB0byBkZWNpc2lvbjwvcD48L2Rpdj48VHJlbmRpbmdVcCBjbGFzc05hbWU9XCJtYi0yIHRleHQtZW1lcmFsZC03MDBcIiBzaXplPXsyNn0gLz48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTYgaC0yIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGwgYmctZW1lcmFsZC05MDAvMTBcIj48ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LVs0NiVdIHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTcwMFwiIC8+PC9kaXY+PHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXhzIGxlYWRpbmctNSB0ZXh0LWVtZXJhbGQtOTAwLzcwXCIgZGF0YS10ZXN0aWQ9XCJkZWNpc2lvbi1zY29yZS1ub3RlXCI+WW91IGhhdmUgZW5vdWdoIGNvbnRleHQgdG8gc2hvcnRsaXN0LiBOZXh0OiB0ZXN0IHRoZSBmYW1pbHkgYWZmb3JkYWJpbGl0eSBvZiB0d28gb3B0aW9ucy48L3A+PExpbmsgdG89XCIvbW9uZXlcIiBjbGFzc05hbWU9XCJtdC01IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtODAwIGhvdmVyOnRleHQtZW1lcmFsZC05NTBcIiBkYXRhLXRlc3RpZD1cInNuYXBzaG90LW1vbmV5LWxpbmtcIj5SdW4gbW9uZXkgY2hlY2sgPEFycm93UmlnaHQgc2l6ZT17MTR9IC8+PC9MaW5rPjwvQ2FyZENvbnRlbnQ+PC9DYXJkPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTEyXCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW5cIj48ZGl2PjxTZWN0aW9uRXllYnJvdz5TdGFydCB3aXRoIGEgZGlyZWN0aW9uPC9TZWN0aW9uRXllYnJvdz48aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCBzbTp0ZXh0LTN4bFwiPlRocmVlIHJvdXRlcyB3b3J0aCBleHBsb3Jpbmc8L2gyPjwvZGl2PjxMaW5rIHRvPVwiL2V4cGxvcmVcIiBjbGFzc05hbWU9XCJoaWRkZW4gaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgZm9udC1ib2xkIHRleHQtZW1lcmFsZC03MDAgaG92ZXI6dGV4dC1lbWVyYWxkLTkwMCBzbTpmbGV4XCIgZGF0YS10ZXN0aWQ9XCJhbGwtY2FyZWVycy1saW5rXCI+U2VlIGFsbCBjb21wYXJpc29ucyA8QXJyb3dSaWdodCBzaXplPXsxNH0gLz48L0xpbms+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTNcIj57b3ZlcnZpZXcuY2FyZWVycy5sZW5ndGggPyBvdmVydmlldy5jYXJlZXJzLm1hcCgoY2FyZWVyLCBpbmRleCkgPT4gPENhcmQga2V5PXtjYXJlZXIuaWR9IGNsYXNzTmFtZT1cImdyb3VwIGJvcmRlci1zbGF0ZS0yMDAvODAgYmctd2hpdGUgdHJhbnNpdGlvbi1bdHJhbnNmb3JtLGJveC1zaGFkb3csYm9yZGVyLWNvbG9yXSBkdXJhdGlvbi0yMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6Ym9yZGVyLXNsYXRlLTMwMCBob3ZlcjpzaGFkb3ctbWRcIiBkYXRhLXRlc3RpZD17YGNhcmVlci1jYXJkLSR7Y2FyZWVyLmlkfWB9PjxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+PHNwYW4gY2xhc3NOYW1lPXtgZ3JpZCBoLTEwIHctMTAgcGxhY2UtaXRlbXMtY2VudGVyIHJvdW5kZWQteGwgJHtpbmRleCA9PT0gMSA/IFwiYmctYW1iZXItMTAwIHRleHQtYW1iZXItODAwXCIgOiBcImJnLWVtZXJhbGQtMTAwIHRleHQtZW1lcmFsZC04MDBcIn1gfT48R3JhZHVhdGlvbkNhcCBzaXplPXsxOX0gLz48L3NwYW4+PEJhZGdlIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwiYm9yZGVyLXNsYXRlLTIwMCBmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCIgZGF0YS10ZXN0aWQ9e2BjYXJlZXItZGVtYW5kLSR7Y2FyZWVyLmlkfWB9PntjYXJlZXIuZGVtYW5kfSBkZW1hbmQ8L0JhZGdlPjwvZGl2PjxoMyBjbGFzc05hbWU9XCJtdC03IGZvbnQtaGVhZGluZyB0ZXh0LWxnIGZvbnQtYm9sZFwiIGRhdGEtdGVzdGlkPXtgY2FyZWVyLXRpdGxlLSR7Y2FyZWVyLmlkfWB9PntjYXJlZXIudGl0bGV9PC9oMz48cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gbGVhZGluZy02IHRleHQtc2xhdGUtNTAwXCI+e2NhcmVlci50YWdsaW5lfTwvcD48cCBjbGFzc05hbWU9XCJtdC01IGZvbnQtbW9ubyB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtNzAwXCIgZGF0YS10ZXN0aWQ9e2BjYXJlZXItc2FsYXJ5LSR7Y2FyZWVyLmlkfWB9Pnttb25leShjYXJlZXIuc2FsYXJ5X21pbl9scGEpfSDigJQge21vbmV5KGNhcmVlci5zYWxhcnlfbWF4X2xwYSl9IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2FucyBmb250LW5vcm1hbCB0ZXh0LXNsYXRlLTQwMFwiPnN0YXJ0aW5nIHJhbmdlPC9zcGFuPjwvcD48ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBmbGV4LXdyYXAgZ2FwLTEuNVwiPntjYXJlZXIuc2tpbGxzLm1hcChza2lsbCA9PiA8c3BhbiBrZXk9e3NraWxsfSBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLXNsYXRlLTEwMCBweC0yIHB5LTEgZm9udC1tb25vIHRleHQtWzEwcHhdIHRleHQtc2xhdGUtNjAwXCIgZGF0YS10ZXN0aWQ9e2BjYXJlZXItc2tpbGwtJHtjYXJlZXIuaWR9LSR7c2tpbGwudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIil9YH0+e3NraWxsfTwvc3Bhbj4pfTwvZGl2PjwvQ2FyZENvbnRlbnQ+PC9DYXJkPikgOiA8RW1wdHlEYXRhIHRleHQ9XCJDYXJlZXIgcGF0aHMgYXJlIGxvYWRpbmcgZnJvbSB5b3VyIGdyb3VuZGVkIHdvcmtzcGFjZS5cIiAvPn08L2Rpdj48L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC0xMiBncmlkIGdhcC02IGxnOmdyaWQtY29scy0xMlwiPjxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1zbGF0ZS0yMDAvODAgYmctd2hpdGUgbGc6Y29sLXNwYW4tN1wiIGRhdGEtdGVzdGlkPVwidGltZWxpbmUtY2FyZFwiPjxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgc206cC04XCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj48ZGl2PjxTZWN0aW9uRXllYnJvdz5Mb25naXR1ZGluYWwgcmVjb3JkPC9TZWN0aW9uRXllYnJvdz48aDIgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQteGwgZm9udC1ib2xkXCI+WW91ciBkZWNpc2lvbiB0cmFpbDwvaDI+PC9kaXY+PENpcmNsZURvbGxhclNpZ24gY2xhc3NOYW1lPVwidGV4dC1hbWJlci03MDBcIiBzaXplPXsyMn0gLz48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTcgc3BhY2UteS02XCI+e292ZXJ2aWV3LnRpbWVsaW5lLmxlbmd0aCA/IG92ZXJ2aWV3LnRpbWVsaW5lLm1hcChpdGVtID0+IDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiIGtleT17aXRlbS5pZH0gZGF0YS10ZXN0aWQ9e2B0aW1lbGluZS1pdGVtLSR7aXRlbS5pZH1gfT48ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy01IGp1c3RpZnktY2VudGVyXCI+PHNwYW4gY2xhc3NOYW1lPXtgei0xMCBtdC0xLjUgaC0yLjUgdy0yLjUgcm91bmRlZC1mdWxsICR7aXRlbS5zdGF0dXMgPT09IFwiY3VycmVudFwiID8gXCJiZy1hbWJlci01MDAgcmluZy00IHJpbmctYW1iZXItMTAwXCIgOiBpdGVtLnN0YXR1cyA9PT0gXCJkb25lXCIgPyBcImJnLWVtZXJhbGQtNjAwXCIgOiBcImJvcmRlci0yIGJvcmRlci1zbGF0ZS0zMDAgYmctd2hpdGVcIn1gfSAvPntpdGVtLmlkICE9PSBvdmVydmlldy50aW1lbGluZS5hdCgtMSk/LmlkICYmIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IGgtMTIgdy1weCBiZy1zbGF0ZS0yMDBcIiAvPn08L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPjxkaXY+PHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+e2l0ZW0ubGFiZWx9PC9wPjxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC14cyBsZWFkaW5nLTUgdGV4dC1zbGF0ZS01MDBcIj57aXRlbS5kZXRhaWx9PC9wPjwvZGl2PjxzcGFuIGNsYXNzTmFtZT1cInNocmluay0wIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS00MDBcIj57aXRlbS5kYXRlfTwvc3Bhbj48L2Rpdj48L2Rpdj4pIDogPEVtcHR5RGF0YSB0ZXh0PVwiWW91ciBkZWNpc2lvbiB0cmFpbCB3aWxsIGFwcGVhciBoZXJlLlwiIC8+fTwvZGl2PjwvQ2FyZENvbnRlbnQ+PC9DYXJkPjxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1zbGF0ZS0yMDAvODAgYmctd2hpdGUgbGc6Y29sLXNwYW4tNVwiIGRhdGEtdGVzdGlkPVwibmV4dC1zdGVwLWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHNtOnAtOFwiPjxTZWN0aW9uRXllYnJvdz5PbmUgdXNlZnVsIG5leHQgc3RlcDwvU2VjdGlvbkV5ZWJyb3c+PGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LXhsIGZvbnQtYm9sZFwiPlN0cmVzcy10ZXN0IHRoZSBzaG9ydGxpc3Q8L2gyPjxwIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1zbSBsZWFkaW5nLTYgdGV4dC1zbGF0ZS01MDBcIj5BIGNvbGxlZ2UgY2FuIGxvb2sgYWZmb3JkYWJsZSBvbiBwYXBlciBhbmQgc3RpbGwgZmVlbCB0aWdodCBtb250aCB0byBtb250aC4gTW9kZWwgaW5jb21lLCBzYXZpbmdzLCBhbmQgRU1JIHByZXNzdXJlIGJlZm9yZSB5b3UgY29tbWl0LjwvcD48TGluayB0bz1cIi9tb25leVwiIGRhdGEtdGVzdGlkPVwibmV4dC1zdGVwLW1vbmV5LWxpbmtcIj48QnV0dG9uIGNsYXNzTmFtZT1cIm10LTcgdy1mdWxsIGJnLWVtZXJhbGQtNzAwIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC04MDAgaG92ZXI6dGV4dC13aGl0ZVwiPk9wZW4gVHJ1ZSBDb3N0ICYgUk9JIDxBcnJvd1JpZ2h0IHNpemU9ezE2fSAvPjwvQnV0dG9uPjwvTGluaz48ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPjxDaGVja0NpcmNsZTIgc2l6ZT17MTV9IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC02MDBcIiAvPiBObyBzaWdudXAgwrcgeW91ciBkZW1vIGRhdGEgc3RheXMgbG9jYWwgdG8gdGhpcyB3b3Jrc3BhY2U8L2Rpdj48L0NhcmRDb250ZW50PjwvQ2FyZD48L3NlY3Rpb24+XG4gIDwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gTWV0cmljKHsgdmFsdWUsIGxhYmVsLCB0ZXN0SWQgfTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyB0ZXN0SWQ6IHN0cmluZyB9KSB7IHJldHVybiA8ZGl2IGRhdGEtdGVzdGlkPXt0ZXN0SWR9PjxwIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPnt2YWx1ZX08L3A+PHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1lbWVyYWxkLTEwMC82MFwiPntsYWJlbH08L3A+PC9kaXY+OyB9XG5mdW5jdGlvbiBFbXB0eURhdGEoeyB0ZXh0IH06IHsgdGV4dDogc3RyaW5nIH0pIHsgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItc2xhdGUtMjAwIHAtNiB0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCIgZGF0YS10ZXN0aWQ9XCJkYXRhLWxvYWRpbmctc3RhdGVcIj57dGV4dH08L2Rpdj47IH0iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL3BhZ2VzL0hvbWUudHN4In0=