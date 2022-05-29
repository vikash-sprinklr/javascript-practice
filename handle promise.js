
const url = 'https://jsonplaceholder.typicode.com/users/1'


async function handle(url){
    try {
        const res = await fetch(url)
        const data = await res.json()
        return [data, null]
    } catch (err) {
        return [null, err.message]
    }
}


// implement in promise

async function answer(){
    const result = await handle(url)
    console.log(result)
    console.log("data = ", result[0])
    console.log("error = ", result[1])
}

answer()