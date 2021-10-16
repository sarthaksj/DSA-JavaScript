/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const ans = [];
    ans[0] = search(nums, target, true);

    if (ans[0] !== -1) {
        ans[1] = search(nums, target, false);
    } else {
        ans[1] = -1;
    }
    return ans;
};

var search = function (nums, target, findFirst) {
    let [start, end, ans] = [0, nums.length - 1, -1];

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (target < nums[mid]) {
            end = mid - 1;
        }

        if (target === nums[mid]) {
            ans = mid;
            findFirst ? (end = mid - 1) : (start = mid + 1);
        }

        if (target > nums[mid]) {
            start = mid + 1;
        }
    }
    return ans;
};
