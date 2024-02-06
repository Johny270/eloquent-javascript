const SCRIPTS = require('./scripts');

//Filtering Arrays
// Find the scripts that are still in use
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
	// The function instead of deleting elements from the initial array creates a new one with only those
	// elements that pass the test. It is said it is 'pure', for not modifying the initial array.
}
console.log(filter(SCRIPTS, (script) => script.living));

// Using built-in Js filter method
console.log(SCRIPTS.filter((s) => s.direction == 'ttb'));

// Transforming with map
// The map method transforms an array by applying a function to all of its
// elements and building a new array from the returned values.
function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction == 'rtl');
console.log(map(rtlScripts, (s) => s.name));

// Summarizing with Reduce
    // Reduce combine all the elements in an array into a single value
function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}
// if the array has at least one element, we can omit the start argument
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log([1, 2, 3, 4].reduce((a, b) => a + b));

// Finding the writing system with the most characters
function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}
console.log(
	SCRIPTS.reduce((a, b) => {
		return characterCount(a) < characterCount(b) ? b : a;
	})
);

// Determine the average year of origin for living and dead scripts
function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}
// Living scripts
console.log(
	Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);

// Dead Scripts
console.log(
	Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);

// Strings and Character Codes
// Determining what script a piece of text is using
function characterScript(code) {
	for (let script of SCRIPTS) {
		if (
			script.ranges.some(([from, to]) => {
				// some takes a test function and tells you whether that
				return code >= from && code < to; // function returns true for any of the array's elements.
			})
		) {
			return script;
		}
	}
	return null;
}
console.log(characterScript(121));

// Recognizing Text
// Count the characters that belong to each script
function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex((c) => c.name == name);
		if (known == -1) {
			counts.push({ name, count: 1 });
		} else {
			counts[known].count++;
		}
	}
	return counts;
}
console.log(countBy([1, 2, 3, 4, 5, 6], (n) => n > 2));
// -> [{name: false, count: 2}, {name: true, count: 3}]
// since 1 and 2 are less than 2, they make a count of 2 and return fale, the contrary can be said for the rest.
