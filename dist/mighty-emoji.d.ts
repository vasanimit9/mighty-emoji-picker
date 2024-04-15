import { GetEmojiUrl } from 'emoji-picker-react/dist/components/emoji/BaseEmojiProps';

export declare class MightyEmoji extends HTMLElement {
    #private;
    reactAppRoot: import('../node_modules/@types/react-dom/client').Root;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(): void;
    dispatchConfigChangeEvent(): void;
    set getEmojiUrl(value: GetEmojiUrl | null);
    get getEmojiUrl(): GetEmojiUrl | null;
    mountReactApp: () => void;
    unmountReactApp: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "mighty-emoji": MightyEmoji;
    }
}
//# sourceMappingURL=mighty-emoji.d.ts.map