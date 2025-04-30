# color-utils

A simple utility library for formatting numbers and dates in JavaScript.

## Installation

You can install this package from JSR:

```bash
npx jsr add @saelsa/color-utils
```

Or with npm:

```bash
npm install @saelsa/color-utils
```

## Usage

### Format Numbers

```javascript
import { formatNumber } from '@saelsa/color-utils';

// Basic usage
formatNumber(1234.567); // "1,234.57"

// Customize decimal places
formatNumber(1234.567, { decimals: 1 }); // "1,234.6"

// Disable thousands separator
formatNumber(1234.567, { thousandsSeparator: false }); // "1234.57"

// Custom separators
formatNumber(1234.567, { decimalSeparator: ',', thousandsChar: '.' }); // "1.234,57"

// Currency formatting
formatNumber(1234.567, { prefix: '$' }); // "$1,234.57"
formatNumber(1234.567, { suffix: ' USD' }); // "1,234.57 USD"

// Abbreviate large numbers
formatNumber(1234567, { abbreviate: true }); // "1.23M"
```

### Format Dates

```javascript
import { formatDate } from '@saelsa/color-utils';

const date = new Date(2025, 3, 30, 14, 30, 45);

// Basic date formatting
formatDate(date, 'MM/dd/yyyy'); // "04/30/2025"
formatDate(date, 'dd-MM-yyyy'); // "30-04-2025"

// With time
formatDate(date, 'yyyy-MM-dd HH:mm:ss'); // "2025-04-30 14:30:45"
formatDate(date, 'MM/dd/yyyy hh:mm a'); // "04/30/2025 02:30 PM"

// Text month and weekday
formatDate(date, 'MMMM d, yyyy'); // "April 30, 2025"
formatDate(date, 'EEEE, MMMM d, yyyy'); // "Wednesday, April 30, 2025"

// Different locale
formatDate(date, 'MMMM d, yyyy', { locale: 'fr-FR' }); // "avril 30, 2025"
```

## API Reference

### formatNumber(value, options)

Formats a number with various options.

#### Parameters

- `value` (number): The number to format
- `options` (object): Formatting options
  - `decimals` (number, default: 2): Number of decimal places
  - `thousandsSeparator` (boolean, default: true): Whether to include thousands separator
  - `decimalSeparator` (string, default: '.'): Character to use as decimal separator
  - `thousandsChar` (string, default: ','): Character to use as thousands separator
  - `abbreviate` (boolean, default: false): Whether to abbreviate large numbers (K, M, B)
  - `prefix` (string, default: ''): String to prepend to the result
  - `suffix` (string, default: ''): String to append to the result

#### Returns

- (string): The formatted number

### formatDate(date, format, options)

Formats a date according to the specified format.

#### Parameters

- `date` (Date|string|number): The date to format
- `format` (string): The format pattern to use
- `options` (object): Additional formatting options
  - `locale` (string, default: 'en-US'): The locale to use for formatting

#### Format Patterns

- `yyyy`: 4-digit year (e.g., 2025)
- `yy`: 2-digit year (e.g., 25)
- `MM`: 2-digit month (01-12)
- `M`: Month without leading zero (1-12)
- `MMM`: Short month name (e.g., Jan)
- `MMMM`: Full month name (e.g., January)
- `dd`: 2-digit day (01-31)
- `d`: Day without leading zero (1-31)
- `EEE`: Short day name (e.g., Mon)
- `EEEE`: Full day name (e.g., Monday)
- `HH`: 2-digit hour, 24-hour format (00-23)
- `H`: Hour without leading zero, 24-hour format (0-23)
- `hh`: 2-digit hour, 12-hour format (01-12)
- `h`: Hour without leading zero, 12-hour format (1-12)
- `mm`: 2-digit minutes (00-59)
- `m`: Minutes without leading zero (0-59)
- `ss`: 2-digit seconds (00-59)
- `s`: Seconds without leading zero (0-59)
- `a`: AM/PM marker

#### Returns

- (string): The formatted date

## License

MIT