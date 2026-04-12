function changeImage() {
  const image = document.querySelector('#image');

  const url = prompt('enter your image link');
  image.setAttribute('src', url);

  const borderColor = prompt('enter your border color');
  image.style.border = `4px solid ${borderColor}`;

  const width = prompt('enter your width');
  image.style.width = `${width}px`;

  const height = prompt("enter your height");
  image.style.height = `${height}px`;

  const borderRadius = prompt('enter your border radius');
  image.style.borderRadius = `${borderRadius}px`
}