function saveData(){
    console.log('data saved to database')
}

function debounce(functionToApply, afterTime){
    let timeout = 0;
    return function(...args){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            functionToApply(...args)
        },afterTime)
    }
}

let processChange = debounce(saveData, 500)

document.addEventListener('DOMContentLoaded',()=>{
    console.log('loaded')
})