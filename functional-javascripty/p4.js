function getShortMessages(messages) {
    var result = []
    result = messages.filter((ele)=>{
        return ele.message.length < 50
    })
    .map((ele)=>{
        return ele.message
    })

    return result
  }
  
  module.exports = getShortMessages