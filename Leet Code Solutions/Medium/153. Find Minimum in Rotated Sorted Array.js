/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let [start, end] = [0, nums.length - 1];

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] > nums[end]) {
            start = mid + 1;
        }
        if (nums[mid] < nums[end]) {
            end = mid;
        }
    }
    return nums[start];
};



