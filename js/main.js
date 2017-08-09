var displayBox = document.getElementById('display');

function toDisplay(x) {
    displayBox.value += x;
    if (x === 'C') {
        displayBox.value = '';
    }
}

function equateAnswer() {
    x = displayBox.value;
    x = eval(x);
    displayBox.value = x;  
}