// It is similar to bubble sort but instead 
// of first placing the large values into sorted position, 
// it places small values into sorted position.

const selectionSort = function (arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        } //j
        if (i != min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    } //i
    return arr;
};

// Time Complexity - 
// n ^ 2 as we compare each element in the array to other element the n grows which makes it n ^ 2.

