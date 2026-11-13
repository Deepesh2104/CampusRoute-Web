import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/CampusShell.tsx");const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import { Link, NavLink } from "/node_modules/.vite/deps/react-router-dom.js?v=0cd69c2d";
import { ArrowUpRight, Compass, IndianRupee, LayoutDashboard, ListChecks, MessageCircle, ShieldCheck } from "/src/lib/lucide-react.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
var _jsxFileName = "/app/frontend/src/components/CampusShell.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0cd69c2d";
const navItems = [
	{
		to: "/",
		label: "Home",
		icon: LayoutDashboard,
		testId: "nav-home-link"
	},
	{
		to: "/explore",
		label: "Explore",
		icon: Compass,
		testId: "nav-explore-link"
	},
	{
		to: "/money",
		label: "Money & ROI",
		icon: IndianRupee,
		testId: "nav-money-link"
	},
	{
		to: "/planner",
		label: "Planner",
		icon: ListChecks,
		testId: "nav-planner-link"
	},
	{
		to: "/counsellor",
		label: "Counsellor",
		icon: MessageCircle,
		testId: "nav-counsellor-link"
	}
];
export default function CampusShell({ children }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "min-h-screen bg-[#FAF9F5] text-slate-900",
		"x-file-name": "CampusShell",
		"x-line-number": "16",
		"x-column": "4",
		"x-component": "div",
		"x-id": "CampusShell_16_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("header", {
				className: "sticky top-0 z-30 border-b border-slate-200/80 bg-[#FAF9F5]/90 backdrop-blur-md",
				"x-file-name": "CampusShell",
				"x-line-number": "17",
				"x-column": "6",
				"x-component": "header",
				"x-id": "CampusShell_17_6",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8",
					"x-file-name": "CampusShell",
					"x-line-number": "18",
					"x-column": "8",
					"x-component": "div",
					"x-id": "CampusShell_18_8",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV(Link, {
							to: "/",
							className: "flex items-center gap-3",
							"data-testid": "brand-home-link",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "grid h-9 w-9 place-items-center rounded-xl bg-emerald-700 text-sm font-bold text-white shadow-sm",
								"x-file-name": "CampusShell",
								"x-line-number": "20",
								"x-column": "12",
								"x-component": "span",
								"x-id": "CampusShell_20_12",
								"x-dynamic": "false",
								children: "CR"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "hidden sm:block",
								"x-file-name": "CampusShell",
								"x-line-number": "21",
								"x-column": "12",
								"x-component": "span",
								"x-id": "CampusShell_21_12",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "block font-heading text-[15px] font-extrabold tracking-tight",
									"x-file-name": "CampusShell",
									"x-line-number": "21",
									"x-column": "46",
									"x-component": "span",
									"x-id": "CampusShell_21_46",
									"x-dynamic": "false",
									children: "CampusRoute"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 168
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500",
									"x-file-name": "CampusShell",
									"x-line-number": "21",
									"x-column": "143",
									"x-component": "span",
									"x-id": "CampusShell_21_143",
									"x-dynamic": "false",
									children: "decisions, grounded"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 386
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("nav", {
							className: "flex items-center gap-1 overflow-x-auto",
							"aria-label": "Main navigation",
							"x-file-name": "CampusShell",
							"x-line-number": "23",
							"x-column": "10",
							"x-component": "nav",
							"x-id": "CampusShell_23_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: navItems.map(({ to, label, icon: Icon, testId }) => /* @__PURE__ */ _jsxDEV(NavLink, {
								to,
								end: to === "/",
								"data-testid": testId,
								className: ({ isActive }) => `group flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-[color,background-color,transform] duration-200 ${isActive ? "bg-emerald-100 text-emerald-800" : "text-slate-500 hover:-translate-y-0.5 hover:bg-white hover:text-slate-900"}`,
								children: [
									/* @__PURE__ */ _jsxDEV(Icon, {
										size: 15,
										strokeWidth: 1.8,
										"x-file-name": "CampusShell",
										"x-line-number": "26",
										"x-column": "16",
										"x-component": "Icon",
										"x-id": "CampusShell_26_16",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 52,
										columnNumber: 17
									}, this),
									" ",
									/* @__PURE__ */ _jsxDEV("span", {
										className: "hidden md:inline",
										"x-file-name": "CampusShell",
										"x-line-number": "26",
										"x-column": "53",
										"x-component": "span",
										"x-id": "CampusShell_26_53",
										"x-dynamic": "true",
										"x-source-type": "prop",
										"x-source-var": "label",
										"x-source-editable": "false",
										children: label
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 52,
										columnNumber: 174
									}, this)
								]
							}, to, true, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2",
							"x-file-name": "CampusShell",
							"x-line-number": "30",
							"x-column": "10",
							"x-component": "div",
							"x-id": "CampusShell_30_10",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(Link, {
								to: "/consent",
								className: "hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-emerald-800 sm:flex",
								"data-testid": "consent-settings-link",
								children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, {
									size: 14,
									"x-file-name": "CampusShell",
									"x-line-number": "31",
									"x-column": "295",
									"x-component": "ShieldCheck",
									"x-id": "CampusShell_31_295",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 296
								}, this), " Data"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-2 shadow-sm",
								"data-testid": "profile-badge",
								"x-file-name": "CampusShell",
								"x-line-number": "32",
								"x-column": "12",
								"x-component": "div",
								"x-id": "CampusShell_32_12",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "grid h-7 w-7 place-items-center rounded-full bg-amber-100 font-mono text-[10px] font-bold text-amber-800",
									"x-file-name": "CampusShell",
									"x-line-number": "33",
									"x-column": "14",
									"x-component": "span",
									"x-id": "CampusShell_33_14",
									"x-dynamic": "false",
									children: "AS"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 58,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "hidden text-xs font-semibold text-slate-700 lg:block",
									"x-file-name": "CampusShell",
									"x-line-number": "34",
									"x-column": "14",
									"x-component": "span",
									"x-id": "CampusShell_34_14",
									"x-dynamic": "false",
									children: "Aarav"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				"x-file-name": "CampusShell",
				"x-line-number": "39",
				"x-column": "6",
				"x-component": "main",
				"x-id": "CampusShell_39_6",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "children",
				"x-source-editable": "false",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("footer", {
				className: "mx-auto flex max-w-7xl items-center justify-between border-t border-slate-200 px-4 py-8 text-xs text-slate-500 sm:px-6 lg:px-8",
				"x-file-name": "CampusShell",
				"x-line-number": "40",
				"x-column": "6",
				"x-component": "footer",
				"x-id": "CampusShell_40_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("span", {
					"data-testid": "footer-disclaimer",
					"x-file-name": "CampusShell",
					"x-line-number": "41",
					"x-column": "8",
					"x-component": "span",
					"x-id": "CampusShell_41_8",
					"x-dynamic": "false",
					children: "CampusRoute demo · curated 2025 reference data"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					className: "flex items-center gap-1 font-mono uppercase tracking-wider",
					"x-file-name": "CampusShell",
					"x-line-number": "42",
					"x-column": "8",
					"x-component": "span",
					"x-id": "CampusShell_42_8",
					"x-dynamic": "false",
					children: ["Built for better decisions ", /* @__PURE__ */ _jsxDEV(ArrowUpRight, {
						size: 13,
						"x-file-name": "CampusShell",
						"x-line-number": "42",
						"x-column": "112",
						"x-component": "ArrowUpRight",
						"x-id": "CampusShell_42_112",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 232
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 10
	}, this);
}
_c = CampusShell;
export function SectionEyebrow({ children }) {
	return /* @__PURE__ */ _jsxDEV("p", {
		className: "mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700",
		"x-file-name": "CampusShell",
		"x-line-number": "48",
		"x-column": "79",
		"x-component": "p",
		"x-id": "CampusShell_48_79",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "children",
		"x-source-editable": "false",
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 76,
		columnNumber: 10
	}, this);
}
_c2 = SectionEyebrow;
export function ConfidenceBadge({ value }) {
	return /* @__PURE__ */ _jsxDEV(Badge, {
		variant: "outline",
		className: `rounded-md border px-2 py-1 font-mono text-[10px] uppercase tracking-wider ${value === "High" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-amber-200 bg-amber-50 text-amber-700"}`,
		"data-testid": `confidence-${value.toLowerCase()}-badge`,
		"x-file-name": "CampusShell",
		"x-line-number": "49",
		"x-column": "71",
		"x-component": "Badge",
		"x-id": "CampusShell_49_71",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "value",
		"x-source-editable": "false",
		children: [value, " confidence"]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 83,
		columnNumber: 10
	}, this);
}
_c3 = ConfidenceBadge;
var _c, _c2, _c3;
$RefreshReg$(_c, "CampusShell");
$RefreshReg$(_c2, "SectionEyebrow");
$RefreshReg$(_c3, "ConfidenceBadge");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/CampusShell.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/CampusShell.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/CampusShell.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/CampusShell.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUQ7U0FBTSxXQUFVO1NBQXNEO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTttQkFBQztRQUFXOzs7O2dCQUMvRTs7Ozs7ZUFDRjs7Ozs7O0tBQ0Y7Ozs7OztHQUNDOzs7OztHQUNSLHdCQUFDLFFBQUQ7SUFBSztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBRUs7R0FBZTs7Ozs7R0FDdEIsd0JBQUMsVUFBRDtJQUFRLFdBQVU7SUFBZ0k7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQWxKLENBQ0Usd0JBQUMsUUFBRDtLQUFNLGVBQVk7S0FBbUI7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQUM7SUFBb0Q7Ozs7Y0FDMUYsd0JBQUMsUUFBRDtLQUFNLFdBQVU7S0FBNEQ7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQTVFLENBQTZFLCtCQUEyQix3QkFBQyxjQUFEO01BQWMsTUFBTTtNQUFHO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtLQUFBOzs7O2FBQVM7Ozs7O1lBQ2xJOzs7Ozs7RUFDTDs7Ozs7O0FBRVQ7O0FBRUEsT0FBTyxTQUFTSSxlQUFlLEVBQUVKLFlBQXFDO0NBQUUsT0FBTyx3QkFBQyxLQUFEO0VBQUcsV0FBVTtFQUFrRjtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBRUE7Q0FBWTs7Ozs7QUFBRzs7QUFDL0wsT0FBTyxTQUFTSyxnQkFBZ0IsRUFBRUMsU0FBNEI7Q0FBRSxPQUFPLHdCQUFDLE9BQUQ7RUFBTyxTQUFRO0VBQVUsV0FBVyw4RUFBOEVBLFVBQVUsU0FBUyxzREFBc0Q7RUFBaUQsZUFBYSxjQUFjQSxNQUFNQyxZQUFZLEVBQUM7RUFBUztFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7WUFBblMsQ0FBcVNELE9BQU0sYUFBa0I7Ozs7OztBQUFHIiwibmFtZXMiOlsiTGluayIsIk5hdkxpbmsiLCJBcnJvd1VwUmlnaHQiLCJDb21wYXNzIiwiSW5kaWFuUnVwZWUiLCJMYXlvdXREYXNoYm9hcmQiLCJMaXN0Q2hlY2tzIiwiTWVzc2FnZUNpcmNsZSIsIlNoaWVsZENoZWNrIiwiQmFkZ2UiLCJuYXZJdGVtcyIsInRvIiwibGFiZWwiLCJpY29uIiwidGVzdElkIiwiQ2FtcHVzU2hlbGwiLCJjaGlsZHJlbiIsIm1hcCIsIkljb24iLCJpc0FjdGl2ZSIsIlNlY3Rpb25FeWVicm93IiwiQ29uZmlkZW5jZUJhZGdlIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDYW1wdXNTaGVsbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluaywgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXJyb3dVcFJpZ2h0LCBDb21wYXNzLCBJbmRpYW5SdXBlZSwgTGF5b3V0RGFzaGJvYXJkLCBMaXN0Q2hlY2tzLCBNZXNzYWdlQ2lyY2xlLCBTaGllbGRDaGVjayB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuXG5jb25zdCBuYXZJdGVtcyA9IFtcbiAgeyB0bzogXCIvXCIsIGxhYmVsOiBcIkhvbWVcIiwgaWNvbjogTGF5b3V0RGFzaGJvYXJkLCB0ZXN0SWQ6IFwibmF2LWhvbWUtbGlua1wiIH0sXG4gIHsgdG86IFwiL2V4cGxvcmVcIiwgbGFiZWw6IFwiRXhwbG9yZVwiLCBpY29uOiBDb21wYXNzLCB0ZXN0SWQ6IFwibmF2LWV4cGxvcmUtbGlua1wiIH0sXG4gIHsgdG86IFwiL21vbmV5XCIsIGxhYmVsOiBcIk1vbmV5ICYgUk9JXCIsIGljb246IEluZGlhblJ1cGVlLCB0ZXN0SWQ6IFwibmF2LW1vbmV5LWxpbmtcIiB9LFxuICB7IHRvOiBcIi9wbGFubmVyXCIsIGxhYmVsOiBcIlBsYW5uZXJcIiwgaWNvbjogTGlzdENoZWNrcywgdGVzdElkOiBcIm5hdi1wbGFubmVyLWxpbmtcIiB9LFxuICB7IHRvOiBcIi9jb3Vuc2VsbG9yXCIsIGxhYmVsOiBcIkNvdW5zZWxsb3JcIiwgaWNvbjogTWVzc2FnZUNpcmNsZSwgdGVzdElkOiBcIm5hdi1jb3Vuc2VsbG9yLWxpbmtcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FtcHVzU2hlbGwoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLVsjRkFGOUY1XSB0ZXh0LXNsYXRlLTkwMFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei0zMCBib3JkZXItYiBib3JkZXItc2xhdGUtMjAwLzgwIGJnLVsjRkFGOUY1XS85MCBiYWNrZHJvcC1ibHVyLW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4IG1heC13LTd4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IHB4LTQgcHktNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiIGRhdGEtdGVzdGlkPVwiYnJhbmQtaG9tZS1saW5rXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmlkIGgtOSB3LTkgcGxhY2UtaXRlbXMtY2VudGVyIHJvdW5kZWQteGwgYmctZW1lcmFsZC03MDAgdGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc21cIj5DUjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9ja1wiPjxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtaGVhZGluZyB0ZXh0LVsxNXB4XSBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodFwiPkNhbXB1c1JvdXRlPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xOGVtXSB0ZXh0LXNsYXRlLTUwMFwiPmRlY2lzaW9ucywgZ3JvdW5kZWQ8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG92ZXJmbG93LXgtYXV0b1wiIGFyaWEtbGFiZWw9XCJNYWluIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKHsgdG8sIGxhYmVsLCBpY29uOiBJY29uLCB0ZXN0SWQgfSkgPT4gKFxuICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e3RvfSB0bz17dG99IGVuZD17dG8gPT09IFwiL1wifSBkYXRhLXRlc3RpZD17dGVzdElkfSBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IGBncm91cCBmbGV4IHNocmluay0wIGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWxnIHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1bY29sb3IsYmFja2dyb3VuZC1jb2xvcix0cmFuc2Zvcm1dIGR1cmF0aW9uLTIwMCAke2lzQWN0aXZlID8gXCJiZy1lbWVyYWxkLTEwMCB0ZXh0LWVtZXJhbGQtODAwXCIgOiBcInRleHQtc2xhdGUtNTAwIGhvdmVyOi10cmFuc2xhdGUteS0wLjUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1zbGF0ZS05MDBcIn1gfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXsxNX0gc3Ryb2tlV2lkdGg9ezEuOH0gLz4gPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZVwiPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnNlbnRcIiBjbGFzc05hbWU9XCJoaWRkZW4gaXRlbXMtY2VudGVyIGdhcC0xLjUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBiZy13aGl0ZSBweC0zIHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNjAwIHRyYW5zaXRpb24tW2NvbG9yLHRyYW5zZm9ybV0gZHVyYXRpb24tMjAwIGhvdmVyOi10cmFuc2xhdGUteS0wLjUgaG92ZXI6dGV4dC1lbWVyYWxkLTgwMCBzbTpmbGV4XCIgZGF0YS10ZXN0aWQ9XCJjb25zZW50LXNldHRpbmdzLWxpbmtcIj48U2hpZWxkQ2hlY2sgc2l6ZT17MTR9IC8+IERhdGE8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBiZy13aGl0ZSBweS0xIHBsLTEgcHItMiBzaGFkb3ctc21cIiBkYXRhLXRlc3RpZD1cInByb2ZpbGUtYmFkZ2VcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZCBoLTcgdy03IHBsYWNlLWl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctYW1iZXItMTAwIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1hbWJlci04MDBcIj5BUzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTcwMCBsZzpibG9ja1wiPkFhcmF2PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggbWF4LXctN3hsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTIwMCBweC00IHB5LTggdGV4dC14cyB0ZXh0LXNsYXRlLTUwMCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPHNwYW4gZGF0YS10ZXN0aWQ9XCJmb290ZXItZGlzY2xhaW1lclwiPkNhbXB1c1JvdXRlIGRlbW8gwrcgY3VyYXRlZCAyMDI1IHJlZmVyZW5jZSBkYXRhPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1vbm8gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+QnVpbHQgZm9yIGJldHRlciBkZWNpc2lvbnMgPEFycm93VXBSaWdodCBzaXplPXsxM30gLz48L3NwYW4+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlY3Rpb25FeWVicm93KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHsgcmV0dXJuIDxwIGNsYXNzTmFtZT1cIm1iLTMgZm9udC1tb25vIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LWVtZXJhbGQtNzAwXCI+e2NoaWxkcmVufTwvcD47IH1cbmV4cG9ydCBmdW5jdGlvbiBDb25maWRlbmNlQmFkZ2UoeyB2YWx1ZSB9OiB7IHZhbHVlOiBzdHJpbmcgfSkgeyByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPXtgcm91bmRlZC1tZCBib3JkZXIgcHgtMiBweS0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgJHt2YWx1ZSA9PT0gXCJIaWdoXCIgPyBcImJvcmRlci1lbWVyYWxkLTIwMCBiZy1lbWVyYWxkLTUwIHRleHQtZW1lcmFsZC03MDBcIiA6IFwiYm9yZGVyLWFtYmVyLTIwMCBiZy1hbWJlci01MCB0ZXh0LWFtYmVyLTcwMFwifWB9IGRhdGEtdGVzdGlkPXtgY29uZmlkZW5jZS0ke3ZhbHVlLnRvTG93ZXJDYXNlKCl9LWJhZGdlYH0+e3ZhbHVlfSBjb25maWRlbmNlPC9CYWRnZT47IH0iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvQ2FtcHVzU2hlbGwudHN4In0=