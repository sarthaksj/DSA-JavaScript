// Find the floor value of target i.e. greatest element smaller than target.

const floor = (nums, target) => {
    let [start, end, mid] = [0, nums.length - 1, -1];
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        if (target < nums[mid]) {
            end = mid - 1
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            return mid
        }
    }
    return end
};

floor([1, 2, 3, 4, 8, 10, 10, 12, 14], 5);


// Find the Position of the Element In Infinite Sorted Array.
const findInInfinite = (arr, target) => {
    let [start, end] = [0, 1];

    while (target > arr[end]) {
        const newStart = end + 1;
        end = (end - start + 1) * 2;
        start = newStart;
    }

    const binarySearch = function (arr, target, start, end) {
        let mid = -1;
        while (start <= end) {
            mid = Math.floor(start + (end - start) / 2);

            if (target < arr[mid]) {
                end = mid - 1;
            }

            if (target === arr[mid]) {
                return mid;
            }

            if (target > arr[mid]) {
                start = mid + 1;
            }
        }
        return -1;
    };

    return binarySearch(arr, target, start, end);
};

findInInfinite([3, 5, 7, 9, 9, 10, 90, 100, 130, 140, 160, 170], 10);

// This will not work if array contains duplicates.
const numberOfTimesArrayRotated = (arr) => {
    const n = arr.length;
    let [start, end] = [0, n - 1];

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        const next = (mid + 1) % n;
        const prev = (mid + (n - 1)) % n
        if (arr[mid] > arr[next]) return mid + 1;

        if (arr[prev] > arr[mid]) return (mid - 1) + 1;

        if (arr[start] >= arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return 0;
};

numberOfTimesArrayRotated([15, 18, 2, 3, 6, 12])