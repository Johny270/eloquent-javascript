// Higher Order Functions
    // Abstraction
        /*
            Abstractions hide details and give us the ability to talk about problems
            at a higher level. It can be seen as concealing or wrapping the steps to perform an 
            action inside a function and speaking about the task in terms of the function that
            performs them rather than the actions themselves
        */

// Summing a range of number withou abstraction
let total = 0, count = 1;
while(count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

// With abstraction
console.log(sum(range(1, 10)));

// Doin something a given number of times
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// With abstraction
function repeatLog(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}

    // Higher-Order Functions
        /*
            Functions that operate on other functions, either by taking them as arguments or by returnning
            them, are called higher-order functions.
        */  
// Functions changing other functions
function noisy(f) {
    return (...args) => {
        console.log("Calling with", args);
        let result = f(...args);
        console.log("Called with", args, ", returned", result);
        return result;
    }
}

// Providing new types of control flow
function unless(test, then) {
    if(!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    })
    // then() being a function value implemented on the spot: () => {}
    // output
    // -> 0 is even
    // -> 2 is even
    // Since the rest of dividing those value by 2 isn't 1, the condition is verified and then gets executed.
})