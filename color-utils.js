
/**
 * Adjusts the brightness of a color by a given percentage. It can either
 * lighten or darken the color.
 * @param {string} color The color to adjust, in either RGB or HEX or as CSS variable.
 * @param {number} percent The percentage to adjust the color by. Positive values lighten the color,
 *                         negative values darken the color. The value should be between -1 and 1.
 * @param {function} getStyle A function to get the computed style of the document. This is used to
 *                             retrieve the value of CSS variables. By default, it uses
 *                             `getComputedStyle(document.documentElement)`.
 * @returns The adjusted color in RGB format.
 */
export function adjustColor(color, percent, getStyle = () => getComputedStyle(document.documentElement)) {
    // Helper: Convert CSS variable to color
    if (color.startsWith('--')) {
        const style = getStyle();
        color = style.getPropertyValue(color).trim();
    }


    // Helper: Convert hex to RGB
    function hexToRgb(hex) {
      hex = hex.replace('#', '');
      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      const [r, g, b] = [0, 2, 4].map(i => parseInt(hex.substr(i, 2), 16));
      return { r, g, b };
    }
  
    // Helper: Clamp value between 0 and 255
    function clamp(v) {
      return Math.min(255, Math.max(0, Math.round(v)));
    }
  
    let r, g, b;
  
    if (color.startsWith('rgb')) {
      [r, g, b] = color.match(/\d+/g).map(Number);
    } else if (color.startsWith('#')) {
      ({ r, g, b } = hexToRgb(color));
    } else {
      console.warn('Unsupported color format:', color);
      return color;
    }
  
    r = clamp(r + (r * percent));
    g = clamp(g + (g * percent));
    b = clamp(b + (b * percent));
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  