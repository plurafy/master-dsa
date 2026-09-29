from bubble_sort import bubble_sort, bubble_sort_optimized


def test_bubble_sort():
    array = [99, 44, 6, 2, 1, 5]
    sorted_array = bubble_sort(array.copy())
    assert sorted_array == [1, 2, 5, 6, 44, 99]


def test_bubble_sort_optimized():
    array = [99, 44, 6, 2, 1, 5]
    sorted_array = bubble_sort_optimized(array.copy())
    assert sorted_array == [1, 2, 5, 6, 44, 99]
