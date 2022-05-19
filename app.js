console.log("hi there")

function check(){
    setTimeout(()=>{
        console.log("from loop")
    },0)
}
check()
console.log("end")