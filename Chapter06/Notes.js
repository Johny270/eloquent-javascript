/*
    "An abstract data type is realized by writing a special kind of program 
    which defines the type in terms of the operations which can be performed
    on it."
*/

/* The Core Idea
    // The core idea in OOP is to divide programs into smaller pieces
    // and make each piece responsible for managing its own state.
*/

// Interfaces: Limited sets of functions or bindings that provide useful
    // - functionality at a more abstract level, hiding their precise implementation.

// Encapsulation: Separating interface from implementation.

// Methods - properties that hold function values.
let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive."); // Output - The rabbit says 'I'm alive.'

/*
    The this parameter in a method body automatically points at 
    the object that it was called on. We can also pass it explicitly using
    the 'call' function's method, which takes "this" value as its first
    argument.
    
    speak.call(hungryRabbit, "Burp!") - this value here is hungryRabbit.
*/

// Prototypes : Another object that is used as a fallback source of properties.

// Classes - define the shape of a type of object, what methods and properties it has.

// Class Notation - JavaScript classes are constructor functions with a prototype property.

// Maps
/*
    plain objects derive from Object.prototype and thus take all its properties.
    using plain objects as maps is dangerous. 

    It is possible to create objects with no prototype, by passing "null" to Object.create
    Also object property names must be strings. But by using the Map class, it stores a mapping
    and allows any type of keys (The Map class)
*/

// Polymorphism
/*
    When a piece of code is written to work with objects that have a certain interface, any
    kind of object that happens to support this interface can be plugged into the code, and it
    will just work.
*/