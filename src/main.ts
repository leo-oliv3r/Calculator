import { Calculator, Operator } from "./calculator";

const lastOperation = document.querySelector(".calculator__last-operation") as HTMLParagraphElement;
const currentOperation = document.querySelector(".calculator__current-operation") as HTMLParagraphElement;

const digitsBtns = document.querySelectorAll(".digits");
const operatorsBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector(".equals") as HTMLButtonElement;
const decimalPointBtn = document.querySelector(".decimal-point") as HTMLButtonElement;
const clearBtn = document.querySelector(".clear-one") as HTMLButtonElement;
const allClearBtn = document.querySelector(".allclear") as HTMLButtonElement;

let shouldClearScreen = false;

const calculator = new Calculator();

function clearScreen() {
    currentOperation.textContent = "";
    shouldClearScreen = false;
}

function appendNumberToDisplay(numberText: string) {
    if (currentOperation.textContent === "0" || shouldClearScreen) {
        clearScreen();
    }

    currentOperation.textContent += numberText;
}

function fullClear() {
    lastOperation.textContent = "";
    currentOperation.textContent = "0";
    calculator.setFirstOperand("");
    calculator.setSecondOperand("");
    calculator.setOperator(null);
}

function addDecimalPoint() {
    if (shouldClearScreen) clearScreen();
    if (currentOperation.textContent === "") {
        currentOperation.textContent = "0";
    }
    if (currentOperation.textContent?.includes(".")) return;

    currentOperation.textContent += ".";
}

function clearNumber() {
    currentOperation.textContent = currentOperation.textContent!.slice(0, -1);
}

function evaluate() {
    if (calculator.getOperator === null || shouldClearScreen || calculator.getFirstOperand() === "") {
        return;
    }

    const round = (number: number) => Math.round(number * 1000) / 1000;

    calculator.setSecondOperand(currentOperation.textContent!);

    let operationResult: number;

    try {
        operationResult = calculator.operate();
        currentOperation.textContent = `${round(operationResult)}`;
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
            return;
        }
    }

    lastOperation.textContent = `${calculator.getFirstOperand()} ${calculator.getOperator()} ${calculator.getSecondOperand()} =`;

    calculator.setOperator(null);
}

function setOperation(newOperator: Operator) {
    if (calculator.getOperator() !== null) {
        evaluate();
    }

    calculator.setFirstOperand(currentOperation.textContent!);

    calculator.setOperator(newOperator);

    lastOperation.textContent = `${calculator.getFirstOperand()} ${calculator.getOperator()}`;

    shouldClearScreen = true;
}

function handleKeyboardInput(e: KeyboardEvent) {
    if (Number(e.key) >= 0 && Number(e.key) <= 9) appendNumberToDisplay(e.key);
    if (e.key === ".") addDecimalPoint();
    if (e.key === "=" || e.key === "Enter") evaluate();
    if (e.key === "Backspace") clearNumber();
    if (e.key === "Escape") fullClear();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") setOperation(e.key);
}

digitsBtns.forEach((element) => {
    const btn = element as HTMLButtonElement;
    btn.addEventListener("click", () => appendNumberToDisplay(btn.textContent!));
});

operatorsBtns.forEach((element) => {
    const btn = element as HTMLButtonElement;
    btn.addEventListener("click", () => setOperation(btn.textContent as Operator));
});

window.addEventListener("keydown", handleKeyboardInput);
allClearBtn.addEventListener("click", fullClear);
clearBtn.addEventListener("click", clearNumber);
equalsBtn.addEventListener("click", evaluate);
decimalPointBtn.addEventListener("click", addDecimalPoint);
