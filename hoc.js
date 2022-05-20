function multiplyBy2(num){
    return num * 2
}

function add(num){
    return num + 1
}

function divide(num){
    return num/2;
}

// functions that take another function as their argument or return a function are known as higher order functions
function manipulate(arr, op){
    // console.log(op)
    output = []
    for(i of arr){
        output.push(op(i))
    }
    return output
}

arr = [2,3,4]
var result = manipulate(arr, multiplyBy2)
console.log(result)
var result = manipulate(arr, add)
console.log(result)
var result = manipulate(arr, divide)
console.log(result)

// anonymous functions
// (input) => return input * 2
// we can pass this function/piece of code as an argument to a higher order function
// it is NOT going to execute at the time of declaring it
// it will run only when invoked inside the HOC

// example
// when we run Map(arr, (ele)=>{
//     .....
// })

// we are basically passing an anonymous function to the HOC named as 'map'.
// inside the function, the map will iterate the array and execute whatever code 
// we have passed as argument to each element and return a new array to us.
    