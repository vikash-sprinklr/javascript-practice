const fakePeople = [
    { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
    { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
    { name: 'Harold', hasPets: true, currentTemp: 98.3 },
  ]
  
  const fakeAPICall = (i) => {
    const returnTime = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
      if (i >= 0 && i < fakePeople.length) {
        setTimeout(() => resolve(fakePeople[i]), returnTime);
      } else {
        reject({ message: "index out of range" });
      }
    });
  };
  
  function getAllData() {
    // CODE GOES HERE
    var promiseArray = [0,1,2].map((ele)=>{
      return fakeAPICall(ele)
    })
    
    var data = Promise.all(promiseArray).then((valueArray)=>{
      console.log(valueArray)
      return valueArray
    })
    
    // console.log(data)
  }
getAllData()