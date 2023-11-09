type Operator = "+" | "-" | "*" | "/" | "%" | null;

export class Calculator {
    private firstOperand = 0;

    private secondOperand = 0;

    private currentOperation: Operator = null;

    private sToInt(s: string) {
        return Number(s);
    }

    operate(num1: number, num2: number, operator: Operator): number {

        



        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
            case "%":
                return num1 % num2;
            default:
                throw new Error("Invalid operator");
        }
    }
}
