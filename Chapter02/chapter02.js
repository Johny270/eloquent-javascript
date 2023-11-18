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