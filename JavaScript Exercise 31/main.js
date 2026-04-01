// GET REQUEST METHOD

async function fetchInfo() {
  try {
    console.log("Start Fetching User Info");

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error (`HTTP Error Occured! status: ${response.status}`)
    }

    const info = await response.json();
    console.log(info);

  } catch (error) {
    console.log(error)
  }
}

fetchInfo();

// POST REQUEST METHOD

async function postInfo() {
  try {
    console.log("Start Posting User Info");

    const reply = await fetch('https://jsonplaceholder.typicode.com/users', {
      method : "POST",
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({
        title : "User's Info",
        body : "This post contains detailed information about the users",
        userId : 1
      })
    });

    if (!reply.ok) {
      throw new Error (`HTTP Error Occured! status: ${reply.status}`)
    }

    const info = await reply.json();
    console.log(info);

  } catch (error) {
    console.log(error)
  }
}

postInfo();