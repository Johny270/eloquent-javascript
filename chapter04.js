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

// Reversing an array
/*
    Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes
    an array as argument and produces a new array that has the same elements in the inverse order.
    The second, reverseArrayInPlace, does what reverse method does: it modifies the array given as
    argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr) {
    let newArr = [];
    for(let i = arr.length - 1; i >=0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    arr = reverseArray(arr);

    // another way perhaps less efficient;
    // count = 0;
    // let i = 0;
    // let j = arr.length - 1;
    // while(count < Math.floor(arr.length / 2)) {
    //     [arr[i], arr[j]] = [arr[j], arr[i]]
    //     i++;
    //     j--;
    //     count++;
    // }
    return arr;
}