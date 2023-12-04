// Minimum
/*
    Write a function that takes two arguments and returns their minimum
*/

/* Solution */

const minimum = function(num1, num2) {
    if(num1 < num2) return num1;
    return num2;
}

// Recursion
/*
    Define a recursive function 'isEven' based on these criteria:
    - Zero is even
    - One is odd
    - For any other number N, its evenness is the same as N-2.

    The function should accept a single parameter (a positive, whole number) and return a Boolean
*/

function isEven(num) {
    if(num === 0) {
        return true;
    } else if(num === 1) {
        return false;
    } else if(num < 0) {
        return isEven(-num);
    } else {
        return isEven(num - 2);
    }
}