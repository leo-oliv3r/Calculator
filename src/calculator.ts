export class Calculator {
    private firstOperand = 0;
    private secondOperand = 0;
    private operator: string = "";

    private add(a: number, b: number) {
        return a + b;
    }

    private substract(a: number, b: number) {
        return a - b;
    }

    private multiply(a: number, b: number) {
        return a * b;
    }

    private divide(a: number, b: number) {
        if (b === 0) {
            throw new Error("Cannot divide by 0");
        }
        return a / b;
    }

    private modulus(a: number, b: number) {
        return a % b;
    }

    private round = (number: number) => Math.round(number * 1000) / 1000;

    getOperator() {
        return this.operator;
    }

    getFirstOperand() {
        return this.firstOperand;
    }

    getSecondOperand() {
        return this.secondOperand;
    }

    setFirstOperand(operandTxt: string) {
        this.firstOperand = Number(operandTxt);
    }

    setSecondOperand(operandTxt: string) {
        this.secondOperand = Number(operandTxt);
    }

    setOperator(operatorTxt: string) {
        if (operatorTxt === "&divide;") {
            operatorTxt = "/";
        }

        if (operatorTxt === "&times;") {
            operatorTxt = "*";
        }

        this.operator = operatorTxt;
    }

    calculate(): number {
        const n1 = Number(this.firstOperand);
        const n2 = Number(this.secondOperand);
        switch (this.operator) {
            case "+":
                return this.round(this.add(n1, n2));
            case "-":
                return this.round(this.substract(n1, n2));
            case "*":
                return this.round(this.multiply(n1, n2));
            case "/":
                return this.round(this.divide(n1, n2));
            case "%":
                return this.round(this.modulus(n1, n2));
            default:
                return 0;
        }
    }
}
