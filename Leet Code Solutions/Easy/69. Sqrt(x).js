/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
    let [start, end, ans] = [1, x, 0];
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        const square = mid * mid;
        if (square === x) return mid;
        if (square > x) end = mid - 1;
        if (square < x) {
            ans = mid;
            start = mid + 1;
        }
    }
    return ans;
};

/**
 * This question is similar to - 367. Valid Perfect Square
 */