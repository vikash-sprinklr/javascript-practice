function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {

       const isItValid = (ele)=>{
           console.log(ele)
           return goodUsers.some((obj)=>obj.id == ele.id)
        // return true
       }
        
        var result = submittedUsers.every(isItValid)
        return result
    };
  }

//   var goodUsers = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 }
//   ]
//   var testAllValid = checkUsersValid(goodUsers)
    
//   console.log(testAllValid([
//     { id: 2 },
//     {id:4},
//     { id: 1 }
//   ]))
  
module.exports = checkUsersValid