const add = (num1, num2) => num1 + num2;

const subtraction = (num1, num2) => num1 - num2;

const multiplication = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
  switch (operator) {
    case 'add':
      return add(num1, num2);
    case 'subtraction':
      return subtraction(num1, num2);
    case 'multiplication':
      return multiplication(num1, num2);
    case 'division':
      return division(num1, num2);
      default:
        return null;
  }
};

function main() {
  let firstOperand, operator, secondOperand;
}
