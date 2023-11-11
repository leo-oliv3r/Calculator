import { Calculator, DivideByZeroError } from "./calculator";

const lastOperation = document.querySelector(".calculator__last-operation") as HTMLParagraphElement;
const currentValue = document.querySelector(
    ".calculator__current-operation"
) as HTMLParagraphElement;

const digitsBtns = document.querySelectorAll(".digits");
const operatorsBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector(".equals") as HTMLButtonElement;
const decimalPointBtn = document.querySelector(".decimal-point") as HTMLButtonElement;
const clearBtn = document.querySelector(".clear-one") as HTMLButtonElement;
const allClearBtn = document.querySelector(".allclear") as HTMLButtonElement;

const calculator = new Calculator();

let shouldClearScreen = false;

function clearCurrentOperation() {
    currentValue.textContent = "";
    shouldClearScreen = false;
}

function appendNumberToDisplay(numberText: string) {
    if (currentValue.textContent === "0" || shouldClearScreen) {
        clearCurrentOperation();
    }

    if (currentValue.textContent!.length > 13) {
        return;
    }

    currentValue.textContent += numberText;
}

function addDecimalPoint() {
    if (shouldClearScreen) clearCurrentOperation();

    if (currentValue.textContent === "") {
        currentValue.textContent = "0";
    }

    // Just one decimal point allowed
    if (currentValue.textContent!.includes(".")) return;

    currentValue.textContent += ".";
}

function clearNumber() {
    currentValue.textContent = currentValue.textContent!.slice(0, -1);
}

function allClear() {
    lastOperation.textContent = "";
    currentValue.textContent = "0";
    calculator.setFirstOperand("");
    calculator.setSecondOperand("");
    calculator.setOperator("");
}

function setOperation(operatorTxt: string) {
    if (calculator.getOperator() !== "") {
        try {
            evaluate();
        } catch (error) {
            return;
        }
    }

    if (currentValue.textContent === "") {
        currentValue.textContent = "0";
    }

    calculator.setFirstOperand(currentValue.textContent!);
    calculator.setOperator(operatorTxt);
    lastOperation.textContent = `${calculator.getFirstOperand()} ${operatorTxt}`;
    shouldClearScreen = true;
}

function evaluate() {
    if (calculator.getOperator() === "" || shouldClearScreen) {
        return;
    }

    calculator.setSecondOperand(currentValue.textContent!);

    try {
        currentValue.textContent = `${calculator.calculate()}`;
    } catch (error) {
        if (error instanceof DivideByZeroError) {
            alert(error.message);
        }
        throw error;
    }

    lastOperation.textContent = `${calculator.getFirstOperand()} ${calculator.getSecondOperand()} ${calculator.getSecondOperand()} =`;
    calculator.setOperator("");
}

function handleKeyboardInput(keydown: KeyboardEvent) {
    if (Number(keydown.key) >= 0 && Number(keydown.key) <= 9) appendNumberToDisplay(keydown.key);
    if (keydown.key === ".") addDecimalPoint();
    if (keydown.key === "=" || keydown.key === "Enter") evaluate();
    if (keydown.key === "Backspace") clearNumber();
    if (keydown.key === "Escape") allClear();
    if (keydown.key === "+" || keydown.key === "-" || keydown.key === "*" || keydown.key === "/")
        setOperation(keydown.key);
}

window.addEventListener("keydown", handleKeyboardInput);
clearBtn.addEventListener("click", clearNumber);
allClearBtn.addEventListener("click", allClear);
decimalPointBtn.addEventListener("click", addDecimalPoint);
equalsBtn.addEventListener("click", evaluate);

digitsBtns.forEach((btn) => {
    btn = btn as HTMLButtonElement;
    btn.addEventListener("click", () => appendNumberToDisplay(btn.textContent!));
});

operatorsBtns.forEach((btn) => {
    btn = btn as HTMLButtonElement;
    btn.addEventListener("click", () => setOperation(btn.textContent!));
});
