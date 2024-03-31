import React from "react";
import ReactDOM from "react-dom/client";
import EmpojiPickerWrapper from "./EmojiPickerWrapper";

export class MightyEmojiPicker extends HTMLElement {
  reactAppRoot: ReturnType<typeof ReactDOM.createRoot>;
  renderRoot: ShadowRoot;

  constructor() {
    super();
    this.renderRoot = this.attachShadow({ mode: "open" });
    const reactRootDiv = document.createElement("div");
    this.renderRoot.appendChild(reactRootDiv);
    this.reactAppRoot = ReactDOM.createRoot(reactRootDiv);
  }

  static get observedAttributes() {
    return ['theme', 'emoji-style'];
  }

  attributeChangedCallback() {
    const attributeChangedEvent = new CustomEvent('attributechange', {
      detail: arguments
    })
    this.dispatchEvent(attributeChangedEvent);
  }

  mountReactApp = () => {
    this.reactAppRoot.render(
      <React.StrictMode>
        <EmpojiPickerWrapper mightyEmojiPickerElement={this} />
      </React.StrictMode>
    );
  }

  unmountReactApp = () => {
    this.reactAppRoot.unmount();
  }

  connectedCallback() {
    this.mountReactApp();
  }

  disconnectedCallback() {
    this.unmountReactApp()
  }
}

if (!customElements.get("mighty-emoji-picker")) {
  customElements.define("mighty-emoji-picker", MightyEmojiPicker);
}

export default {};