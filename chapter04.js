// The Sum of a Range
/*
    Write a function that takes two arguments, start and end, and returns
    an array containing all the numbers from start up to (and including) end.
    
    Next, write a sum function that takes an array of numbers and returns the
    sum of these numbers.

    As a bonus assignment, modify your range function to take an optional third argument
    that indicates the 'step' value used when building the array. If no step is given, the elements
    increment by one corresponding to the old behavior.
*/
function range(start, end, step) {
    let arr = [];
    if(step) {
        let i = start;
        if(step > 0) {
            while(i < end) {
                arr.push(i);
                i = i + step;
            }
        } else if(step < 0) {
            while(i >= end) {
                arr.push(i);
                i = i + step
            }
        }
    } else {
        for(let i = start; i <= end; i++) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}