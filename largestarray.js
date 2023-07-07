
var arr = [39 , 62, 26, 56, 32, 52, 89, 32]

var largest = 0

for(let i =0 ; i<arr.length ; i++){
    if(arr[i]>largest){
        largest = arr[i]
    }
}

console.log(largest);