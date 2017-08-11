var displayBox = document.getElementById("display");

// send button inputs to calculator display
// clear function when pressing 'C'
function toDisplay(x) {
    displayBox.value += x;
    if (x === "C") {
        displayBox.value = "";
  }
}

// delete one character from the display on the right
function backSpace() {
    var currentNum = displayBox.value;
    var numLength = currentNum.length - 1;
    var newNum = currentNum.substring(0, numLength);
    displayBox.value = newNum;
}

// find percentage of current number on display
function percentageNum() {
    var x = displayBox.value;
    displayBox.value = x / 100;
}

// find square root of current number on display
function radicalNum() {
    var x = displayBox.value;
    displayBox.value = Math.sqrt(x);
}

// square the current number on display
function squareNum() {
    var x = displayBox.value;
    displayBox.value = x * x;
}

// cube the current number on display
function cubeNum() {
    var x = displayBox.value;
    displayBox.value = x * x * x;
}

// find the fraction of the current number on display
function fractionNum() {
    var x = displayBox.value;
    displayBox.value = 1 / x;
}

// find the answer to the current problem
function equateAnswer() {
    var x = displayBox.value;
    x = eval(x);
    displayBox.value = x;
}
