var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('FULFILLED!')
        reject(new Error('REJECTED!'))
    },300)
})

function onReject(error){
    console.log(error.message)
}

promise
.then((data)=>{
    console.log('')
},onReject)