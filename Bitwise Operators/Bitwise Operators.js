const isOdd = function (n) {
    return (n & 1) === 1;
};

isOdd(3);

// An array contains a number two times find which in not present one time
const duplicates = function (nums) {
    let unique = 0;
    for (const num of nums) {
        unique ^= num;
    }
    return unique;
};

duplicates([2, 3, 3, 2, 6]);
