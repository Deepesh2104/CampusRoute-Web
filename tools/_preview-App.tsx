import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"];import { Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=0cd69c2d";
import CampusShell from "/src/components/CampusShell.tsx";
import Home from "/src/pages/Home.tsx";
import Explore from "/src/pages/Explore.tsx";
import Money from "/src/pages/Money.tsx";
import Planner from "/src/pages/Planner.tsx";
import Counsellor from "/src/pages/Counsellor.tsx";
import Consent from "/src/pages/Consent.tsx";
var _jsxFileName = "/app/frontend/src/App.tsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0cd69c2d";
// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
	return /* @__PURE__ */ _jsxDEV(CampusShell, {
		"x-file-name": "App",
		"x-line-number": "13",
		"x-column": "4",
		"x-component": "CampusShell",
		"x-id": "App_13_4",
		"x-dynamic": "true",
		children: /* @__PURE__ */ _jsxDEV(Routes, { children: [
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "/",
				element: /* @__PURE__ */ _jsxDEV(Home, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 32
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "/explore",
				element: /* @__PURE__ */ _jsxDEV(Explore, {
					"x-file-name": "App",
					"x-line-number": "15",
					"x-column": "38",
					"x-component": "Explore",
					"x-id": "App_15_38",
					"x-dynamic": "true",
					"x-excluded": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 39
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "/money",
				element: /* @__PURE__ */ _jsxDEV(Money, {
					"x-file-name": "App",
					"x-line-number": "16",
					"x-column": "36",
					"x-component": "Money",
					"x-id": "App_16_36",
					"x-dynamic": "true",
					"x-excluded": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 37
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "/planner",
				element: /* @__PURE__ */ _jsxDEV(Planner, {
					"x-file-name": "App",
					"x-line-number": "17",
					"x-column": "38",
					"x-component": "Planner",
					"x-id": "App_17_38",
					"x-dynamic": "true",
					"x-excluded": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 39
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "/counsellor",
				element: /* @__PURE__ */ _jsxDEV(Counsellor, {
					"x-file-name": "App",
					"x-line-number": "18",
					"x-column": "41",
					"x-component": "Counsellor",
					"x-id": "App_18_41",
					"x-dynamic": "true",
					"x-excluded": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 42
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "/consent",
				element: /* @__PURE__ */ _jsxDEV(Consent, {
					"x-file-name": "App",
					"x-line-number": "19",
					"x-column": "38",
					"x-component": "Consent",
					"x-id": "App_19_38",
					"x-dynamic": "true",
					"x-excluded": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 39
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 132
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/App.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsUUFBUUMsYUFBYTtBQUM5QixPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxhQUFhO0FBQ3BCLE9BQU9DLFdBQVc7QUFDbEIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxnQkFBZ0I7QUFDdkIsT0FBT0MsYUFBYTs7OztBQUdwQixlQUFlLFNBQVNDLE1BQU07Q0FDNUIsT0FDRSx3QkFBQyxhQUFEO0VBQVk7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO1lBQUMsd0JBQUMsUUFBRDtHQUNYLHdCQUFDLE9BQUQ7SUFBTyxNQUFLO0lBQUksU0FBUyx3QkFBQyxNQUFELENBQUs7Ozs7O0dBQUk7Ozs7O0dBQ2xDLHdCQUFDLE9BQUQ7SUFBTyxNQUFLO0lBQVcsU0FBUyx3QkFBQyxTQUFEO0tBQVE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7SUFBQTs7Ozs7R0FBSTs7Ozs7R0FDNUMsd0JBQUMsT0FBRDtJQUFPLE1BQUs7SUFBUyxTQUFTLHdCQUFDLE9BQUQ7S0FBTTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtJQUFBOzs7OztHQUFJOzs7OztHQUN4Qyx3QkFBQyxPQUFEO0lBQU8sTUFBSztJQUFXLFNBQVMsd0JBQUMsU0FBRDtLQUFRO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0lBQUE7Ozs7O0dBQUk7Ozs7O0dBQzVDLHdCQUFDLE9BQUQ7SUFBTyxNQUFLO0lBQWMsU0FBUyx3QkFBQyxZQUFEO0tBQVc7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7SUFBQTs7Ozs7R0FBSTs7Ozs7R0FDbEQsd0JBQUMsT0FBRDtJQUFPLE1BQUs7SUFBVyxTQUFTLHdCQUFDLFNBQUQ7S0FBUTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtJQUFBOzs7OztHQUFJOzs7OztFQUN0Qzs7Ozs7Q0FBYzs7Ozs7QUFFMUIiLCJuYW1lcyI6WyJSb3V0ZXMiLCJSb3V0ZSIsIkNhbXB1c1NoZWxsIiwiSG9tZSIsIkV4cGxvcmUiLCJNb25leSIsIlBsYW5uZXIiLCJDb3Vuc2VsbG9yIiwiQ29uc2VudCIsIkFwcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IENhbXB1c1NoZWxsIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FtcHVzU2hlbGxcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL3BhZ2VzL0hvbWVcIjtcbmltcG9ydCBFeHBsb3JlIGZyb20gXCJAL3BhZ2VzL0V4cGxvcmVcIjtcbmltcG9ydCBNb25leSBmcm9tIFwiQC9wYWdlcy9Nb25leVwiO1xuaW1wb3J0IFBsYW5uZXIgZnJvbSBcIkAvcGFnZXMvUGxhbm5lclwiO1xuaW1wb3J0IENvdW5zZWxsb3IgZnJvbSBcIkAvcGFnZXMvQ291bnNlbGxvclwiO1xuaW1wb3J0IENvbnNlbnQgZnJvbSBcIkAvcGFnZXMvQ29uc2VudFwiO1xuXG4vLyBPbmUgPFJvdXRlPiBwZXIgcGFnZSBpbiBzcmMvcGFnZXM7IEJyb3dzZXJSb3V0ZXIgYWxyZWFkeSB3cmFwcyB0aGlzIGluIG1haW4udHN4LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxDYW1wdXNTaGVsbD48Um91dGVzPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9leHBsb3JlXCIgZWxlbWVudD17PEV4cGxvcmUgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9tb25leVwiIGVsZW1lbnQ9ezxNb25leSAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BsYW5uZXJcIiBlbGVtZW50PXs8UGxhbm5lciAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvdW5zZWxsb3JcIiBlbGVtZW50PXs8Q291bnNlbGxvciAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnNlbnRcIiBlbGVtZW50PXs8Q29uc2VudCAvPn0gLz5cbiAgICA8L1JvdXRlcz48L0NhbXB1c1NoZWxsPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9BcHAudHN4In0=