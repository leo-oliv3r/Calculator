import { Calculator } from "./calculator";

const lastOperation = document.querySelector(".calculator__last-operation") as HTMLParagraphElement;
const currentOperation = document.querySelector(".calculator__current-operation") as HTMLParagraphElement;

const digitsBtns = document.querySelectorAll(".digits");
const operatorsBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector(".equals") as HTMLButtonElement;
const decimalPointBtn = document.querySelector(".decimal-point") as HTMLButtonElement;
const clearBtn = document.querySelector(".clear-one") as HTMLButtonElement;
const allClearBtn = document.querySelector(".allclear") as HTMLButtonElement;

let clearScreenFlag = false;

const calculator = new Calculator();

function clearScreen() {
    currentOperation.textContent = "";
    clearScreenFlag = false;
}

function appendNumberToDisplay(numberText: string) {
    if (currentOperation.textContent === "0" || clearScreen) {
        clearScreen();
    }

    currentOperation.textContent += numberText;
}

function fullclear(params: type) {
    lastOperation.textContent = "";
    currentOperation.textContent = "0";
    calculator.setFirstOperand("");
    calculator.setSecondOperand("");
    calculator.setOperator(null);
}

function addDecimalPoint() {
    if (clearScreenFlag) clearScreen();
    if (currentOperation.textContent === "") {
        currentOperation.textContent = "0";
    }
    if (currentOperation.textContent?.includes(".")) return;

    currentOperation.textContent += ".";
}

function initDigitsListener() {
    const handleDigitClick = function (event: MouseEvent) {
        const digitBtn = event.target as HTMLButtonElement;
        currentOperation.textContent += digitBtn.textContent!;
    };

    digitsBtns.forEach((digitBtn) => {
        const btnElement = digitBtn as HTMLButtonElement;
        btnElement.addEventListener("click", handleDigitClick);
    });
}

export { initDigitsListener };
