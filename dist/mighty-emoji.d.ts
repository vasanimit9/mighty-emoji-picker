import { GetEmojiUrl } from 'emoji-picker-react/dist/components/emoji/BaseEmojiProps';
import { Root } from '../node_modules/@types/react-dom/client';

declare const _default: {};
export default _default;

export declare class MightyEmoji extends HTMLElement {
    #private;
    reactAppRoot: Root;
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

export { }
