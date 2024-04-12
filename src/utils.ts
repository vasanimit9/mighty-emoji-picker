import type {
  Emoji,
  EmojiStyle,
  PickerProps,
  SkinTonePickerLocation,
  SkinTones,
  SuggestionMode,
  Theme,
} from "emoji-picker-react";

export const emojiPickerAttributePropMap: {
  [key: string]: (
    currentProps: Partial<PickerProps>,
    oldValue: string,
    newValue: string
  ) => Partial<PickerProps>;
} = {
  open: (props, _, newValue) => ({
    ...props,
    open: !!newValue,
  }),
  "auto-focus-search": (props, _, newValue) => ({
    ...props,
    autoFocusSearch: !!newValue,
  }),
  theme: (props, _, newValue) => ({
    ...props,
    theme: newValue as Theme,
  }),
  "emoji-style": (props, _, newValue) => ({
    ...props,
    emojiStyle: newValue as EmojiStyle,
  }),
  "default-skin-tone": (props, _, newValue) => ({
    ...props,
    defaultSkinTone: newValue as SkinTones,
  }),
  "lazy-load-emojis": (props, _, newValue) => ({
    ...props,
    lazyLoadEmojis: !!newValue,
  }),
  "search-placeholder": (props, _, newValue) => ({
    ...props,
    searchPlaceHolder: newValue,
  }),
  "suggested-emojis-mode": (props, _, newValue) => ({
    ...props,
    suggestedEmojisMode: newValue as SuggestionMode,
  }),
  "skin-tones-disabled": (props, _, newValue) => ({
    ...props,
    skinTonesDisabled: !!newValue,
  }),
  "search-disabled": (props, _, newValue) => ({
    ...props,
    searchDisabled: !!newValue,
  }),
  "skin-tone-picker-location": (props, _, newValue) => ({
    ...props,
    skinTonePickerLocation: newValue as SkinTonePickerLocation,
  }),
  "emoji-version": (props, _, newValue) => ({
    ...props,
    emojiVersion: newValue,
  }),
  width: (props, _, newValue) => ({
    ...props,
    width: isNaN(parseFloat(newValue)) ? newValue : parseFloat(newValue),
  }),
  height: (props, _, newValue) => ({
    ...props,
    height: isNaN(parseFloat(newValue)) ? newValue : parseFloat(newValue),
  }),
  "reactions-default-open": (props, _, newValue) => ({
    ...props,
    reactionsDefaultOpen: !!newValue,
  }),
  "allow-expand-reactions": (props, _, newValue) => ({
    ...props,
    allowExpandReactions: !!newValue,
  }),
  "preview-config--default-emoji": (props, _, newValue) => ({
    ...props,
    previewConfig: {
      ...(props.previewConfig ?? {}),
      defaultEmoji: newValue,
    },
  }),
  "preview-config--default-caption":(props, _, newValue) => ({
    ...props,
    previewConfig: {
      ...(props.previewConfig ?? {}),
      defaultCaption: newValue,
    },
  }),
  "preview-config--show-preview": (props, _, newValue) => ({
    ...props,
    previewConfig: {
      ...(props.previewConfig ?? {}),
      showPreview: !!newValue
    },
  }),
};

export const emojiAttributePropsMap: {
  [key: string]: (
    currentProps: Partial<Parameters<typeof Emoji>[0]>,
    oldValue: string,
    newValue: string
  ) => Partial<Parameters<typeof Emoji>[0]>;
} = {
  unified: (props, _, newValue) => ({
    ...props,
    unified: newValue,
  }),
  size: (props, _, newValue) => ({
    ...props,
    size: parseFloat(newValue),
  }),
  "emoji-style": (props, _, newValue) => ({
    ...props,
    emojiStyle: newValue as EmojiStyle,
  }),
  "lazy-load": (props, _, newValue) => ({
    ...props,
    lazyLoad: !!newValue
  }),
  "emoji-url": (props, _, newValue) => ({
    ...props,
    emojiUrl: newValue
  })
};