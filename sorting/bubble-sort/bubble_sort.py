def bubble_sort(array):
    n = len(array) - 1

    for i in range(n):
        for j in range(n - i):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
    return array


def bubble_sort_optimized(array):
    n = len(array) - 1

    for i in range(n):
        swapped = False
        for j in range(n - i):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
                swapped = True

        if not swapped:
            break

    return array
