// Async and Await
function fetchUserData() {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      const success = true;
      if (success) {
        resolve({id: "C1AF", name: "Mohamed", course: "Mathematics"})
      } else {
        reject("failed to fetch user data")
      }
    }, 2000);
  })
}

async function displayUserData() {
  try {
    const user = await fetchUserData();
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

displayUserData();