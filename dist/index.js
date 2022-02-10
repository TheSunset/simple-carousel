!(function (e, t) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = t(require("react"), require("styled-components")))
		: "function" == typeof define && define.amd
		? define(["react", "styled-components"], t)
		: ((e = "undefined" != typeof globalThis ? globalThis : e || self).sunset = t(
				e.React,
				e.styled
		  ));
})(this, function (e, t) {
	"use strict";
	function n(e) {
		return e && "object" == typeof e && "default" in e ? e : { default: e };
	}
	var r = n(e),
		a = n(t),
		l = function () {
			return (
				(l =
					Object.assign ||
					function (e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var a in (t = arguments[n]))
								Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
						return e;
					}),
				l.apply(this, arguments)
			);
		};
	function u(e, t) {
		return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
	}
	var o,
		i,
		f,
		d = "Carousel-module_carousel__o94Ph",
		c = "Carousel-module_wrap__3Zvdc",
		s = "Carousel-module_slide__JHqvG",
		m = "Carousel-module_pagination__gYA5f",
		h = "Carousel-module_active__jTUJt",
		p = "Carousel-module_inactive__ofzHH",
		g = a.default.div(
			o ||
				(o = u(
					[
						"\n  position: relative;\n  width: ",
						";\n  height: ",
						";\n  overflow: hidden;\n  text-align: center;\n",
					],
					[
						"\n  position: relative;\n  width: ",
						";\n  height: ",
						";\n  overflow: hidden;\n  text-align: center;\n",
					]
				)),
			function (e) {
				return e.width + "px";
			},
			function (e) {
				return e.height + "px";
			}
		),
		y = a.default.div(
			i ||
				(i = u(
					["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: ", ";\n"],
					["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: ", ";\n"]
				)),
			function (e) {
				return "transform " + e.speed + "ms";
			}
		),
		v = a.default.div(
			f ||
				(f = u(
					[
						"\n  background-color: #ffffff;\n  height: 100%;\n  width: 100%;\n  transform: translate3d(-100%, 0, 0);\n  transition: ",
						";\n",
					],
					[
						"\n  background-color: #ffffff;\n  height: 100%;\n  width: 100%;\n  transform: translate3d(-100%, 0, 0);\n  transition: ",
						";\n",
					]
				)),
			function (e) {
				return "transform " + e.delay + "ms linear";
			}
		);
	return function (t) {
		var n = e.useState(0),
			a = n[0],
			u = n[1],
			o = e.useRef();
		return (
			e.useEffect(
				function () {
					return (
						u(function (e) {
							return (e + 1) % t.data.length;
						}),
						(o.current = setInterval(function () {
							u(function (e) {
								return (e + 1) % t.data.length;
							});
						}, t.delay)),
						function () {
							o.current && clearInterval(o.current);
						}
					);
				},
				[t.delay, t.data.length]
			),
			r.default.createElement(
				g,
				l({}, t, { className: d }),
				r.default.createElement(
					y,
					l({}, t, {
						className: c,
						style: { transform: "translate3d(" + -a * t.width + "px, 0, 0)" },
					}),
					t.data.map(function (e, t) {
						return r.default.createElement(
							"div",
							{
								key: t,
								className: s,
								style: {
									color: e.style.color,
									backgroundImage: "url(" + e.style.backgroundImage + ")",
								},
							},
							r.default.createElement(
								"h3",
								null,
								e.title.map(function (e, t) {
									return r.default.createElement(
										r.default.Fragment,
										{ key: t },
										e,
										r.default.createElement("br", null)
									);
								})
							),
							r.default.createElement(
								"p",
								null,
								e.desc.map(function (e, t) {
									return r.default.createElement(
										r.default.Fragment,
										{ key: t },
										e,
										r.default.createElement("br", null)
									);
								})
							)
						);
					})
				),
				r.default.createElement(
					"ul",
					{ className: m },
					new Array(t.data.length).fill(null).map(function (e, n) {
						return r.default.createElement(
							"li",
							{ key: n, className: a === n ? h : p },
							r.default.createElement(v, l({}, t))
						);
					})
				)
			)
		);
	};
});
