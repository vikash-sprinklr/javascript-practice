var promise = new Promise((resolve, reject)=>{
    resolve('PROMISE VALUE')
})

promise.then((d)=>{console.log(d)})

console.log('MAIN PROGRAM')
