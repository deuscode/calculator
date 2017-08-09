var displayBox = document.getElementById("display");

function toDisplay(x) {
  displayBox.value += x;
  if (x === "C") {
    displayBox.value = "";
  }
}

function squareNum() {
  var x = displayBox.value;
  displayBox.value = x * x;
}

function cubeNum() {
  var x = displayBox.value;
  displayBox.value = x * x * x;
}

function fractionNum() {}

function equateAnswer() {
  var x = displayBox.value;
  x = eval(x);
  displayBox.value = x;
}
