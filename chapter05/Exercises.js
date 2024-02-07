// Flattening
/*
    Use the reduce method in combination with the concat method to "flatten"
    an array of arrays into a single array that has all the elements of the original array
*/
function flattening(arr) {
	return arr.reduce((a, b) => a.concat(b));
}

// Your Own Loop
/*
    Write a higher-order function loop that provides something like a for loop
    statement. It takes a value, a test function, an update function, and a body
    function. Each iteration, it first runs the test function on the current loop
    value and stops if that returns false. Then it calls the body function, giving 
    it the current value. Finally, it calls the update function to create
    a new value and starts from the beginning.

    When defining the function, you can use a regular loop to do the actual looping
*/
function ownLoop(value, test, body, update) {
	for(let value = start; test(value); value = update(value)) {
        body(value);
    }
}

// Everything
/*
    Analogous to the some method, arrays also have an every method. This one
    returns true when the given function returns true for every element in the array.
    In a way, some is a version of the || operator that acts on arrays, and every
    is like the && operator.

    Implement every as a function that takes an array and a predicate function
    as parameters. Write two versions, one using a loop and one using the some
    method.
*/

function every(arr, test) {
	let valid = true;
	arr.forEach((itm) => console.log(test(itm)));
	// arr.forEach(itm => {
	//     if(!test(item)) valid = false;
	// })
	// return valid;
}
every([1, 2, 3], (item) => (typeof item === 'number' ? true : false)); // version#1 with a loop
// every([1, 2, 3], (item) => typeof number === 'number');

function every2(arr, test) {
    return !arr.some(itm => !test(itm))
}



// Dominant Writing Direction
/*
    Write a function that computes the dominant writing direction in a string of text. 
    Remember that each script object has a direction property that can be "ltr",  "rtl"
    or "ttb". The dominant direction is the direction of the majority of the characters
    that have a script associated with them.
*/
