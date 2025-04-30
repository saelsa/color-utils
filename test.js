import { test } from "node:test";
import assert from "node:assert";
import { adjustColor } from "./color-utils.js";

test("adjustColor - no change", () => {
  const result = adjustColor("rgb(100, 150, 200)", 0);
  assert.strictEqual(result, "rgb(100, 150, 200)");
});
test("lighten color - RGB to RGB", () => {
  const result = adjustColor("rgb(100, 150, 200)", 0.1);
  assert.strictEqual(result, "rgb(110, 165, 220)");
});
test("lighten color - HEX to RGB", () => {
  const result = adjustColor("#6496C8", 0.1);
  assert.strictEqual(result, "rgb(110, 165, 220)");
});
test("lighten color -  CSS variable to RGB", () => {
  // Mocking getComputedStyle
  const mockGetStyle = () => ({
    getPropertyValue: (prop) => {
      if (prop === "--test-color") return "#6496C8";
      return "";
    },
  });
  const result = adjustColor("--test-color", 0.1, mockGetStyle);
  assert.strictEqual(result, "rgb(110, 165, 220)");
});

test("darken color - RGB to RGB", () => {
    const result = adjustColor("rgb(100, 150, 200)", -0.1);
    assert.strictEqual(result, "rgb(90, 135, 180)");
    });
test("darken color - HEX to RGB", () => {
    const result = adjustColor("#6496C8", -0.1);
    assert.strictEqual(result, "rgb(90, 135, 180)");
    }
);
test("darken color -  CSS variable to RGB", () => {
    // Mocking getComputedStyle
    const mockGetStyle = () => ({
      getPropertyValue: (prop) => {
        if (prop === "--test-color") return "#6496C8";
        return "";
      },
    });
    const result = adjustColor("--test-color", -0.1, mockGetStyle);
    assert.strictEqual(result, "rgb(90, 135, 180)");
  });