import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Counsellor.tsx");const useMemo = __vite__cjsImport1_react["useMemo"]; const useState = __vite__cjsImport1_react["useState"];const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"];import { useQuery, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=0cd69c2d";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=0cd69c2d";
import { Bot, BookOpen, CheckCircle2, Loader2, Send, Sparkles, UserRound } from "/src/lib/lucide-react.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { apiGet, apiStream } from "/src/lib/api.ts";
import "/src/lib/types.ts";
import { SectionEyebrow } from "/src/components/CampusShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Counsellor.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0cd69c2d";
var _s = $RefreshSig$();
const prompts = [
	"Which is the lower-cost path between VIT and RVCE?",
	"How should I think about placement salary data?",
	"What should I do before applying?",
	"Compare software and embedded careers"
];
export default function Counsellor() {
	_s();
	const { data } = useQuery({
		queryKey: ["chat-history"],
		queryFn: () => apiGet("/campus/counsellor/history"),
		retry: false
	});
	const queryClient = useQueryClient();
	const [draft, setDraft] = useState("");
	const [sending, setSending] = useState(false);
	const [live, setLive] = useState(null);
	const [meta, setMeta] = useState({
		citations: [],
		confidence: "Grounded / estimate-aware"
	});
	const messages = useMemo(() => [...data ?? [], ...live ? [live] : []], [data, live]);
	async function submit(event, preset) {
		event?.preventDefault();
		const message = (preset ?? draft).trim();
		if (!message || sending) return;
		setDraft("");
		setSending(true);
		const assistant = {
			id: "live",
			role: "assistant",
			content: "",
			citations: [],
			created_at: new Date().toISOString()
		};
		setLive(assistant);
		try {
			await apiStream("/campus/counsellor/chat", { message }, (content) => setLive((current) => current ? {
				...current,
				content: current.content + content
			} : current), (done) => {
				setMeta(done);
				setLive((current) => current ? {
					...current,
					citations: done.citations
				} : current);
			});
			await queryClient.invalidateQueries({ queryKey: ["chat-history"] });
			setLive(null);
		} catch {
			setLive({
				...assistant,
				content: "The counsellor is temporarily unavailable. You can still explore the seeded comparisons and simulators."
			});
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		"x-file-name": "Counsellor",
		"x-line-number": "15",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Counsellor_15_9",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-3xl",
			"x-file-name": "Counsellor",
			"x-line-number": "15",
			"x-column": "71",
			"x-component": "div",
			"x-id": "Counsellor_15_71",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
					"x-file-name": "Counsellor",
					"x-line-number": "15",
					"x-column": "98",
					"x-component": "SectionEyebrow",
					"x-id": "Counsellor_15_98",
					"x-dynamic": "false",
					children: "Grounded AI counsellor · MOD-035"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 333
				}, this),
				/* @__PURE__ */ _jsxDEV("h1", {
					className: "font-heading text-4xl font-extrabold tracking-tight sm:text-5xl",
					"x-file-name": "Counsellor",
					"x-line-number": "15",
					"x-column": "163",
					"x-component": "h1",
					"x-id": "Counsellor_15_163",
					"x-dynamic": "false",
					children: [
						"Ask a better",
						/* @__PURE__ */ _jsxDEV("br", {
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "255",
							"x-component": "br",
							"x-id": "Counsellor_15_255",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 738
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-emerald-700",
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "261",
							"x-component": "span",
							"x-id": "Counsellor_15_261",
							"x-dynamic": "false",
							children: "next question."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 863
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 527
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "mt-5 text-base leading-7 text-slate-600",
					"x-file-name": "Counsellor",
					"x-line-number": "15",
					"x-column": "322",
					"x-component": "p",
					"x-id": "Counsellor_15_322",
					"x-dynamic": "false",
					children: "Aarav’s counsellor only sees the curated CampusRoute dataset. It cites the rows it uses, marks estimates, and never pretends a salary is a guarantee."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 1045
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 188
		}, this), /* @__PURE__ */ _jsxDEV("section", {
			className: "mt-12 grid gap-6 lg:grid-cols-12",
			"x-file-name": "Counsellor",
			"x-line-number": "15",
			"x-column": "536",
			"x-component": "section",
			"x-id": "Counsellor_15_536",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV(Card, {
				className: "overflow-hidden border-slate-200/80 bg-white lg:col-span-8",
				"data-testid": "counsellor-chat-card",
				"x-file-name": "Counsellor",
				"x-line-number": "15",
				"x-column": "590",
				"x-component": "Card",
				"x-id": "Counsellor_15_590",
				"x-dynamic": "true",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-6 py-4",
						"x-file-name": "Counsellor",
						"x-line-number": "15",
						"x-column": "702",
						"x-component": "div",
						"x-id": "Counsellor_15_702",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-3",
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "804",
							"x-component": "div",
							"x-id": "Counsellor_15_804",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "grid h-9 w-9 place-items-center rounded-xl bg-emerald-700 text-white",
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "845",
								"x-component": "span",
								"x-id": "Counsellor_15_845",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV(Bot, {
									size: 18,
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "932",
									"x-component": "Bot",
									"x-id": "Counsellor_15_932",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 2378
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 2170
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "956",
								"x-component": "div",
								"x-id": "Counsellor_15_956",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("p", {
									className: "text-sm font-bold text-slate-900",
									"data-testid": "counsellor-status",
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "961",
									"x-component": "p",
									"x-id": "Counsellor_15_961",
									"x-dynamic": "false",
									children: "CampusRoute counsellor"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 2647
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-700",
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "1067",
									"x-component": "p",
									"x-id": "Counsellor_15_1067",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "h-1.5 w-1.5 rounded-full bg-emerald-500",
										"x-file-name": "Counsellor",
										"x-line-number": "15",
										"x-column": "1160",
										"x-component": "span",
										"x-id": "Counsellor_15_1160",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 3084
									}, this), " grounded on seeded data"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 2871
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 2522
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 2009
						}, this), /* @__PURE__ */ _jsxDEV(Badge, {
							variant: "outline",
							className: "border-emerald-200 bg-emerald-50 font-mono text-[10px] uppercase tracking-wider text-emerald-700",
							"data-testid": "grounding-badge",
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "1260",
							"x-component": "Badge",
							"x-id": "Counsellor_15_1260",
							"x-dynamic": "false",
							children: "Sources on"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 3307
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 1787
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "min-h-[390px] space-y-5 p-6",
						"data-testid": "chat-message-list",
						"x-file-name": "Counsellor",
						"x-line-number": "15",
						"x-column": "1448",
						"x-component": "div",
						"x-id": "Counsellor_15_1448",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [messages.length === 0 && /* @__PURE__ */ _jsxDEV("div", {
							className: "flex gap-3",
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "1551",
							"x-component": "div",
							"x-id": "Counsellor_15_1551",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-800",
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "1579",
								"x-component": "span",
								"x-id": "Counsellor_15_1579",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV(Bot, {
									size: 15,
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "1683",
									"x-component": "Bot",
									"x-id": "Counsellor_15_1683",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 4271
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 4044
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "max-w-lg rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700",
								"data-testid": "counsellor-welcome-message",
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "1707",
								"x-component": "div",
								"x-id": "Counsellor_15_1707",
								"x-dynamic": "false",
								children: "Hi Aarav — I can help you compare college cost, placement signals, and career fit. What decision feels fuzzy right now?"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 4417
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 3894
						}, this), messages.map((message) => /* @__PURE__ */ _jsxDEV("div", {
							className: `flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`,
							"data-testid": `chat-message-${message.role}-${message.id}`,
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "2013",
							"x-component": "div",
							"x-id": "Counsellor_15_2013",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: `grid h-8 w-8 shrink-0 place-items-center rounded-full ${message.role === "user" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`,
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "2172",
								"x-component": "span",
								"x-id": "Counsellor_15_2172",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: message.role === "user" ? /* @__PURE__ */ _jsxDEV(UserRound, {
									size: 15,
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "2368",
									"x-component": "UserRound",
									"x-id": "Counsellor_15_2368",
									"x-dynamic": "true",
									"x-source-type": "external",
									"x-source-var": "messages",
									"x-source-editable": "false",
									"x-array-var": "messages",
									"x-array-item-param": "message"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 5495
								}, this) : /* @__PURE__ */ _jsxDEV(Bot, {
									size: 15,
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "2394",
									"x-component": "Bot",
									"x-id": "Counsellor_15_2394",
									"x-dynamic": "true",
									"x-source-type": "external",
									"x-source-var": "messages",
									"x-source-editable": "false",
									"x-array-var": "messages",
									"x-array-item-param": "message"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 5775
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 5126
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: `max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "rounded-tr-sm bg-emerald-700 text-white" : "rounded-tl-sm bg-slate-100 text-slate-700"}`,
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "2419",
								"x-component": "div",
								"x-id": "Counsellor_15_2419",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [/* @__PURE__ */ _jsxDEV("p", {
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "2607",
									"x-component": "p",
									"x-id": "Counsellor_15_2607",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: message.content || /* @__PURE__ */ _jsxDEV(Loader2, {
										size: 16,
										className: "animate-spin",
										"x-file-name": "Counsellor",
										"x-line-number": "15",
										"x-column": "2630",
										"x-component": "Loader2",
										"x-id": "Counsellor_15_2630",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "messages",
										"x-source-editable": "false",
										"x-array-var": "messages",
										"x-array-item-param": "message"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 6601
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 6408
								}, this), message.role === "assistant" && message.citations.length > 0 && /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-4 border-t border-slate-200 pt-3",
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "2746",
									"x-component": "div",
									"x-id": "Counsellor_15_2746",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("p", {
										className: "flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500",
										"x-file-name": "Counsellor",
										"x-line-number": "15",
										"x-column": "2799",
										"x-component": "p",
										"x-id": "Counsellor_15_2799",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV(BookOpen, {
											size: 11,
											"x-file-name": "Counsellor",
											"x-line-number": "15",
											"x-column": "2902",
											"x-component": "BookOpen",
											"x-id": "Counsellor_15_2902",
											"x-dynamic": "true",
											"x-source-type": "external",
											"x-source-var": "messages",
											"x-source-editable": "false",
											"x-array-var": "messages",
											"x-array-item-param": "message"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 69,
											columnNumber: 7367
										}, this), " Used in this answer"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 7144
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "mt-2 flex flex-wrap gap-1.5",
										"x-file-name": "Counsellor",
										"x-line-number": "15",
										"x-column": "2948",
										"x-component": "div",
										"x-id": "Counsellor_15_2948",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: message.citations.map((citation) => /* @__PURE__ */ _jsxDEV("span", {
											className: "rounded bg-white px-2 py-1 font-mono text-[10px] text-slate-600",
											"data-testid": "chat-citation-badge",
											"x-file-name": "Counsellor",
											"x-line-number": "15",
											"x-column": "3028",
											"x-component": "span",
											"x-id": "Counsellor_15_3028",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "message",
											"x-source-editable": "false",
											"x-array-var": "message",
											"x-array-item-param": "citation",
											children: citation
										}, citation, false, {
											fileName: _jsxFileName,
											lineNumber: 69,
											columnNumber: 7918
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 7666
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 6969
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 6048
							}, this)]
						}, message.id, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 4845
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 3619
					}, this),
					/* @__PURE__ */ _jsxDEV("form", {
						onSubmit: submit,
						className: "flex gap-2 border-t border-slate-200 p-4",
						"data-testid": "counsellor-chat-form",
						"x-file-name": "Counsellor",
						"x-line-number": "15",
						"x-column": "3211",
						"x-component": "form",
						"x-id": "Counsellor_15_3211",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("input", {
							value: draft,
							onChange: (event) => setDraft(event.target.value),
							placeholder: "Ask about cost, fit, or placement evidence…",
							className: "min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100",
							"data-testid": "counsellor-message-input",
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "3323",
							"x-component": "input",
							"x-id": "Counsellor_15_3323",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 8591
						}, this), /* @__PURE__ */ _jsxDEV(Button, {
							type: "submit",
							disabled: sending || !draft.trim(),
							className: "bg-emerald-700 text-white hover:bg-emerald-800 hover:text-white",
							"data-testid": "counsellor-send-button",
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "3708",
							"x-component": "Button",
							"x-id": "Counsellor_15_3708",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [sending ? /* @__PURE__ */ _jsxDEV(Loader2, {
								size: 16,
								className: "animate-spin",
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "3890",
								"x-component": "Loader2",
								"x-id": "Counsellor_15_3890",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 9457
							}, this) : /* @__PURE__ */ _jsxDEV(Send, {
								size: 16,
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "3939",
								"x-component": "Send",
								"x-id": "Counsellor_15_3939",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 9632
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "hidden sm:inline",
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "3958",
								"x-component": "span",
								"x-id": "Counsellor_15_3958",
								"x-dynamic": "false",
								children: "Send"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 9774
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 9100
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 8356
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 1555
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "space-y-6 lg:col-span-4",
				"x-file-name": "Counsellor",
				"x-line-number": "15",
				"x-column": "4027",
				"x-component": "div",
				"x-id": "Counsellor_15_4027",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Card, {
					className: "border-amber-200 bg-amber-50/70",
					"data-testid": "suggested-prompts-card",
					"x-file-name": "Counsellor",
					"x-line-number": "15",
					"x-column": "4068",
					"x-component": "Card",
					"x-id": "Counsellor_15_4068",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6",
						"x-file-name": "Counsellor",
						"x-line-number": "15",
						"x-column": "4155",
						"x-component": "CardContent",
						"x-id": "Counsellor_15_4155",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "4184",
								"x-component": "SectionEyebrow",
								"x-id": "Counsellor_15_4184",
								"x-dynamic": "false",
								children: "Try a grounded prompt"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 10514
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "font-heading text-xl font-bold",
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "4238",
								"x-component": "h2",
								"x-id": "Counsellor_15_4238",
								"x-dynamic": "false",
								children: "Start with a decision"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 10701
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-5 space-y-2",
								"x-file-name": "Counsellor",
								"x-line-number": "15",
								"x-column": "4311",
								"x-component": "div",
								"x-id": "Counsellor_15_4311",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: prompts.map((prompt) => /* @__PURE__ */ _jsxDEV("button", {
									onClick: () => {
										void submit(undefined, prompt);
									},
									disabled: sending,
									className: "flex w-full items-center justify-between rounded-xl border border-amber-200 bg-white/60 p-3 text-left text-xs font-semibold text-amber-950 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white",
									"data-testid": `prompt-${prompt.slice(0, 18).toLowerCase().replaceAll(" ", "-")}`,
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "4366",
									"x-component": "button",
									"x-id": "Counsellor_15_4366",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "prompts",
									"x-source-file-abs": "/app/frontend/src/pages/Counsellor.tsx",
									"x-source-line": "12",
									"x-source-editable": "false",
									"x-array-var": "prompts",
									"x-array-line": "12",
									"x-array-item-param": "prompt",
									children: [prompt, /* @__PURE__ */ _jsxDEV(Sparkles, {
										size: 14,
										className: "shrink-0 text-amber-700",
										"x-file-name": "Counsellor",
										"x-line-number": "15",
										"x-column": "4789",
										"x-component": "Sparkles",
										"x-id": "Counsellor_15_4789",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "prompts",
										"x-source-file-abs": "/app/frontend/src/pages/Counsellor.tsx",
										"x-source-line": "12",
										"x-source-editable": "true",
										"x-array-var": "prompts",
										"x-array-line": "12",
										"x-array-item-param": "prompt"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 71,
										columnNumber: 719
									}, this)]
								}, prompt, true, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 11122
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 10895
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 10338
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 10129
				}, this), /* @__PURE__ */ _jsxDEV(Card, {
					className: "border-slate-200/80 bg-white",
					"data-testid": "counsellor-trust-card",
					"x-file-name": "Counsellor",
					"x-line-number": "15",
					"x-column": "4885",
					"x-component": "Card",
					"x-id": "Counsellor_15_4885",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(CardContent, {
						className: "p-6",
						"x-file-name": "Counsellor",
						"x-line-number": "15",
						"x-column": "4968",
						"x-component": "CardContent",
						"x-id": "Counsellor_15_4968",
						"x-dynamic": "true",
						"x-excluded": "true",
						children: [/* @__PURE__ */ _jsxDEV(SectionEyebrow, {
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "4997",
							"x-component": "SectionEyebrow",
							"x-id": "Counsellor_15_4997",
							"x-dynamic": "false",
							children: "How to read it"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 1548
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-4",
							"x-file-name": "Counsellor",
							"x-line-number": "15",
							"x-column": "5044",
							"x-component": "div",
							"x-id": "Counsellor_15_5044",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(TrustRow, {
									icon: /* @__PURE__ */ _jsxDEV(CheckCircle2, {
										size: 16,
										"x-file-name": "Counsellor",
										"x-line-number": "15",
										"x-column": "5087",
										"x-component": "CheckCircle2",
										"x-id": "Counsellor_15_5087",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 71,
										columnNumber: 1893
									}, this),
									title: "Grounded",
									text: "Answers use only seeded college and career rows.",
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "5071",
									"x-component": "TrustRow",
									"x-id": "Counsellor_15_5071",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 1877
								}, this),
								/* @__PURE__ */ _jsxDEV(TrustRow, {
									icon: /* @__PURE__ */ _jsxDEV(BookOpen, {
										size: 16,
										"x-file-name": "Counsellor",
										"x-line-number": "15",
										"x-column": "5206",
										"x-component": "BookOpen",
										"x-id": "Counsellor_15_5206",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 71,
										columnNumber: 2269
									}, this),
									title: "Cited",
									text: "Source labels show what informed the answer.",
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "5190",
									"x-component": "TrustRow",
									"x-id": "Counsellor_15_5190",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 2253
								}, this),
								/* @__PURE__ */ _jsxDEV(TrustRow, {
									icon: /* @__PURE__ */ _jsxDEV(Sparkles, {
										size: 16,
										"x-file-name": "Counsellor",
										"x-line-number": "15",
										"x-column": "5314",
										"x-component": "Sparkles",
										"x-id": "Counsellor_15_5314",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 71,
										columnNumber: 2630
									}, this),
									title: "Estimate-aware",
									text: meta.confidence,
									"x-file-name": "Counsellor",
									"x-line-number": "15",
									"x-column": "5298",
									"x-component": "TrustRow",
									"x-id": "Counsellor_15_5298",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 2614
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 1728
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 1372
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 1167
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 9966
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 1377
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 69,
		columnNumber: 10
	}, this);
}
_s(Counsellor, "ywEz9a5g+Pk+jJxh6iuM3VAeyLE=", false, function() {
	return [useQuery, useQueryClient];
});
_c = Counsellor;
function TrustRow({ icon, title, text }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flex gap-3",
		"data-testid": `trust-row-${title.toLowerCase()}`,
		"x-file-name": "Counsellor",
		"x-line-number": "16",
		"x-column": "100",
		"x-component": "div",
		"x-id": "Counsellor_16_100",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("span", {
			className: "mt-0.5 text-emerald-700",
			"x-file-name": "Counsellor",
			"x-line-number": "16",
			"x-column": "177",
			"x-component": "span",
			"x-id": "Counsellor_16_177",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "icon",
			"x-source-editable": "false",
			children: icon
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 207
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			"x-file-name": "Counsellor",
			"x-line-number": "16",
			"x-column": "232",
			"x-component": "div",
			"x-id": "Counsellor_16_232",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("p", {
				className: "text-sm font-semibold text-slate-800",
				"x-file-name": "Counsellor",
				"x-line-number": "16",
				"x-column": "237",
				"x-component": "p",
				"x-id": "Counsellor_16_237",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "title",
				"x-source-editable": "false",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 574
			}, this), /* @__PURE__ */ _jsxDEV("p", {
				className: "mt-1 text-xs leading-5 text-slate-500",
				"x-file-name": "Counsellor",
				"x-line-number": "16",
				"x-column": "300",
				"x-component": "p",
				"x-id": "Counsellor_16_300",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "text",
				"x-source-editable": "false",
				children: text
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 822
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 449
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 10
	}, this);
}
_c2 = TrustRow;
var _c, _c2;
$RefreshReg$(_c, "Counsellor");
$RefreshReg$(_c2, "TrustRow");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Counsellor.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Counsellor.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Counsellor.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Counsellor.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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VSxNQUFNO1VBQUc7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1NBQUE7Ozs7O1NBQUssT0FBTTtTQUFRLE1BQUs7U0FBOEM7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1FBQUE7Ozs7O1FBQUcsd0JBQUMsVUFBRDtTQUFVLE1BQU0sd0JBQUMsVUFBRDtVQUFVLE1BQU07VUFBRztVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7U0FBQTs7Ozs7U0FBSyxPQUFNO1NBQWlCLE1BQU0xQixLQUFLRztTQUFXO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtRQUFBOzs7OztPQUFROzs7OztjQUFjOzs7Ozs7SUFBTzs7OztZQUFNOzs7OztXQUFVOzs7OztVQUFNOzs7Ozs7QUFBRzs7Ozs7QUFDN3pLLFNBQVM0QixTQUFTLEVBQUVDLE1BQU1DLE9BQU9DLFFBQTBEO0NBQUUsT0FBTyx3QkFBQyxPQUFEO0VBQUssV0FBVTtFQUFhLGVBQWEsYUFBYUQsTUFBTUosWUFBWTtFQUFJO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtZQUE1RSxDQUE2RSx3QkFBQyxRQUFEO0dBQU0sV0FBVTtHQUF5QjtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBRUc7RUFBVzs7OztZQUFDLHdCQUFDLE9BQUQ7R0FBSTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBSixDQUFLLHdCQUFDLEtBQUQ7SUFBRyxXQUFVO0lBQXNDO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUFFQztHQUFTOzs7O2FBQUMsd0JBQUMsS0FBRDtJQUFHLFdBQVU7SUFBdUM7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQUVDO0dBQVE7Ozs7V0FBTTs7Ozs7VUFBTTs7Ozs7O0FBQUciLCJuYW1lcyI6WyJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQm90IiwiQm9va09wZW4iLCJDaGVja0NpcmNsZTIiLCJMb2FkZXIyIiwiU2VuZCIsIlNwYXJrbGVzIiwiVXNlclJvdW5kIiwiQmFkZ2UiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJhcGlHZXQiLCJhcGlTdHJlYW0iLCJTZWN0aW9uRXllYnJvdyIsInByb21wdHMiLCJDb3Vuc2VsbG9yIiwiZGF0YSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInJldHJ5IiwicXVlcnlDbGllbnQiLCJkcmFmdCIsInNldERyYWZ0Iiwic2VuZGluZyIsInNldFNlbmRpbmciLCJsaXZlIiwic2V0TGl2ZSIsIm1ldGEiLCJzZXRNZXRhIiwiY2l0YXRpb25zIiwiY29uZmlkZW5jZSIsIm1lc3NhZ2VzIiwic3VibWl0IiwiZXZlbnQiLCJwcmVzZXQiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJ0cmltIiwiYXNzaXN0YW50IiwiaWQiLCJyb2xlIiwiY29udGVudCIsImNyZWF0ZWRfYXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjdXJyZW50IiwiZG9uZSIsImludmFsaWRhdGVRdWVyaWVzIiwibGVuZ3RoIiwibWFwIiwiY2l0YXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb21wdCIsInVuZGVmaW5lZCIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiVHJ1c3RSb3ciLCJpY29uIiwidGl0bGUiLCJ0ZXh0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNvdW5zZWxsb3IudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEZvcm1FdmVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3QsIEJvb2tPcGVuLCBDaGVja0NpcmNsZTIsIExvYWRlcjIsIFNlbmQsIFNwYXJrbGVzLCBVc2VyUm91bmQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgYXBpR2V0LCBhcGlTdHJlYW0gfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyB0eXBlIENoYXRNZXNzYWdlIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBTZWN0aW9uRXllYnJvdyB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FtcHVzU2hlbGxcIjtcblxuY29uc3QgcHJvbXB0cyA9IFtcIldoaWNoIGlzIHRoZSBsb3dlci1jb3N0IHBhdGggYmV0d2VlbiBWSVQgYW5kIFJWQ0U/XCIsIFwiSG93IHNob3VsZCBJIHRoaW5rIGFib3V0IHBsYWNlbWVudCBzYWxhcnkgZGF0YT9cIiwgXCJXaGF0IHNob3VsZCBJIGRvIGJlZm9yZSBhcHBseWluZz9cIiwgXCJDb21wYXJlIHNvZnR3YXJlIGFuZCBlbWJlZGRlZCBjYXJlZXJzXCJdO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnNlbGxvcigpIHsgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbXCJjaGF0LWhpc3RvcnlcIl0sIHF1ZXJ5Rm46ICgpID0+IGFwaUdldDxDaGF0TWVzc2FnZVtdPihcIi9jYW1wdXMvY291bnNlbGxvci9oaXN0b3J5XCIpLCByZXRyeTogZmFsc2UgfSk7IGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTsgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZShcIlwiKTsgY29uc3QgW3NlbmRpbmcsIHNldFNlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpOyBjb25zdCBbbGl2ZSwgc2V0TGl2ZV0gPSB1c2VTdGF0ZTxDaGF0TWVzc2FnZSB8IG51bGw+KG51bGwpOyBjb25zdCBbbWV0YSwgc2V0TWV0YV0gPSB1c2VTdGF0ZSh7IGNpdGF0aW9uczogW10gYXMgc3RyaW5nW10sIGNvbmZpZGVuY2U6IFwiR3JvdW5kZWQgLyBlc3RpbWF0ZS1hd2FyZVwiIH0pOyBjb25zdCBtZXNzYWdlcyA9IHVzZU1lbW8oKCkgPT4gWy4uLihkYXRhID8/IFtdKSwgLi4uKGxpdmUgPyBbbGl2ZV0gOiBbXSldLCBbZGF0YSwgbGl2ZV0pO1xuICBhc3luYyBmdW5jdGlvbiBzdWJtaXQoZXZlbnQ/OiBGb3JtRXZlbnQsIHByZXNldD86IHN0cmluZykgeyBldmVudD8ucHJldmVudERlZmF1bHQoKTsgY29uc3QgbWVzc2FnZSA9IChwcmVzZXQgPz8gZHJhZnQpLnRyaW0oKTsgaWYgKCFtZXNzYWdlIHx8IHNlbmRpbmcpIHJldHVybjsgc2V0RHJhZnQoXCJcIik7IHNldFNlbmRpbmcodHJ1ZSk7IGNvbnN0IGFzc2lzdGFudDogQ2hhdE1lc3NhZ2UgPSB7IGlkOiBcImxpdmVcIiwgcm9sZTogXCJhc3Npc3RhbnRcIiwgY29udGVudDogXCJcIiwgY2l0YXRpb25zOiBbXSwgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH07IHNldExpdmUoYXNzaXN0YW50KTsgdHJ5IHsgYXdhaXQgYXBpU3RyZWFtKFwiL2NhbXB1cy9jb3Vuc2VsbG9yL2NoYXRcIiwgeyBtZXNzYWdlIH0sIGNvbnRlbnQgPT4gc2V0TGl2ZShjdXJyZW50ID0+IGN1cnJlbnQgPyB7IC4uLmN1cnJlbnQsIGNvbnRlbnQ6IGN1cnJlbnQuY29udGVudCArIGNvbnRlbnQgfSA6IGN1cnJlbnQpLCBkb25lID0+IHsgc2V0TWV0YShkb25lKTsgc2V0TGl2ZShjdXJyZW50ID0+IGN1cnJlbnQgPyB7IC4uLmN1cnJlbnQsIGNpdGF0aW9uczogZG9uZS5jaXRhdGlvbnMgfSA6IGN1cnJlbnQpOyB9KTsgYXdhaXQgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoeyBxdWVyeUtleTogW1wiY2hhdC1oaXN0b3J5XCJdIH0pOyBzZXRMaXZlKG51bGwpOyB9IGNhdGNoIHsgc2V0TGl2ZSh7IC4uLmFzc2lzdGFudCwgY29udGVudDogXCJUaGUgY291bnNlbGxvciBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS4gWW91IGNhbiBzdGlsbCBleHBsb3JlIHRoZSBzZWVkZWQgY29tcGFyaXNvbnMgYW5kIHNpbXVsYXRvcnMuXCIgfSk7IH0gZmluYWxseSB7IHNldFNlbmRpbmcoZmFsc2UpOyB9IH1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBweS0xMCBzbTpweC02IGxnOnB4LThcIj48ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bFwiPjxTZWN0aW9uRXllYnJvdz5Hcm91bmRlZCBBSSBjb3Vuc2VsbG9yIMK3IE1PRC0wMzU8L1NlY3Rpb25FeWVicm93PjxoMSBjbGFzc05hbWU9XCJmb250LWhlYWRpbmcgdGV4dC00eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgc206dGV4dC01eGxcIj5Bc2sgYSBiZXR0ZXI8YnIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNzAwXCI+bmV4dCBxdWVzdGlvbi48L3NwYW4+PC9oMT48cCBjbGFzc05hbWU9XCJtdC01IHRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1zbGF0ZS02MDBcIj5BYXJhduKAmXMgY291bnNlbGxvciBvbmx5IHNlZXMgdGhlIGN1cmF0ZWQgQ2FtcHVzUm91dGUgZGF0YXNldC4gSXQgY2l0ZXMgdGhlIHJvd3MgaXQgdXNlcywgbWFya3MgZXN0aW1hdGVzLCBhbmQgbmV2ZXIgcHJldGVuZHMgYSBzYWxhcnkgaXMgYSBndWFyYW50ZWUuPC9wPjwvZGl2PjxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTEyIGdyaWQgZ2FwLTYgbGc6Z3JpZC1jb2xzLTEyXCI+PENhcmQgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1zbGF0ZS0yMDAvODAgYmctd2hpdGUgbGc6Y29sLXNwYW4tOFwiIGRhdGEtdGVzdGlkPVwiY291bnNlbGxvci1jaGF0LWNhcmRcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItc2xhdGUtMjAwIGJnLXNsYXRlLTUwLzgwIHB4LTYgcHktNFwiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj48c3BhbiBjbGFzc05hbWU9XCJncmlkIGgtOSB3LTkgcGxhY2UtaXRlbXMtY2VudGVyIHJvdW5kZWQteGwgYmctZW1lcmFsZC03MDAgdGV4dC13aGl0ZVwiPjxCb3Qgc2l6ZT17MTh9IC8+PC9zcGFuPjxkaXY+PHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDBcIiBkYXRhLXRlc3RpZD1cImNvdW5zZWxsb3Itc3RhdHVzXCI+Q2FtcHVzUm91dGUgY291bnNlbGxvcjwvcD48cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1lbWVyYWxkLTcwMFwiPjxzcGFuIGNsYXNzTmFtZT1cImgtMS41IHctMS41IHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTUwMFwiIC8+IGdyb3VuZGVkIG9uIHNlZWRlZCBkYXRhPC9wPjwvZGl2PjwvZGl2PjxCYWRnZSB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImJvcmRlci1lbWVyYWxkLTIwMCBiZy1lbWVyYWxkLTUwIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1lbWVyYWxkLTcwMFwiIGRhdGEtdGVzdGlkPVwiZ3JvdW5kaW5nLWJhZGdlXCI+U291cmNlcyBvbjwvQmFkZ2U+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtaW4taC1bMzkwcHhdIHNwYWNlLXktNSBwLTZcIiBkYXRhLXRlc3RpZD1cImNoYXQtbWVzc2FnZS1saXN0XCI+e21lc3NhZ2VzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj48c3BhbiBjbGFzc05hbWU9XCJncmlkIGgtOCB3LTggc2hyaW5rLTAgcGxhY2UtaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTEwMCB0ZXh0LWVtZXJhbGQtODAwXCI+PEJvdCBzaXplPXsxNX0gLz48L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyByb3VuZGVkLTJ4bCByb3VuZGVkLXRsLXNtIGJnLXNsYXRlLTEwMCBweC00IHB5LTMgdGV4dC1zbSBsZWFkaW5nLTYgdGV4dC1zbGF0ZS03MDBcIiBkYXRhLXRlc3RpZD1cImNvdW5zZWxsb3Itd2VsY29tZS1tZXNzYWdlXCI+SGkgQWFyYXYg4oCUIEkgY2FuIGhlbHAgeW91IGNvbXBhcmUgY29sbGVnZSBjb3N0LCBwbGFjZW1lbnQgc2lnbmFscywgYW5kIGNhcmVlciBmaXQuIFdoYXQgZGVjaXNpb24gZmVlbHMgZnV6enkgcmlnaHQgbm93PzwvZGl2PjwvZGl2Pn17bWVzc2FnZXMubWFwKG1lc3NhZ2UgPT4gPGRpdiBrZXk9e21lc3NhZ2UuaWR9IGNsYXNzTmFtZT17YGZsZXggZ2FwLTMgJHttZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gXCJmbGV4LXJvdy1yZXZlcnNlXCIgOiBcIlwifWB9IGRhdGEtdGVzdGlkPXtgY2hhdC1tZXNzYWdlLSR7bWVzc2FnZS5yb2xlfS0ke21lc3NhZ2UuaWR9YH0+PHNwYW4gY2xhc3NOYW1lPXtgZ3JpZCBoLTggdy04IHNocmluay0wIHBsYWNlLWl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgJHttZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gXCJiZy1hbWJlci0xMDAgdGV4dC1hbWJlci04MDBcIiA6IFwiYmctZW1lcmFsZC0xMDAgdGV4dC1lbWVyYWxkLTgwMFwifWB9PnttZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gPFVzZXJSb3VuZCBzaXplPXsxNX0gLz4gOiA8Qm90IHNpemU9ezE1fSAvPn08L3NwYW4+PGRpdiBjbGFzc05hbWU9e2BtYXgtdy1bODUlXSByb3VuZGVkLTJ4bCBweC00IHB5LTMgdGV4dC1zbSBsZWFkaW5nLTYgJHttZXNzYWdlLnJvbGUgPT09IFwidXNlclwiID8gXCJyb3VuZGVkLXRyLXNtIGJnLWVtZXJhbGQtNzAwIHRleHQtd2hpdGVcIiA6IFwicm91bmRlZC10bC1zbSBiZy1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS03MDBcIn1gfT48cD57bWVzc2FnZS5jb250ZW50IHx8IDxMb2FkZXIyIHNpemU9ezE2fSBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW5cIiAvPn08L3A+e21lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIiAmJiBtZXNzYWdlLmNpdGF0aW9ucy5sZW5ndGggPiAwICYmIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBib3JkZXItdCBib3JkZXItc2xhdGUtMjAwIHB0LTNcIj48cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTZlbV0gdGV4dC1zbGF0ZS01MDBcIj48Qm9va09wZW4gc2l6ZT17MTF9IC8+IFVzZWQgaW4gdGhpcyBhbnN3ZXI8L3A+PGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggZmxleC13cmFwIGdhcC0xLjVcIj57bWVzc2FnZS5jaXRhdGlvbnMubWFwKGNpdGF0aW9uID0+IDxzcGFuIGtleT17Y2l0YXRpb259IGNsYXNzTmFtZT1cInJvdW5kZWQgYmctd2hpdGUgcHgtMiBweS0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTYwMFwiIGRhdGEtdGVzdGlkPVwiY2hhdC1jaXRhdGlvbi1iYWRnZVwiPntjaXRhdGlvbn08L3NwYW4+KX08L2Rpdj48L2Rpdj59PC9kaXY+PC9kaXY+KX08L2Rpdj48Zm9ybSBvblN1Ym1pdD17c3VibWl0fSBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGJvcmRlci10IGJvcmRlci1zbGF0ZS0yMDAgcC00XCIgZGF0YS10ZXN0aWQ9XCJjb3Vuc2VsbG9yLWNoYXQtZm9ybVwiPjxpbnB1dCB2YWx1ZT17ZHJhZnR9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXREcmFmdChldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkFzayBhYm91dCBjb3N0LCBmaXQsIG9yIHBsYWNlbWVudCBldmlkZW5jZeKAplwiIGNsYXNzTmFtZT1cIm1pbi13LTAgZmxleC0xIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgYmctc2xhdGUtNTAgcHgtNCBweS0zIHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tW2JvcmRlci1jb2xvcixib3gtc2hhZG93XSBkdXJhdGlvbi0yMDAgZm9jdXM6Ym9yZGVyLWVtZXJhbGQtNjAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWVtZXJhbGQtMTAwXCIgZGF0YS10ZXN0aWQ9XCJjb3Vuc2VsbG9yLW1lc3NhZ2UtaW5wdXRcIiAvPjxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzZW5kaW5nIHx8ICFkcmFmdC50cmltKCl9IGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtNzAwIHRleHQtd2hpdGUgaG92ZXI6YmctZW1lcmFsZC04MDAgaG92ZXI6dGV4dC13aGl0ZVwiIGRhdGEtdGVzdGlkPVwiY291bnNlbGxvci1zZW5kLWJ1dHRvblwiPntzZW5kaW5nID8gPExvYWRlcjIgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpblwiIC8+IDogPFNlbmQgc2l6ZT17MTZ9IC8+fTxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmVcIj5TZW5kPC9zcGFuPjwvQnV0dG9uPjwvZm9ybT48L0NhcmQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgbGc6Y29sLXNwYW4tNFwiPjxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1hbWJlci0yMDAgYmctYW1iZXItNTAvNzBcIiBkYXRhLXRlc3RpZD1cInN1Z2dlc3RlZC1wcm9tcHRzLWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+PFNlY3Rpb25FeWVicm93PlRyeSBhIGdyb3VuZGVkIHByb21wdDwvU2VjdGlvbkV5ZWJyb3c+PGgyIGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LXhsIGZvbnQtYm9sZFwiPlN0YXJ0IHdpdGggYSBkZWNpc2lvbjwvaDI+PGRpdiBjbGFzc05hbWU9XCJtdC01IHNwYWNlLXktMlwiPntwcm9tcHRzLm1hcChwcm9tcHQgPT4gPGJ1dHRvbiBrZXk9e3Byb21wdH0gb25DbGljaz17KCkgPT4geyB2b2lkIHN1Ym1pdCh1bmRlZmluZWQsIHByb21wdCk7IH19IGRpc2FibGVkPXtzZW5kaW5nfSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1hbWJlci0yMDAgYmctd2hpdGUvNjAgcC0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1hbWJlci05NTAgdHJhbnNpdGlvbi1bdHJhbnNmb3JtLGJhY2tncm91bmQtY29sb3JdIGR1cmF0aW9uLTIwMCBob3ZlcjotdHJhbnNsYXRlLXktMC41IGhvdmVyOmJnLXdoaXRlXCIgZGF0YS10ZXN0aWQ9e2Bwcm9tcHQtJHtwcm9tcHQuc2xpY2UoMCwgMTgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfWB9Pntwcm9tcHR9PFNwYXJrbGVzIHNpemU9ezE0fSBjbGFzc05hbWU9XCJzaHJpbmstMCB0ZXh0LWFtYmVyLTcwMFwiIC8+PC9idXR0b24+KX08L2Rpdj48L0NhcmRDb250ZW50PjwvQ2FyZD48Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItc2xhdGUtMjAwLzgwIGJnLXdoaXRlXCIgZGF0YS10ZXN0aWQ9XCJjb3Vuc2VsbG9yLXRydXN0LWNhcmRcIj48Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+PFNlY3Rpb25FeWVicm93PkhvdyB0byByZWFkIGl0PC9TZWN0aW9uRXllYnJvdz48ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPjxUcnVzdFJvdyBpY29uPXs8Q2hlY2tDaXJjbGUyIHNpemU9ezE2fSAvPn0gdGl0bGU9XCJHcm91bmRlZFwiIHRleHQ9XCJBbnN3ZXJzIHVzZSBvbmx5IHNlZWRlZCBjb2xsZWdlIGFuZCBjYXJlZXIgcm93cy5cIiAvPjxUcnVzdFJvdyBpY29uPXs8Qm9va09wZW4gc2l6ZT17MTZ9IC8+fSB0aXRsZT1cIkNpdGVkXCIgdGV4dD1cIlNvdXJjZSBsYWJlbHMgc2hvdyB3aGF0IGluZm9ybWVkIHRoZSBhbnN3ZXIuXCIgLz48VHJ1c3RSb3cgaWNvbj17PFNwYXJrbGVzIHNpemU9ezE2fSAvPn0gdGl0bGU9XCJFc3RpbWF0ZS1hd2FyZVwiIHRleHQ9e21ldGEuY29uZmlkZW5jZX0gLz48L2Rpdj48L0NhcmRDb250ZW50PjwvQ2FyZD48L2Rpdj48L3NlY3Rpb24+PC9kaXY+OyB9XG5mdW5jdGlvbiBUcnVzdFJvdyh7IGljb24sIHRpdGxlLCB0ZXh0IH06IHsgaWNvbjogUmVhY3ROb2RlOyB0aXRsZTogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkgeyByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCIgZGF0YS10ZXN0aWQ9e2B0cnVzdC1yb3ctJHt0aXRsZS50b0xvd2VyQ2FzZSgpfWB9PjxzcGFuIGNsYXNzTmFtZT1cIm10LTAuNSB0ZXh0LWVtZXJhbGQtNzAwXCI+e2ljb259PC9zcGFuPjxkaXY+PHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+e3RpdGxlfTwvcD48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgbGVhZGluZy01IHRleHQtc2xhdGUtNTAwXCI+e3RleHR9PC9wPjwvZGl2PjwvZGl2PjsgfSJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvcGFnZXMvQ291bnNlbGxvci50c3gifQ==