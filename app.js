//generator function
function getColor() {
  return "#" + Math.random()
    .toString(16)
    .slice(2, 8)
}


//sets background color
function setBackground() {
  let bgColor = getColor();
  document.body.style.background = bgColor;
}
setBackground();

//runs function on click
document.body.keyup() = function (e) {
  if (e.keycode == 32) {
    setBackground();
  }
}