export function bubbleSort(array) {
  const n = array.length - 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

export function bubbleSortOptimized(array) {
  const n = array.length - 1;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return array;
}
