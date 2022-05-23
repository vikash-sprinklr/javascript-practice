const async = require('async')
const http = require('http')
var arguments = process.argv

async.each([arguments[2], arguments[3]], (item, callback)=>{
    http.get(item,(res)=>{
        es.on('data',(data)=>{
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
    }
})