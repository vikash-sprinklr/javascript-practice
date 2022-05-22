const onFullfilled = (data)=>{
    console.log(data)
}

var p1 = first()
var p2 = p1.then((data)=>{
    return second(data)
})
.then(onFullfilled)