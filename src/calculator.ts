export type Operator = "+" | "-" | "*" | "/" | "%" | null;

export class Calculator {
    private firstOperand = "";
    private secondOperand = "";
    private operator: Operator = null;

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

    getOperator() {
        return this.operator;
    }

    getFirstOperand() {
        return this.firstOperand;
    }

    getSecondOperand() {
        return this.secondOperand;
    }

    setFirstOperand(operand: string) {
        this.firstOperand = operand;
    }

    setSecondOperand(operand: string) {
        this.secondOperand = operand;
    }

    setOperator(newOperator: Operator) {
        this.operator = newOperator;
    }

    operate(): number {
        const n1 = Number(this.firstOperand);
        const n2 = Number(this.secondOperand);
        switch (this.operator) {
            case "+":
                return this.add(n1, n2);
            case "-":
                return this.substract(n1, n2);
            case "*":
                return this.multiply(n1, n2);
            case "/":
                return this.divide(n1, n2);
            case "%":
                return this.modulus(n1, n2);
            default:
                return 0;
        }
    }
}
