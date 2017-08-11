var displayBox = document.getElementById("display");

function toDisplay(x) {
    displayBox.value += x;
    if (x === "C") {
        displayBox.value = "";
  }
}

function backSpace() {
    var currentNum = displayBox.value;
    var numLength = currentNum.length - 1;
    var newNum = currentNum.substring(0, numLength);
    displayBox.value = newNum;
}

function percentageNum() {
    var x = displayBox.value;
    displayBox.value = x / 100;
}

function radicalNum() {
    var x = displayBox.value;
    displayBox.value = Math.sqrt(x);
}

function squareNum() {
    var x = displayBox.value;
    displayBox.value = x * x;
}

function cubeNum() {
    var x = displayBox.value;
    displayBox.value = x * x * x;
}

function fractionNum() {
    var x = displayBox.value;
    displayBox.value = 1 / x;
}

function equateAnswer() {
    var x = displayBox.value;
    x = eval(x);
    displayBox.value = x;
}
