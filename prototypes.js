function test(){
    // console.log(this)
    this.name = 'vikash'
    this.gender = 'male'
}

var t = new test()
// t.age = 10

// test.prototype.age = 15

console.log(test.prototype)
console.log(t.__proto__)
console.log(t)

var proto = Object.getPrototypeOf(t)
console.log(proto)

console.log(t.age)

// test.prototype.age = 100    // doing this will make changes in the older objects as well
test.prototype = {age:100}  // doing this will dont change the values for older objects

var t1 = new test()
var t2 = new test()
// t.__proto__.age = 20
console.log(t1.age)
console.log(t2.age)
console.log(t.age)

test.prototype = {age:50}

t1.__proto__.subject = "maths"
// console.log(t1.__proto__)
t2.__proto__.school = "abd"

var t3 = new test()

console.log(t.__proto__ == test.prototype)  // false
console.log(t1.__proto__ == test.prototype) // true
console.log(t2.__proto__ == test.prototype) // true

console.log("printing proto")
console.log(t.__proto__)
console.log(t1.__proto__)
console.log(t2.__proto__)
console.log(t3.__proto__)
console.log(test.prototype)