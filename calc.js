
const display = document.getElementById('display');


function appendValue(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}


function calculateResult() {
    try {
        // Use eval for simple calculation
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}
