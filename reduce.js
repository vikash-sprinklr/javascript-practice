arr = [1,2,3,4,5,6]

var r = arr.reduce((total,num)=>{
    total += num;
    return total
},10)
console.log(r)

const add = (n1, n2)=>{
    console.log("n1 = ", n1, " n2 = ", n2)
    return n1 + n2;
}

const gt2 = (num)=>num > 2;

r = arr.filter(gt2).reduce(add,0)
console.log(r)
// console.log(arr)

// another example
const multiplyBy2 = (num) => num*2
const add3 = (num) => num+3
const divideBy5 = (num) => num/5;

var startValue = 11
inst = [multiplyBy2, add3, divideBy5]

var output = inst.reduce((total, currentValue)=>{
    console.log(currentValue, total)
    total = currentValue(total)
    return total
},startValue)

console.log(output)

