// Fetching API data

async function fetchData() {
  console.log("fetching user data");

  const resply = await fetch('data.json');
  const data = await resply.json();

  console.log("Reply", data);
}
fetchData();