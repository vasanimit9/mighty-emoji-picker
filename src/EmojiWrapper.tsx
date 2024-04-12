import { Emoji, EmojiStyle } from "emoji-picker-react";
import type { MightyEmoji } from "./mighty-emoji";
import { useEffect, useState } from "react";
import { emojiAttributePropsMap } from "./utils";

interface IEmojiWrapperProps {
  mightyEmojiElement: MightyEmoji;
}

const EmojiWrapper = (props: IEmojiWrapperProps) => {
  const { mightyEmojiElement } = props;
  const [attributeProps, setAttributeProps] = useState<Partial<Parameters<typeof Emoji>[0]>>({
    unified: mightyEmojiElement.getAttribute("unified") || "1f423",
    emojiStyle:
      (mightyEmojiElement.getAttribute("emoji-style") as
        | EmojiStyle
        | undefined) || EmojiStyle.NATIVE,
  });
  const [configChangedTime, setConfigChangedTime] = useState(Date.now());

  useEffect(() => {
    for(let attr of mightyEmojiElement.attributes) {
      setAttributeProps((attributeProps) => ({
        ...emojiAttributePropsMap[attr.nodeName](
          attributeProps,
          "",
          attr.nodeValue || ""
        ),
      }));
    }
  }, [mightyEmojiElement]);

  useEffect(() => {
    const attributeChangeHandler = function () {
      const { detail } = arguments[0] as CustomEvent;
      setAttributeProps(
        attributeProps =>
        emojiAttributePropsMap[detail[0]]?.(
          attributeProps,
          detail[1],
          detail[2]
        ) || attributeProps
      );
    };
    mightyEmojiElement.addEventListener(
      "attributechange",
      attributeChangeHandler
    );
    return () => {
      mightyEmojiElement.removeEventListener(
        "attributechange",
        attributeChangeHandler
      );
    };
  }, []);

  useEffect(() => {
    const configChangeHandler = () => {
      setAttributeProps({
        getEmojiUrl: mightyEmojiElement.getEmojiUrl || undefined,
      });
      setConfigChangedTime(Date.now());
    };
    mightyEmojiElement.addEventListener(
      "configchange",
      configChangeHandler
    );
    return () => {
      mightyEmojiElement.removeEventListener(
        "configchange",
        configChangeHandler
      );
    };
  }, []);

  console.log(64, attributeProps)

  return <Emoji key={configChangedTime} unified="1f423" {...attributeProps} />;
}

export default EmojiWrapper;