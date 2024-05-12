var number1 = document.getElementById("num1");
var printButton = document.getElementById("printBtn");
var printValue = document.getElementById("enteredNumber");
function printEnterValue() {
    var numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}
printButton.addEventListener("click", printEnterValue);
