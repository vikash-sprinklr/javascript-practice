
function foo (){
    var bar
    function zip(){
        bar = true
    }

    return zip
}
var a = foo()