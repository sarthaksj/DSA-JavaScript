/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (arr, value) {
    let [start, end, middle] = [0, arr.length - 1];

    while (start <= end) {
        if (value < arr[middle]) end = middle - 1;

        if (value === arr[middle]) return middle;

        if (value > arr[middle]) start = middle + 1;

        middle = Math.floor(start + (end - start) / 2);
    }

    return middle + 1;
};
