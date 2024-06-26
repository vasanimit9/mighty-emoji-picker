var S = Object.defineProperty;
var T = (n, t, e) => t in n ? S(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var h = (n, t, e) => (T(n, typeof t != "symbol" ? t + "" : t, e), e), R = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var s = (n, t, e) => (R(n, t, "read from private field"), e ? e.call(n) : t.get(n)), c = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, a = (n, t, e, o) => (R(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { p as b, _ as E, x as p, u as v, E as M, e as C, R as U, a as x } from "./jsxRuntime.module-AlbuIslX.js";
const D = (n) => {
  const {
    mightyEmojiPickerElement: t
  } = n, [e, o] = b({}), [y, A] = b(Date.now());
  E(() => {
    for (let i of t.attributes)
      o((r) => ({
        ...C[i.nodeName](r, "", i.nodeValue || "")
      }));
  }, [t]), E(() => {
    const i = function() {
      const {
        detail: r
      } = arguments[0];
      o((k) => {
        var j, f;
        return ((f = (j = C)[r[0]]) == null ? void 0 : f.call(j, k, r[1], r[2])) || k;
      });
    };
    return t.addEventListener("attributechange", i), () => {
      t.removeEventListener("attributechange", i);
    };
  }, []), E(() => {
    const i = () => {
      o({
        reactions: t.reactions || void 0,
        categories: t.categories || void 0,
        customEmojis: t.customEmojis || void 0,
        style: t.constainerStyle || void 0,
        getEmojiUrl: t.getEmojiUrl || void 0
      }), A(Date.now());
    };
    return t.addEventListener("configchange", i), () => {
      t.removeEventListener("configchange", i);
    };
  }, []);
  const w = p(function() {
    const i = new CustomEvent("emojiclick", {
      detail: arguments
    });
    t.dispatchEvent(i);
  }, [t]), L = p(function() {
    const i = new CustomEvent("reactionclick", {
      detail: arguments
    });
    t.dispatchEvent(i);
  }, [t]), P = p(function() {
    const i = new CustomEvent("skintonechange", {
      detail: arguments
    });
    t.dispatchEvent(i);
  }, [t]);
  return v(M, {
    onEmojiClick: w,
    onReactionClick: L,
    onSkinToneChange: P,
    ...e
  }, y);
};
var g, m, u, d, l;
class H extends HTMLElement {
  constructor() {
    super();
    h(this, "reactAppRoot");
    h(this, "renderRoot");
    c(this, g, void 0);
    c(this, m, void 0);
    c(this, u, void 0);
    c(this, d, void 0);
    c(this, l, void 0);
    h(this, "mountReactApp", () => {
      this.reactAppRoot.render(v(x.StrictMode, {
        children: v(D, {
          mightyEmojiPickerElement: this
        })
      }));
    });
    h(this, "unmountReactApp", () => {
      this.reactAppRoot.unmount();
    });
    this.renderRoot = this.attachShadow({
      mode: "open"
    }), this.reactAppRoot = U.createRoot(this.renderRoot);
  }
  static get observedAttributes() {
    return Object.keys(C);
  }
  dispatchConfigChangeEvent() {
    const e = new CustomEvent("configchange");
    this.dispatchEvent(e);
  }
  set onEmojiClick(e) {
    this.addEventListener("emojiclick", e);
  }
  set onReactionClick(e) {
    this.addEventListener("reactionclick", e);
  }
  set onSkinToneChange(e) {
    this.addEventListener("skintonechange", e);
  }
  set containerStyle(e) {
    a(this, g, e), this.dispatchConfigChangeEvent();
  }
  get constainerStyle() {
    return s(this, g);
  }
  set getEmojiUrl(e) {
    a(this, m, e), this.dispatchConfigChangeEvent();
  }
  get getEmojiUrl() {
    return s(this, m) || null;
  }
  set categories(e) {
    a(this, u, e), this.dispatchConfigChangeEvent();
  }
  get categories() {
    return s(this, u) || null;
  }
  set customEmojis(e) {
    a(this, d, e), this.dispatchConfigChangeEvent();
  }
  get customEmojis() {
    return s(this, d) || null;
  }
  set reactions(e) {
    a(this, l, e);
  }
  get reactions() {
    return s(this, l) || null;
  }
  attributeChangedCallback() {
    const e = new CustomEvent("attributechange", {
      detail: arguments
    });
    this.dispatchEvent(e);
  }
  connectedCallback() {
    this.mountReactApp();
  }
  disconnectedCallback() {
    this.unmountReactApp();
  }
}
g = new WeakMap(), m = new WeakMap(), u = new WeakMap(), d = new WeakMap(), l = new WeakMap();
customElements.get("mighty-emoji-picker") || customElements.define("mighty-emoji-picker", H);
export {
  H as MightyEmojiPicker
};
