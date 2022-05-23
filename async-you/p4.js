const async = require('async')
const http = require('http')
var arguments = process.argv

async.map([arguments[2], arguments[3]], (item, callback)=>{
    var body = ''
    http.get(item,(res)=>{
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
},(err,result)=>{
    if(err){
        console.error(err)
    }else{
        console.log(result)
    }
})