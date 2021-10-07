/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let [start, end, mid] = [0, nums.length - 1, -1];

    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);

        const next = (mid + 1) % nums.length;

        if (nums[mid] > nums[next]) {
            end = mid
        } else if (nums[mid] < nums[next]) {
            start = mid + 1;
        }
    }
    return start;
};