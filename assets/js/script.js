const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = null;
let continueCalculation = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (button.classList.contains("number")) {
      if (continueCalculation) {
        currentInput = buttonText;
        continueCalculation = false;
      } else {
        currentInput += buttonText;
      }
      result.value = currentInput;
    } else if (button.classList.contains("decimal")) {
      if (!currentInput.includes(".")) {
        currentInput += buttonText;
        result.value = currentInput;
      }
    } else if (button.classList.contains("operator")) {
      if (currentInput !== "" || result.value !== "") {
        if (continueCalculation) {
          firstValue = parseFloat(result.value);
          continueCalculation = false;
        } else {
          firstValue = parseFloat(currentInput || result.value);
        }
        operator = buttonText;
        currentInput = "";
        result.value = "";
      }
    } else if (button.classList.contains("equals")) {
      if (firstValue !== null && currentInput !== "") {
        const secondValue = parseFloat(currentInput);
        result.value = calculate(firstValue, operator, secondValue);

        firstValue = parseFloat(result.value);
        operator = "";
        currentInput = "";
        continueCalculation = true;
      }
    } else if (button.classList.contains("clear")) {
      result.value = ""; // AC
      currentInput = "";
      firstValue = null;
      continueCalculation = false;
    } else if (button.classList.contains("delete")) {
      currentInput = currentInput.slice(0, -1);
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
      return secondValue;
  }
}
