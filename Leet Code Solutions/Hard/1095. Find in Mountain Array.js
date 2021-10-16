
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

const findInMountainArray = function (target, mountainArr) {
    const length = mountainArr.length();
    const peakElIdx = findPeakElement(mountainArr);
    const firstTry = orderAgnosticeBinarySearch(mountainArr, target, 0, peakElIdx);

    if (firstTry !== -1) return firstTry;

    return orderAgnosticeBinarySearch(mountainArr, target, peakElIdx + 1, length - 1);
};


const findPeakElement = function (nums) {
    const length = nums.length();
    let [start, end, mid] = [0, length - 1, -1];

    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);

        const next = (mid + 1) % length;

        if (nums.get(mid) > nums.get(next)) {
            end = mid
        } else if (nums.get(mid) < nums.get(next)) {
            start = mid + 1;
        }
    }
    return start;
};


const orderAgnosticeBinarySearch = function (arr, target, start, end) {
    let mid = -1;
    const isAsc = arr.get(start) < arr.get(end);
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        if (target < arr.get(mid)) {
            isAsc ? end = mid - 1 : start = mid + 1;
        }

        if (target === arr.get(mid)) {
            return mid;
        }

        if (target > arr.get(mid)) {
            isAsc ? start = mid + 1 : end = mid - 1;
        }
    }
    return -1;
};