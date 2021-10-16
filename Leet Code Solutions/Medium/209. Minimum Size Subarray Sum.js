/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (target, nums) {
    let [i, j, n, min] = [0, 0, nums.length, Number.MAX_VALUE];
    let sum = 0;
    while (j < n) {
        sum += nums[j];

        if (sum < target) j++;

        if (sum >= target) {
            while (sum >= target) {
                min = Math.min(min, (j - i) + 1);
                sum -= nums[i];
                i++;
            } // i-w
            j++;
        }
    } // o-w
    return min === Number.MAX_VALUE ? 0 : min;
};