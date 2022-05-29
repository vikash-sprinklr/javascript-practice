
function makeCurry(){
    let total = 0   // this value will hold the total sum 

    return function curry(current){

        // if no argument is passed, then current will be undefined
        if(current == undefined){   
            return total
        }
        else{                       // if there is an argument passed, add it to total sum
            total += current
            return function temp(num){
                return curry(num)
            }
        }
    }
}

var curried = makeCurry()
console.log(curried(1)(4)(5)(6)())
// console.log(curried(4))
// console.log(curried(4))
module.exports = makeCurry