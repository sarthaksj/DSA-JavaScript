/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    if (s.length < 0 || k > s.length) return;
    let [i, j, max] = [0, 0, 0]
    const n = s.length;
    let localMax;
    const map = {};

    while (j < n) {
        const ws = j - i + 1;

        const left_el = s.charAt(i);
        const right_el = s.charAt(j);

        map[right_el] = map[right_el] + 1 || 1;

        if (ws < k) {
            j++;
        } else if (ws === k) {
            localMax = 0;
            if (map["a"]) localMax += map["a"];
            if (map["e"]) localMax += map["e"];
            if (map["i"]) localMax += map["i"];
            if (map["o"]) localMax += map["o"];
            if (map["u"]) localMax += map["u"];

            max = Math.max(localMax, max);
            map[left_el]--
            map[left_el] === 0 ? delete map[left_el] : null
            i++;
            j++;
        }
    }
    return max;
};


