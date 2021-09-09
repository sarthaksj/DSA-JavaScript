// Binary Search (Works only with sorted data).
// BIG O (Worst - O(log n), Best Case - O(1))

const binarySearch = function (arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== value && start <= end) {
        if (value < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === value ? middle : -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 20);