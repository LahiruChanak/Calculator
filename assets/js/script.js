let currentInput = "";
let previousInput = "";
let operation = null;
let clearField = false;

const display = document.getElementById("result");
display.value = "0";

// Add event listeners to all buttons
document.querySelectorAll(".buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      inputNumber(button.textContent);
    } else if (button.classList.contains("operator")) {
      inputOperator(button.textContent);
    } else if (button.classList.contains("equals")) {
      calculate();
    } else if (button.classList.contains("decimal")) {
      inputDecimal();
    } else if (button.classList.contains("clear")) {
      clear();
    } else if (button.classList.contains("delete")) {
      deleteNumber();
    }
  });
});

function inputNumber(number) {
  if (clearField) {
    currentInput = number;
    clearField = false;
  } else {
    currentInput = currentInput === "0" ? number : currentInput + number;
  }
  updateDisplay();
}

function inputOperator(op) {
  if (operation !== null && currentInput) {
    calculate();
  }
  previousInput = currentInput || previousInput;
  operation = op;
  currentInput = "";
  clearField = false;
  updateDisplay();
}

function calculate() {
  if (!operation || !previousInput || !currentInput) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  result = Math.round(result * 1000000) / 1000000;
  previousInput = "";
  currentInput = result.toString();
  operation = null;
  clearField = true;
  updateDisplay();
}

function inputDecimal() {
  if (!currentInput.includes(".")) {
    currentInput = currentInput || "0";
    currentInput += ".";
    updateDisplay();
  }
}

function clear() {
  currentInput = "";
  previousInput = "";
  operation = null;
  clearField = false;
  updateDisplay();
}

function deleteNumber() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  if (previousInput && operation) {
    display.value = `${previousInput} ${operation} ${currentInput || ""}`;
  } else {
    display.value = currentInput || "0";
  }
}
