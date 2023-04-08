const add = (num1, num2) => num1 + num2;

const subtraction = (num1, num2) => num1 - num2;

const multiplication = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

const modulus = (num1, num2) => num1 % num2;

function operate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtraction(num1, num2);
    case 'x':
      return multiplication(num1, num2);
    case '/':
      return division(num1, num2);
    case '%':
      return modulus(num1, num2);
    default:
      return null;
  }
}

function main() {
  const operationArea = document.querySelector('.operation-area');
  const digitButtons = document.querySelectorAll('.digits');
  const operationDigits = document.querySelectorAll('.operators');
  const decimalPoint = document.querySelector('.decimal');
  const allClear = document.querySelector('.allclear');
  const clear = document.querySelector('.clear');
  const equalsBtn = document.querySelector('.equals');

  allClear.addEventListener('click', () => {
    operationArea.textContent = '0';
  });

  clear.addEventListener('click', () => {
    operationArea.textContent = operationArea.textContent.slice(0, -1);
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

  operationDigits.forEach(operationBtn => {
    operationBtn.addEventListener('click', () => {
      const regex = /[+\-x/%]/;
      // * search() return -1 if no match is found //
      if (
        operationArea.textContent.search(regex) === -1 ||
        operationArea.textContent.startsWith('-')
      ) {
        operationArea.textContent += operationBtn.value;
      }
    });
  });

  equalsBtn.addEventListener('click', () => {
    let expression = operationArea.textContent;
    let isNegative = false;
    if (expression.startsWith('-')) {
      expression = expression.slice(1);
      isNegative = true;
    }

    const regex = /[+\-x/%]/;
    const index = expression.search(regex);
    // * search() return -1 if no match is found //
    if (index !== -1) {
      const operator = expression[index];
      const arr = expression.split(operator);
      
      let firstOperand = arr[0];
      if (isNegative) {
        firstOperand = `-${firstOperand}`;
      }
      firstOperand = Number(firstOperand);
      const secondOperand = Number(arr[1]);

      const result = operate(firstOperand, secondOperand, operator);
      operationArea.textContent = result;
    }
  });
}

main();
