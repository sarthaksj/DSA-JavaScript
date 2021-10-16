/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    const n = letters.length;
    let [start, end] = [0, n - 1];

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (target < letters[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return letters[start % n];
};
