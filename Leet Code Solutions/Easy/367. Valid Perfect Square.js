/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let [start, end] = [1, num];

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        const square = mid * mid;

        if (square === num) return true;
        if (square > num) end = mid - 1;
        if (square < num) start = mid + 1;
    }
    return false;
};

/**
 * This question is similar to - 69. Sqrt(x)
 */