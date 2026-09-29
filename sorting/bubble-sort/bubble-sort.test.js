import { describe, it } from "node:test";
import { deepStrictEqual } from "node:assert/strict";

import { bubbleSort, bubbleSortOptimized } from "./bubble-sort.js";

describe("bubbleSort", () => {
  it("should sort the array", () => {
    const nums1 = [99, 44, 6, 2, 1, 5];
    deepStrictEqual(bubbleSort(nums1), [1, 2, 5, 6, 44, 99]);

    const nums2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    deepStrictEqual(bubbleSort(nums2), [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]);
  });
});

describe("bubbleSortOptimized", () => {
  it("should sort the array", () => {
    const nums1 = [99, 44, 6, 2, 1, 5];
    deepStrictEqual(bubbleSortOptimized(nums1), [1, 2, 5, 6, 44, 99]);

    const nums2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    deepStrictEqual(
      bubbleSortOptimized(nums2),
      [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283],
    );
  });
});
