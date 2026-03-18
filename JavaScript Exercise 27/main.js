// Promise

function fetchUserData() {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      const success = false;
      if (success) {
        resolve({id: "C1AF", name: "Mohamed", course: "Mathematics"})
      } else {
        reject("failed to fetch user data")
      }
    }, 2000);
  })
}

fetchUserData()
  .then((data)=> console.log("user data", data))
  .catch((error)=> console.log(error));