// const { reject } = require("async")

let stack = []
let queue = []

// functions to execute

function multiply(a,b){
    // synchronous function

    // stack.push(multiply)
    return a * b
}

function add(a,b){
    // synchronous function

    // stack.push(multiply)
    return a + b
}

function timer(){
    // asynchronous

    // lets suppose this function again invokes 
    // a synchronous function
    // then that function will be pushed on to the stack
    stack.push(multiply)

    // queue.push(timer)
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve('1s complete')
        },5000)
    })
    
}

function handlePromise(){
    // asynchronous

    // queue.push(handlePromise)
    return new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/users/1').
        then(res=>res.json())
        .then((data)=>{
            resolve(data)
        })
    })
    // let result = await fetch('https://jsonplaceholder.typicode.com/users/1').then(res=>res.json())
    // console.log(result)
}

// let a = handlePromise().then((res)=>{
//     console.log(res)
// })
// console.log(a)

stack.push(multiply)
stack.push(add)
queue.push(timer)
queue.push(handlePromise)

async function eventLoop(){
    while(stack.length > 0 && queue.length > 0){
        while(stack.length > 0){

            let currentFunctionToExecute = stack[0]
            stack.shift()

            console.log("from stack = ", currentFunctionToExecute(3,4))
        }

        while(queue.length > 0){
            let currentFunctionToExecute = queue[0]
            queue.shift()

            let result = await currentFunctionToExecute()
            console.log("from queue = ", result)

            if(stack.length > 0)
                break
        }
    }
}

eventLoop()