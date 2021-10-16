/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
    let [n, i, j, max, sum] = [nums.length, 0, 0, -Infinity, 0];
    const map = {};

    while (j < n) {
        const left = nums[i];
        const right = nums[j];

        if (!map[right]) {
            sum += right;
            map[right] = 1;
            j++;
            max = Math.max(sum, max);
        } else {
            delete map[left];
            sum -= left;
            i++;
        }
    }
    return max;
};
