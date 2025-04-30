# color-utils

A simple utility library for formatting numbers and dates in JavaScript.

## Installation

You can install this package from JSR:

```bash
npx jsr add @iltsp/color-utils
```

Or with npm:

```bash
npm install @iltsp/color-utils
```

## Usage

### Format Numbers

```javascript
import { adjustColor } from '@iltsp/color-utils';

// Lighten color (HEX)
adjustColor("#6496C8", 0.1); // "rgb(110, 165, 220)"

// Lighten color (RGB)
adjustColor("rgb(100, 150, 200)", 0.1); // "rgb(110, 165, 220)"

// Lighten color (CSS Variable)
adjustColor("--test-color", 0.1); // "rgb(110, 165, 220)"

// Darken color (HEX)
adjustColor("#6496C8", -0.1); // "rgb(90, 135, 180)"

// Darken color (RGB)
adjustColor("rgb(100, 150, 200)", -0.1); // "rgb(90, 135, 180)"

// Darken color (CSS Variable)
adjustColor("--test-color", -0.1); // "rgb(90, 135, 180)"

```

## API Reference

### adjustColor(color, percent, getStyle)

 Adjusts the brightness of a color by a given percentage. It can either lighten or darken the color.

#### Parameters

- `color` (string): The color to adjust, in either RGB or HEX or as CSS variable.
- `percent` (number): The percentage to adjust the color by. Positive values lighten the color, negative values darken the color. The value should be between -1 and 1.
- `getStyle`(function): A function to get the computed style of the document. This is used to retrieve the value of CSS variables. By default, it uses `getComputedStyle(document.documentElement)`.


#### Returns

- (string): The adjusted color in RGB format.

## License

MIT