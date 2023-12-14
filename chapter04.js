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

// A List
/*
    Write a function arrayToList that builds up alist structure like the one shown when given
    [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list.
    Then add a helper function prepend, which takes an element and a list and creates a new list that adds
    the element to the front of the input list, and nth, which takes a list and a number and returns the element
    at the given position in the list (with zero referring to the first element) or undefined when there is no 
    such element.

    Also write a recursive version of nth.
*/
function arrayToList(arr) {
    let list = null;
    for(let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for(let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(value, list) {
    return {value, rest: list};
}

function nth(list, n) {
    if(!list) return undefined;
    else if(n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

// Deep Comparison
/*
    Write a function deepEqual that takes two values and return true only if
    they are the same value or are objects with the same properties, where the values
    or the properties are equal when compared with a recursive call to deeEqual.

    To find out whether values should be compared directly (use the  === operator for that)
    or have their properties compared, you can use the typeof operator.
    If it produces object for both values, you should do a deep comparison.
    But you have to take one silly exception into account: because of a historical
    accident, typeof null also produces object.
    The Object.keys function will be useful when you need to go over the properties of objects
    to compare them.
*/
function deepEqual(val1, val2) {
    if(val1 === val2) return true;

    if(val1 == null || typeof val1 != "object" || val2 == null || typeof val2 != "object") return false;

    let keysVal1 = Object.keys(val1), keysVal2 = Object.keys(val2);

    if(keysVal1.length != keysVal2.length) return false;

    for(let key of keysVal1) {
        if(!keysVal2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
    }
    
    return true;
}