import React from "react";
import ReactDOM from "react-dom/client";
import { emojiAttributePropsMap } from "./utils";
import type { GetEmojiUrl } from "emoji-picker-react/dist/components/emoji/BaseEmojiProps";
import EmojiWrapper from "./EmojiWrapper";

export class MightyEmoji extends HTMLElement {
  reactAppRoot: import('../node_modules/@types/react-dom/client').Root;
  #getEmojiUrl?: GetEmojiUrl | null;

  constructor() {
    super();
    this.reactAppRoot = ReactDOM.createRoot(this);
  }

  static get observedAttributes() {
    return Object.keys(emojiAttributePropsMap)
  }

  attributeChangedCallback() {
    const attributeChangedEvent = new CustomEvent('attributechange', {
      detail: arguments
    })
    this.dispatchEvent(attributeChangedEvent);
  }

  dispatchConfigChangeEvent() {
    const configChangeEvent = new CustomEvent('configchange');
    this.dispatchEvent(configChangeEvent);
  }

  set getEmojiUrl(value: GetEmojiUrl | null) {
    this.#getEmojiUrl = value;
    this.dispatchConfigChangeEvent();
  }

  get getEmojiUrl() {
    return this.#getEmojiUrl || null;
  }

  mountReactApp = () => {
    this.reactAppRoot.render(
      <React.StrictMode>
        <EmojiWrapper mightyEmojiElement={this} />
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

if (!customElements.get("mighty-emoji")) {
  customElements.define("mighty-emoji", MightyEmoji);
}


declare global {
  interface HTMLElementTagNameMap {
    "mighty-emoji": MightyEmoji;
  }
}
;
