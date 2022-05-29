// const { default: async } = require("async")

let controller = new AbortController
let signal = controller.signal

let url = 'https://jsonplaceholder.typicode.com/users/1'

console.log(signal.aborted)
// signal.aborted = true
// controller.abort()
// console.log(signal)

async function getData(){
    try{
        // console.log('here')
        let result1 = await fetch(url, {signal})
        console.log(result1)
        controller.abort()
        let data = await result1.json()
        console.log(data)
    }catch(err){
        console.log(err.message)
    }
}

console.log(signal.aborted)

getData()
// controller.abort()