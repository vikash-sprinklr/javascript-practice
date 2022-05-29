// const temp = {
//     x:10,
//     getX(){
//         return this.x
//     },
//     changeX(){
//         this.x = 55
//         console.log("-> ", this.x)
//     }
// }

// const temp2 = {
//     x:100
// }

// // const t2 = new temp
// // t2.x = 100
// // console.log(t2)
// // console.log(temp)

// const t1 = temp.getX.bind(temp2)
// console.log(t1())
// t1.x = 000;
// temp.changeX.bind(temp2)()
// console.log(t1())
// console.log(temp)
// console.log(temp2)

// // bind can also modify objects that it is using

const info = {
    name:"vikash",
    age:12
}

function display(city, country){
    console.log(this.name, this.age, city, country)
}

// const a = display.apply(info, ['delhi', 'india'])
// console.log(a)

const a = display.bind(info,'delhi', 'india')()
console.log(a)
console.log(typeof a)
// a('india')
// const b = a.bind('india')
// console.log(typeof b)
// b()

// difference between apply, call and bind
// both take the this value to be applied
// call and apply invoke the function immediately and dont return another function
// bind method returns a function that has to be explicity called