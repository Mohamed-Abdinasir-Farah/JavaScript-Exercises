const list = document.querySelector('#list');

function addItem() {
  const newItem = document.createElement('li');
  newItem.textContent = "New List Item";
  list.appendChild(newItem);
}

function removeItem() {
  if(list.lastChild) {
    list.removeChild(list.lastChild)
  } else {
    alert("There is no more to remove")
  }
}