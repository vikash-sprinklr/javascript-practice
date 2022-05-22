var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('I FIRED')
        reject(new Error('I DID NOT FIRE!'))
    },300)
})

const onReject = (err)=>{
    console.log(err.message)
}

const onAccept = (data)=>{
    console.log(data)
}

promise.then(onAccept, onReject)