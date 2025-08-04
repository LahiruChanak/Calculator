class Calculator {
    constructor() {
        this.result = document.getElementById("result");
        this.buttons = document.querySelectorAll(".buttons button");
        this.themeToggle = document.getElementById("themeToggle");
        this.state = {
            currentInput: "",
            operator: "",
            firstValue: null,
            continueCalculation: false,
        };

        this.keyMap = {
            "0": "number",
            "1": "number",
            "2": "number",
            "3": "number",
            "4": "number",
            "5": "number",
            "6": "number",
            "7": "number",
            "8": "number",
            "9": "number",
            ".": "decimal",
            "+": "operator",
            "-": "operator",
            "*": "operator",
            "/": "operator",
            "=": "equals",
            Enter: "equals",
            Escape: "clear",
            Backspace: "delete",
            "t": "theme-toggle",
        };

        this.initEventListeners();
    }

    initEventListeners() {
        this.buttons.forEach((button) =>
            button.addEventListener("click", () => this.handleButtonClick(button))
        );
        this.themeToggle.addEventListener("click", () => this.toggleTheme());
        document.addEventListener("keydown", (e) => this.handleKeyPress(e));
    }

    handleKeyPress(event) {
        const key = event.key;
        const type = this.keyMap[key];

        if (!type) return;

        event.preventDefault();

        if (type === "theme-toggle") {
            this.toggleTheme();
            return;
        }

        // Find the button corresponding to the pressed key
        const button = Array.from(this.buttons).find(
            (btn) =>
                btn.textContent === key ||
                (key === "Enter" && btn.classList.contains("equals")) ||
                (key === "Escape" && btn.classList.contains("clear")) ||
                (key === "Backspace" && btn.classList.contains("delete"))
        );

        if (button) {
            button.click();
            button.classList.add("active");
            setTimeout(() => button.classList.remove("active"), 100);
        }
    }

    handleButtonClick(button) {
        const {classList, textContent} = button;

        if (classList.contains("number")) {
            this.handleNumber(textContent);
        } else if (classList.contains("decimal")) {
            this.handleDecimal();
        } else if (classList.contains("operator")) {
            this.handleOperator(textContent);
        } else if (classList.contains("equals")) {
            this.handleEquals();
        } else if (classList.contains("clear")) {
            this.handleClear();
        } else if (classList.contains("delete")) {
            this.handleDelete();
        }

        this.updateDisplay();
    }

    handleNumber(value) {
        if (this.state.continueCalculation) {
            this.state.currentInput = value;
            this.state.continueCalculation = false;
        } else {
            this.state.currentInput += value;
        }
    }

    handleDecimal() {
        if (!this.state.currentInput.includes(".")) {
            this.state.currentInput += ".";
        }
    }

    handleOperator(op) {
        if (this.state.currentInput || this.result.value) {
            this.state.firstValue = parseFloat(
                this.state.currentInput || this.result.value
            );
            this.state.operator = op;
            this.state.currentInput = "";
            this.state.continueCalculation = false;
        }
    }

    handleEquals() {
        if (
            this.state.firstValue !== null &&
            this.state.currentInput !== ""
        ) {
            const secondValue = parseFloat(this.state.currentInput);
            this.state.currentInput = this.calculate(
                this.state.firstValue,
                this.state.operator,
                secondValue
            ).toString();
            this.state.firstValue = parseFloat(this.state.currentInput);
            this.state.operator = "";
            this.state.continueCalculation = true;
        }
    }

    handleClear() {
        this.state = {
            currentInput: "",
            operator: "",
            firstValue: null,
            continueCalculation: false,
        };
    }

    handleDelete() {
        this.state.currentInput = this.state.currentInput.slice(0, -1);
    }

    calculate(first, op, second) {
        switch (op) {
            case "+":
                return first + second;
            case "-":
                return first - second;
            case "*":
                return first * second;
            case "/":
                return second !== 0 ? first / second : "Error";
            default:
                return second;
        }
    }

    updateDisplay() {
        this.result.value = this.state.currentInput || "";
    }

    toggleTheme() {
        const body = document.body;
        const isDark = body.dataset.theme === "dark";
        body.dataset.theme = isDark ? "light" : "dark";
        this.themeToggle.innerHTML = `<i class="hgi hgi-stroke hgi-${isDark ? "sun-03" : "moon-02"}"></i>`;
    }
}

new Calculator();