
function swap (a,b){

    let temp = ''

    temp = a
    a = b
    b = temp

    console.log(`after Swapping a :${a}`)
    console.log(`after Swapping b :${b}`)
}

var a = 15
var b = 25

console.log(swap(a,b));