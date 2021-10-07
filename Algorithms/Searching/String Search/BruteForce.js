// This is brute force approach of searching a substring in an string


const stringSearch = function (string, str) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < str.length; j++) {

            if (str[j] !== string[i + j]) break;

            if (j === str.length - 1) count++;
        }
    }
    return count;
}