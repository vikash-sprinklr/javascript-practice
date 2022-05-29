function baseFunction(a,b,c){
    // console.log(baseFunction.length)
    // console.log(args)
    // console.log(typeof args)
    // var arr = [...arguments]
    // console.log(arguments.length)
    return a + b + c
}

function curryFunction(baseFunc){
    function curryIncomplete(...args){

        if(args.length >= baseFunc.length){

            // if we have got more than or equal to the required number
            // of arguments
            // do the computation and return the value
            
            return baseFunc(...arguments);
        }
        else{

            // apply the given number of arguments
            // and return a new function which has these arguments 
            // already applied

            return function partialArgumentsApplied(...args2){
                return curryIncomplete(...args.concat(args2))
            }
            
        }
    }

    return curryIncomplete
}

// console.log(baseFunction(1,2,3,4,5))
// console.log(baseFunction.length)

let curried = curryFunction(baseFunction)
console.log("sum = ", curried(1,2,3))
console.log("sum = ", curried(1)(2,3))
console.log("sum = ", curried(1,2)(3))
console.log("sum = ", curried(1)(2)(3))
console.log("sum = ", curried(1)(2)(3))
// console.log("sum = ", curried(1)(2)(3))