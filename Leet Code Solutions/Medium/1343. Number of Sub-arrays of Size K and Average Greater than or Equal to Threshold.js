/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    if (arr.length === 0 || k > arr.length || k < 1) return;
    let n = arr.length;
    let i = 0;
    let j = 0;
    let sum = 0;
    let ans = 0;

    while (j < n) {
        const ws = j - i + 1;
        const element = arr[j];
        sum += element;

        // For Hitting The Window Size
        ws < k ? j++ : null;

        if (k === ws) {
            // Calculations for threshold
            if (sum / k >= threshold) {
                ans++;
            }
            // Decreasing the previous value and sliding the window.
            sum -= arr[i];
            i++;
            j++;
        }
    }
    return ans;
};
