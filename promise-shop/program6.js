var promise1 = Promise.resolve('accepted')

var promise2 = Promise.reject('rejected')

promise1.then((d)=>{console.log(d)})
promise2.then((d)=>{console.log(d)}).catch((err)=>{
    console.log(err)
})

// console.log('MAIN PROGRAM')
