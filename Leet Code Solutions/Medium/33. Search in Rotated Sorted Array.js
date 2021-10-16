/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    const pivot = findPivot(nums);

    // if you did not find a pivot, it means the array is not rotated
    if (pivot === -1) {
        // just do normal binary search
        return binarySearch(nums, target, 0, nums.length - 1);
    }

    // if pivot is found, you have found 2 asc sorted arrays
    if (nums[pivot] === target) {
        return pivot;
    }

    if (target >= nums[0]) {
        return binarySearch(nums, target, 0, pivot - 1);
    }

    return binarySearch(nums, target, pivot + 1, nums.length - 1);
}

const binarySearch = function (arr, target, start, end) {
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            // ans found
            return mid;
        }
    }
    return -1;
}

// this will not work in duplicate values
const findPivot = function (arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        const next = (mid + 1) % arr.length;
        const prev = (mid + (arr.length - 1)) % arr.length;

        // 4 cases over here
        if (arr[mid] > arr[next]) {
            return mid;
        }
        if (arr[mid] < arr[prev]) {
            return mid - 1;
        }
        if (arr[start] >= arr[mid]) {
            end = mid - 1;
        } else { // This is checking that if(arr[end] >= arr[mid]) it means we the max element is on the right side of the array.
            start = mid + 1;
        }
    }
    return -1;
}
