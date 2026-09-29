from selection_sort import selection_sort


def test_selection_sort():
    array = [99, 44, 6, 2, 1, 5]
    sorted_array = selection_sort(array)
    assert sorted_array == [1, 2, 5, 6, 44, 99]


def test_selection_sort_empty():
    array = []
    sorted_array = selection_sort(array)
    assert sorted_array == []


def test_selection_sort_single_element():
    array = [1]
    sorted_array = selection_sort(array)
    assert sorted_array == [1]
