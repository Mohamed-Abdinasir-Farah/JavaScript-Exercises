// Blocking code or Synchronous

function delaymessage() {
  alert("this message will be delayed");
  return "delayed message";
}

console.log("start delaying message");
const message = delaymessage();
console.log("user data", message);
console.log("this message is available");


console.log("------------------------------")

// Non-Blocking code or Asynchronous

function NonBlockingMessage(callback) {
  setTimeout(()=> {
    callback("Non blocking message")
  }, 2000)
}

console.log("fetching non blocking message");

NonBlockingMessage((message)=> {
  console.log(message)
});

console.log("this message is not delayed")




