// Print From N to 1;
const printNTo1 = function (n) {
    if (n === 0) return;
    console.log(n);
    printNTo1(n - 1);
};
printNTo1(5);

// Print From 1 To N
const printFrom1ToN = (n) => {
    if (n === 0) return;
    print(n - 1);
    console.log(n);
};
print(5);

// Factorial Of A Number
const factorial = (n) => {
    if (n === 1) return n;
    return n * factorial(n - 1);
};

factorial(5);

// Sum Of N Numbers
const sum = (n) => {
    if (n <= 1) return n;
    return n + sum(n - 1);
};
sum(5);

// Sum Of Numbers
const digitSum = (n) => {
    if (n === 0) return 0;
    return (n % 10) + digitSum(Math.floor(n / 10));
};
digitSum(1342);

// Product Of Numbers
const productSum = (n) => {
    if (n % 10 === n) return n;
    return (n % 10) * productSum(Math.floor(n / 10));
};
productSum(55);

// Count Number Of Zeroes
const countZeroes = (num, count = 0) => {
    if (num === 0) return count;

    if (num % 10 === 0) count++;

    return countZeroes(Math.floor(num / 10), count);
};
countZeroes(30204);


// Check The Array is Sorted or not.
const isSorted = (arr, i = 0) => {
    if (i === arr.length - 1) return true;
    if (arr[i] < arr[i + 1]) {
        return isSorted(arr, ++i);
    } else {
        return false;
    }
};

isSorted([2, 5, 7, 10]);

//Linear Search using Recursion.
const linearSearch = (arr, target, i = 0) => {
    if (i === arr.length) return -1;
    if (arr[i] === target) {
        return i;
    } else {
        return linearSearch(arr, target, ++i);
    }
};

linearSearch([3, 2, 1, 4, 5, 6, 7, 8, 9, 11, 12, 35], 88);
