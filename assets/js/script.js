const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (button.classList.contains("number")) {
      if (operator && currentInput !== "") {
        currentInput = "";
      }
      currentInput += buttonText;
      result.value = currentInput;
    } else if (button.classList.contains("decimal")) {
      if (!currentInput.includes(".")) {
        currentInput += buttonText;
        result.value = currentInput;
      }
    } else if (button.classList.contains("operator")) {
      if (currentInput !== "") {
        firstValue = parseFloat(currentInput);
        operator = buttonText;
        currentInput = "";
        result.value = "";
      }
    } else if (button.classList.contains("equals")) {
      if (firstValue !== null && currentInput !== "") {
        const secondValue = parseFloat(currentInput);
        result.value = calculate(firstValue, operator, secondValue);

        firstValue = null;
        operator = "";
        currentInput = "";
      }
    } else if (button.classList.contains("clear")) {
      result.value = ""; // AC
      currentInput = "";
      firstValue = null;
      operator = "";
    } else if (button.classList.contains("delete")) {
      currentInput = currentInput.slice(0, -1); // Backspace
      result.value = currentInput;
    }
  });
});

function calculate(firstValue, operator, secondValue) {
  switch (operator) {
    case "+":
      return firstValue + secondValue;
    case "-":
      return firstValue - secondValue;
    case "*":
      return firstValue * secondValue;
    case "/":
      return firstValue / secondValue;
    default:
      return 0;
  }
}
