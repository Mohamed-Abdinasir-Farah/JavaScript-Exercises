const people = [
  {name : "Mohamed", age : 30, city: "Addis-Ababa"},
  {name : "Kalid", age : 27, city: "New York"},
  {name : "Omar", age : 25, city: "Paris"}
];

console.log("Properties and values");
for (const person of people) {
  for (const key in person) {
    console.log(key + ": " + person[key])
  }
  console.log("---")
}
