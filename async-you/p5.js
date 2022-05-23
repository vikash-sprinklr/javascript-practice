const async = require('async')
const http = require('http')
var arguments = process.argv

var hostname = arguments[2]
var port = arguments[3]

var postReq = (id, callback)=>{
    var options = {
        host:hostname, 
        port:port,
        method:'POST',
        path:'/users/create'
    }

    var req = http.request(options, (res)=>{
        res.on('end',()=>{
            callback()
        })

        res.on(()=>{

        })

        // res.on('error',(err)=>{
        //     callback(err)
        // })
    })

    req.on('error', callback)

    req.write(JSON.stringify({
        "user_id":id
    }))

    req.end()
}

const postFunction = (callback)=>{
    async.times(5, (num, next)=>{
        postReq(num+1, (err)=>{
            console.log(num)
            if(err){
                callback(err)
            }else{
                next(err)
            }
        })
    },(err)=>{
        if(err){
            callback(err)
        }
        else{
            callback(null)
        }
        
    })
}

const getReq = (callback)=>{
    var url = 'http://' + hostname + ':' + port;
    var body = ''
        http.get(url + '/users',(res)=>{
            res.on('data',(data)=>{
                body += data.toString()
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
    post:postFunction,
    get:getReq
},(err,result)=>{
    if(err){
        console.error(err)
    }else{
        console.log(result.get)
    }
})