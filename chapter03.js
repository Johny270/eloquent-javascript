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

// Bean Counting
/*
    Write a function countBs that takes a string as its only argument and returns a number that indicates
    how many uppercase "B" characters there are in the string.
    Next, write a function called countChar that behaves like countBs, except it takes a second argument
    that indicates the charactger that is to be counted (rather than counting uppercase "B" characters).
    Rewrite countBs to make use of this new function.
*/

function countBs(str) {
    return countChar(str, "B");
}

function countChar(str, char) {
    let count = 0
    for(let j = 0; j < str.length; j++) {
        if(str[j] === char) count += 1;
    }
    return count;
}