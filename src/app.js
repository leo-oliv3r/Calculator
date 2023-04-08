const add = (num1, num2) => num1 + num2;

const subtraction = (num1, num2) => num1 - num2;

const multiplication = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

function operate(operator, firstOperand, secondOperand) {}

function main() {
  const operationArea = document.querySelector('.operation-area');
  const resultArea = document.querySelector('.result-area');

  const digitButtons = document.querySelectorAll('.digits');
  const decimalPoint = document.querySelector('.decimal');
  const operationDigits = document.querySelectorAll('.operators');
  const allClear = document.querySelector('.allclear');
  const clear = document.querySelector('.clear');

  allClear.addEventListener('click', () => {
    operationArea.textContent = '0';
    resultArea.textContent = '';
  });

  clear.addEventListener('click', () => {
    if (operationArea.textContent[1] === '.') {
      operationArea.textContent = operationArea.textContent.slice(1);
    }
    operationArea.textContent = operationArea.textContent.slice(1);
  });

  digitButtons.forEach(digitBtn => {
    digitBtn.addEventListener('click', () => {
      if (operationArea.textContent === '0') {
        operationArea.textContent = digitBtn.value;
      } else {
        operationArea.textContent += digitBtn.value;
      }
    });
  });

  decimalPoint.addEventListener('click', () => {
    if (!operationArea.textContent.includes('.') && operationArea.textContent) {
      operationArea.textContent += decimalPoint.value;
    }
  });
}

main();
