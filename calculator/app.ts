const number1 = document.getElementById("num1") as HTMLInputElement;
const number2 = document.getElementById("num2") as HTMLInputElement;

const AddBtn = document.getElementById("Add") as HTMLButtonElement;
const SubBtn = document.getElementById("Sub") as HTMLButtonElement;
const MulBtn = document.getElementById("Mult") as HTMLButtonElement;
const DivBtn = document.getElementById("Divide") as HTMLButtonElement;

const printResult = document.getElementById("result") as HTMLOutputElement;

function addNumber() {
  let a = parseFloat(number1.value);
  let b = parseFloat(number2.value);

  let result = a + b;
  printResult.textContent = result.toString();
}

AddBtn.addEventListener("click", addNumber);

function subtractNumber() {
  let a = parseFloat(number1.value);
  let b = parseFloat(number2.value);

  let result = a - b;
  printResult.textContent = result.toString();
}

SubBtn.addEventListener("click", subtractNumber);

function multiplyNumber() {
  let a = parseFloat(number1.value);
  let b = parseFloat(number2.value);

  let result = a * b;
  printResult.textContent = result.toString();
}

MulBtn.addEventListener("click", multiplyNumber);

function deivedeNumber() {
  let a = parseFloat(number1.value);
  let b = parseFloat(number2.value);

  let result = a / b;
}
