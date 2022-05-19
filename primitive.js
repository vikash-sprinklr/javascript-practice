// list of primitive types

// undefined
// string
// number
// boolean
// object
// symbol

v = Symbol()
console.log(typeof v)
// console.log( v)

v = function(){} //function is a sub type of object type
console.log(v)
console.log(typeof v)

// conversion
s1 = "vikash";
s2 = 10
s3 = s1 + s2
console.log(s3)
console.log(typeof s3)

s4 = "100"
console.log(Number(s4))
console.log(s4.value)

console.log(typeof !s4)