import { describe, it } from "node:test";
import { deepStrictEqual } from "node:assert/strict";
import { selectionSort } from "./selection-sort.js";

describe("selectionSort", () => {
  it("should sort an array in ascending order", () => {
    const arr = [5, 3, 8, 4, 2];
    const expected = [2, 3, 4, 5, 8];
    selectionSort(arr);
    deepStrictEqual(arr, expected);
  });
});
