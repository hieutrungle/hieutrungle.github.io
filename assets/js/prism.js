/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+bash+c+csharp+cpp+css-extras+csv+diff+docker+excel-formula+git+ignore+java+json+json5+markup-templating+matlab+php+powerquery+python+sql+xml-doc&plugins=line-highlight+line-numbers+autolinker+wpd+custom-class+file-highlight+show-language+jsonp-highlight+highlight-keywords+remove-initial-line-feed+inline-color+previewers+autoloader+keep-markup+command-line+unescaped-markup+normalize-whitespace+data-uri-highlight+toolbar+copy-to-clipboard+download-button+match-braces+diff-highlight+filter-highlight-all+treeview */
var _self =
		"undefined" != typeof window
			? window
			: "undefined" != typeof WorkerGlobalScope &&
			  self instanceof WorkerGlobalScope
			? self
			: {},
	Prism = (function (e) {
		var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
			t = 0,
			r = {},
			a = {
				manual: e.Prism && e.Prism.manual,
				disableWorkerMessageHandler:
					e.Prism && e.Prism.disableWorkerMessageHandler,
				util: {
					encode: function e(n) {
						return n instanceof i
							? new i(n.type, e(n.content), n.alias)
							: Array.isArray(n)
							? n.map(e)
							: n
									.replace(/&/g, "&amp;")
									.replace(/</g, "&lt;")
									.replace(/\u00a0/g, " ");
					},
					type: function (e) {
						return Object.prototype.toString.call(e).slice(8, -1);
					},
					objId: function (e) {
						return (
							e.__id ||
								Object.defineProperty(e, "__id", {
									value: ++t,
								}),
							e.__id
						);
					},
					clone: function e(n, t) {
						var r, i;
						switch (((t = t || {}), a.util.type(n))) {
							case "Object":
								if (((i = a.util.objId(n)), t[i])) return t[i];
								for (var l in ((r = {}), (t[i] = r), n))
									n.hasOwnProperty(l) && (r[l] = e(n[l], t));
								return r;
							case "Array":
								return (
									(i = a.util.objId(n)),
									t[i]
										? t[i]
										: ((r = []),
										  (t[i] = r),
										  n.forEach(function (n, a) {
												r[a] = e(n, t);
										  }),
										  r)
								);
							default:
								return n;
						}
					},
					getLanguage: function (e) {
						for (; e; ) {
							var t = n.exec(e.className);
							if (t) return t[1].toLowerCase();
							e = e.parentElement;
						}
						return "none";
					},
					setLanguage: function (e, t) {
						(e.className = e.className.replace(
							RegExp(n, "gi"),
							""
						)),
							e.classList.add("language-" + t);
					},
					currentScript: function () {
						if ("undefined" == typeof document) return null;
						if ("currentScript" in document)
							return document.currentScript;
						try {
							throw new Error();
						} catch (r) {
							var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
								r.stack
							) || [])[1];
							if (e) {
								var n = document.getElementsByTagName("script");
								for (var t in n) if (n[t].src == e) return n[t];
							}
							return null;
						}
					},
					isActive: function (e, n, t) {
						for (var r = "no-" + n; e; ) {
							var a = e.classList;
							if (a.contains(n)) return !0;
							if (a.contains(r)) return !1;
							e = e.parentElement;
						}
						return !!t;
					},
				},
				languages: {
					plain: r,
					plaintext: r,
					text: r,
					txt: r,
					extend: function (e, n) {
						var t = a.util.clone(a.languages[e]);
						for (var r in n) t[r] = n[r];
						return t;
					},
					insertBefore: function (e, n, t, r) {
						var i = (r = r || a.languages)[e],
							l = {};
						for (var o in i)
							if (i.hasOwnProperty(o)) {
								if (o == n)
									for (var s in t)
										t.hasOwnProperty(s) && (l[s] = t[s]);
								t.hasOwnProperty(o) || (l[o] = i[o]);
							}
						var u = r[e];
						return (
							(r[e] = l),
							a.languages.DFS(a.languages, function (n, t) {
								t === u && n != e && (this[n] = l);
							}),
							l
						);
					},
					DFS: function e(n, t, r, i) {
						i = i || {};
						var l = a.util.objId;
						for (var o in n)
							if (n.hasOwnProperty(o)) {
								t.call(n, o, n[o], r || o);
								var s = n[o],
									u = a.util.type(s);
								"Object" !== u || i[l(s)]
									? "Array" !== u ||
									  i[l(s)] ||
									  ((i[l(s)] = !0), e(s, t, o, i))
									: ((i[l(s)] = !0), e(s, t, null, i));
							}
					},
				},
				plugins: {},
				highlightAll: function (e, n) {
					a.highlightAllUnder(document, e, n);
				},
				highlightAllUnder: function (e, n, t) {
					var r = {
						callback: t,
						container: e,
						selector:
							'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
					};
					a.hooks.run("before-highlightall", r),
						(r.elements = Array.prototype.slice.apply(
							r.container.querySelectorAll(r.selector)
						)),
						a.hooks.run("before-all-elements-highlight", r);
					for (var i, l = 0; (i = r.elements[l++]); )
						a.highlightElement(i, !0 === n, r.callback);
				},
				highlightElement: function (n, t, r) {
					var i = a.util.getLanguage(n),
						l = a.languages[i];
					a.util.setLanguage(n, i);
					var o = n.parentElement;
					o &&
						"pre" === o.nodeName.toLowerCase() &&
						a.util.setLanguage(o, i);
					var s = {
						element: n,
						language: i,
						grammar: l,
						code: n.textContent,
					};
					function u(e) {
						(s.highlightedCode = e),
							a.hooks.run("before-insert", s),
							(s.element.innerHTML = s.highlightedCode),
							a.hooks.run("after-highlight", s),
							a.hooks.run("complete", s),
							r && r.call(s.element);
					}
					if (
						(a.hooks.run("before-sanity-check", s),
						(o = s.element.parentElement) &&
							"pre" === o.nodeName.toLowerCase() &&
							!o.hasAttribute("tabindex") &&
							o.setAttribute("tabindex", "0"),
						!s.code)
					)
						return (
							a.hooks.run("complete", s),
							void (r && r.call(s.element))
						);
					if ((a.hooks.run("before-highlight", s), s.grammar))
						if (t && e.Worker) {
							var c = new Worker(a.filename);
							(c.onmessage = function (e) {
								u(e.data);
							}),
								c.postMessage(
									JSON.stringify({
										language: s.language,
										code: s.code,
										immediateClose: !0,
									})
								);
						} else u(a.highlight(s.code, s.grammar, s.language));
					else u(a.util.encode(s.code));
				},
				highlight: function (e, n, t) {
					var r = { code: e, grammar: n, language: t };
					if ((a.hooks.run("before-tokenize", r), !r.grammar))
						throw new Error(
							'The language "' + r.language + '" has no grammar.'
						);
					return (
						(r.tokens = a.tokenize(r.code, r.grammar)),
						a.hooks.run("after-tokenize", r),
						i.stringify(a.util.encode(r.tokens), r.language)
					);
				},
				tokenize: function (e, n) {
					var t = n.rest;
					if (t) {
						for (var r in t) n[r] = t[r];
						delete n.rest;
					}
					var a = new s();
					return (
						u(a, a.head, e),
						o(e, a, n, a.head, 0),
						(function (e) {
							for (var n = [], t = e.head.next; t !== e.tail; )
								n.push(t.value), (t = t.next);
							return n;
						})(a)
					);
				},
				hooks: {
					all: {},
					add: function (e, n) {
						var t = a.hooks.all;
						(t[e] = t[e] || []), t[e].push(n);
					},
					run: function (e, n) {
						var t = a.hooks.all[e];
						if (t && t.length)
							for (var r, i = 0; (r = t[i++]); ) r(n);
					},
				},
				Token: i,
			};
		function i(e, n, t, r) {
			(this.type = e),
				(this.content = n),
				(this.alias = t),
				(this.length = 0 | (r || "").length);
		}
		function l(e, n, t, r) {
			e.lastIndex = n;
			var a = e.exec(t);
			if (a && r && a[1]) {
				var i = a[1].length;
				(a.index += i), (a[0] = a[0].slice(i));
			}
			return a;
		}
		function o(e, n, t, r, s, g) {
			for (var f in t)
				if (t.hasOwnProperty(f) && t[f]) {
					var h = t[f];
					h = Array.isArray(h) ? h : [h];
					for (var d = 0; d < h.length; ++d) {
						if (g && g.cause == f + "," + d) return;
						var v = h[d],
							p = v.inside,
							m = !!v.lookbehind,
							y = !!v.greedy,
							k = v.alias;
						if (y && !v.pattern.global) {
							var x = v.pattern.toString().match(/[imsuy]*$/)[0];
							v.pattern = RegExp(v.pattern.source, x + "g");
						}
						for (
							var b = v.pattern || v, w = r.next, A = s;
							w !== n.tail && !(g && A >= g.reach);
							A += w.value.length, w = w.next
						) {
							var E = w.value;
							if (n.length > e.length) return;
							if (!(E instanceof i)) {
								var P,
									L = 1;
								if (y) {
									if (
										!(P = l(b, A, e, m)) ||
										P.index >= e.length
									)
										break;
									var S = P.index,
										O = P.index + P[0].length,
										j = A;
									for (j += w.value.length; S >= j; )
										j += (w = w.next).value.length;
									if (
										((A = j -= w.value.length),
										w.value instanceof i)
									)
										continue;
									for (
										var C = w;
										C !== n.tail &&
										(j < O || "string" == typeof C.value);
										C = C.next
									)
										L++, (j += C.value.length);
									L--, (E = e.slice(A, j)), (P.index -= A);
								} else if (!(P = l(b, 0, E, m))) continue;
								S = P.index;
								var N = P[0],
									_ = E.slice(0, S),
									M = E.slice(S + N.length),
									W = A + E.length;
								g && W > g.reach && (g.reach = W);
								var z = w.prev;
								if (
									(_ && ((z = u(n, z, _)), (A += _.length)),
									c(n, z, L),
									(w = u(
										n,
										z,
										new i(f, p ? a.tokenize(N, p) : N, k, N)
									)),
									M && u(n, w, M),
									L > 1)
								) {
									var I = { cause: f + "," + d, reach: W };
									o(e, n, t, w.prev, A, I),
										g &&
											I.reach > g.reach &&
											(g.reach = I.reach);
								}
							}
						}
					}
				}
		}
		function s() {
			var e = { value: null, prev: null, next: null },
				n = { value: null, prev: e, next: null };
			(e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
		}
		function u(e, n, t) {
			var r = n.next,
				a = { value: t, prev: n, next: r };
			return (n.next = a), (r.prev = a), e.length++, a;
		}
		function c(e, n, t) {
			for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
			(n.next = r), (r.prev = n), (e.length -= a);
		}
		if (
			((e.Prism = a),
			(i.stringify = function e(n, t) {
				if ("string" == typeof n) return n;
				if (Array.isArray(n)) {
					var r = "";
					return (
						n.forEach(function (n) {
							r += e(n, t);
						}),
						r
					);
				}
				var i = {
						type: n.type,
						content: e(n.content, t),
						tag: "span",
						classes: ["token", n.type],
						attributes: {},
						language: t,
					},
					l = n.alias;
				l &&
					(Array.isArray(l)
						? Array.prototype.push.apply(i.classes, l)
						: i.classes.push(l)),
					a.hooks.run("wrap", i);
				var o = "";
				for (var s in i.attributes)
					o +=
						" " +
						s +
						'="' +
						(i.attributes[s] || "").replace(/"/g, "&quot;") +
						'"';
				return (
					"<" +
					i.tag +
					' class="' +
					i.classes.join(" ") +
					'"' +
					o +
					">" +
					i.content +
					"</" +
					i.tag +
					">"
				);
			}),
			!e.document)
		)
			return e.addEventListener
				? (a.disableWorkerMessageHandler ||
						e.addEventListener(
							"message",
							function (n) {
								var t = JSON.parse(n.data),
									r = t.language,
									i = t.code,
									l = t.immediateClose;
								e.postMessage(
									a.highlight(i, a.languages[r], r)
								),
									l && e.close();
							},
							!1
						),
				  a)
				: a;
		var g = a.util.currentScript();
		function f() {
			a.manual || a.highlightAll();
		}
		if (
			(g &&
				((a.filename = g.src),
				g.hasAttribute("data-manual") && (a.manual = !0)),
			!a.manual)
		) {
			var h = document.readyState;
			"loading" === h || ("interactive" === h && g && g.defer)
				? document.addEventListener("DOMContentLoaded", f)
				: window.requestAnimationFrame
				? window.requestAnimationFrame(f)
				: window.setTimeout(f, 16);
		}
		return a;
	})(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
	"undefined" != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
	comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
	prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
	doctype: {
		pattern:
			/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0,
		inside: {
			"internal-subset": {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: !0,
				greedy: !0,
				inside: null,
			},
			string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
			punctuation: /^<!|>$|[[\]]/,
			"doctype-tag": /^DOCTYPE/i,
			name: /[^\s<>'"]+/,
		},
	},
	cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
	tag: {
		pattern:
			/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
			},
			"special-attr": [],
			"attr-value": {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					punctuation: [
						{ pattern: /^=/, alias: "attr-equals" },
						{ pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
					],
				},
			},
			punctuation: /\/?>/,
			"attr-name": {
				pattern: /[^\s>\/]+/,
				inside: { namespace: /^[^\s>\/:]+:/ },
			},
		},
	},
	entity: [
		{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
		/&#x?[\da-f]{1,8};/i,
	],
}),
	(Prism.languages.markup.tag.inside["attr-value"].inside.entity =
		Prism.languages.markup.entity),
	(Prism.languages.markup.doctype.inside["internal-subset"].inside =
		Prism.languages.markup),
	Prism.hooks.add("wrap", function (a) {
		"entity" === a.type &&
			(a.attributes.title = a.content.replace(/&amp;/, "&"));
	}),
	Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
		value: function (a, e) {
			var s = {};
			(s["language-" + e] = {
				pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
				lookbehind: !0,
				inside: Prism.languages[e],
			}),
				(s.cdata = /^<!\[CDATA\[|\]\]>$/i);
			var t = {
				"included-cdata": {
					pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
					inside: s,
				},
			};
			t["language-" + e] = {
				pattern: /[\s\S]+/,
				inside: Prism.languages[e],
			};
			var n = {};
			(n[a] = {
				pattern: RegExp(
					"(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
						/__/g,
						function () {
							return a;
						}
					),
					"i"
				),
				lookbehind: !0,
				greedy: !0,
				inside: t,
			}),
				Prism.languages.insertBefore("markup", "cdata", n);
		},
	}),
	Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
		value: function (a, e) {
			Prism.languages.markup.tag.inside["special-attr"].push({
				pattern: RegExp(
					"(^|[\"'\\s])(?:" +
						a +
						")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
					"i"
				),
				lookbehind: !0,
				inside: {
					"attr-name": /^[^\s=]+/,
					"attr-value": {
						pattern: /=[\s\S]+/,
						inside: {
							value: {
								pattern:
									/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
								lookbehind: !0,
								alias: [e, "language-" + e],
								inside: Prism.languages[e],
							},
							punctuation: [
								{ pattern: /^=/, alias: "attr-equals" },
								/"|'/,
							],
						},
					},
				},
			});
		},
	}),
	(Prism.languages.html = Prism.languages.markup),
	(Prism.languages.mathml = Prism.languages.markup),
	(Prism.languages.svg = Prism.languages.markup),
	(Prism.languages.xml = Prism.languages.extend("markup", {})),
	(Prism.languages.ssml = Prism.languages.xml),
	(Prism.languages.atom = Prism.languages.xml),
	(Prism.languages.rss = Prism.languages.xml);
!(function (s) {
	var e =
		/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
	(s.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: RegExp(
				"@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" +
					e.source +
					")*?(?:;|(?=\\s*\\{))"
			),
			inside: {
				rule: /^@[\w-]+/,
				"selector-function-argument": {
					pattern:
						/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: "selector",
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0,
				},
			},
		},
		url: {
			pattern: RegExp(
				"\\burl\\((?:" +
					e.source +
					"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
				"i"
			),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: { pattern: RegExp("^" + e.source + "$"), alias: "url" },
			},
		},
		selector: {
			pattern: RegExp(
				"(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
					e.source +
					")*(?=\\s*\\{)"
			),
			lookbehind: !0,
		},
		string: { pattern: e, greedy: !0 },
		property: {
			pattern:
				/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0,
		},
		important: /!important\b/i,
		function: {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: !0,
		},
		punctuation: /[(){};:,]/,
	}),
		(s.languages.css.atrule.inside.rest = s.languages.css);
	var t = s.languages.markup;
	t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.clike = {
	comment: [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: !0,
			greedy: !0,
		},
		{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
	],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
	},
	"class-name": {
		pattern:
			/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ },
	},
	keyword:
		/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	boolean: /\b(?:false|true)\b/,
	function: /\b\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	punctuation: /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend("clike", {
	"class-name": [
		Prism.languages.clike["class-name"],
		{
			pattern:
				/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: !0,
		},
	],
	keyword: [
		{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
		{
			pattern:
				/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0,
		},
	],
	function:
		/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	number: {
		pattern: RegExp(
			"(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"
		),
		lookbehind: !0,
	},
	operator:
		/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
	(Prism.languages.javascript["class-name"][0].pattern =
		/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
	Prism.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp(
				"((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"
			),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: Prism.languages.regex,
				},
				"regex-delimiter": /^\/|\/$/,
				"regex-flags": /^[a-z]+$/,
			},
		},
		"function-variable": {
			pattern:
				/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: "function",
		},
		parameter: [
			{
				pattern:
					/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
	}),
	Prism.languages.insertBefore("javascript", "string", {
		hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
		"template-string": {
			pattern:
				/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				"template-punctuation": { pattern: /^`|`$/, alias: "string" },
				interpolation: {
					pattern:
						/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\$\{|\}$/,
							alias: "punctuation",
						},
						rest: Prism.languages.javascript,
					},
				},
				string: /[\s\S]+/,
			},
		},
		"string-property": {
			pattern:
				/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: !0,
			greedy: !0,
			alias: "property",
		},
	}),
	Prism.languages.insertBefore("javascript", "operator", {
		"literal-property": {
			pattern:
				/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
			lookbehind: !0,
			alias: "property",
		},
	}),
	Prism.languages.markup &&
		(Prism.languages.markup.tag.addInlined("script", "javascript"),
		Prism.languages.markup.tag.addAttribute(
			"on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
			"javascript"
		)),
	(Prism.languages.js = Prism.languages.javascript);
!(function (e) {
	var t =
			"\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
		a = {
			pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
			lookbehind: !0,
			alias: "punctuation",
			inside: null,
		},
		n = {
			bash: a,
			environment: { pattern: RegExp("\\$" + t), alias: "constant" },
			variable: [
				{
					pattern: /\$?\(\([\s\S]+?\)\)/,
					greedy: !0,
					inside: {
						variable: [
							{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
							/^\$\(\(/,
						],
						number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
						operator:
							/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
						punctuation: /\(\(?|\)\)?|,|;/,
					},
				},
				{
					pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
					greedy: !0,
					inside: { variable: /^\$\(|^`|\)$|`$/ },
				},
				{
					pattern: /\$\{[^}]+\}/,
					greedy: !0,
					inside: {
						operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
						punctuation: /[\[\]]/,
						environment: {
							pattern: RegExp("(\\{)" + t),
							lookbehind: !0,
							alias: "constant",
						},
					},
				},
				/\$(?:\w+|[#?*!@$])/,
			],
			entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
		};
	(e.languages.bash = {
		shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
		comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
		"function-name": [
			{
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: !0,
				alias: "function",
			},
			{ pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
		],
		"for-or-select": {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: "variable",
			lookbehind: !0,
		},
		"assign-left": {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
			inside: {
				environment: {
					pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
					lookbehind: !0,
					alias: "constant",
				},
			},
			alias: "variable",
			lookbehind: !0,
		},
		parameter: {
			pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
			alias: "variable",
			lookbehind: !0,
		},
		string: [
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: !0,
				greedy: !0,
				inside: n,
			},
			{
				pattern:
					/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: !0,
				greedy: !0,
				inside: { bash: a },
			},
			{
				pattern:
					/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: !0,
				greedy: !0,
				inside: n,
			},
			{ pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
			{
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: !0,
				inside: { entity: n.entity },
			},
		],
		environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
		variable: n.variable,
		function: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		keyword: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		builtin: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: !0,
			alias: "class-name",
		},
		boolean: {
			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		"file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
		operator: {
			pattern:
				/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: {
				"file-descriptor": { pattern: /^\d/, alias: "important" },
			},
		},
		punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		number: {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: !0,
		},
	}),
		(a.inside = e.languages.bash);
	for (
		var s = [
				"comment",
				"function-name",
				"for-or-select",
				"assign-left",
				"parameter",
				"string",
				"environment",
				"function",
				"keyword",
				"builtin",
				"boolean",
				"file-descriptor",
				"operator",
				"punctuation",
				"number",
			],
			o = n.variable[1].inside,
			i = 0;
		i < s.length;
		i++
	)
		o[s[i]] = e.languages.bash[s[i]];
	(e.languages.sh = e.languages.bash), (e.languages.shell = e.languages.bash);
})(Prism);
(Prism.languages.c = Prism.languages.extend("clike", {
	comment: {
		pattern:
			/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: !0,
	},
	string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
	"class-name": {
		pattern:
			/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
		lookbehind: !0,
	},
	keyword:
		/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
	function: /\b[a-z_]\w*(?=\s*\()/i,
	number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
	operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
})),
	Prism.languages.insertBefore("c", "string", {
		char: {
			pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
			greedy: !0,
		},
	}),
	Prism.languages.insertBefore("c", "string", {
		macro: {
			pattern:
				/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
			lookbehind: !0,
			greedy: !0,
			alias: "property",
			inside: {
				string: [
					{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
					Prism.languages.c.string,
				],
				char: Prism.languages.c.char,
				comment: Prism.languages.c.comment,
				"macro-name": [
					{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
					{
						pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
						lookbehind: !0,
						alias: "function",
					},
				],
				directive: {
					pattern: /^(#\s*)[a-z]+/,
					lookbehind: !0,
					alias: "keyword",
				},
				"directive-hash": /^#/,
				punctuation: /##|\\(?=[\r\n])/,
				expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c },
			},
		},
	}),
	Prism.languages.insertBefore("c", "function", {
		constant:
			/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
	}),
	delete Prism.languages.c.boolean;
!(function (e) {
	function n(e, n) {
		return e.replace(/<<(\d+)>>/g, function (e, s) {
			return "(?:" + n[+s] + ")";
		});
	}
	function s(e, s, a) {
		return RegExp(n(e, s), a || "");
	}
	function a(e, n) {
		for (var s = 0; s < n; s++)
			e = e.replace(/<<self>>/g, function () {
				return "(?:" + e + ")";
			});
		return e.replace(/<<self>>/g, "[^\\s\\S]");
	}
	var t =
			"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
		r = "class enum interface record struct",
		i =
			"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
		o =
			"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
	function l(e) {
		return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
	}
	var d = l(r),
		p = RegExp(l(t + " " + r + " " + i + " " + o)),
		c = l(r + " " + i + " " + o),
		u = l(t + " " + r + " " + o),
		g = a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
		b = a("\\((?:[^()]|<<self>>)*\\)", 2),
		h = "@?\\b[A-Za-z_]\\w*\\b",
		f = n("<<0>>(?:\\s*<<1>>)?", [h, g]),
		m = n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]),
		k = "\\[\\s*(?:,\\s*)*\\]",
		y = n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]),
		w = n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k]),
		v = n("\\(<<0>>+(?:,<<0>>+)+\\)", [w]),
		x = n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [
			v,
			m,
			k,
		]),
		$ = { keyword: p, punctuation: /[<>()?,.:[\]]/ },
		_ = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
		B = '"(?:\\\\.|[^\\\\"\r\n])*"';
	(e.languages.csharp = e.languages.extend("clike", {
		string: [
			{
				pattern: s("(^|[^$\\\\])<<0>>", [
					'@"(?:""|\\\\[^]|[^\\\\"])*"(?!")',
				]),
				lookbehind: !0,
				greedy: !0,
			},
			{
				pattern: s("(^|[^@$\\\\])<<0>>", [B]),
				lookbehind: !0,
				greedy: !0,
			},
		],
		"class-name": [
			{
				pattern: s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]),
				lookbehind: !0,
				inside: $,
			},
			{
				pattern: s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [
					h,
					x,
				]),
				lookbehind: !0,
				inside: $,
			},
			{ pattern: s("(\\busing\\s+)<<0>>(?=\\s*=)", [h]), lookbehind: !0 },
			{
				pattern: s("(\\b<<0>>\\s+)<<1>>", [d, f]),
				lookbehind: !0,
				inside: $,
			},
			{
				pattern: s("(\\bcatch\\s*\\(\\s*)<<0>>", [m]),
				lookbehind: !0,
				inside: $,
			},
			{ pattern: s("(\\bwhere\\s+)<<0>>", [h]), lookbehind: !0 },
			{
				pattern: s("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]),
				lookbehind: !0,
				inside: $,
			},
			{
				pattern: s(
					"\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",
					[x, u, h]
				),
				inside: $,
			},
		],
		keyword: p,
		number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
		operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
		punctuation: /\?\.?|::|[{}[\];(),.:]/,
	})),
		e.languages.insertBefore("csharp", "number", {
			range: { pattern: /\.\./, alias: "operator" },
		}),
		e.languages.insertBefore("csharp", "punctuation", {
			"named-parameter": {
				pattern: s("([(,]\\s*)<<0>>(?=\\s*:)", [h]),
				lookbehind: !0,
				alias: "punctuation",
			},
		}),
		e.languages.insertBefore("csharp", "class-name", {
			namespace: {
				pattern: s(
					"(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",
					[h]
				),
				lookbehind: !0,
				inside: { punctuation: /\./ },
			},
			"type-expression": {
				pattern: s(
					"(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",
					[b]
				),
				lookbehind: !0,
				alias: "class-name",
				inside: $,
			},
			"return-type": {
				pattern: s(
					"<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",
					[x, m]
				),
				inside: $,
				alias: "class-name",
			},
			"constructor-invocation": {
				pattern: s("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [x]),
				lookbehind: !0,
				inside: $,
				alias: "class-name",
			},
			"generic-method": {
				pattern: s("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]),
				inside: {
					function: s("^<<0>>", [h]),
					generic: {
						pattern: RegExp(g),
						alias: "class-name",
						inside: $,
					},
				},
			},
			"type-list": {
				pattern: s(
					"\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",
					[d, f, h, x, p.source, b, "\\bnew\\s*\\(\\s*\\)"]
				),
				lookbehind: !0,
				inside: {
					"record-arguments": {
						pattern: s("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [f, b]),
						lookbehind: !0,
						greedy: !0,
						inside: e.languages.csharp,
					},
					keyword: p,
					"class-name": { pattern: RegExp(x), greedy: !0, inside: $ },
					punctuation: /[,()]/,
				},
			},
			preprocessor: {
				pattern: /(^[\t ]*)#.*/m,
				lookbehind: !0,
				alias: "property",
				inside: {
					directive: {
						pattern:
							/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
						lookbehind: !0,
						alias: "keyword",
					},
				},
			},
		});
	var E = B + "|" + _,
		R = n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [
			E,
		]),
		z = a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [R]), 2),
		S =
			"\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
		j = n("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, z]);
	e.languages.insertBefore("csharp", "class-name", {
		attribute: {
			pattern: s(
				"((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",
				[S, j]
			),
			lookbehind: !0,
			greedy: !0,
			inside: {
				target: {
					pattern: s("^<<0>>(?=\\s*:)", [S]),
					alias: "keyword",
				},
				"attribute-arguments": {
					pattern: s("\\(<<0>>*\\)", [z]),
					inside: e.languages.csharp,
				},
				"class-name": {
					pattern: RegExp(m),
					inside: { punctuation: /\./ },
				},
				punctuation: /[:,]/,
			},
		},
	});
	var A = ":[^}\r\n]+",
		F = a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [R]), 2),
		P = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [F, A]),
		U = a(
			n(
				"[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",
				[E]
			),
			2
		),
		Z = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [U, A]);
	function q(n, a) {
		return {
			interpolation: {
				pattern: s("((?:^|[^{])(?:\\{\\{)*)<<0>>", [n]),
				lookbehind: !0,
				inside: {
					"format-string": {
						pattern: s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [
							a,
							A,
						]),
						lookbehind: !0,
						inside: { punctuation: /^:/ },
					},
					punctuation: /^\{|\}$/,
					expression: {
						pattern: /[\s\S]+/,
						alias: "language-csharp",
						inside: e.languages.csharp,
					},
				},
			},
			string: /[\s\S]+/,
		};
	}
	e.languages.insertBefore("csharp", "string", {
		"interpolation-string": [
			{
				pattern: s(
					'(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',
					[P]
				),
				lookbehind: !0,
				greedy: !0,
				inside: q(P, F),
			},
			{
				pattern: s(
					'(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',
					[Z]
				),
				lookbehind: !0,
				greedy: !0,
				inside: q(Z, U),
			},
		],
		char: { pattern: RegExp(_), greedy: !0 },
	}),
		(e.languages.dotnet = e.languages.cs = e.languages.csharp);
})(Prism);
!(function (e) {
	var t =
			/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
		n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(
			/<keyword>/g,
			function () {
				return t.source;
			}
		);
	(e.languages.cpp = e.languages.extend("c", {
		"class-name": [
			{
				pattern: RegExp(
					"(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(
						/<keyword>/g,
						function () {
							return t.source;
						}
					)
				),
				lookbehind: !0,
			},
			/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
			/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
			/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
		],
		keyword: t,
		number: {
			pattern:
				/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
			greedy: !0,
		},
		operator:
			/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
		boolean: /\b(?:false|true)\b/,
	})),
		e.languages.insertBefore("cpp", "string", {
			module: {
				pattern: RegExp(
					'(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' +
						"<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(
							/<mod-name>/g,
							function () {
								return n;
							}
						) +
						")"
				),
				lookbehind: !0,
				greedy: !0,
				inside: {
					string: /^[<"][\s\S]+/,
					operator: /:/,
					punctuation: /\./,
				},
			},
			"raw-string": {
				pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
				alias: "string",
				greedy: !0,
			},
		}),
		e.languages.insertBefore("cpp", "keyword", {
			"generic-function": {
				pattern:
					/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
				inside: {
					function: /^\w+/,
					generic: {
						pattern: /<[\s\S]+/,
						alias: "class-name",
						inside: e.languages.cpp,
					},
				},
			},
		}),
		e.languages.insertBefore("cpp", "operator", {
			"double-colon": { pattern: /::/, alias: "punctuation" },
		}),
		e.languages.insertBefore("cpp", "class-name", {
			"base-clause": {
				pattern:
					/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
				lookbehind: !0,
				greedy: !0,
				inside: e.languages.extend("cpp", {}),
			},
		}),
		e.languages.insertBefore(
			"inside",
			"double-colon",
			{ "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
			e.languages.cpp["base-clause"]
		);
})(Prism);
!(function (e) {
	var a,
		n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
	(e.languages.css.selector = {
		pattern: e.languages.css.selector.pattern,
		lookbehind: !0,
		inside: (a = {
			"pseudo-element":
				/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
			"pseudo-class": /:[-\w]+/,
			class: /\.[-\w]+/,
			id: /#[-\w]+/,
			attribute: {
				pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
				greedy: !0,
				inside: {
					punctuation: /^\[|\]$/,
					"case-sensitivity": {
						pattern: /(\s)[si]$/i,
						lookbehind: !0,
						alias: "keyword",
					},
					namespace: {
						pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
						lookbehind: !0,
						inside: { punctuation: /\|$/ },
					},
					"attr-name": {
						pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
						lookbehind: !0,
					},
					"attr-value": [
						n,
						{
							pattern:
								/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
							lookbehind: !0,
						},
					],
					operator: /[|~*^$]?=/,
				},
			},
			"n-th": [
				{
					pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
					lookbehind: !0,
					inside: { number: /[\dn]+/, operator: /[+-]/ },
				},
				{ pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
			],
			combinator: />|\+|~|\|\|/,
			punctuation: /[(),]/,
		}),
	}),
		(e.languages.css.atrule.inside["selector-function-argument"].inside =
			a),
		e.languages.insertBefore("css", "property", {
			variable: {
				pattern:
					/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
				lookbehind: !0,
			},
		});
	var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
		i = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
	e.languages.insertBefore("css", "function", {
		operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
		hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
		color: [
			{
				pattern:
					/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
				lookbehind: !0,
			},
			{
				pattern:
					/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
				inside: {
					unit: r,
					number: i,
					function: /[\w-]+(?=\()/,
					punctuation: /[(),]/,
				},
			},
		],
		entity: /\\[\da-f]{1,8}/i,
		unit: r,
		number: i,
	});
})(Prism);
Prism.languages.csv = {
	value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
	punctuation: /,/,
};
!(function (e) {
	e.languages.diff = {
		coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
	};
	var n = {
		"deleted-sign": "-",
		"deleted-arrow": "<",
		"inserted-sign": "+",
		"inserted-arrow": ">",
		unchanged: " ",
		diff: "!",
	};
	Object.keys(n).forEach(function (a) {
		var i = n[a],
			r = [];
		/^\w+$/.test(a) || r.push(/\w+/.exec(a)[0]),
			"diff" === a && r.push("bold"),
			(e.languages.diff[a] = {
				pattern: RegExp(
					"^(?:[" + i + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
					"m"
				),
				alias: r,
				inside: {
					line: {
						pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
						lookbehind: !0,
					},
					prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(a)[0] },
				},
			});
	}),
		Object.defineProperty(e.languages.diff, "PREFIXES", { value: n });
})(Prism);
!(function (e) {
	var n = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(
			/<SP_BS>/g,
			function () {
				return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])";
			}
		),
		r =
			"\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
		t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(
			/<STR>/g,
			function () {
				return r;
			}
		),
		o = { pattern: RegExp(r), greedy: !0 },
		i = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
	function a(e, r) {
		return (
			(e = e
				.replace(/<OPT>/g, function () {
					return t;
				})
				.replace(/<SP>/g, function () {
					return n;
				})),
			RegExp(e, r)
		);
	}
	(e.languages.docker = {
		instruction: {
			pattern:
				/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
			lookbehind: !0,
			greedy: !0,
			inside: {
				options: {
					pattern: a(
						"(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*",
						"i"
					),
					lookbehind: !0,
					greedy: !0,
					inside: {
						property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 },
						string: [
							o,
							{
								pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
								lookbehind: !0,
							},
						],
						operator: /\\$/m,
						punctuation: /=/,
					},
				},
				keyword: [
					{
						pattern: a(
							"(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b",
							"i"
						),
						lookbehind: !0,
						greedy: !0,
					},
					{
						pattern: a(
							"(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS",
							"i"
						),
						lookbehind: !0,
						greedy: !0,
					},
					{
						pattern: a("(^ONBUILD<SP>)\\w+", "i"),
						lookbehind: !0,
						greedy: !0,
					},
					{ pattern: /^\w+/, greedy: !0 },
				],
				comment: i,
				string: o,
				variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
				operator: /\\$/m,
			},
		},
		comment: i,
	}),
		(e.languages.dockerfile = e.languages.docker);
})(Prism);
(Prism.languages["excel-formula"] = {
	comment: {
		pattern: /(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,
		lookbehind: !0,
		greedy: !0,
	},
	string: { pattern: /"(?:[^"]|"")*"(?!")/, greedy: !0 },
	reference: {
		pattern:
			/(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,
		greedy: !0,
		alias: "string",
		inside: {
			operator: /!$/,
			punctuation: /'/,
			sheet: { pattern: /[^[\]]+$/, alias: "function" },
			file: { pattern: /\[[^[\]]+\]$/, inside: { punctuation: /[[\]]/ } },
			path: /[\s\S]+/,
		},
	},
	"function-name": { pattern: /\b[A-Z]\w*(?=\()/i, alias: "builtin" },
	range: {
		pattern:
			/\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,
		alias: "selector",
		inside: {
			operator: /:/,
			cell: /\$?[A-Z]+\$?\d+/i,
			column: /\$?[A-Z]+/i,
			row: /\$?\d+/,
		},
	},
	cell: {
		pattern: /\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,
		alias: "selector",
	},
	number: /(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,
	boolean: /\b(?:FALSE|TRUE)\b/i,
	operator: /[-+*/^%=&,]|<[=>]?|>=?/,
	punctuation: /[[\]();{}|]/,
}),
	(Prism.languages.xlsx = Prism.languages.xls =
		Prism.languages["excel-formula"]);
Prism.languages.git = {
	comment: /^#.*/m,
	deleted: /^[-–].*/m,
	inserted: /^\+.*/m,
	string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
	command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
	coord: /^@@.*@@$/m,
	"commit-sha1": /^commit \w{40}$/m,
};
!(function (n) {
	(n.languages.ignore = {
		comment: /^#.*/m,
		entry: {
			pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
			alias: "string",
			inside: {
				operator: /^!|\*\*?|\?/,
				regex: { pattern: /(^|[^\\])\[[^\[\]]*\]/, lookbehind: !0 },
				punctuation: /\//,
			},
		},
	}),
		(n.languages.gitignore = n.languages.ignore),
		(n.languages.hgignore = n.languages.ignore),
		(n.languages.npmignore = n.languages.ignore);
})(Prism);
!(function (e) {
	var n =
			/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
		t = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
		s = {
			pattern: RegExp(
				"(^|[^\\w.])" + t + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"
			),
			lookbehind: !0,
			inside: {
				namespace: {
					pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
					inside: { punctuation: /\./ },
				},
				punctuation: /\./,
			},
		};
	(e.languages.java = e.languages.extend("clike", {
		string: {
			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
			lookbehind: !0,
			greedy: !0,
		},
		"class-name": [
			s,
			{
				pattern: RegExp(
					"(^|[^\\w.])" +
						t +
						"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"
				),
				lookbehind: !0,
				inside: s.inside,
			},
			{
				pattern: RegExp(
					"(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" +
						t +
						"[A-Z]\\w*\\b"
				),
				lookbehind: !0,
				inside: s.inside,
			},
		],
		keyword: n,
		function: [
			e.languages.clike.function,
			{ pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 },
		],
		number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		operator: {
			pattern:
				/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: !0,
		},
		constant: /\b[A-Z][A-Z_\d]+\b/,
	})),
		e.languages.insertBefore("java", "string", {
			"triple-quoted-string": {
				pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
				greedy: !0,
				alias: "string",
			},
			char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0 },
		}),
		e.languages.insertBefore("java", "class-name", {
			annotation: {
				pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
				lookbehind: !0,
				alias: "punctuation",
			},
			generics: {
				pattern:
					/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
				inside: {
					"class-name": s,
					keyword: n,
					punctuation: /[<>(),.:]/,
					operator: /[?&|]/,
				},
			},
			import: [
				{
					pattern: RegExp(
						"(\\bimport\\s+)" + t + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"
					),
					lookbehind: !0,
					inside: {
						namespace: s.inside.namespace,
						punctuation: /\./,
						operator: /\*/,
						"class-name": /\w+/,
					},
				},
				{
					pattern: RegExp(
						"(\\bimport\\s+static\\s+)" +
							t +
							"(?:\\w+|\\*)(?=\\s*;)"
					),
					lookbehind: !0,
					alias: "static",
					inside: {
						namespace: s.inside.namespace,
						static: /\b\w+$/,
						punctuation: /\./,
						operator: /\*/,
						"class-name": /\w+/,
					},
				},
			],
			namespace: {
				pattern: RegExp(
					"(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(
						/<keyword>/g,
						function () {
							return n.source;
						}
					)
				),
				lookbehind: !0,
				inside: { punctuation: /\./ },
			},
		});
})(Prism);
(Prism.languages.json = {
	property: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: !0,
		greedy: !0,
	},
	string: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: !0,
		greedy: !0,
	},
	comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:false|true)\b/,
	null: { pattern: /\bnull\b/, alias: "keyword" },
}),
	(Prism.languages.webmanifest = Prism.languages.json);
!(function (n) {
	var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
	n.languages.json5 = n.languages.extend("json", {
		property: [
			{ pattern: RegExp(e.source + "(?=\\s*:)"), greedy: !0 },
			{
				pattern:
					/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
				alias: "unquoted",
			},
		],
		string: { pattern: e, greedy: !0 },
		number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
	});
})(Prism);
!(function (e) {
	function n(e, n) {
		return "___" + e.toUpperCase() + n + "___";
	}
	Object.defineProperties((e.languages["markup-templating"] = {}), {
		buildPlaceholders: {
			value: function (t, a, r, o) {
				if (t.language === a) {
					var c = (t.tokenStack = []);
					(t.code = t.code.replace(r, function (e) {
						if ("function" == typeof o && !o(e)) return e;
						for (
							var r, i = c.length;
							-1 !== t.code.indexOf((r = n(a, i)));

						)
							++i;
						return (c[i] = e), r;
					})),
						(t.grammar = e.languages.markup);
				}
			},
		},
		tokenizePlaceholders: {
			value: function (t, a) {
				if (t.language === a && t.tokenStack) {
					t.grammar = e.languages[a];
					var r = 0,
						o = Object.keys(t.tokenStack);
					!(function c(i) {
						for (var u = 0; u < i.length && !(r >= o.length); u++) {
							var g = i[u];
							if (
								"string" == typeof g ||
								(g.content && "string" == typeof g.content)
							) {
								var l = o[r],
									s = t.tokenStack[l],
									f = "string" == typeof g ? g : g.content,
									p = n(a, l),
									k = f.indexOf(p);
								if (k > -1) {
									++r;
									var m = f.substring(0, k),
										d = new e.Token(
											a,
											e.tokenize(s, t.grammar),
											"language-" + a,
											s
										),
										h = f.substring(k + p.length),
										v = [];
									m && v.push.apply(v, c([m])),
										v.push(d),
										h && v.push.apply(v, c([h])),
										"string" == typeof g
											? i.splice.apply(
													i,
													[u, 1].concat(v)
											  )
											: (g.content = v);
								}
							} else g.content && c(g.content);
						}
						return i;
					})(t.tokens);
				}
			},
		},
	});
})(Prism);
Prism.languages.matlab = {
	comment: [/%\{[\s\S]*?\}%/, /%.+/],
	string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 },
	number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
	keyword:
		/\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
	function: /\b(?!\d)\w+(?=\s*\()/,
	operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
	punctuation: /\.{3}|[.,;\[\](){}!]/,
};
!(function (e) {
	var a = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
		t = [
			{ pattern: /\b(?:false|true)\b/i, alias: "boolean" },
			{
				pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
				greedy: !0,
				lookbehind: !0,
			},
			/\b(?:null)\b/i,
			/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
		],
		i =
			/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		n =
			/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
		s = /[{}\[\](),:;]/;
	e.languages.php = {
		delimiter: {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: "important",
		},
		comment: a,
		variable: /\$+(?:\w+\b|(?=\{))/,
		package: {
			pattern:
				/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
			lookbehind: !0,
			inside: { punctuation: /\\/ },
		},
		"class-name-definition": {
			pattern:
				/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
			lookbehind: !0,
			alias: "class-name",
		},
		"function-definition": {
			pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
			lookbehind: !0,
			alias: "function",
		},
		keyword: [
			{
				pattern:
					/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
				alias: "type-casting",
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern:
					/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
				alias: "type-hint",
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern:
					/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
				alias: "return-type",
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern:
					/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
				alias: "type-declaration",
				greedy: !0,
			},
			{
				pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
				alias: "type-declaration",
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern: /\b(?:parent|self|static)(?=\s*::)/i,
				alias: "static-context",
				greedy: !0,
			},
			{ pattern: /(\byield\s+)from\b/i, lookbehind: !0 },
			/\bclass\b/i,
			{
				pattern:
					/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
				lookbehind: !0,
			},
		],
		"argument-name": {
			pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
			lookbehind: !0,
		},
		"class-name": [
			{
				pattern:
					/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
				greedy: !0,
				lookbehind: !0,
			},
			{ pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
			{
				pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
				alias: "class-name-fully-qualified",
				greedy: !0,
				lookbehind: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
				alias: "class-name-fully-qualified",
				greedy: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern:
					/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: "class-name-fully-qualified",
				greedy: !0,
				lookbehind: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*\$)/i,
				alias: "type-declaration",
				greedy: !0,
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ["class-name-fully-qualified", "type-declaration"],
				greedy: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*::)/i,
				alias: "static-context",
				greedy: !0,
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
				alias: ["class-name-fully-qualified", "static-context"],
				greedy: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
				alias: "type-hint",
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ["class-name-fully-qualified", "type-hint"],
				greedy: !0,
				lookbehind: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
				alias: "return-type",
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: ["class-name-fully-qualified", "return-type"],
				greedy: !0,
				lookbehind: !0,
				inside: { punctuation: /\\/ },
			},
		],
		constant: t,
		function: {
			pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
			lookbehind: !0,
			inside: { punctuation: /\\/ },
		},
		property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
		number: i,
		operator: n,
		punctuation: s,
	};
	var l = {
			pattern:
				/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
			lookbehind: !0,
			inside: e.languages.php,
		},
		r = [
			{
				pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
				alias: "nowdoc-string",
				greedy: !0,
				inside: {
					delimiter: {
						pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
						alias: "symbol",
						inside: { punctuation: /^<<<'?|[';]$/ },
					},
				},
			},
			{
				pattern:
					/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
				alias: "heredoc-string",
				greedy: !0,
				inside: {
					delimiter: {
						pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
						alias: "symbol",
						inside: { punctuation: /^<<<"?|[";]$/ },
					},
					interpolation: l,
				},
			},
			{
				pattern: /`(?:\\[\s\S]|[^\\`])*`/,
				alias: "backtick-quoted-string",
				greedy: !0,
			},
			{
				pattern: /'(?:\\[\s\S]|[^\\'])*'/,
				alias: "single-quoted-string",
				greedy: !0,
			},
			{
				pattern: /"(?:\\[\s\S]|[^\\"])*"/,
				alias: "double-quoted-string",
				greedy: !0,
				inside: { interpolation: l },
			},
		];
	e.languages.insertBefore("php", "variable", {
		string: r,
		attribute: {
			pattern:
				/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
			greedy: !0,
			inside: {
				"attribute-content": {
					pattern: /^(#\[)[\s\S]+(?=\]$)/,
					lookbehind: !0,
					inside: {
						comment: a,
						string: r,
						"attribute-class-name": [
							{
								pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
								alias: "class-name",
								greedy: !0,
								lookbehind: !0,
							},
							{
								pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
								alias: [
									"class-name",
									"class-name-fully-qualified",
								],
								greedy: !0,
								lookbehind: !0,
								inside: { punctuation: /\\/ },
							},
						],
						constant: t,
						number: i,
						operator: n,
						punctuation: s,
					},
				},
				delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" },
			},
		},
	}),
		e.hooks.add("before-tokenize", function (a) {
			/<\?/.test(a.code) &&
				e.languages["markup-templating"].buildPlaceholders(
					a,
					"php",
					/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g
				);
		}),
		e.hooks.add("after-tokenize", function (a) {
			e.languages["markup-templating"].tokenizePlaceholders(a, "php");
		});
})(Prism);
(Prism.languages.powerquery = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: !0,
		greedy: !0,
	},
	"quoted-identifier": { pattern: /#"(?:[^"\r\n]|"")*"(?!")/, greedy: !0 },
	string: { pattern: /(?:#!)?"(?:[^"\r\n]|"")*"(?!")/, greedy: !0 },
	constant: [
		/\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/,
		/\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,
		/\bOccurrence\.(?:All|First|Last)\b/,
		/\bOrder\.(?:Ascending|Descending)\b/,
		/\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,
		/\bMissingField\.(?:Error|Ignore|UseNull)\b/,
		/\bQuoteStyle\.(?:Csv|None)\b/,
		/\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/,
		/\bGroupKind\.(?:Global|Local)\b/,
		/\bExtraValues\.(?:Error|Ignore|List)\b/,
		/\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/,
		/\bJoinSide\.(?:Left|Right)\b/,
		/\bPrecision\.(?:Decimal|Double)\b/,
		/\bRelativePosition\.From(?:End|Start)\b/,
		/\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/,
		/\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,
		/\bnull\b/,
	],
	boolean: /\b(?:false|true)\b/,
	keyword:
		/\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
	function: { pattern: /(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i, lookbehind: !0 },
	"data-type": {
		pattern:
			/\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,
		alias: "class-name",
	},
	number: {
		pattern:
			/\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,
		lookbehind: !0,
	},
	operator: /[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,
	punctuation: /[,;\[\](){}]/,
}),
	(Prism.languages.pq = Prism.languages.powerquery),
	(Prism.languages.mscript = Prism.languages.powerquery);
(Prism.languages.python = {
	comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
	"string-interpolation": {
		pattern:
			/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: !0,
		inside: {
			interpolation: {
				pattern:
					/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
				lookbehind: !0,
				inside: {
					"format-spec": {
						pattern: /(:)[^:(){}]+(?=\}$)/,
						lookbehind: !0,
					},
					"conversion-option": {
						pattern: /![sra](?=[:}]$)/,
						alias: "punctuation",
					},
					rest: null,
				},
			},
			string: /[\s\S]+/,
		},
	},
	"triple-quoted-string": {
		pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
		greedy: !0,
		alias: "string",
	},
	string: {
		pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: !0,
	},
	function: {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: !0,
	},
	"class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
	decorator: {
		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
		lookbehind: !0,
		alias: ["annotation", "punctuation"],
		inside: { punctuation: /\./ },
	},
	keyword:
		/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	builtin:
		/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	boolean: /\b(?:False|None|True)\b/,
	number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
	operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	punctuation: /[{}[\];(),.:]/,
}),
	(Prism.languages.python[
		"string-interpolation"
	].inside.interpolation.inside.rest = Prism.languages.python),
	(Prism.languages.py = Prism.languages.python);
Prism.languages.sql = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: !0,
	},
	variable: [
		{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
		/@[\w.$]+/,
	],
	string: {
		pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
		greedy: !0,
		lookbehind: !0,
	},
	identifier: {
		pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
		greedy: !0,
		lookbehind: !0,
		inside: { punctuation: /^`|`$/ },
	},
	function:
		/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
	keyword:
		/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
	boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
	number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
	operator:
		/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
	punctuation: /[;[\]()`,.]/,
};
!(function (a) {
	function e(e, n) {
		a.languages[e] &&
			a.languages.insertBefore(e, "comment", { "doc-comment": n });
	}
	var n = a.languages.markup.tag,
		t = {
			pattern: /\/\/\/.*/,
			greedy: !0,
			alias: "comment",
			inside: { tag: n },
		},
		g = {
			pattern: /'''.*/,
			greedy: !0,
			alias: "comment",
			inside: { tag: n },
		};
	e("csharp", t), e("fsharp", t), e("vbnet", g);
})(Prism);
!(function () {
	if (
		"undefined" != typeof Prism &&
		"undefined" != typeof document &&
		document.querySelector
	) {
		var e,
			t = "line-numbers",
			i = "linkable-line-numbers",
			n = /\n(?!$)/g,
			r = !0;
		Prism.plugins.lineHighlight = {
			highlightLines: function (o, u, c) {
				var h = (u =
						"string" == typeof u
							? u
							: o.getAttribute("data-line") || "")
						.replace(/\s+/g, "")
						.split(",")
						.filter(Boolean),
					d = +o.getAttribute("data-line-offset") || 0,
					f = (
						(function () {
							if (void 0 === e) {
								var t = document.createElement("div");
								(t.style.fontSize = "13px"),
									(t.style.lineHeight = "1.5"),
									(t.style.padding = "0"),
									(t.style.border = "0"),
									(t.innerHTML = "&nbsp;<br />&nbsp;"),
									document.body.appendChild(t),
									(e = 38 === t.offsetHeight),
									document.body.removeChild(t);
							}
							return e;
						})()
							? parseInt
							: parseFloat
					)(getComputedStyle(o).lineHeight),
					p = Prism.util.isActive(o, t),
					g = o.querySelector("code"),
					m = p ? o : g || o,
					v = [],
					y = g.textContent.match(n),
					b = y ? y.length + 1 : 1,
					A =
						g && m != g
							? (function (e, t) {
									var i = getComputedStyle(e),
										n = getComputedStyle(t);
									function r(e) {
										return +e.substr(0, e.length - 2);
									}
									return (
										t.offsetTop +
										r(n.borderTopWidth) +
										r(n.paddingTop) -
										r(i.paddingTop)
									);
							  })(o, g)
							: 0;
				h.forEach(function (e) {
					var t = e.split("-"),
						i = +t[0],
						n = +t[1] || i;
					if (!((n = Math.min(b + d, n)) < i)) {
						var r =
							o.querySelector(
								'.line-highlight[data-range="' + e + '"]'
							) || document.createElement("div");
						if (
							(v.push(function () {
								r.setAttribute("aria-hidden", "true"),
									r.setAttribute("data-range", e),
									(r.className =
										(c || "") + " line-highlight");
							}),
							p && Prism.plugins.lineNumbers)
						) {
							var s = Prism.plugins.lineNumbers.getLine(o, i),
								l = Prism.plugins.lineNumbers.getLine(o, n);
							if (s) {
								var a = s.offsetTop + A + "px";
								v.push(function () {
									r.style.top = a;
								});
							}
							if (l) {
								var u =
									l.offsetTop -
									s.offsetTop +
									l.offsetHeight +
									"px";
								v.push(function () {
									r.style.height = u;
								});
							}
						} else
							v.push(function () {
								r.setAttribute("data-start", String(i)),
									n > i &&
										r.setAttribute("data-end", String(n)),
									(r.style.top = (i - d - 1) * f + A + "px"),
									(r.textContent = new Array(n - i + 2).join(
										" \n"
									));
							});
						v.push(function () {
							r.style.width = o.scrollWidth + "px";
						}),
							v.push(function () {
								m.appendChild(r);
							});
					}
				});
				var P = o.id;
				if (p && Prism.util.isActive(o, i) && P) {
					l(o, i) ||
						v.push(function () {
							o.classList.add(i);
						});
					var E = parseInt(o.getAttribute("data-start") || "1");
					s(".line-numbers-rows > span", o).forEach(function (e, t) {
						var i = t + E;
						e.onclick = function () {
							var e = P + "." + i;
							(r = !1),
								(location.hash = e),
								setTimeout(function () {
									r = !0;
								}, 1);
						};
					});
				}
				return function () {
					v.forEach(a);
				};
			},
		};
		var o = 0;
		Prism.hooks.add("before-sanity-check", function (e) {
			var t = e.element.parentElement;
			if (u(t)) {
				var i = 0;
				s(".line-highlight", t).forEach(function (e) {
					(i += e.textContent.length), e.parentNode.removeChild(e);
				}),
					i &&
						/^(?: \n)+$/.test(e.code.slice(-i)) &&
						(e.code = e.code.slice(0, -i));
			}
		}),
			Prism.hooks.add("complete", function e(i) {
				var n = i.element.parentElement;
				if (u(n)) {
					clearTimeout(o);
					var r = Prism.plugins.lineNumbers,
						s = i.plugins && i.plugins.lineNumbers;
					l(n, t) && r && !s
						? Prism.hooks.add("line-numbers", e)
						: (Prism.plugins.lineHighlight.highlightLines(n)(),
						  (o = setTimeout(c, 1)));
				}
			}),
			window.addEventListener("hashchange", c),
			window.addEventListener("resize", function () {
				s("pre")
					.filter(u)
					.map(function (e) {
						return Prism.plugins.lineHighlight.highlightLines(e);
					})
					.forEach(a);
			});
	}
	function s(e, t) {
		return Array.prototype.slice.call((t || document).querySelectorAll(e));
	}
	function l(e, t) {
		return e.classList.contains(t);
	}
	function a(e) {
		e();
	}
	function u(e) {
		return !!(
			e &&
			/pre/i.test(e.nodeName) &&
			(e.hasAttribute("data-line") || (e.id && Prism.util.isActive(e, i)))
		);
	}
	function c() {
		var e = location.hash.slice(1);
		s(".temporary.line-highlight").forEach(function (e) {
			e.parentNode.removeChild(e);
		});
		var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
		if (t && !document.getElementById(e)) {
			var i = e.slice(0, e.lastIndexOf(".")),
				n = document.getElementById(i);
			n &&
				(n.hasAttribute("data-line") || n.setAttribute("data-line", ""),
				Prism.plugins.lineHighlight.highlightLines(
					n,
					t,
					"temporary "
				)(),
				r &&
					document
						.querySelector(".temporary.line-highlight")
						.scrollIntoView());
		}
	}
})();
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var e = "line-numbers",
			n = /\n(?!$)/g,
			t = (Prism.plugins.lineNumbers = {
				getLine: function (n, t) {
					if ("PRE" === n.tagName && n.classList.contains(e)) {
						var i = n.querySelector(".line-numbers-rows");
						if (i) {
							var r =
									parseInt(
										n.getAttribute("data-start"),
										10
									) || 1,
								s = r + (i.children.length - 1);
							t < r && (t = r), t > s && (t = s);
							var l = t - r;
							return i.children[l];
						}
					}
				},
				resize: function (e) {
					r([e]);
				},
				assumeViewportIndependence: !0,
			}),
			i = void 0;
		window.addEventListener("resize", function () {
			(t.assumeViewportIndependence && i === window.innerWidth) ||
				((i = window.innerWidth),
				r(
					Array.prototype.slice.call(
						document.querySelectorAll("pre.line-numbers")
					)
				));
		}),
			Prism.hooks.add("complete", function (t) {
				if (t.code) {
					var i = t.element,
						s = i.parentNode;
					if (
						s &&
						/pre/i.test(s.nodeName) &&
						!i.querySelector(".line-numbers-rows") &&
						Prism.util.isActive(i, e)
					) {
						i.classList.remove(e), s.classList.add(e);
						var l,
							o = t.code.match(n),
							a = o ? o.length + 1 : 1,
							u = new Array(a + 1).join("<span></span>");
						(l = document.createElement("span")).setAttribute(
							"aria-hidden",
							"true"
						),
							(l.className = "line-numbers-rows"),
							(l.innerHTML = u),
							s.hasAttribute("data-start") &&
								(s.style.counterReset =
									"linenumber " +
									(parseInt(
										s.getAttribute("data-start"),
										10
									) -
										1)),
							t.element.appendChild(l),
							r([s]),
							Prism.hooks.run("line-numbers", t);
					}
				}
			}),
			Prism.hooks.add("line-numbers", function (e) {
				(e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
			});
	}
	function r(e) {
		if (
			0 !=
			(e = e.filter(function (e) {
				var n,
					t = ((n = e),
					n
						? window.getComputedStyle
							? getComputedStyle(n)
							: n.currentStyle || null
						: null)["white-space"];
				return "pre-wrap" === t || "pre-line" === t;
			})).length
		) {
			var t = e
				.map(function (e) {
					var t = e.querySelector("code"),
						i = e.querySelector(".line-numbers-rows");
					if (t && i) {
						var r = e.querySelector(".line-numbers-sizer"),
							s = t.textContent.split(n);
						r ||
							(((r = document.createElement("span")).className =
								"line-numbers-sizer"),
							t.appendChild(r)),
							(r.innerHTML = "0"),
							(r.style.display = "block");
						var l = r.getBoundingClientRect().height;
						return (
							(r.innerHTML = ""),
							{
								element: e,
								lines: s,
								lineHeights: [],
								oneLinerHeight: l,
								sizer: r,
							}
						);
					}
				})
				.filter(Boolean);
			t.forEach(function (e) {
				var n = e.sizer,
					t = e.lines,
					i = e.lineHeights,
					r = e.oneLinerHeight;
				(i[t.length - 1] = void 0),
					t.forEach(function (e, t) {
						if (e && e.length > 1) {
							var s = n.appendChild(
								document.createElement("span")
							);
							(s.style.display = "block"), (s.textContent = e);
						} else i[t] = r;
					});
			}),
				t.forEach(function (e) {
					for (
						var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
						r < t.length;
						r++
					)
						void 0 === t[r] &&
							(t[r] =
								n.children[i++].getBoundingClientRect().height);
				}),
				t.forEach(function (e) {
					var n = e.sizer,
						t = e.element.querySelector(".line-numbers-rows");
					(n.style.display = "none"),
						(n.innerHTML = ""),
						e.lineHeights.forEach(function (e, n) {
							t.children[n].style.height = e + "px";
						});
				});
		}
	}
})();
!(function () {
	if ("undefined" != typeof Prism) {
		var i =
				/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&!$'()*,;@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/,
			n = /\b\S+@[\w.]+[a-z]{2}/,
			t = /\[([^\]]+)\]\(([^)]+)\)/,
			e = ["comment", "url", "attr-value", "string"];
		(Prism.plugins.autolinker = {
			processGrammar: function (r) {
				r &&
					!r["url-link"] &&
					(Prism.languages.DFS(r, function (r, a, l) {
						e.indexOf(l) > -1 &&
							!Array.isArray(a) &&
							(a.pattern || (a = this[r] = { pattern: a }),
							(a.inside = a.inside || {}),
							"comment" == l && (a.inside["md-link"] = t),
							"attr-value" == l
								? Prism.languages.insertBefore(
										"inside",
										"punctuation",
										{ "url-link": i },
										a
								  )
								: (a.inside["url-link"] = i),
							(a.inside["email-link"] = n));
					}),
					(r["url-link"] = i),
					(r["email-link"] = n));
			},
		}),
			Prism.hooks.add("before-highlight", function (i) {
				Prism.plugins.autolinker.processGrammar(i.grammar);
			}),
			Prism.hooks.add("wrap", function (i) {
				if (/-link$/.test(i.type)) {
					i.tag = "a";
					var n = i.content;
					if ("email-link" == i.type && 0 != n.indexOf("mailto:"))
						n = "mailto:" + n;
					else if ("md-link" == i.type) {
						var e = i.content.match(t);
						(n = e[2]), (i.content = e[1]);
					}
					i.attributes.href = n;
					try {
						i.content = decodeURIComponent(i.content);
					} catch (i) {}
				}
			});
	}
})();
!(function () {
	if ("undefined" != typeof Prism) {
		if (
			(Prism.languages.css &&
				(Prism.languages.css.selector.pattern
					? ((Prism.languages.css.selector.inside["pseudo-class"] =
							/:[\w-]+/),
					  (Prism.languages.css.selector.inside["pseudo-element"] =
							/::[\w-]+/))
					: (Prism.languages.css.selector = {
							pattern: Prism.languages.css.selector,
							inside: {
								"pseudo-class": /:[\w-]+/,
								"pseudo-element": /::[\w-]+/,
							},
					  })),
			Prism.languages.markup)
		) {
			Prism.languages.markup.tag.inside.tag.inside["tag-id"] = /[\w-]+/;
			var e = {
				HTML: {
					a: 1,
					abbr: 1,
					acronym: 1,
					b: 1,
					basefont: 1,
					bdo: 1,
					big: 1,
					blink: 1,
					cite: 1,
					code: 1,
					dfn: 1,
					em: 1,
					kbd: 1,
					i: 1,
					rp: 1,
					rt: 1,
					ruby: 1,
					s: 1,
					samp: 1,
					small: 1,
					spacer: 1,
					strike: 1,
					strong: 1,
					sub: 1,
					sup: 1,
					time: 1,
					tt: 1,
					u: 1,
					var: 1,
					wbr: 1,
					noframes: 1,
					summary: 1,
					command: 1,
					dt: 1,
					dd: 1,
					figure: 1,
					figcaption: 1,
					center: 1,
					section: 1,
					nav: 1,
					article: 1,
					aside: 1,
					hgroup: 1,
					header: 1,
					footer: 1,
					address: 1,
					noscript: 1,
					isIndex: 1,
					main: 1,
					mark: 1,
					marquee: 1,
					meter: 1,
					menu: 1,
				},
				SVG: {
					animateColor: 1,
					animateMotion: 1,
					animateTransform: 1,
					glyph: 1,
					feBlend: 1,
					feColorMatrix: 1,
					feComponentTransfer: 1,
					feFuncR: 1,
					feFuncG: 1,
					feFuncB: 1,
					feFuncA: 1,
					feComposite: 1,
					feConvolveMatrix: 1,
					feDiffuseLighting: 1,
					feDisplacementMap: 1,
					feFlood: 1,
					feGaussianBlur: 1,
					feImage: 1,
					feMerge: 1,
					feMergeNode: 1,
					feMorphology: 1,
					feOffset: 1,
					feSpecularLighting: 1,
					feTile: 1,
					feTurbulence: 1,
					feDistantLight: 1,
					fePointLight: 1,
					feSpotLight: 1,
					linearGradient: 1,
					radialGradient: 1,
					altGlyph: 1,
					textPath: 1,
					tref: 1,
					altglyph: 1,
					textpath: 1,
					altglyphdef: 1,
					altglyphitem: 1,
					clipPath: 1,
					"color-profile": 1,
					cursor: 1,
					"font-face": 1,
					"font-face-format": 1,
					"font-face-name": 1,
					"font-face-src": 1,
					"font-face-uri": 1,
					foreignObject: 1,
					glyphRef: 1,
					hkern: 1,
					vkern: 1,
				},
				MathML: {},
			};
		}
		var t;
		Prism.hooks.add("wrap", function (n) {
			if (
				("tag-id" == n.type ||
					("property" == n.type && 0 != n.content.indexOf("-")) ||
					("rule" == n.type && 0 != n.content.indexOf("@-")) ||
					("pseudo-class" == n.type &&
						0 != n.content.indexOf(":-")) ||
					("pseudo-element" == n.type &&
						0 != n.content.indexOf("::-")) ||
					("attr-name" == n.type &&
						0 != n.content.indexOf("data-"))) &&
				-1 === n.content.indexOf("<") &&
				("css" == n.language ||
					"scss" == n.language ||
					"markup" == n.language)
			) {
				var a = "https://webplatform.github.io/docs/",
					s = n.content;
				if ("css" == n.language || "scss" == n.language)
					(a += "css/"),
						"property" == n.type
							? (a += "properties/")
							: "rule" == n.type
							? ((a += "atrules/"), (s = s.substring(1)))
							: "pseudo-class" == n.type
							? ((a += "selectors/pseudo-classes/"),
							  (s = s.substring(1)))
							: "pseudo-element" == n.type &&
							  ((a += "selectors/pseudo-elements/"),
							  (s = s.substring(2)));
				else if ("markup" == n.language)
					if ("tag-id" == n.type) {
						if (
							!(t =
								(function (t) {
									var n = t.toLowerCase();
									if (e.HTML[n]) return "html";
									if (e.SVG[t]) return "svg";
									if (e.MathML[t]) return "mathml";
									if (
										0 !== e.HTML[n] &&
										"undefined" != typeof document
									) {
										var a = (document
											.createElement(t)
											.toString()
											.match(
												/\[object HTML(.+)Element\]/
											) || [])[1];
										if (a && "Unknown" != a)
											return (e.HTML[n] = 1), "html";
									}
									if (
										((e.HTML[n] = 0),
										0 !== e.SVG[t] &&
											"undefined" != typeof document)
									) {
										var s = (document
											.createElementNS(
												"http://www.w3.org/2000/svg",
												t
											)
											.toString()
											.match(
												/\[object SVG(.+)Element\]/
											) || [])[1];
										if (s && "Unknown" != s)
											return (e.SVG[t] = 1), "svg";
									}
									return (
										(e.SVG[t] = 0),
										0 !== e.MathML[t] &&
										0 === t.indexOf("m")
											? ((e.MathML[t] = 1), "mathml")
											: ((e.MathML[t] = 0), null)
									);
								})(n.content) || t)
						)
							return;
						a += t + "/elements/";
					} else if ("attr-name" == n.type) {
						if (!t) return;
						a += t + "/attributes/";
					}
				(a += s),
					(n.tag = "a"),
					(n.attributes.href = a),
					(n.attributes.target = "_blank");
			}
		});
	}
})();
!(function () {
	if ("undefined" != typeof Prism) {
		var n,
			s,
			a = "";
		(Prism.plugins.customClass = {
			add: function (s) {
				n = s;
			},
			map: function (n) {
				s =
					"function" == typeof n
						? n
						: function (s) {
								return n[s] || s;
						  };
			},
			prefix: function (n) {
				a = n || "";
			},
			apply: t,
		}),
			Prism.hooks.add("wrap", function (e) {
				if (n) {
					var u = n({
						content: e.content,
						type: e.type,
						language: e.language,
					});
					Array.isArray(u)
						? e.classes.push.apply(e.classes, u)
						: u && e.classes.push(u);
				}
				(s || a) &&
					(e.classes = e.classes.map(function (n) {
						return t(n, e.language);
					}));
			});
	}
	function t(n, t) {
		return a + (s ? s(n, t) : n);
	}
})();
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		Element.prototype.matches ||
			(Element.prototype.matches =
				Element.prototype.msMatchesSelector ||
				Element.prototype.webkitMatchesSelector);
		var t = {
				js: "javascript",
				py: "python",
				rb: "ruby",
				ps1: "powershell",
				psm1: "powershell",
				sh: "bash",
				bat: "batch",
				h: "c",
				tex: "latex",
			},
			e = "data-src-status",
			i =
				'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';
		Prism.hooks.add("before-highlightall", function (t) {
			t.selector += ", " + i;
		}),
			Prism.hooks.add("before-sanity-check", function (a) {
				var n = a.element;
				if (n.matches(i)) {
					(a.code = ""), n.setAttribute(e, "loading");
					var s = n.appendChild(document.createElement("CODE"));
					s.textContent = "Loading…";
					var r = n.getAttribute("data-src"),
						l = a.language;
					if ("none" === l) {
						var o = (/\.(\w+)$/.exec(r) || [, "none"])[1];
						l = t[o] || o;
					}
					Prism.util.setLanguage(s, l), Prism.util.setLanguage(n, l);
					var h = Prism.plugins.autoloader;
					h && h.loadLanguages(l),
						(function (t, i, a) {
							var r = new XMLHttpRequest();
							r.open("GET", t, !0),
								(r.onreadystatechange = function () {
									4 == r.readyState &&
										(r.status < 400 && r.responseText
											? (function (t) {
													n.setAttribute(e, "loaded");
													var i = (function (t) {
														var e =
															/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(
																t || ""
															);
														if (e) {
															var i = Number(
																	e[1]
																),
																a = e[2],
																n = e[3];
															return a
																? n
																	? [
																			i,
																			Number(
																				n
																			),
																	  ]
																	: [
																			i,
																			void 0,
																	  ]
																: [i, i];
														}
													})(
														n.getAttribute(
															"data-range"
														)
													);
													if (i) {
														var a =
																t.split(
																	/\r\n?|\n/g
																),
															r = i[0],
															l =
																null == i[1]
																	? a.length
																	: i[1];
														r < 0 &&
															(r += a.length),
															(r = Math.max(
																0,
																Math.min(
																	r - 1,
																	a.length
																)
															)),
															l < 0 &&
																(l += a.length),
															(l = Math.max(
																0,
																Math.min(
																	l,
																	a.length
																)
															)),
															(t = a
																.slice(r, l)
																.join("\n")),
															n.hasAttribute(
																"data-start"
															) ||
																n.setAttribute(
																	"data-start",
																	String(
																		r + 1
																	)
																);
													}
													(s.textContent = t),
														Prism.highlightElement(
															s
														);
											  })(r.responseText)
											: r.status >= 400
											? a(
													"✖ Error " +
														r.status +
														" while fetching file: " +
														r.statusText
											  )
											: a(
													"✖ Error: File does not exist or is empty"
											  ));
								}),
								r.send(null);
						})(r, 0, function (t) {
							n.setAttribute(e, "failed"), (s.textContent = t);
						});
				}
			}),
			(Prism.plugins.fileHighlight = {
				highlight: function (t) {
					for (
						var e, a = (t || document).querySelectorAll(i), n = 0;
						(e = a[n++]);

					)
						Prism.highlightElement(e);
				},
			});
		var a = !1;
		Prism.fileHighlight = function () {
			a ||
				(console.warn(
					"Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
				),
				(a = !0)),
				Prism.plugins.fileHighlight.highlight.apply(this, arguments);
		};
	}
})();
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var e = [],
			t = {},
			n = function () {};
		Prism.plugins.toolbar = {};
		var a = (Prism.plugins.toolbar.registerButton = function (n, a) {
				var r;
				(r =
					"function" == typeof a
						? a
						: function (e) {
								var t;
								return (
									"function" == typeof a.onClick
										? (((t =
												document.createElement(
													"button"
												)).type = "button"),
										  t.addEventListener(
												"click",
												function () {
													a.onClick.call(this, e);
												}
										  ))
										: "string" == typeof a.url
										? ((t =
												document.createElement(
													"a"
												)).href = a.url)
										: (t = document.createElement("span")),
									a.className && t.classList.add(a.className),
									(t.textContent = a.text),
									t
								);
						  }),
					n in t
						? console.warn(
								'There is a button with the key "' +
									n +
									'" registered already.'
						  )
						: e.push((t[n] = r));
			}),
			r = (Prism.plugins.toolbar.hook = function (a) {
				var r = a.element.parentNode;
				if (
					r &&
					/pre/i.test(r.nodeName) &&
					!r.parentNode.classList.contains("code-toolbar")
				) {
					var o = document.createElement("div");
					o.classList.add("code-toolbar"),
						r.parentNode.insertBefore(o, r),
						o.appendChild(r);
					var i = document.createElement("div");
					i.classList.add("toolbar");
					var l = e,
						d = (function (e) {
							for (; e; ) {
								var t = e.getAttribute("data-toolbar-order");
								if (null != t)
									return (t = t.trim()).length
										? t.split(/\s*,\s*/g)
										: [];
								e = e.parentElement;
							}
						})(a.element);
					d &&
						(l = d.map(function (e) {
							return t[e] || n;
						})),
						l.forEach(function (e) {
							var t = e(a);
							if (t) {
								var n = document.createElement("div");
								n.classList.add("toolbar-item"),
									n.appendChild(t),
									i.appendChild(n);
							}
						}),
						o.appendChild(i);
				}
			});
		a("label", function (e) {
			var t = e.element.parentNode;
			if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
				var n,
					a,
					r = t.getAttribute("data-label");
				try {
					a = document.querySelector("template#" + r);
				} catch (e) {}
				return (
					a
						? (n = a.content)
						: (t.hasAttribute("data-url")
								? ((n = document.createElement("a")).href =
										t.getAttribute("data-url"))
								: (n = document.createElement("span")),
						  (n.textContent = r)),
					n
				);
			}
		}),
			Prism.hooks.add("complete", r);
	}
})();
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document)
		if (Prism.plugins.toolbar) {
			var e = {
				none: "Plain text",
				plain: "Plain text",
				plaintext: "Plain text",
				text: "Plain text",
				txt: "Plain text",
				html: "HTML",
				xml: "XML",
				svg: "SVG",
				mathml: "MathML",
				ssml: "SSML",
				rss: "RSS",
				css: "CSS",
				clike: "C-like",
				js: "JavaScript",
				abap: "ABAP",
				abnf: "ABNF",
				al: "AL",
				antlr4: "ANTLR4",
				g4: "ANTLR4",
				apacheconf: "Apache Configuration",
				apl: "APL",
				aql: "AQL",
				ino: "Arduino",
				arff: "ARFF",
				armasm: "ARM Assembly",
				"arm-asm": "ARM Assembly",
				art: "Arturo",
				asciidoc: "AsciiDoc",
				adoc: "AsciiDoc",
				aspnet: "ASP.NET (C#)",
				asm6502: "6502 Assembly",
				asmatmel: "Atmel AVR Assembly",
				autohotkey: "AutoHotkey",
				autoit: "AutoIt",
				avisynth: "AviSynth",
				avs: "AviSynth",
				"avro-idl": "Avro IDL",
				avdl: "Avro IDL",
				awk: "AWK",
				gawk: "GAWK",
				sh: "Shell",
				basic: "BASIC",
				bbcode: "BBcode",
				bbj: "BBj",
				bnf: "BNF",
				rbnf: "RBNF",
				bqn: "BQN",
				bsl: "BSL (1C:Enterprise)",
				oscript: "OneScript",
				csharp: "C#",
				cs: "C#",
				dotnet: "C#",
				cpp: "C++",
				cfscript: "CFScript",
				cfc: "CFScript",
				cil: "CIL",
				cilkc: "Cilk/C",
				"cilk-c": "Cilk/C",
				cilkcpp: "Cilk/C++",
				"cilk-cpp": "Cilk/C++",
				cilk: "Cilk/C++",
				cmake: "CMake",
				cobol: "COBOL",
				coffee: "CoffeeScript",
				conc: "Concurnas",
				csp: "Content-Security-Policy",
				"css-extras": "CSS Extras",
				csv: "CSV",
				cue: "CUE",
				dataweave: "DataWeave",
				dax: "DAX",
				django: "Django/Jinja2",
				jinja2: "Django/Jinja2",
				"dns-zone-file": "DNS zone file",
				"dns-zone": "DNS zone file",
				dockerfile: "Docker",
				dot: "DOT (Graphviz)",
				gv: "DOT (Graphviz)",
				ebnf: "EBNF",
				editorconfig: "EditorConfig",
				ejs: "EJS",
				etlua: "Embedded Lua templating",
				erb: "ERB",
				"excel-formula": "Excel Formula",
				xlsx: "Excel Formula",
				xls: "Excel Formula",
				fsharp: "F#",
				"firestore-security-rules": "Firestore security rules",
				ftl: "FreeMarker Template Language",
				gml: "GameMaker Language",
				gamemakerlanguage: "GameMaker Language",
				gap: "GAP (CAS)",
				gcode: "G-code",
				gdscript: "GDScript",
				gedcom: "GEDCOM",
				gettext: "gettext",
				po: "gettext",
				glsl: "GLSL",
				gn: "GN",
				gni: "GN",
				"linker-script": "GNU Linker Script",
				ld: "GNU Linker Script",
				"go-module": "Go module",
				"go-mod": "Go module",
				graphql: "GraphQL",
				hbs: "Handlebars",
				hs: "Haskell",
				hcl: "HCL",
				hlsl: "HLSL",
				http: "HTTP",
				hpkp: "HTTP Public-Key-Pins",
				hsts: "HTTP Strict-Transport-Security",
				ichigojam: "IchigoJam",
				"icu-message-format": "ICU Message Format",
				idr: "Idris",
				ignore: ".ignore",
				gitignore: ".gitignore",
				hgignore: ".hgignore",
				npmignore: ".npmignore",
				inform7: "Inform 7",
				javadoc: "JavaDoc",
				javadoclike: "JavaDoc-like",
				javastacktrace: "Java stack trace",
				jq: "JQ",
				jsdoc: "JSDoc",
				"js-extras": "JS Extras",
				json: "JSON",
				webmanifest: "Web App Manifest",
				json5: "JSON5",
				jsonp: "JSONP",
				jsstacktrace: "JS stack trace",
				"js-templates": "JS Templates",
				keepalived: "Keepalived Configure",
				kts: "Kotlin Script",
				kt: "Kotlin",
				kumir: "KuMir (КуМир)",
				kum: "KuMir (КуМир)",
				latex: "LaTeX",
				tex: "TeX",
				context: "ConTeXt",
				lilypond: "LilyPond",
				ly: "LilyPond",
				emacs: "Lisp",
				elisp: "Lisp",
				"emacs-lisp": "Lisp",
				llvm: "LLVM IR",
				log: "Log file",
				lolcode: "LOLCODE",
				magma: "Magma (CAS)",
				md: "Markdown",
				"markup-templating": "Markup templating",
				matlab: "MATLAB",
				maxscript: "MAXScript",
				mel: "MEL",
				metafont: "METAFONT",
				mongodb: "MongoDB",
				moon: "MoonScript",
				n1ql: "N1QL",
				n4js: "N4JS",
				n4jsd: "N4JS",
				"nand2tetris-hdl": "Nand To Tetris HDL",
				naniscript: "Naninovel Script",
				nani: "Naninovel Script",
				nasm: "NASM",
				neon: "NEON",
				nginx: "nginx",
				nsis: "NSIS",
				objectivec: "Objective-C",
				objc: "Objective-C",
				ocaml: "OCaml",
				opencl: "OpenCL",
				openqasm: "OpenQasm",
				qasm: "OpenQasm",
				parigp: "PARI/GP",
				objectpascal: "Object Pascal",
				psl: "PATROL Scripting Language",
				pcaxis: "PC-Axis",
				px: "PC-Axis",
				peoplecode: "PeopleCode",
				pcode: "PeopleCode",
				php: "PHP",
				phpdoc: "PHPDoc",
				"php-extras": "PHP Extras",
				"plant-uml": "PlantUML",
				plantuml: "PlantUML",
				plsql: "PL/SQL",
				powerquery: "PowerQuery",
				pq: "PowerQuery",
				mscript: "PowerQuery",
				powershell: "PowerShell",
				promql: "PromQL",
				properties: ".properties",
				protobuf: "Protocol Buffers",
				purebasic: "PureBasic",
				pbfasm: "PureBasic",
				purs: "PureScript",
				py: "Python",
				qsharp: "Q#",
				qs: "Q#",
				q: "Q (kdb+ database)",
				qml: "QML",
				rkt: "Racket",
				cshtml: "Razor C#",
				razor: "Razor C#",
				jsx: "React JSX",
				tsx: "React TSX",
				renpy: "Ren'py",
				rpy: "Ren'py",
				res: "ReScript",
				rest: "reST (reStructuredText)",
				robotframework: "Robot Framework",
				robot: "Robot Framework",
				rb: "Ruby",
				sas: "SAS",
				sass: "Sass (Sass)",
				scss: "Sass (SCSS)",
				"shell-session": "Shell session",
				"sh-session": "Shell session",
				shellsession: "Shell session",
				sml: "SML",
				smlnj: "SML/NJ",
				solidity: "Solidity (Ethereum)",
				sol: "Solidity (Ethereum)",
				"solution-file": "Solution file",
				sln: "Solution file",
				soy: "Soy (Closure Template)",
				sparql: "SPARQL",
				rq: "SPARQL",
				"splunk-spl": "Splunk SPL",
				sqf: "SQF: Status Quo Function (Arma 3)",
				sql: "SQL",
				stata: "Stata Ado",
				iecst: "Structured Text (IEC 61131-3)",
				supercollider: "SuperCollider",
				sclang: "SuperCollider",
				systemd: "Systemd configuration file",
				"t4-templating": "T4 templating",
				"t4-cs": "T4 Text Templates (C#)",
				t4: "T4 Text Templates (C#)",
				"t4-vb": "T4 Text Templates (VB)",
				tap: "TAP",
				tt2: "Template Toolkit 2",
				toml: "TOML",
				trickle: "trickle",
				troy: "troy",
				trig: "TriG",
				ts: "TypeScript",
				tsconfig: "TSConfig",
				uscript: "UnrealScript",
				uc: "UnrealScript",
				uorazor: "UO Razor Script",
				uri: "URI",
				url: "URL",
				vbnet: "VB.Net",
				vhdl: "VHDL",
				vim: "vim",
				"visual-basic": "Visual Basic",
				vba: "VBA",
				vb: "Visual Basic",
				wasm: "WebAssembly",
				"web-idl": "Web IDL",
				webidl: "Web IDL",
				wgsl: "WGSL",
				wiki: "Wiki markup",
				wolfram: "Wolfram language",
				nb: "Mathematica Notebook",
				wl: "Wolfram language",
				xeoracube: "XeoraCube",
				"xml-doc": "XML doc (.net)",
				xojo: "Xojo (REALbasic)",
				xquery: "XQuery",
				yaml: "YAML",
				yml: "YAML",
				yang: "YANG",
			};
			Prism.plugins.toolbar.registerButton("show-language", function (a) {
				var t = a.element.parentNode;
				if (t && /pre/i.test(t.nodeName)) {
					var o,
						i =
							t.getAttribute("data-language") ||
							e[a.language] ||
							((o = a.language)
								? (
										o.substring(0, 1).toUpperCase() +
										o.substring(1)
								  ).replace(/s(?=cript)/, "S")
								: o);
					if (i) {
						var s = document.createElement("span");
						return (s.textContent = i), s;
					}
				}
			});
		} else
			console.warn("Show Languages plugin loaded before Toolbar plugin.");
})();
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var t = [];
		o(function (t) {
			if (t && t.meta && t.data) {
				if (t.meta.status && t.meta.status >= 400)
					return "Error: " + (t.data.message || t.meta.status);
				if ("string" == typeof t.data.content)
					return "function" == typeof atob
						? atob(t.data.content.replace(/\s/g, ""))
						: "Your browser cannot decode base64";
			}
			return null;
		}, "github"),
			o(function (t, e) {
				if (t && t.meta && t.data && t.data.files) {
					if (t.meta.status && t.meta.status >= 400)
						return "Error: " + (t.data.message || t.meta.status);
					var n = t.data.files,
						a = e.getAttribute("data-filename");
					if (null == a)
						for (var r in n)
							if (n.hasOwnProperty(r)) {
								a = r;
								break;
							}
					return void 0 !== n[a]
						? n[a].content
						: "Error: unknown or missing gist file " + a;
				}
				return null;
			}, "gist"),
			o(function (t) {
				return t && t.node && "string" == typeof t.data ? t.data : null;
			}, "bitbucket");
		var e = 0,
			n = "data-jsonp-status",
			a = "failed",
			r =
				'pre[data-jsonp]:not([data-jsonp-status="loaded"]):not([data-jsonp-status="loading"])';
		Prism.hooks.add("before-highlightall", function (t) {
			t.selector += ", " + r;
		}),
			Prism.hooks.add("before-sanity-check", function (o) {
				var i,
					u = o.element;
				if (u.matches(r)) {
					(o.code = ""), u.setAttribute(n, "loading");
					var s = u.appendChild(document.createElement("CODE"));
					s.textContent = "Loading…";
					var d = o.language;
					s.className = "language-" + d;
					var f = Prism.plugins.autoloader;
					f && f.loadLanguages(d);
					var l = u.getAttribute("data-adapter"),
						c = null;
					if (l) {
						if ("function" != typeof window[l])
							return (
								u.setAttribute(n, a),
								void (s.textContent =
									((i = l),
									'✖ Error: JSONP adapter function "' +
										i +
										"\" doesn't exist"))
							);
						c = window[l];
					}
					var p = u.getAttribute("data-jsonp");
					!(function (r, o, i, d) {
						var f = "prismjsonp" + e++,
							l = document.createElement("a");
						(l.href = r),
							(l.href +=
								(l.search ? "&" : "?") +
								(o || "callback") +
								"=" +
								f);
						var p = document.createElement("script");
						(p.src = l.href),
							(p.onerror = function () {
								g(), d();
							});
						var m = setTimeout(function () {
							g(), d();
						}, Prism.plugins.jsonphighlight.timeout);
						function g() {
							clearTimeout(m),
								document.head.removeChild(p),
								delete window[f];
						}
						(window[f] = function (e) {
							g(),
								(function (e) {
									var r = null;
									if (c) r = c(e, u);
									else
										for (
											var o = 0, i = t.length;
											o < i &&
											null === (r = t[o].adapter(e, u));
											o++
										);
									null === r
										? (u.setAttribute(n, a),
										  (s.textContent =
												"✖ Error: Cannot parse response (perhaps you need an adapter function?)"))
										: (u.setAttribute(n, "loaded"),
										  (s.textContent = r),
										  Prism.highlightElement(s));
								})(e);
						}),
							document.head.appendChild(p);
					})(p, u.getAttribute("data-callback"), 0, function () {
						u.setAttribute(n, a),
							(s.textContent = "✖ Error: Timeout loading " + p);
					});
				}
			}),
			(Prism.plugins.jsonphighlight = {
				timeout: 5e3,
				registerAdapter: o,
				removeAdapter: function (e) {
					if (
						("string" == typeof e && (e = i(e)),
						"function" == typeof e)
					) {
						var n = t.findIndex(function (t) {
							return t.adapter === e;
						});
						n >= 0 && t.splice(n, 1);
					}
				},
				highlight: function (t) {
					for (
						var e, n = (t || document).querySelectorAll(r), a = 0;
						(e = n[a++]);

					)
						Prism.highlightElement(e);
				},
			});
	}
	function o(e, n) {
		(n = n || e.name),
			"function" != typeof e ||
				i(e) ||
				i(n) ||
				t.push({ adapter: e, name: n });
	}
	function i(e) {
		if ("function" == typeof e) {
			for (var n = 0; (a = t[n++]); )
				if (a.adapter.valueOf() === e.valueOf()) return a.adapter;
		} else if ("string" == typeof e) {
			var a;
			for (n = 0; (a = t[n++]); ) if (a.name === e) return a.adapter;
		}
		return null;
	}
})();
"undefined" != typeof Prism &&
	Prism.hooks.add("wrap", function (e) {
		"keyword" === e.type && e.classes.push("keyword-" + e.content);
	});
"undefined" != typeof Prism &&
	"undefined" != typeof document &&
	Prism.hooks.add("before-sanity-check", function (e) {
		if (e.code) {
			var n = e.element.parentNode,
				o = /(?:^|\s)keep-initial-line-feed(?:\s|$)/;
			!n ||
				"pre" !== n.nodeName.toLowerCase() ||
				o.test(n.className) ||
				o.test(e.element.className) ||
				(e.code = e.code.replace(/^(?:\r?\n|\r)/, ""));
		}
	});
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var n =
				/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,
			r = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i,
			o = [
				function (n) {
					var o = r.exec(n);
					if (o) {
						for (
							var s = (n = o[1]).length >= 6 ? 2 : 1,
								e = n.length / s,
								t = 1 == s ? 1 / 15 : 1 / 255,
								i = [],
								a = 0;
							a < e;
							a++
						) {
							var c = parseInt(n.substr(a * s, s), 16);
							i.push(c * t);
						}
						return (
							3 == e && i.push(1),
							"rgba(" +
								i
									.slice(0, 3)
									.map(function (n) {
										return String(Math.round(255 * n));
									})
									.join(",") +
								"," +
								String(Number(i[3].toFixed(3))) +
								")"
						);
					}
				},
				function (n) {
					var r = new Option().style;
					return (r.color = n), r.color ? n : void 0;
				},
			];
		Prism.hooks.add("wrap", function (r) {
			if ("color" === r.type || r.classes.indexOf("color") >= 0) {
				for (
					var s,
						e = r.content,
						t = e.split(n).join(""),
						i = 0,
						a = o.length;
					i < a && !s;
					i++
				)
					s = o[i](t);
				if (!s) return;
				var c =
					'<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' +
					s +
					';"></span></span>';
				r.content = c + e;
			}
		});
	}
})();
!(function () {
	if (
		"undefined" != typeof Prism &&
		"undefined" != typeof document &&
		Function.prototype.bind
	) {
		var e,
			s,
			t = {
				gradient: {
					create:
						((e = {}),
						(s = function (s) {
							if (e[s]) return e[s];
							var t = s.match(
									/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/
								),
								i = t && t[1],
								a = t && t[2],
								n = s
									.replace(
										/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g,
										""
									)
									.split(/\s*,\s*/);
							return a.indexOf("linear") >= 0
								? (e[s] = (function (e, s, t) {
										var i = "180deg";
										return (
											/^(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad)|to\b|top|right|bottom|left)/.test(
												t[0]
											) &&
												(i = t.shift()).indexOf("to ") <
													0 &&
												(i.indexOf("top") >= 0
													? (i =
															i.indexOf("left") >=
															0
																? "to bottom right"
																: i.indexOf(
																		"right"
																  ) >= 0
																? "to bottom left"
																: "to bottom")
													: i.indexOf("bottom") >= 0
													? (i =
															i.indexOf("left") >=
															0
																? "to top right"
																: i.indexOf(
																		"right"
																  ) >= 0
																? "to top left"
																: "to top")
													: i.indexOf("left") >= 0
													? (i = "to right")
													: i.indexOf("right") >= 0
													? (i = "to left")
													: e &&
													  (i.indexOf("deg") >= 0
															? (i =
																	90 -
																	parseFloat(
																		i
																	) +
																	"deg")
															: i.indexOf(
																	"rad"
															  ) >= 0 &&
															  (i =
																	Math.PI /
																		2 -
																	parseFloat(
																		i
																	) +
																	"rad"))),
											s +
												"(" +
												i +
												"," +
												t.join(",") +
												")"
										);
								  })(i, a, n))
								: a.indexOf("radial") >= 0
								? (e[s] = (function (e, s, t) {
										if (t[0].indexOf("at") < 0) {
											var i = "center",
												a = "ellipse",
												n = "farthest-corner";
											if (
												(/\b(?:bottom|center|left|right|top)\b|^\d+/.test(
													t[0]
												) &&
													(i = t
														.shift()
														.replace(
															/\s*-?\d+(?:deg|rad)\s*/,
															""
														)),
												/\b(?:circle|closest|contain|cover|ellipse|farthest)\b/.test(
													t[0]
												))
											) {
												var r = t.shift().split(/\s+/);
												!r[0] ||
													("circle" !== r[0] &&
														"ellipse" !== r[0]) ||
													(a = r.shift()),
													r[0] && (n = r.shift()),
													"cover" === n
														? (n =
																"farthest-corner")
														: "contain" === n &&
														  (n = "clothest-side");
											}
											return (
												s +
												"(" +
												a +
												" " +
												n +
												" at " +
												i +
												"," +
												t.join(",") +
												")"
											);
										}
										return s + "(" + t.join(",") + ")";
								  })(0, a, n))
								: (e[s] = a + "(" + n.join(",") + ")");
						}),
						function () {
							new Prism.plugins.Previewer(
								"gradient",
								function (e) {
									return (
										(this.firstChild.style.backgroundImage =
											""),
										(this.firstChild.style.backgroundImage =
											s(e)),
										!!this.firstChild.style.backgroundImage
									);
								},
								"*",
								function () {
									this._elt.innerHTML = "<div></div>";
								}
							);
						}),
					tokens: {
						gradient: {
							pattern:
								/(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:hsl|rgb)a?\(.+?\)|[^\)])+\)/gi,
							inside: {
								function: /[\w-]+(?=\()/,
								punctuation: /[(),]/,
							},
						},
					},
					languages: {
						css: !0,
						less: !0,
						sass: [
							{
								lang: "sass",
								before: "punctuation",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["variable-line"],
							},
							{
								lang: "sass",
								before: "punctuation",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["property-line"],
							},
						],
						scss: !0,
						stylus: [
							{
								lang: "stylus",
								before: "func",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"property-declaration"
									].inside,
							},
							{
								lang: "stylus",
								before: "func",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"variable-declaration"
									].inside,
							},
						],
					},
				},
				angle: {
					create: function () {
						new Prism.plugins.Previewer(
							"angle",
							function (e) {
								var s,
									t,
									i = parseFloat(e),
									a = e.match(/[a-z]+$/i);
								if (!i || !a) return !1;
								switch ((a = a[0])) {
									case "deg":
										s = 360;
										break;
									case "grad":
										s = 400;
										break;
									case "rad":
										s = 2 * Math.PI;
										break;
									case "turn":
										s = 1;
								}
								return (
									(t = (100 * i) / s),
									(t %= 100),
									this[
										(i < 0 ? "set" : "remove") + "Attribute"
									]("data-negative", ""),
									(this.querySelector(
										"circle"
									).style.strokeDasharray =
										Math.abs(t) + ",500"),
									!0
								);
							},
							"*",
							function () {
								this._elt.innerHTML =
									'<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>';
							}
						);
					},
					tokens: {
						angle: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)(?:deg|g?rad|turn)\b/i,
					},
					languages: {
						css: !0,
						less: !0,
						markup: {
							lang: "markup",
							before: "punctuation",
							inside: "inside",
							root:
								Prism.languages.markup &&
								Prism.languages.markup.tag.inside["attr-value"],
						},
						sass: [
							{
								lang: "sass",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["property-line"],
							},
							{
								lang: "sass",
								before: "operator",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["variable-line"],
							},
						],
						scss: !0,
						stylus: [
							{
								lang: "stylus",
								before: "func",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"property-declaration"
									].inside,
							},
							{
								lang: "stylus",
								before: "func",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"variable-declaration"
									].inside,
							},
						],
					},
				},
				color: {
					create: function () {
						new Prism.plugins.Previewer("color", function (e) {
							return (
								(this.style.backgroundColor = ""),
								(this.style.backgroundColor = e),
								!!this.style.backgroundColor
							);
						});
					},
					tokens: {
						color: [Prism.languages.css.hexcode].concat(
							Prism.languages.css.color
						),
					},
					languages: {
						css: !1,
						less: !0,
						markup: {
							lang: "markup",
							before: "punctuation",
							inside: "inside",
							root:
								Prism.languages.markup &&
								Prism.languages.markup.tag.inside["attr-value"],
						},
						sass: [
							{
								lang: "sass",
								before: "punctuation",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["variable-line"],
							},
							{
								lang: "sass",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["property-line"],
							},
						],
						scss: !1,
						stylus: [
							{
								lang: "stylus",
								before: "hexcode",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"property-declaration"
									].inside,
							},
							{
								lang: "stylus",
								before: "hexcode",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"variable-declaration"
									].inside,
							},
						],
					},
				},
				easing: {
					create: function () {
						new Prism.plugins.Previewer(
							"easing",
							function (e) {
								var s = (e =
									{
										linear: "0,0,1,1",
										ease: ".25,.1,.25,1",
										"ease-in": ".42,0,1,1",
										"ease-out": "0,0,.58,1",
										"ease-in-out": ".42,0,.58,1",
									}[e] || e).match(
									/-?(?:\d+(?:\.\d+)?|\.\d+)/g
								);
								if (4 === s.length) {
									(s = s.map(function (e, s) {
										return 100 * (s % 2 ? 1 - e : e);
									})),
										this.querySelector("path").setAttribute(
											"d",
											"M0,100 C" +
												s[0] +
												"," +
												s[1] +
												", " +
												s[2] +
												"," +
												s[3] +
												", 100,0"
										);
									var t = this.querySelectorAll("line");
									return (
										t[0].setAttribute("x2", s[0]),
										t[0].setAttribute("y2", s[1]),
										t[1].setAttribute("x2", s[2]),
										t[1].setAttribute("y2", s[3]),
										!0
									);
								}
								return !1;
							},
							"*",
							function () {
								this._elt.innerHTML =
									'<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /></svg>';
							}
						);
					},
					tokens: {
						easing: {
							pattern:
								/\bcubic-bezier\((?:-?(?:\d+(?:\.\d+)?|\.\d+),\s*){3}-?(?:\d+(?:\.\d+)?|\.\d+)\)\B|\b(?:ease(?:-in)?(?:-out)?|linear)(?=\s|[;}]|$)/i,
							inside: {
								function: /[\w-]+(?=\()/,
								punctuation: /[(),]/,
							},
						},
					},
					languages: {
						css: !0,
						less: !0,
						sass: [
							{
								lang: "sass",
								inside: "inside",
								before: "punctuation",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["variable-line"],
							},
							{
								lang: "sass",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["property-line"],
							},
						],
						scss: !0,
						stylus: [
							{
								lang: "stylus",
								before: "hexcode",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"property-declaration"
									].inside,
							},
							{
								lang: "stylus",
								before: "hexcode",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"variable-declaration"
									].inside,
							},
						],
					},
				},
				time: {
					create: function () {
						new Prism.plugins.Previewer(
							"time",
							function (e) {
								var s = parseFloat(e),
									t = e.match(/[a-z]+$/i);
								return !(
									!s ||
									!t ||
									((t = t[0]),
									(this.querySelector(
										"circle"
									).style.animationDuration = 2 * s + t),
									0)
								);
							},
							"*",
							function () {
								this._elt.innerHTML =
									'<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>';
							}
						);
					},
					tokens: {
						time: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)m?s\b/i,
					},
					languages: {
						css: !0,
						less: !0,
						markup: {
							lang: "markup",
							before: "punctuation",
							inside: "inside",
							root:
								Prism.languages.markup &&
								Prism.languages.markup.tag.inside["attr-value"],
						},
						sass: [
							{
								lang: "sass",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["property-line"],
							},
							{
								lang: "sass",
								before: "operator",
								inside: "inside",
								root:
									Prism.languages.sass &&
									Prism.languages.sass["variable-line"],
							},
						],
						scss: !0,
						stylus: [
							{
								lang: "stylus",
								before: "hexcode",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"property-declaration"
									].inside,
							},
							{
								lang: "stylus",
								before: "hexcode",
								inside: "rest",
								root:
									Prism.languages.stylus &&
									Prism.languages.stylus[
										"variable-declaration"
									].inside,
							},
						],
					},
				},
			},
			i = "token",
			a = "active",
			n = "flipped",
			r = function (e, s, t, i) {
				(this._elt = null),
					(this._type = e),
					(this._token = null),
					(this.updater = s),
					(this._mouseout = this.mouseout.bind(this)),
					(this.initializer = i);
				var a = this;
				t || (t = ["*"]),
					Array.isArray(t) || (t = [t]),
					t.forEach(function (e) {
						"string" != typeof e && (e = e.lang),
							r.byLanguages[e] || (r.byLanguages[e] = []),
							r.byLanguages[e].indexOf(a) < 0 &&
								r.byLanguages[e].push(a);
					}),
					(r.byType[e] = this);
			};
		for (var o in ((r.prototype.init = function () {
			this._elt ||
				((this._elt = document.createElement("div")),
				(this._elt.className =
					"prism-previewer prism-previewer-" + this._type),
				document.body.appendChild(this._elt),
				this.initializer && this.initializer());
		}),
		(r.prototype.isDisabled = function (e) {
			do {
				if (e.hasAttribute && e.hasAttribute("data-previewers"))
					return (
						-1 ===
						(e.getAttribute("data-previewers") || "")
							.split(/\s+/)
							.indexOf(this._type)
					);
			} while ((e = e.parentNode));
			return !1;
		}),
		(r.prototype.check = function (e) {
			if (!e.classList.contains(i) || !this.isDisabled(e)) {
				do {
					if (
						e.classList &&
						e.classList.contains(i) &&
						e.classList.contains(this._type)
					)
						break;
				} while ((e = e.parentNode));
				e && e !== this._token && ((this._token = e), this.show());
			}
		}),
		(r.prototype.mouseout = function () {
			this._token.removeEventListener("mouseout", this._mouseout, !1),
				(this._token = null),
				this.hide();
		}),
		(r.prototype.show = function () {
			var e, s, t, i;
			if ((this._elt || this.init(), this._token))
				if (this.updater.call(this._elt, this._token.textContent)) {
					this._token.addEventListener(
						"mouseout",
						this._mouseout,
						!1
					);
					var r =
						((s = (e = this._token.getBoundingClientRect()).left),
						(t = e.top),
						(s -= (i =
							document.documentElement.getBoundingClientRect())
							.left),
						{
							top: (t -= i.top),
							right: innerWidth - s - e.width,
							bottom: innerHeight - t - e.height,
							left: s,
							width: e.width,
							height: e.height,
						});
					this._elt.classList.add(a),
						r.top - this._elt.offsetHeight > 0
							? (this._elt.classList.remove(n),
							  (this._elt.style.top = r.top + "px"),
							  (this._elt.style.bottom = ""))
							: (this._elt.classList.add(n),
							  (this._elt.style.bottom = r.bottom + "px"),
							  (this._elt.style.top = "")),
						(this._elt.style.left =
							r.left + Math.min(200, r.width / 2) + "px");
				} else this.hide();
		}),
		(r.prototype.hide = function () {
			this._elt.classList.remove(a);
		}),
		(r.byLanguages = {}),
		(r.byType = {}),
		(r.initEvents = function (e, s) {
			var t = [];
			r.byLanguages[s] && (t = t.concat(r.byLanguages[s])),
				r.byLanguages["*"] && (t = t.concat(r.byLanguages["*"])),
				e.addEventListener(
					"mouseover",
					function (e) {
						var s = e.target;
						t.forEach(function (e) {
							e.check(s);
						});
					},
					!1
				);
		}),
		(Prism.plugins.Previewer = r),
		Prism.hooks.add("before-highlight", function (e) {
			for (var s in t) {
				var i = t[s].languages;
				if (e.language && i[e.language] && !i[e.language].initialized) {
					var a = i[e.language];
					Array.isArray(a) || (a = [a]),
						a.forEach(function (a) {
							var n, r, o, l;
							!0 === a
								? ((n = "important"),
								  (r = e.language),
								  (a = e.language))
								: ((n = a.before || "important"),
								  (r = a.inside || a.lang),
								  (o = a.root || Prism.languages),
								  (l = a.skip),
								  (a = e.language)),
								!l &&
									Prism.languages[a] &&
									(Prism.languages.insertBefore(
										r,
										n,
										t[s].tokens,
										o
									),
									(e.grammar = Prism.languages[a]),
									(i[e.language] = { initialized: !0 }));
						});
				}
			}
		}),
		Prism.hooks.add("after-highlight", function (e) {
			(r.byLanguages["*"] || r.byLanguages[e.language]) &&
				r.initEvents(e.element, e.language);
		}),
		t))
			t[o].create();
	}
})();
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var e = {
				javascript: "clike",
				actionscript: "javascript",
				apex: ["clike", "sql"],
				arduino: "cpp",
				aspnet: ["markup", "csharp"],
				birb: "clike",
				bison: "c",
				c: "clike",
				csharp: "clike",
				cpp: "c",
				cfscript: "clike",
				chaiscript: ["clike", "cpp"],
				cilkc: "c",
				cilkcpp: "cpp",
				coffeescript: "javascript",
				crystal: "ruby",
				"css-extras": "css",
				d: "clike",
				dart: "clike",
				django: "markup-templating",
				ejs: ["javascript", "markup-templating"],
				etlua: ["lua", "markup-templating"],
				erb: ["ruby", "markup-templating"],
				fsharp: "clike",
				"firestore-security-rules": "clike",
				flow: "javascript",
				ftl: "markup-templating",
				gml: "clike",
				glsl: "c",
				go: "clike",
				gradle: "clike",
				groovy: "clike",
				haml: "ruby",
				handlebars: "markup-templating",
				haxe: "clike",
				hlsl: "c",
				idris: "haskell",
				java: "clike",
				javadoc: ["markup", "java", "javadoclike"],
				jolie: "clike",
				jsdoc: ["javascript", "javadoclike", "typescript"],
				"js-extras": "javascript",
				json5: "json",
				jsonp: "json",
				"js-templates": "javascript",
				kotlin: "clike",
				latte: ["clike", "markup-templating", "php"],
				less: "css",
				lilypond: "scheme",
				liquid: "markup-templating",
				markdown: "markup",
				"markup-templating": "markup",
				mongodb: "javascript",
				n4js: "javascript",
				objectivec: "c",
				opencl: "c",
				parser: "markup",
				php: "markup-templating",
				phpdoc: ["php", "javadoclike"],
				"php-extras": "php",
				plsql: "sql",
				processing: "clike",
				protobuf: "clike",
				pug: ["markup", "javascript"],
				purebasic: "clike",
				purescript: "haskell",
				qsharp: "clike",
				qml: "javascript",
				qore: "clike",
				racket: "scheme",
				cshtml: ["markup", "csharp"],
				jsx: ["markup", "javascript"],
				tsx: ["jsx", "typescript"],
				reason: "clike",
				ruby: "clike",
				sass: "css",
				scss: "css",
				scala: "java",
				"shell-session": "bash",
				smarty: "markup-templating",
				solidity: "clike",
				soy: "markup-templating",
				sparql: "turtle",
				sqf: "clike",
				squirrel: "clike",
				stata: ["mata", "java", "python"],
				"t4-cs": ["t4-templating", "csharp"],
				"t4-vb": ["t4-templating", "vbnet"],
				tap: "yaml",
				tt2: ["clike", "markup-templating"],
				textile: "markup",
				twig: "markup-templating",
				typescript: "javascript",
				v: "clike",
				vala: "clike",
				vbnet: "basic",
				velocity: "markup",
				wiki: "markup",
				xeora: "markup",
				"xml-doc": "markup",
				xquery: "markup",
			},
			a = {
				html: "markup",
				xml: "markup",
				svg: "markup",
				mathml: "markup",
				ssml: "markup",
				atom: "markup",
				rss: "markup",
				js: "javascript",
				g4: "antlr4",
				ino: "arduino",
				"arm-asm": "armasm",
				art: "arturo",
				adoc: "asciidoc",
				avs: "avisynth",
				avdl: "avro-idl",
				gawk: "awk",
				sh: "bash",
				shell: "bash",
				shortcode: "bbcode",
				rbnf: "bnf",
				oscript: "bsl",
				cs: "csharp",
				dotnet: "csharp",
				cfc: "cfscript",
				"cilk-c": "cilkc",
				"cilk-cpp": "cilkcpp",
				cilk: "cilkcpp",
				coffee: "coffeescript",
				conc: "concurnas",
				jinja2: "django",
				"dns-zone": "dns-zone-file",
				dockerfile: "docker",
				gv: "dot",
				eta: "ejs",
				xlsx: "excel-formula",
				xls: "excel-formula",
				gamemakerlanguage: "gml",
				po: "gettext",
				gni: "gn",
				ld: "linker-script",
				"go-mod": "go-module",
				hbs: "handlebars",
				mustache: "handlebars",
				hs: "haskell",
				idr: "idris",
				gitignore: "ignore",
				hgignore: "ignore",
				npmignore: "ignore",
				webmanifest: "json",
				kt: "kotlin",
				kts: "kotlin",
				kum: "kumir",
				tex: "latex",
				context: "latex",
				ly: "lilypond",
				emacs: "lisp",
				elisp: "lisp",
				"emacs-lisp": "lisp",
				md: "markdown",
				moon: "moonscript",
				n4jsd: "n4js",
				nani: "naniscript",
				objc: "objectivec",
				qasm: "openqasm",
				objectpascal: "pascal",
				px: "pcaxis",
				pcode: "peoplecode",
				plantuml: "plant-uml",
				pq: "powerquery",
				mscript: "powerquery",
				pbfasm: "purebasic",
				purs: "purescript",
				py: "python",
				qs: "qsharp",
				rkt: "racket",
				razor: "cshtml",
				rpy: "renpy",
				res: "rescript",
				robot: "robotframework",
				rb: "ruby",
				"sh-session": "shell-session",
				shellsession: "shell-session",
				smlnj: "sml",
				sol: "solidity",
				sln: "solution-file",
				rq: "sparql",
				sclang: "supercollider",
				t4: "t4-cs",
				trickle: "tremor",
				troy: "tremor",
				trig: "turtle",
				ts: "typescript",
				tsconfig: "typoscript",
				uscript: "unrealscript",
				uc: "unrealscript",
				url: "uri",
				vb: "visual-basic",
				vba: "visual-basic",
				webidl: "web-idl",
				mathematica: "wolfram",
				nb: "wolfram",
				wl: "wolfram",
				xeoracube: "xeora",
				yml: "yaml",
			},
			r = {},
			s = "components/",
			i = Prism.util.currentScript();
		if (i) {
			var t =
					/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,
				c = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,
				l = i.getAttribute("data-autoloader-path");
			if (null != l) s = l.trim().replace(/\/?$/, "/");
			else {
				var p = i.src;
				t.test(p)
					? (s = p.replace(t, "components/"))
					: c.test(p) && (s = p.replace(c, "$1components/"));
			}
		}
		var n = (Prism.plugins.autoloader = {
			languages_path: s,
			use_minified: !0,
			loadLanguages: m,
		});
		Prism.hooks.add("complete", function (e) {
			var a = e.element,
				r = e.language;
			if (a && r && "none" !== r) {
				var s = (function (e) {
					var a = (e.getAttribute("data-dependencies") || "").trim();
					if (!a) {
						var r = e.parentElement;
						r &&
							"pre" === r.tagName.toLowerCase() &&
							(a = (
								r.getAttribute("data-dependencies") || ""
							).trim());
					}
					return a ? a.split(/\s*,\s*/g) : [];
				})(a);
				/^diff-./i.test(r)
					? (s.push("diff"), s.push(r.substr("diff-".length)))
					: s.push(r),
					s.every(o) ||
						m(s, function () {
							Prism.highlightElement(a);
						});
			}
		});
	}
	function o(e) {
		if (e.indexOf("!") >= 0) return !1;
		if ((e = a[e] || e) in Prism.languages) return !0;
		var s = r[e];
		return s && !s.error && !1 === s.loading;
	}
	function m(s, i, t) {
		"string" == typeof s && (s = [s]);
		var c = s.length,
			l = 0,
			p = !1;
		function k() {
			p || (++l === c && i && i(s));
		}
		0 !== c
			? s.forEach(function (s) {
					!(function (s, i, t) {
						var c = s.indexOf("!") >= 0;
						function l() {
							var e = r[s];
							e || (e = r[s] = { callbacks: [] }),
								e.callbacks.push({ success: i, error: t }),
								!c && o(s)
									? u(s, "success")
									: !c && e.error
									? u(s, "error")
									: (!c && e.loading) ||
									  ((e.loading = !0),
									  (e.error = !1),
									  (function (e, a, r) {
											var s =
												document.createElement(
													"script"
												);
											(s.src = e),
												(s.async = !0),
												(s.onload = function () {
													document.body.removeChild(
														s
													),
														a && a();
												}),
												(s.onerror = function () {
													document.body.removeChild(
														s
													),
														r && r();
												}),
												document.body.appendChild(s);
									  })(
											(function (e) {
												return (
													n.languages_path +
													"prism-" +
													e +
													(n.use_minified
														? ".min"
														: "") +
													".js"
												);
											})(s),
											function () {
												(e.loading = !1),
													u(s, "success");
											},
											function () {
												(e.loading = !1),
													(e.error = !0),
													u(s, "error");
											}
									  ));
						}
						s = s.replace("!", "");
						var p = e[(s = a[s] || s)];
						p && p.length ? m(p, l, t) : l();
					})(s, k, function () {
						p || ((p = !0), t && t(s));
					});
			  })
			: i && setTimeout(i, 0);
	}
	function u(e, a) {
		if (r[e]) {
			for (var s = r[e].callbacks, i = 0, t = s.length; i < t; i++) {
				var c = s[i][a];
				c && setTimeout(c, 0);
			}
			s.length = 0;
		}
	}
})();
"undefined" != typeof Prism &&
	"undefined" != typeof document &&
	document.createRange &&
	((Prism.plugins.KeepMarkup = !0),
	Prism.hooks.add("before-highlight", function (e) {
		if (
			e.element.children.length &&
			Prism.util.isActive(e.element, "keep-markup", !0)
		) {
			var n = Prism.util.isActive(e.element, "drop-tokens", !1),
				t = 0,
				o = [];
			r(e.element), o.length && (e.keepMarkup = o);
		}
		function d(e) {
			if (
				(function (e) {
					return (
						!n ||
						"span" !== e.nodeName.toLowerCase() ||
						!e.classList.contains("token")
					);
				})(e)
			) {
				var d = { element: e, posOpen: t };
				o.push(d), r(e), (d.posClose = t);
			} else r(e);
		}
		function r(e) {
			for (var n = 0, o = e.childNodes.length; n < o; n++) {
				var r = e.childNodes[n];
				1 === r.nodeType
					? d(r)
					: 3 === r.nodeType && (t += r.data.length);
			}
		}
	}),
	Prism.hooks.add("after-highlight", function (e) {
		if (e.keepMarkup && e.keepMarkup.length) {
			var n = function (e, t) {
				for (var o = 0, d = e.childNodes.length; o < d; o++) {
					var r = e.childNodes[o];
					if (1 === r.nodeType) {
						if (!n(r, t)) return !1;
					} else
						3 === r.nodeType &&
							(!t.nodeStart &&
								t.pos + r.data.length > t.node.posOpen &&
								((t.nodeStart = r),
								(t.nodeStartPos = t.node.posOpen - t.pos)),
							t.nodeStart &&
								t.pos + r.data.length >= t.node.posClose &&
								((t.nodeEnd = r),
								(t.nodeEndPos = t.node.posClose - t.pos)),
							(t.pos += r.data.length));
					if (t.nodeStart && t.nodeEnd) {
						var s = document.createRange();
						return (
							s.setStart(t.nodeStart, t.nodeStartPos),
							s.setEnd(t.nodeEnd, t.nodeEndPos),
							(t.node.element.innerHTML = ""),
							t.node.element.appendChild(s.extractContents()),
							s.insertNode(t.node.element),
							s.detach(),
							!1
						);
					}
				}
				return !0;
			};
			e.keepMarkup.forEach(function (t) {
				n(e.element, { node: t, pos: 0 });
			}),
				(e.highlightedCode = e.element.innerHTML);
		}
	}));
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var e = /(?:^|\s)command-line(?:\s|$)/,
			t = "command-line-prompt",
			n = "".startsWith
				? function (e, t) {
						return e.startsWith(t);
				  }
				: function (e, t) {
						return 0 === e.indexOf(t);
				  },
			a = "".endsWith
				? function (e, t) {
						return e.endsWith(t);
				  }
				: function (e, t) {
						var n = e.length;
						return e.substring(n - t.length, n) === t;
				  };
		Prism.hooks.add("before-highlight", function (i) {
			var o = r(i);
			if (!o.complete && i.code) {
				var s = i.element.parentElement;
				if (
					s &&
					/pre/i.test(s.nodeName) &&
					(e.test(s.className) || e.test(i.element.className))
				) {
					var l = i.element.querySelector("." + t);
					l && l.remove();
					var m = i.code.split("\n");
					o.numberOfLines = m.length;
					var u = (o.outputLines = []),
						c = s.getAttribute("data-output"),
						d = s.getAttribute("data-filter-output");
					if (null !== c)
						c.split(",").forEach(function (e) {
							var t = e.split("-"),
								n = parseInt(t[0], 10),
								a = 2 === t.length ? parseInt(t[1], 10) : n;
							if (!isNaN(n) && !isNaN(a)) {
								n < 1 && (n = 1),
									a > m.length && (a = m.length),
									a--;
								for (var r = --n; r <= a; r++)
									(u[r] = m[r]), (m[r] = "");
							}
						});
					else if (d)
						for (var p = 0; p < m.length; p++)
							n(m[p], d) &&
								((u[p] = m[p].slice(d.length)), (m[p] = ""));
					for (
						var f = (o.continuationLineIndicies = new Set()),
							h = s.getAttribute("data-continuation-str"),
							v = s.getAttribute("data-filter-continuation"),
							g = 0;
						g < m.length;
						g++
					) {
						var b = m[g];
						b &&
							(h && a(b, h) && f.add(g + 1),
							g > 0 &&
								v &&
								n(b, v) &&
								((m[g] = b.slice(v.length)), f.add(g)));
					}
					i.code = m.join("\n");
				} else o.complete = !0;
			} else o.complete = !0;
		}),
			Prism.hooks.add("before-insert", function (e) {
				var t = r(e);
				if (!t.complete) {
					for (
						var n = e.highlightedCode.split("\n"),
							a = t.outputLines || [],
							i = 0,
							o = n.length;
						i < o;
						i++
					)
						a.hasOwnProperty(i)
							? (n[i] =
									'<span class="token output">' +
									Prism.util.encode(a[i]) +
									"</span>")
							: (n[i] =
									'<span class="token command">' +
									n[i] +
									"</span>");
					e.highlightedCode = n.join("\n");
				}
			}),
			Prism.hooks.add("complete", function (n) {
				if (
					(function (e) {
						return "command-line" in (e.vars = e.vars || {});
					})(n)
				) {
					var a = r(n);
					if (!a.complete) {
						var i = n.element.parentElement;
						e.test(n.element.className) &&
							(n.element.className = n.element.className.replace(
								e,
								" "
							)),
							e.test(i.className) ||
								(i.className += " command-line");
						var o,
							s = "",
							l = a.numberOfLines || 0,
							m = b("data-prompt", "");
						o =
							"" !== m
								? '<span data-prompt="' + m + '"></span>'
								: '<span data-user="' +
								  b("data-user", "user") +
								  '" data-host="' +
								  b("data-host", "localhost") +
								  '"></span>';
						for (
							var u = a.continuationLineIndicies || new Set(),
								c =
									'<span data-continuation-prompt="' +
									b("data-continuation-prompt", ">") +
									'"></span>',
								d = 0;
							d < l;
							d++
						)
							u.has(d) ? (s += c) : (s += o);
						var p = document.createElement("span");
						(p.className = t), (p.innerHTML = s);
						for (
							var f = a.outputLines || [], h = 0, v = f.length;
							h < v;
							h++
						)
							if (f.hasOwnProperty(h)) {
								var g = p.children[h];
								g.removeAttribute("data-user"),
									g.removeAttribute("data-host"),
									g.removeAttribute("data-prompt");
							}
						n.element.insertBefore(p, n.element.firstChild),
							(a.complete = !0);
					}
				}
				function b(e, t) {
					return (i.getAttribute(e) || t).replace(/"/g, "&quot");
				}
			});
	}
	function r(e) {
		var t = (e.vars = e.vars || {});
		return (t["command-line"] = t["command-line"] || {});
	}
})();
"undefined" != typeof Prism &&
	"undefined" != typeof document &&
	(Element.prototype.matches ||
		(Element.prototype.matches =
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector),
	(Prism.plugins.UnescapedMarkup = !0),
	Prism.hooks.add("before-highlightall", function (e) {
		e.selector +=
			', [class*="lang-"] script[type="text/plain"], [class*="language-"] script[type="text/plain"], script[type="text/plain"][class*="lang-"], script[type="text/plain"][class*="language-"]';
	}),
	Prism.hooks.add("before-sanity-check", function (e) {
		var t = e.element;
		if (t.matches('script[type="text/plain"]')) {
			var a = document.createElement("code"),
				c = document.createElement("pre");
			c.className = a.className = t.className;
			var n = t.dataset;
			return (
				Object.keys(n || {}).forEach(function (e) {
					Object.prototype.hasOwnProperty.call(n, e) &&
						(c.dataset[e] = n[e]);
				}),
				(a.textContent = e.code =
					e.code.replace(/&lt;\/script(?:>|&gt;)/gi, "</script>")),
				c.appendChild(a),
				t.parentNode.replaceChild(c, t),
				void (e.element = a)
			);
		}
		if (!e.code) {
			var o = t.childNodes;
			1 === o.length &&
				"#comment" == o[0].nodeName &&
				(t.textContent = e.code = o[0].textContent);
		}
	}));
!(function () {
	if ("undefined" != typeof Prism) {
		var e =
				Object.assign ||
				function (e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					return e;
				},
			t = {
				"remove-trailing": "boolean",
				"remove-indent": "boolean",
				"left-trim": "boolean",
				"right-trim": "boolean",
				"break-lines": "number",
				indent: "number",
				"remove-initial-line-feed": "boolean",
				"tabs-to-spaces": "number",
				"spaces-to-tabs": "number",
			};
		(n.prototype = {
			setDefaults: function (t) {
				this.defaults = e(this.defaults, t);
			},
			normalize: function (t, n) {
				for (var r in (n = e(this.defaults, n))) {
					var i = r.replace(/-(\w)/g, function (e, t) {
						return t.toUpperCase();
					});
					"normalize" !== r &&
						"setDefaults" !== i &&
						n[r] &&
						this[i] &&
						(t = this[i].call(this, t, n[r]));
				}
				return t;
			},
			leftTrim: function (e) {
				return e.replace(/^\s+/, "");
			},
			rightTrim: function (e) {
				return e.replace(/\s+$/, "");
			},
			tabsToSpaces: function (e, t) {
				return (
					(t = 0 | t || 4), e.replace(/\t/g, new Array(++t).join(" "))
				);
			},
			spacesToTabs: function (e, t) {
				return (
					(t = 0 | t || 4),
					e.replace(RegExp(" {" + t + "}", "g"), "\t")
				);
			},
			removeTrailing: function (e) {
				return e.replace(/\s*?$/gm, "");
			},
			removeInitialLineFeed: function (e) {
				return e.replace(/^(?:\r?\n|\r)/, "");
			},
			removeIndent: function (e) {
				var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
				return t && t[0].length
					? (t.sort(function (e, t) {
							return e.length - t.length;
					  }),
					  t[0].length ? e.replace(RegExp("^" + t[0], "gm"), "") : e)
					: e;
			},
			indent: function (e, t) {
				return e.replace(
					/^[^\S\n\r]*(?=\S)/gm,
					new Array(++t).join("\t") + "$&"
				);
			},
			breakLines: function (e, t) {
				t = !0 === t ? 80 : 0 | t || 80;
				for (var n = e.split("\n"), i = 0; i < n.length; ++i)
					if (!(r(n[i]) <= t)) {
						for (
							var o = n[i].split(/(\s+)/g), a = 0, l = 0;
							l < o.length;
							++l
						) {
							var s = r(o[l]);
							(a += s) > t && ((o[l] = "\n" + o[l]), (a = s));
						}
						n[i] = o.join("");
					}
				return n.join("\n");
			},
		}),
			"undefined" != typeof module &&
				module.exports &&
				(module.exports = n),
			(Prism.plugins.NormalizeWhitespace = new n({
				"remove-trailing": !0,
				"remove-indent": !0,
				"left-trim": !0,
				"right-trim": !0,
			})),
			Prism.hooks.add("before-sanity-check", function (e) {
				var n = Prism.plugins.NormalizeWhitespace;
				if (
					(!e.settings ||
						!1 !== e.settings["whitespace-normalization"]) &&
					Prism.util.isActive(
						e.element,
						"whitespace-normalization",
						!0
					)
				)
					if ((e.element && e.element.parentNode) || !e.code) {
						var r = e.element.parentNode;
						if (e.code && r && "pre" === r.nodeName.toLowerCase()) {
							for (var i in (null == e.settings &&
								(e.settings = {}),
							t))
								if (Object.hasOwnProperty.call(t, i)) {
									var o = t[i];
									if (r.hasAttribute("data-" + i))
										try {
											var a = JSON.parse(
												r.getAttribute("data-" + i) ||
													"true"
											);
											typeof a === o &&
												(e.settings[i] = a);
										} catch (e) {}
								}
							for (
								var l = r.childNodes,
									s = "",
									c = "",
									u = !1,
									m = 0;
								m < l.length;
								++m
							) {
								var f = l[m];
								f == e.element
									? (u = !0)
									: "#text" === f.nodeName &&
									  (u
											? (c += f.nodeValue)
											: (s += f.nodeValue),
									  r.removeChild(f),
									  --m);
							}
							if (
								e.element.children.length &&
								Prism.plugins.KeepMarkup
							) {
								var d = s + e.element.innerHTML + c;
								(e.element.innerHTML = n.normalize(
									d,
									e.settings
								)),
									(e.code = e.element.textContent);
							} else
								(e.code = s + e.code + c),
									(e.code = n.normalize(e.code, e.settings));
						}
					} else e.code = n.normalize(e.code, e.settings);
			});
	}
	function n(t) {
		this.defaults = e({}, t);
	}
	function r(e) {
		for (var t = 0, n = 0; n < e.length; ++n)
			e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
		return e.length + t;
	}
})();
!(function () {
	if ("undefined" != typeof Prism) {
		var i = {
				pattern: /(.)\bdata:[^\/]+\/[^,]+,(?:(?!\1)[\s\S]|\\\1)+(?=\1)/,
				lookbehind: !0,
				inside: {
					"language-css": {
						pattern: /(data:[^\/]+\/(?:[^+,]+\+)?css,)[\s\S]+/,
						lookbehind: !0,
					},
					"language-javascript": {
						pattern:
							/(data:[^\/]+\/(?:[^+,]+\+)?javascript,)[\s\S]+/,
						lookbehind: !0,
					},
					"language-json": {
						pattern: /(data:[^\/]+\/(?:[^+,]+\+)?json,)[\s\S]+/,
						lookbehind: !0,
					},
					"language-markup": {
						pattern:
							/(data:[^\/]+\/(?:[^+,]+\+)?(?:html|xml),)[\s\S]+/,
						lookbehind: !0,
					},
				},
			},
			a = ["url", "attr-value", "string"];
		(Prism.plugins.dataURIHighlight = {
			processGrammar: function (n) {
				n &&
					!n["data-uri"] &&
					(Prism.languages.DFS(n, function (n, r, e) {
						a.indexOf(e) > -1 &&
							!Array.isArray(r) &&
							(r.pattern || (r = this[n] = { pattern: r }),
							(r.inside = r.inside || {}),
							"attr-value" == e
								? Prism.languages.insertBefore(
										"inside",
										r.inside["url-link"]
											? "url-link"
											: "punctuation",
										{ "data-uri": i },
										r
								  )
								: r.inside["url-link"]
								? Prism.languages.insertBefore(
										"inside",
										"url-link",
										{ "data-uri": i },
										r
								  )
								: (r.inside["data-uri"] = i));
					}),
					(n["data-uri"] = i));
			},
		}),
			Prism.hooks.add("before-highlight", function (a) {
				if (i.pattern.test(a.code))
					for (var n in i.inside)
						if (
							i.inside.hasOwnProperty(n) &&
							!i.inside[n].inside &&
							i.inside[n].pattern.test(a.code)
						) {
							var r = n.match(/^language-(.+)/)[1];
							Prism.languages[r] &&
								(i.inside[n].inside = {
									rest:
										((e = Prism.languages[r]),
										Prism.plugins.autolinker &&
											Prism.plugins.autolinker.processGrammar(
												e
											),
										e),
								});
						}
				var e;
				Prism.plugins.dataURIHighlight.processGrammar(a.grammar);
			});
	}
})();
!(function () {
	function t(t) {
		var e = document.createElement("textarea");
		(e.value = t.getText()),
			(e.style.top = "0"),
			(e.style.left = "0"),
			(e.style.position = "fixed"),
			document.body.appendChild(e),
			e.focus(),
			e.select();
		try {
			var o = document.execCommand("copy");
			setTimeout(function () {
				o ? t.success() : t.error();
			}, 1);
		} catch (e) {
			setTimeout(function () {
				t.error(e);
			}, 1);
		}
		document.body.removeChild(e);
	}
	"undefined" != typeof Prism &&
		"undefined" != typeof document &&
		(Prism.plugins.toolbar
			? Prism.plugins.toolbar.registerButton(
					"copy-to-clipboard",
					function (e) {
						var o = e.element,
							n = (function (t) {
								var e = {
									copy: "Copy",
									"copy-error": "Press Ctrl+C to copy",
									"copy-success": "Copied!",
									"copy-timeout": 5e3,
								};
								for (var o in e) {
									for (
										var n = "data-prismjs-" + o, c = t;
										c && !c.hasAttribute(n);

									)
										c = c.parentElement;
									c && (e[o] = c.getAttribute(n));
								}
								return e;
							})(o),
							c = document.createElement("button");
						(c.className = "copy-to-clipboard-button"),
							c.setAttribute("type", "button");
						var r = document.createElement("span");
						return (
							c.appendChild(r),
							u("copy"),
							(function (e, o) {
								e.addEventListener("click", function () {
									!(function (e) {
										navigator.clipboard
											? navigator.clipboard
													.writeText(e.getText())
													.then(
														e.success,
														function () {
															t(e);
														}
													)
											: t(e);
									})(o);
								});
							})(c, {
								getText: function () {
									return o.textContent;
								},
								success: function () {
									u("copy-success"), i();
								},
								error: function () {
									u("copy-error"),
										setTimeout(function () {
											!(function (t) {
												window
													.getSelection()
													.selectAllChildren(t);
											})(o);
										}, 1),
										i();
								},
							}),
							c
						);
						function i() {
							setTimeout(function () {
								u("copy");
							}, n["copy-timeout"]);
						}
						function u(t) {
							(r.textContent = n[t]),
								c.setAttribute("data-copy-state", t);
						}
					}
			  )
			: console.warn(
					"Copy to Clipboard plugin loaded before Toolbar plugin."
			  ));
})();
"undefined" != typeof Prism &&
	"undefined" != typeof document &&
	document.querySelector &&
	Prism.plugins.toolbar.registerButton("download-file", function (t) {
		var e = t.element.parentNode;
		if (
			e &&
			/pre/i.test(e.nodeName) &&
			e.hasAttribute("data-src") &&
			e.hasAttribute("data-download-link")
		) {
			var n = e.getAttribute("data-src"),
				a = document.createElement("a");
			return (
				(a.textContent =
					e.getAttribute("data-download-link-label") || "Download"),
				a.setAttribute("download", ""),
				(a.href = n),
				a
			);
		}
	});
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		var e = { "(": ")", "[": "]", "{": "}" },
			t = { "(": "brace-round", "[": "brace-square", "{": "brace-curly" },
			n = { "${": "{" },
			r = 0,
			c = /^(pair-\d+-)(close|open)$/;
		Prism.hooks.add("complete", function (c) {
			var i = c.element,
				d = i.parentElement;
			if (d && "PRE" == d.tagName) {
				var u = [];
				if (
					(Prism.util.isActive(i, "match-braces") &&
						u.push("(", "[", "{"),
					0 != u.length)
				) {
					d.__listenerAdded ||
						(d.addEventListener("mousedown", function () {
							var e = d.querySelector("code"),
								t = s("brace-selected");
							Array.prototype.slice
								.call(e.querySelectorAll("." + t))
								.forEach(function (e) {
									e.classList.remove(t);
								});
						}),
						Object.defineProperty(d, "__listenerAdded", {
							value: !0,
						}));
					var f = Array.prototype.slice.call(
							i.querySelectorAll(
								"span." + s("token") + "." + s("punctuation")
							)
						),
						h = [];
					u.forEach(function (c) {
						for (
							var i = e[c], d = s(t[c]), u = [], p = [], v = 0;
							v < f.length;
							v++
						) {
							var m = f[v];
							if (0 == m.childElementCount) {
								var b = m.textContent;
								(b = n[b] || b) === c
									? (h.push({
											index: v,
											open: !0,
											element: m,
									  }),
									  m.classList.add(d),
									  m.classList.add(s("brace-open")),
									  p.push(v))
									: b === i &&
									  (h.push({
											index: v,
											open: !1,
											element: m,
									  }),
									  m.classList.add(d),
									  m.classList.add(s("brace-close")),
									  p.length && u.push([v, p.pop()]));
							}
						}
						u.forEach(function (e) {
							var t = "pair-" + r++ + "-",
								n = f[e[0]],
								c = f[e[1]];
							(n.id = t + "open"),
								(c.id = t + "close"),
								[n, c].forEach(function (e) {
									e.addEventListener("mouseenter", a),
										e.addEventListener("mouseleave", o),
										e.addEventListener("click", l);
								});
						});
					});
					var p = 0;
					h.sort(function (e, t) {
						return e.index - t.index;
					}),
						h.forEach(function (e) {
							e.open
								? (e.element.classList.add(
										s("brace-level-" + ((p % 12) + 1))
								  ),
								  p++)
								: ((p = Math.max(0, p - 1)),
								  e.element.classList.add(
										s("brace-level-" + ((p % 12) + 1))
								  ));
						});
				}
			}
		});
	}
	function s(e) {
		var t = Prism.plugins.customClass;
		return t ? t.apply(e, "none") : e;
	}
	function i(e) {
		var t = c.exec(e.id);
		return document.querySelector(
			"#" + t[1] + ("open" == t[2] ? "close" : "open")
		);
	}
	function a() {
		Prism.util.isActive(this, "brace-hover", !0) &&
			[this, i(this)].forEach(function (e) {
				e.classList.add(s("brace-hover"));
			});
	}
	function o() {
		[this, i(this)].forEach(function (e) {
			e.classList.remove(s("brace-hover"));
		});
	}
	function l() {
		Prism.util.isActive(this, "brace-select", !0) &&
			[this, i(this)].forEach(function (e) {
				e.classList.add(s("brace-selected"));
			});
	}
})();
!(function () {
	if ("undefined" != typeof Prism) {
		var e = /^diff-([\w-]+)/i,
			i =
				/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,
			a = RegExp(
				"(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))".replace(
					/__/g,
					function () {
						return i.source;
					}
				),
				"gi"
			),
			s = !1;
		Prism.hooks.add("before-sanity-check", function (i) {
			var a = i.language;
			e.test(a) &&
				!i.grammar &&
				(i.grammar = Prism.languages[a] = Prism.languages.diff);
		}),
			Prism.hooks.add("before-tokenize", function (i) {
				s ||
					Prism.languages.diff ||
					Prism.plugins.autoloader ||
					((s = !0),
					console.warn(
						"Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."
					));
				var a = i.language;
				e.test(a) &&
					!Prism.languages[a] &&
					(Prism.languages[a] = Prism.languages.diff);
			}),
			Prism.hooks.add("wrap", function (s) {
				var r, n;
				if ("diff" !== s.language) {
					var g = e.exec(s.language);
					if (!g) return;
					(r = g[1]), (n = Prism.languages[r]);
				}
				var f = Prism.languages.diff && Prism.languages.diff.PREFIXES;
				if (f && s.type in f) {
					var u,
						l = s.content
							.replace(i, "")
							.replace(/&lt;/g, "<")
							.replace(/&amp;/g, "&"),
						t = l.replace(/(^|[\r\n])./g, "$1");
					u = n ? Prism.highlight(t, n, r) : Prism.util.encode(t);
					var o,
						m = new Prism.Token("prefix", f[s.type], [
							/\w+/.exec(s.type)[0],
						]),
						d = Prism.Token.stringify(m, s.language),
						c = [];
					for (a.lastIndex = 0; (o = a.exec(u)); ) c.push(d + o[0]);
					/(?:^|[\r\n]).$/.test(l) && c.push(d),
						(s.content = c.join("")),
						n && s.classes.push("language-" + r);
				}
			});
	}
})();
!(function () {
	if ("undefined" != typeof Prism && "undefined" != typeof document) {
		Element.prototype.matches ||
			(Element.prototype.matches =
				Element.prototype.msMatchesSelector ||
				Element.prototype.webkitMatchesSelector);
		var e,
			t = Prism.util.currentScript(),
			n = [],
			r = (Prism.plugins.filterHighlightAll = {
				add: function (e) {
					n.push(function (t) {
						return e({
							element: t,
							language: Prism.util.getLanguage(t),
						});
					});
				},
				addSelector: function (e) {
					n.push(function (t) {
						return t.matches(e);
					});
				},
				reject: {
					add: function (e) {
						n.push(function (t) {
							return !e({
								element: t,
								language: Prism.util.getLanguage(t),
							});
						});
					},
					addSelector: function (e) {
						n.push(function (t) {
							return !t.matches(e);
						});
					},
				},
				filterKnown: !!t && t.hasAttribute("data-filter-known"),
			});
		r.add(function (e) {
			return (
				!r.filterKnown || "object" == typeof Prism.languages[e.language]
			);
		}),
			t &&
				((e = t.getAttribute("data-filter-selector")) &&
					r.addSelector(e),
				(e = t.getAttribute("data-reject-selector")) &&
					r.reject.addSelector(e)),
			Prism.hooks.add("before-all-elements-highlight", function (e) {
				e.elements = e.elements.filter(i);
			});
	}
	function i(e) {
		for (var t = 0, r = n.length; t < r; t++) if (!n[t](e)) return !1;
		return !0;
	}
})();
"undefined" != typeof Prism &&
	((Prism.languages.treeview = {
		"treeview-part": {
			pattern: /^.+/m,
			inside: {
				"entry-line": [
					{ pattern: /\|-- |├── /, alias: "line-h" },
					{ pattern: /\| {3}|│ {3}/, alias: "line-v" },
					{ pattern: /`-- |└── /, alias: "line-v-last" },
					{ pattern: / {4}/, alias: "line-v-gap" },
				],
				"entry-name": {
					pattern: /.*\S.*/,
					inside: { operator: / -> / },
				},
			},
		},
	}),
	Prism.hooks.add("wrap", function (e) {
		if ("treeview" === e.language && "entry-name" === e.type) {
			var t = e.classes,
				n = /(^|[^\\])\/\s*$/;
			if (n.test(e.content))
				(e.content = e.content.replace(n, "$1")), t.push("dir");
			else {
				e.content = e.content.replace(/(^|[^\\])[=*|]\s*$/, "$1");
				for (
					var a = e.content
						.toLowerCase()
						.replace(/\s+/g, "")
						.split(".");
					a.length > 1;

				)
					a.shift(), t.push("ext-" + a.join("-"));
			}
			"." === e.content[0] && t.push("dotfile");
		}
	}));

Prism.plugins.NormalizeWhitespace.setDefaults({
	"remove-trailing": true,
	"remove-indent": true,
	"left-trim": true,
	"right-trim": true,
	"break-lines": 80,
	indent: 0,
	"remove-initial-line-feed": true,
	"tabs-to-spaces": 2,
	"spaces-to-tabs": 4,
});
