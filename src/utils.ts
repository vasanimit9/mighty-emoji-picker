import type {
  EmojiStyle,
  PickerProps,
  SkinTonePickerLocation,
  SkinTones,
  SuggestionMode,
  Theme,
} from "emoji-picker-react";

const getEmojiPickerProps = (
  prop: string,
  _: string,
  newValue: string
): Partial<PickerProps> => {
  switch (prop) {
    case "open":
      return {
        open: !!newValue,
      };
    case "auto-focus-search":
      return {
        autoFocusSearch: !!newValue,
      };
    case "theme":
      return {
        theme: newValue as Theme,
      };
    case "emoji-style":
      return {
        emojiStyle: newValue as EmojiStyle,
      };
    case "default-skin-tone":
      return {
        defaultSkinTone: newValue as SkinTones,
      };
    case "lazy-load-emojis":
      return {
        lazyLoadEmojis: !!newValue,
      };
    case "search-placeholder":
      return {
        searchPlaceHolder: newValue,
      };
    case "suggested-emojis-mode":
      return {
        suggestedEmojisMode: newValue as SuggestionMode,
      };
    case "skinTonesDisabled":
      return {
        skinTonesDisabled: !!newValue,
      };
    case "search-disabled":
      return {
        searchDisabled: !!newValue,
      };
    case "skin-tone-picker-location":
      return {
        skinTonePickerLocation: newValue as SkinTonePickerLocation,
      };
    case "emoji-version":
      return {
        emojiVersion: newValue,
      };
    case "width":
      return {
        width: isNaN(parseFloat(newValue)) ? newValue : parseFloat(newValue),
      };
    case "height":
      return {
        height: isNaN(parseFloat(newValue)) ? newValue : parseFloat(newValue),
      };
    case "reactions-default-open":
      return { reactionsDefaultOpen: !!newValue };
    case "allow-expand-reactions":
      return { 
        allowExpandReactions: !!newValue
      }
    default:
      return {};
  }
};

export default getEmojiPickerProps;

