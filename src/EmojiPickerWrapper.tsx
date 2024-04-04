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
  const [configChangedTime, setConfigChangedTime] = useState(Date.now())

  useEffect(() => {
    const attributeChangeHandler = function () {
      const { detail } = arguments[0] as CustomEvent;
      setAttributeProps(
        getEmojiPickerProps(attributeProps, detail[0], detail[1], detail[2])
      );
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

  useEffect(() => {
    const configChangeHandler = () => {
      setAttributeProps({
        reactions: mightyEmojiPickerElement.reactions || undefined,
        categories: mightyEmojiPickerElement.categories || undefined,
        customEmojis: mightyEmojiPickerElement.customEmojis || undefined,
        style: mightyEmojiPickerElement.constainerStyle || undefined,
        getEmojiUrl: mightyEmojiPickerElement.getEmojiUrl || undefined
      })
      setConfigChangedTime(Date.now());
    }
    mightyEmojiPickerElement.addEventListener('configchange', configChangeHandler);
    return () => {
      mightyEmojiPickerElement.removeEventListener('configchange', configChangeHandler);
    }
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
      key={configChangedTime}
      onEmojiClick={onEmojiClick}
      onReactionClick={onReactionClick}
      onSkinToneChange={onSkinToneChange}
      {...attributeProps}
    />
  );
};

export default EmpojiPickerWrapper;
