import { CustomEmoji } from 'emoji-picker-react/dist/config/customEmojiConfig';
import { CategoriesConfig } from 'emoji-picker-react/dist/config/categoryConfig';
import { CSSProperties } from 'preact/compat';
import { GetEmojiUrl } from 'emoji-picker-react/dist/components/emoji/BaseEmojiProps';

export declare class MightyEmojiPicker extends HTMLElement {
    #private;
    reactAppRoot: import('../node_modules/@types/react-dom/client').Root;
    renderRoot: ShadowRoot;
    constructor();
    static get observedAttributes(): string[];
    dispatchConfigChangeEvent(): void;
    set onEmojiClick(value: EventListenerOrEventListenerObject);
    set onReactionClick(value: EventListenerOrEventListenerObject);
    set onSkinToneChange(value: EventListenerOrEventListenerObject);
    set containerStyle(value: CSSProperties | null);
    get constainerStyle(): CSSProperties | null | undefined;
    set getEmojiUrl(value: GetEmojiUrl | null);
    get getEmojiUrl(): GetEmojiUrl | null;
    set categories(categories: CategoriesConfig | null);
    get categories(): CategoriesConfig | null;
    set customEmojis(value: CustomEmoji[] | null);
    get customEmojis(): CustomEmoji[] | null;
    set reactions(value: string[] | null);
    get reactions(): string[] | null;
    attributeChangedCallback(): void;
    mountReactApp: () => void;
    unmountReactApp: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "mighty-emoji-picker": MightyEmojiPicker;
    }
}
//# sourceMappingURL=main.d.ts.map