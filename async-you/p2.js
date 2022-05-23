const async = require('async')
const http = require('http')
var arguments = process.argv

var requestOne_function = (callback)=>{
    var body = ''
    http.get(arguments[2], (res)=>{
        res.on('data',(data)=>{
            body += data
        })
        res.on('end',()=>{
            callback(null, body)
        })
        res.on('error',(err)=>{
            callback(err)
        })
    })
}
var requestTwo_function = (callback)=>{
    var body = ''
    http.get(arguments[3], (res)=>{
        res.on('data',(data)=>{
            body += data
        })
        res.on('end',()=>{
            callback(null, body)
        })
        res.on('error',(err)=>{
            callback(err)
        })
    })
}

async.series({
    requestOne:requestOne_function,
    requestTwo:requestTwo_function,
},(err,result)=>{
    if(err){
        console.error(err)
    }else{
        console.log(result)
    }
})