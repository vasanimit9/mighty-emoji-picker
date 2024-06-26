import React from "react";
import ReactDOM from "react-dom/client";
import EmpojiPickerWrapper from "./EmojiPickerWrapper";
import type { GetEmojiUrl } from "emoji-picker-react/dist/components/emoji/BaseEmojiProps";
import type { CSSProperties } from "preact/compat";
import type { CategoriesConfig } from "emoji-picker-react/dist/config/categoryConfig";
import { CustomEmoji } from "emoji-picker-react/dist/config/customEmojiConfig";
import { emojiPickerAttributePropMap } from "./utils";

export class MightyEmojiPicker extends HTMLElement {
  reactAppRoot: import("../node_modules/@types/react-dom/client").Root;
  renderRoot: ShadowRoot;
  #style?: CSSProperties | null;
  #getEmojiUrl?: GetEmojiUrl | null;
  #categories?: CategoriesConfig | null;
  #customEmojis?: CustomEmoji[] | null;
  #reactions?: string[] | null;

  constructor() {
    super();
    this.renderRoot = this.attachShadow({ mode: "open" });
    this.reactAppRoot = ReactDOM.createRoot(this.renderRoot);
  }

  static get observedAttributes() {
    return Object.keys(emojiPickerAttributePropMap);
  }

  dispatchConfigChangeEvent() {
    const configChangeEvent = new CustomEvent("configchange");
    this.dispatchEvent(configChangeEvent);
  }

  set onEmojiClick(value: EventListenerOrEventListenerObject) {
    this.addEventListener("emojiclick", value);
  }

  set onReactionClick(value: EventListenerOrEventListenerObject) {
    this.addEventListener("reactionclick", value);
  }

  set onSkinToneChange(value: EventListenerOrEventListenerObject) {
    this.addEventListener("skintonechange", value);
  }

  set containerStyle(value: CSSProperties | null) {
    this.#style = value;
    this.dispatchConfigChangeEvent();
  }

  get constainerStyle(): CSSProperties | null | undefined {
    return this.#style;
  }

  set getEmojiUrl(value: GetEmojiUrl | null) {
    this.#getEmojiUrl = value;
    this.dispatchConfigChangeEvent();
  }

  get getEmojiUrl() {
    return this.#getEmojiUrl || null;
  }

  set categories(categories: CategoriesConfig | null) {
    this.#categories = categories;
    this.dispatchConfigChangeEvent();
  }

  get categories() {
    return this.#categories || null;
  }

  set customEmojis(value: CustomEmoji[] | null) {
    this.#customEmojis = value;
    this.dispatchConfigChangeEvent();
  }

  get customEmojis() {
    return this.#customEmojis || null;
  }

  set reactions(value: string[] | null) {
    this.#reactions = value;
  }

  get reactions() {
    return this.#reactions || null;
  }

  attributeChangedCallback() {
    const attributeChangedEvent = new CustomEvent("attributechange", {
      detail: arguments,
    });
    this.dispatchEvent(attributeChangedEvent);
  }

  mountReactApp = () => {
    this.reactAppRoot.render(
      <React.StrictMode>
        <EmpojiPickerWrapper mightyEmojiPickerElement={this} />
      </React.StrictMode>
    );
  };

  unmountReactApp = () => {
    this.reactAppRoot.unmount();
  };

  connectedCallback() {
    this.mountReactApp();
  }

  disconnectedCallback() {
    this.unmountReactApp();
  }
}

if (!customElements.get("mighty-emoji-picker")) {
  customElements.define("mighty-emoji-picker", MightyEmojiPicker);
}

declare global {
  interface HTMLElementTagNameMap {
    "mighty-emoji-picker": MightyEmojiPicker;
  }
}
