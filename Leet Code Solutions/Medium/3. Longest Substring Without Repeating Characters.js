/**
 * @param {string} s
 * @return {number}
 */

// Using In-built Set.  
var lengthOfLongestSubstring = function (s) {
    if (s.length === null) return ''
    let [count, i, j, n] = [0, 0, 0, s.length];
    let set = new Set();

    while (i < n && j < n) {
        let char = s.charAt(j);
        if (!set.has(char)) {
            set.add(char);
            j++;
            count = Math.max(count, j - i);
        } else {
            set.delete(s.charAt(i));
            i++;
        }
    }

    return count;
};

// Using Object to store key value pairs.
var lengthOfLongestSubstring = function (s) {
    if (s.length === null) return ''
    let [left, right, counter, n] = [0, 0, 0, s.length];
    let chars = {};

    while (right < n) {
        const left_char = s.charAt(left);
        const right_char = s.charAt(right);
        if (!chars[right_char]) {
            chars[right_char] = 1;
            right++;
            counter = Math.max(counter, Object.keys(chars).length);
        } else {
            delete chars[left_char];
            left++;
        }
    }
    return counter;
};