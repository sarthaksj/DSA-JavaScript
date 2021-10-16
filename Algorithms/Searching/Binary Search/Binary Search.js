// Binary Search (Works only with sorted data).
// BIG O (Worst - O(log n), Best Case - O(1))

const binarySearch = function (arr, value) {
    let [start, end] = [0, arr.length - 1];
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== value && start <= end) {
        value < arr[middle] ? (end = middle - 1) : (start = middle + 1);
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === value ? middle : -1;
};

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30);



/**
 * Binary Search Using Recursion.
 */
const binarySearchRecursion = (
    arr,
    target,
    start = 0,
    end = arr.length - 1
) => {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor(start + (end - start) / 2);

    if (target < arr[mid]) {
        return binarySearchRecursion(arr, target, start, mid - 1);
    }
    if (target === arr[mid]) {
        return mid;
    }
    if (target > arr[mid]) {
        return binarySearchRecursion(arr, target, mid + 1, end);
    }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
binarySearchRecursion(arr, 6);



/** 
 * Searching In 2D Matrix 
 * Only Cols and Rows are sorted. Not Strictly Sorted
 * Big O - O(n).
 */
const search2DArray = function (matrix, value) {
    let [row, col] = [0, matrix.length - 1];

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === value) return [row, col];
        else if (value > matrix[row][col]) row++;
        else if (value < matrix[row][col]) col--;
    }
    return -1;
};

search2DArray(
    [      /* c   c   c   c */
        /*r*/[10, 20, 30, 40],
        /*r*/[15, 25, 35, 45],
        /*r*/[28, 29, 37, 49],
        /*r*/[33, 34, 38, 50],
    ],
    37
);


/**
 * Fully Sorted Matrix
 */
const binarySearch2D = function (matrix, target) {
    if (matrix.length === 0) return;
    let [rows, cols] = [matrix.length, matrix[0].length];

    let middle = Math.floor((rowStart + rowEnd) / 2);
}