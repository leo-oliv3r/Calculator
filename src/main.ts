import { Calculator } from "./calculator";

const lastOperation = document.querySelector(".calculator__last-operation") as HTMLParagraphElement;
const currentOperation = document.querySelector(".calculator__current-operation") as HTMLParagraphElement;

const digitsBtns = document.querySelectorAll(".digits");
const operatorsBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector(".equals") as HTMLButtonElement;
const decimalPointBtn = document.querySelector(".decimal-point") as HTMLButtonElement;
const clearBtn = document.querySelector(".clear-one") as HTMLButtonElement;
const allClearBtn = document.querySelector(".allclear") as HTMLButtonElement;

const calculator = new Calculator();

function resetCurrentOperationDisplay() {
    currentOperation.textContent = "0";
}

function appendNumberToDisplay(numberText: string) {
    if (currentOperation.textContent === "0") {
        currentOperation.textContent = "";
    }

    if (currentOperation.textContent!.length > 13) {
        return;
    }

    currentOperation.textContent += numberText;
}

function addDecimalPoint() {
    if (currentOperation.textContent === "") {
        currentOperation.textContent = "0";
    }

    // Just one decimal point allowed
    if (currentOperation.textContent!.includes(".")) return;

    currentOperation.textContent += ".";
}

function clearNumber() {
    currentOperation.textContent = currentOperation.textContent!.slice(0, -1);
}

function fullClear() {
    lastOperation.textContent = "";
    currentOperation.textContent = "0";
    calculator.setFirstOperand("");
    calculator.setSecondOperand("");
    calculator.setOperator("");
}

// let isFirstOperation = true;
// function operate(operator: string) {
//     if (currentOperation.textContent === "") resetCurrentOperationDisplay();

//     if (isFirstOperation) {
//         calculator.setOperator(operator);
//         calculator.setFirstOperand(currentOperation.textContent!);
//         lastOperation.textContent = `${calculator.getFirstOperand()} ${operator}`;
//         resetCurrentOperationDisplay();
//         isFirstOperation = false;
//         return;
//     }
// }

// function evaluate() {
//     if (calculator.getOperator === null) {
//         return;
//     }

//     calculator.setSecondOperand(currentOperation.textContent!);

//     let operationResult: number;

//     try {
//         operationResult = calculator.calculate();
//         currentOperation.textContent = `${round(operationResult)}`;
//     } catch (error) {
//         if (error instanceof Error) {
//             alert(error.message);
//             return;
//         }
//     }

//     lastOperation.textContent = `${calculator.getFirstOperand()} ${calculator.getOperator()} ${calculator.getSecondOperand()} =`;

//     calculator.setOperator(null);
// }

clearBtn.addEventListener("click", clearNumber);
allClearBtn.addEventListener("click", fullClear);
decimalPointBtn.addEventListener("click", addDecimalPoint);


