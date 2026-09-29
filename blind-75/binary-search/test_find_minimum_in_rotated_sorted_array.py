from find_minimum_in_rotated_sorted_array import find_minimum_in_rotated_sorted_array


def test_find_minimum_in_rotated_sorted_array():
    array = [4, 5, 6, 7, 0, 1, 2]
    minimum = find_minimum_in_rotated_sorted_array(array)
    assert minimum == 0

    array = [3, 4, 5, 1, 2]
    minimum = find_minimum_in_rotated_sorted_array(array)
    assert minimum == 1

    array = [1, 2, 3, 4, 5]
    minimum = find_minimum_in_rotated_sorted_array(array)
    assert minimum == 1

    array = [2, 1]
    minimum = find_minimum_in_rotated_sorted_array(array)
    assert minimum == 1

    array = [1]
    minimum = find_minimum_in_rotated_sorted_array(array)
    assert minimum == 1

    array = [3, 4, 5, 6, 1, 2]
    minimum = find_minimum_in_rotated_sorted_array(array)
    assert minimum == 1
