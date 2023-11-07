type Operator = "+" | "-" | "*" | "/" | "%";

export class Calculator {
    private firstOperand: number;
    private secondOperand: number;
    private result: number;
    private currentOperator: Operator;

    constructor() {
        this.firstOperand = 0;
        this.secondOperand = 0;
        this.result = 0;
        this.currentOperator = "+";
    }

    setFirstOperand(value: string) {
        this.firstOperand = Number(value);
    }

    setSecondOperand(value: string) {
        this.secondOperand = Number(value);
    }
}
