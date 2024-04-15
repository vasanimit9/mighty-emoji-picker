var j = Object.defineProperty;
var A = (n, t, e) => t in n ? j(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var s = (n, t, e) => (A(n, typeof t != "symbol" ? t + "" : t, e), e), p = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var E = (n, t, e) => (p(n, t, "read from private field"), e ? e.call(n) : t.get(n)), l = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, f = (n, t, e, o) => (p(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { p as b, _ as c, u as m, b as R, c as g, R as y, a as L } from "./jsxRuntime.module-AlbuIslX.js";
const M = (n) => {
  const {
    mightyEmojiElement: t
  } = n, [e, o] = b({
    unified: t.getAttribute("unified") || "1f423"
  }), [C, v] = b(Date.now());
  return c(() => {
    for (let i of t.attributes)
      o((a) => ({
        ...g[i.nodeName](a, "", i.nodeValue || "")
      }));
  }, [t]), c(() => {
    const i = function() {
      const {
        detail: a
      } = arguments[0];
      o((u) => {
        var h, d;
        return ((d = (h = g)[a[0]]) == null ? void 0 : d.call(h, u, a[1], a[2])) || u;
      });
    };
    return t.addEventListener("attributechange", i), () => {
      t.removeEventListener("attributechange", i);
    };
  }, []), c(() => {
    const i = () => {
      o({
        getEmojiUrl: t.getEmojiUrl || void 0
      }), v(Date.now());
    };
    return t.addEventListener("configchange", i), () => {
      t.removeEventListener("configchange", i);
    };
  }, []), m(R, {
    unified: "1f423",
    ...e
  }, C);
};
var r;
class U extends HTMLElement {
  constructor() {
    super();
    s(this, "reactAppRoot");
    l(this, r, void 0);
    s(this, "mountReactApp", () => {
      this.reactAppRoot.render(m(L.StrictMode, {
        children: m(M, {
          mightyEmojiElement: this
        })
      }));
    });
    s(this, "unmountReactApp", () => {
      this.reactAppRoot.unmount();
    });
    this.reactAppRoot = y.createRoot(this);
  }
  static get observedAttributes() {
    return Object.keys(g);
  }
  attributeChangedCallback() {
    const e = new CustomEvent("attributechange", {
      detail: arguments
    });
    this.dispatchEvent(e);
  }
  dispatchConfigChangeEvent() {
    const e = new CustomEvent("configchange");
    this.dispatchEvent(e);
  }
  set getEmojiUrl(e) {
    f(this, r, e), this.dispatchConfigChangeEvent();
  }
  get getEmojiUrl() {
    return E(this, r) || null;
  }
  connectedCallback() {
    this.mountReactApp();
  }
  disconnectedCallback() {
    this.unmountReactApp();
  }
}
r = new WeakMap();
customElements.get("mighty-emoji") || customElements.define("mighty-emoji", U);
const x = {};
export {
  U as MightyEmoji,
  x as default
};
