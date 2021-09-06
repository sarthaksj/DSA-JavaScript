
// It is used to sort asc to desc. It is based on swaping.

const bubbleSort = function (arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                //[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        } //j
    } //i
    return arr
}

// 2 (An Optimized Version)
const bubbleSort = function (arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP
                //let temp = arr[j];
                //arr[j] = arr[j + 1];
                //arr[j + 1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwaps = false;
            }
        } //j
        if (noSwaps) break;
    } //i
    return arr
}

// Time Complexity - 
// n ^ 2 we have nested loop and we are 
// making comparsion for each item in the array.
// With the noSwaps variable used above we can make it to linear i.e. O(n).
