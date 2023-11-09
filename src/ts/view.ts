let wipeScreenFlag = false;

const lastOperation = document.querySelector(".calculator__last-operation") as HTMLParagraphElement;
const currentOperation = document.querySelector(".calculator__current-operation") as HTMLParagraphElement;

const digitsBtns = document.querySelectorAll(".digits");
const operatorsBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector(".equals") as HTMLButtonElement;
const decimalPointBtn = document.querySelector(".decimal-point") as HTMLButtonElement;
const clearBtn = document.querySelector(".clear-one") as HTMLButtonElement;
const allClearBtn = document.querySelector(".allclear") as HTMLButtonElement;

function wipeScreen() {
    currentOperation.textContent = "";
    wipeScreenFlag = false;
}

function appendNumberToDisplay(numberText: string) {
    if (currentOperation.textContent === "0" || wipeScreen) {
        wipeScreen();
    }

    currentOperation.textContent += numberText;
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === ".") appendPoint();
    if (e.key === "=" || e.key === "Enter") evaluate();
    if (e.key === "Backspace") deleteNumber();
    if (e.key === "Escape") clear();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") setOperation(convertOperator(e.key));
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
