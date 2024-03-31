import EmojiPicker from "emoji-picker-react";
import type { MightyEmojiPicker } from "./main";
import { useCallback, useEffect, useState } from "react";
import getEmojiPickerProps from "./utils";

interface IEmojiPickerWrapperProps {
  mightyEmojiPickerElement: MightyEmojiPicker;
}

const EmpojiPickerWrapper = (props: IEmojiPickerWrapperProps) => {
  const { mightyEmojiPickerElement } = props;

  const [attributeProps, setAttributeProps] = useState({});

  useEffect(() => {
    const attributeChangeHandler = function () {
      const { detail } = arguments[0] as CustomEvent;
      setAttributeProps(getEmojiPickerProps(detail[0], detail[1], detail[2]));
    };
    mightyEmojiPickerElement.addEventListener(
      "attributechange",
      attributeChangeHandler
    );
    return () => {
      mightyEmojiPickerElement.removeEventListener(
        "attributechange",
        attributeChangeHandler
      );
    };
  }, []);

  const onEmojiClick = useCallback(
    function () {
      const emojiClickEvent = new CustomEvent("emojiclick", {
        detail: arguments,
      });
      mightyEmojiPickerElement.dispatchEvent(emojiClickEvent);
    },
    [mightyEmojiPickerElement]
  );

  const onReactionClick = useCallback(
    function () {
      const reactionClickEvent = new CustomEvent("reactionclick", {
        detail: arguments,
      });
      mightyEmojiPickerElement.dispatchEvent(reactionClickEvent);
    },
    [mightyEmojiPickerElement]
  );

  const onSkinToneChange = useCallback(
    function () {
      const skinToneChangeEvent = new CustomEvent("skintonechange", {
        detail: arguments,
      });
      mightyEmojiPickerElement.dispatchEvent(skinToneChangeEvent);
    },
    [mightyEmojiPickerElement]
  );

  return (
    <EmojiPicker
      onEmojiClick={onEmojiClick}
      onReactionClick={onReactionClick}
      onSkinToneChange={onSkinToneChange}
      {...attributeProps}
    />
  );
};

export default EmpojiPickerWrapper;
