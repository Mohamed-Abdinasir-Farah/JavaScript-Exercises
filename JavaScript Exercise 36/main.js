const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const removeColorHistoryButton = document.querySelector("#RemoveColorHistoryButton");

// INPUT EVENT waa mid kamid ah events ka ugu isticmaalka badan marka la sameenayo responsive waxaana loo yaqaana REAL TIME LISTENER waxaa uu kaga duwan yahay events ka kale sida click aya ah in ay events-kaas ay dhacaan marka uu user ku interaction sameeyo uu mar ka hore meel click dhaho xaga Input event ay samayso ama catches keystroke kasta, deletion iyo paste ba the moment it happens
colorPicker.addEventListener("input", function() {
  const chosenColor = colorPicker.value;
  colorPreview.style.backgroundColor = chosenColor;
  addColorToColorHistory(chosenColor);
});

function addColorToColorHistory(color) {
  const li = document.createElement('li');
  li.textContent = color;
  li.style.color = color;
  colorHistory.appendChild(li);
}

removeColorHistoryButton.addEventListener("click", function() {
  if(colorHistory.lastChild) {
    colorHistory.removeChild(colorHistory.lastChild)
  } else {
    alert("There is no more to remove")
  }
})