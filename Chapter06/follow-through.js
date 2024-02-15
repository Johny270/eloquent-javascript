// ENCAPSULATION
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
// Output - The white rabbit says 'Oh my ears and whiskers, how late it's getting!
hungryRabbit.speak("I could use a carrot right now.");
// Output - The hungry rabbit says 'I Could use a carrot right now.'

speak.call(hungryRabbit, "Burp!") // Output - The hungry rabbit says 'Burp!'

// Arrow functions do not bind their own 'this' but can see the 'this' binding
// of scope around them.
function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5}); // -> [0, 0.4, 0.6]

// - You can use Object.create to create an object with a specific protopype.
let protoRabbit = {
    speak(line) {
        console.log(`"The ${this.type} rabbit says '${line}'`);
    }
};
// speak(line) is an object expression shorthand way of defining a method.
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!"); // - The killer rabbit says 'SKREEEEE!'
// - We say that killer rabbit derives shared properties from its prototype, proto rabbit

// - What a constructor function does
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird"); // - the 'new' keyword infront of a function call tells a constructor
// - Constructors and all functions get a property named prototype which holds a plain, empty object that you
// - can override with a new object. Or you can add properties to the existing object




//  CLASS NOTATION
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer"); // - Create a new instance of the Rabbit class
let blackRabbit = new Rabbit("black");

    // - class expression
let object = new class { getWord() { return "hello"; } }
console.log(object.getWord()); // -> hello

// - Overriding derived properties
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth); // -> small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth); // -> long, sharp, and bloody



// MAPS
let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
};
console.log(`Julia is ${ages["Julia"]}`);
// -> Julia is 62
console.log("Is Jack's age known?", "Jack" in ages)
// -> Is Jack's age known? false
console.log("Is toSting's age known?", "toString" in ages);
// -> Is toSting's age known? true

// - Plain object not derived from Object.prototype
console.log("toString" in Object.create(null));
// -> false

// - using Map
let ages2 = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages2.get("Julia")}`);
// -> Julia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
console.log(ages2.has("toString"));
// -> false

// - Object.Keys returns only an object's own keys.
console.log({x: 1}.hasOwnProperty("x")); 
// -> true
console.log({x: 1}.hasOwnProperty("toString")); // - hasOwnProperty ignores plain object object's prototype
// -> true


// POLYMORPHISM
Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));
// -> a black rabbit