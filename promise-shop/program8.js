const attachTitle = (data) => {
    return 'DR. ' + data
}

var pr = new Promise((res)=>{
    res('MANHATTAN')
})

pr.then(attachTitle)
.then((val)=>{
    console.log(val)
})