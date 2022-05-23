var async = require('async')
const fs = require('fs')
var http = require('http')

const firstFunction = (callback)=>{
    fs.readFile(process.argv[2], (err,data)=>{
        if(err){
            callback(err)
        }else{
            callback(null, data.toString())
        }
    })
}

const secondFunction = (url, callback)=>{
    body = ''
    http.get(url, (res)=>{
        res.on('data', (chunk)=>{
            body += chunk
        })
        res.on('end',()=>{
            callback(null,body)
        })
        res.on('error',(err)=>{
            callback(err)
        })
    })
}

const final = (err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
}

async.waterfall([
    firstFunction,
    secondFunction
],final)