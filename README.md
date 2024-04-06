# `mighty-emoji-picker`
This package is thin web component wrapper on top of [`emoji-picker-react`](https://www.npmjs.com/package/emoji-picker-react).

## Usage
### HTML
Add it anywhere in your html code.
```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    <mighty-emoji-picker></mighty-emoji-picker>
  </body>
</html>
```
### React
If you want to use it with `react`, you should use [`emoji-picker-react`](https://www.npmjs.com/package/emoji-picker-react)

## Events
The `mighty-emoji-picker` web component dispatches the following events using the `CustomEvent` constructor:
| Event | Description |
| -- | -- |
| emojiclick | It is dispatched when an emoji is clicked. The data is passed  in the `detail` property of the event |
| reactionclick | It is dispatched when a reaction is clicked. The data is present in the `detail` property of the event |
| skintonechange | It is dispatched when skin tone is clicked. The data is present in the `detail` property of the event |

## Configuration

### Attributes
`emoji-picker-react` is very versatile. Here is the 1:1 mapping for the props. For more details, please checkout the documentation of [`emoji-picker-react`](https://www.npmjs.com/package/emoji-picker-react).

| Attribute | Default Value | Description |
| -- | -- | -- |
| open | Truthy | Controls whether the picker is open or not. |
| auto-focus-search | Truthy | Controls the auto focus of the search input. |
| theme | `light` | Controls the theme of the picker. Possible values are `light`, `dark` and `auto`. |
| emoji-style | `apple` | Controls the emoji style. Possible values are `google`, `apple`, `facebook`, `twitter` and `native`. |
| default-skin-tone | `neutral` | Controls the default skin tones. The default skin tone to use when an emoji is clicked. Defaults to SkinTones.Neutral. Possible skin tones are: ✋ `neutral`, ✋🏻 `1f3fb`, ✋🏼 `1f3fc`, ✋🏽 `1f3fd`, ✋🏾 `1f3fe`, ✋🏿 `1f3ff` |
| lazy-load-emojis | Falsy | Controls whether the emojis are loaded lazily or not. |
| search-placeholder | "Search" | Controls the placeholder of the search input. |
| suggested-emojis-mode | `frequent` | Controls the suggested emojis mode. Possible values are `frequent` and `recent`. |
| skin-tones-disabled | Falsy | Controls whether the skin tones are disabled or not. |
| search-disabled | Falsy | Controls whether the search is disabled or not. When disabled, the skin tone picker will be shown in the preview component. |
| skin-tone-picker-location | `SEARCH` | Controls the location of the skin tone picker. Possible values are `SEARCH` and `PREVIEW`. |
| emoji-version | - | Allows displaying emojis up to a certain version for compatibility. |
| width | 350 | Controls the width of the picker. You can provide a number that will be treated as pixel size, or your any accepted css width as string. |
| height | 450 | Controls the height of the picker. You can provide a number that will be treated as pixel size, or your any accepted css height as string. |
| reactions-default-open | Falsy | Controls whether the reactions picker is on the initial mount instead of the main picker component. |
| allowExpandReactions | Truthy | Controls whether the reactions picker can be expanded to the main picker. |
| preview-config--default-emoji | `1f60a` | Controls the default emoji shown in preview. |
| preview-config--default-caption | "What's your mood?" | Controls the caption shown in preview. |
| preview-config--show-preview | Truthy | Controls whether preview is shown or not. |

### Properties
You can select the `mighty-emoji-picker` element and set properties to configure it further.

| Property | Type | Description |
| -- | -- | -- |
| containerStyle | `React.CSSProperties` | Adds inline style to the root element of the picker. |
| getEmojiUrl | `(unified: string, emojiStyle: EmojiStyle) => string` | Allows to customize the emoji url and provide your own image host. The function receives the emoji unified and the emoji style as parameters. The function should return the url of the emoji image. |
| categories | `string[]` | Allows full config over ordering, naming and display of categories. |
| customEmojis | `{names: string[], imgUrl: string, id: string}[]` | Allows adding custom emojis to the picker. |
| reactions | `string[]` | Controls the reactions to display in the reactions picker. Takes unified emoji ids. |
| onEmojiClick | `EventListener` | Adds an event listener to the element for `emojiclick` event. |
| onReactionClick | `EventListener` | Adds an event listener to the element for `reactionclick` event. | 
| onSkinToneChange | `EventListener` | Adds an event listener to the element for `skintonechange` event. | 

More:
- Categories:
  Allows full config over ordering, naming and display of categories. To only sort/omit categories, you can simply pass an array of category names to display:

  - 'suggested',
  - 'custom', - Hidden by default
  - 'smileys_people',
  - 'animals_nature',
  - 'food_drink',
  - 'travel_places',
  - 'activities',
  - 'objects',
  - 'symbols',
  - 'flags'

  For a more in-depth configuration, you can pass an array with category config:
  ```js
  [
    {
      category: 'suggested',
      name: 'Recently Used'
    },
    {
      category: 'smileys_people',
      name: 'Faces...'
    }
  ];
  ```
- Custom Emojis
  Example:
  ```js
  const emojiPicker = document.querySelector('mighty-emoji-picker');
  emojiPicker.customEmojis = [
    {
      names: ['Alice', 'alice in wonderland'],
      imgUrl:
        'https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/alice.png',
      id: 'alice'
    },
    {
      names: ['Dog'],
      imgUrl:
        'https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/dog.png',
      id: 'dog'
    },
    {
      names: ['Hat'],
      imgUrl:
        'https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/hat.png',
      id: 'hat'
    },
    {
      names: ['Vest'],
      imgUrl:
        'https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/vest.png',
      id: 'vest'
    }
  ];
  ```


