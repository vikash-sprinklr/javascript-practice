// import axios from 'axios';
let url = 'https://jsonplaceholder.typicode.com/users/1'
function temp(){
    axios({
        method:'get',
        url:url,
        timeout:1000
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}

temp()