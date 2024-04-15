import { Emoji, PickerProps } from 'emoji-picker-react';

export declare const emojiPickerAttributePropMap: {
    [key: string]: (currentProps: Partial<PickerProps>, oldValue: string, newValue: string) => Partial<PickerProps>;
};
export declare const emojiAttributePropsMap: {
    [key: string]: (currentProps: Partial<Parameters<typeof Emoji>[0]>, oldValue: string, newValue: string) => Partial<Parameters<typeof Emoji>[0]>;
};
//# sourceMappingURL=utils.d.ts.map