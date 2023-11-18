/*------------------------------------------------ EXERCISES -------------------------------------------------*/

// Looping a triangle
/*
    Write a loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    ####### 
*/

let i = 7
let item = '#'
console.log(item)
while (item.length < i) {
    item += '#'
    console.log(item)
}

// FizzBuzz
/*
    Write a program that console.log to print all the numbers from 1 to 100,
    with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
    and for numbers divisible by 5 (and not 3), print "Buzz" instead.
    Bor numbers divisible by both 3 and 5 print "FizzBuzz".
*/

for(let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}