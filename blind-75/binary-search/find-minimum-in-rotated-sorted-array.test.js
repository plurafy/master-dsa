import { describe, it } from "node:test";
import assert from "node:assert";
import { findMinimumInRotatedSortedArray } from "./find-minimum-in-rotated-sorted-array.js";

describe("findMinimumInRotatedSortedArray", () => {
  it("should return the minimum element in a rotated sorted array", () => {
    assert.strictEqual(
      findMinimumInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2]),
      0,
    );
    assert.strictEqual(findMinimumInRotatedSortedArray([3, 4, 5, 1, 2]), 1);
    assert.strictEqual(findMinimumInRotatedSortedArray([1, 2, 3, 4, 5]), 1);
    assert.strictEqual(findMinimumInRotatedSortedArray([2, 1]), 1);
    assert.strictEqual(findMinimumInRotatedSortedArray([1]), 1);
    assert.strictEqual(findMinimumInRotatedSortedArray([3, 4, 5, 6, 1, 2]), 1);
  });
});
