/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    const n = arr.length;
    let [start, end] = [0, n - 1];

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);

        const next = (mid + 1) % n;

        if (arr[mid] > arr[next]) {
            end = mid
        } else if (arr[mid] < arr[next]) {
            start = mid + 1;
        }
    }
    return start;
};
