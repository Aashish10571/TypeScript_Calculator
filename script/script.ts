let dispResult = document.getElementById('result') as HTMLHeadingElement;
let dispFormula = document.getElementById('formula') as HTMLSpanElement;

let formula: string = '';
let result: string = '';

let prevNumber: number = 0;
let operator: string = '';

let isCalculate: boolean = true;

function clearScreen() {
    dispFormula.textContent = '';
    dispResult.textContent = '';
    prevNumber = 0;
    formula = '';
    result = '';
    isCalculate = true;
}

function deleteLast() {
    if (result !== '') {
        result = result.slice(0, -1);
    } else {
        result = formula.slice(0, -1);
        formula = '';
        operator = '';
        dispFormula.textContent = formula;
        isCalculate = false;
    }
    dispResult.textContent = result;
}

function appendValue(val: string) {
    if (val === '%' || val === '/' || val === '*' || val === '+' || val === '-') {
        if (result != '') {
            if (prevNumber === 0) {
                prevNumber = +result;
            } else if (!isCalculate) {
                prevNumber = +result;
            }
            else {
                prevNumber = findCalculation();
            }
            operator = val;
            formula = prevNumber + val;
            dispFormula.textContent = formula;
            result = '';
            dispResult.textContent = result;
            isCalculate = true;
        }
    } else if (val === '.') {
        if (result === '') {
            result = '0' + val;
            dispResult.textContent = result;
        }
        if (!result.includes('.')) {
            result += val;
            dispResult.textContent = result;
        }
    } else {
        result += val;
        dispResult.textContent = result;
    }
}

function findCalculation(): number {
    let num: number = +result;

    switch (operator) {
        case '%':
            return +(prevNumber % num).toFixed(2);
            break;

        case '/':
            return +(prevNumber / num).toFixed(2);
            break;

        case '*':
            return +(prevNumber * num).toFixed(2);
            break;

        case '+':
            return +(prevNumber + num).toFixed(2);
            break;

        case '-':
            return +(prevNumber - num).toFixed(2);
            break;
    }

    return 0;
}

function calculate() {
   if (isCalculate) {
        if (prevNumber != 0) {
            prevNumber = findCalculation();
            dispFormula.textContent += result;
            result = prevNumber.toString();
            dispResult.textContent = result;
        } else {
            if (result == '') {
                dispFormula.textContent = '0';
                dispResult.textContent = '0';
            } else if (result.endsWith('.')) {
                result = result.slice(0, -1);
                dispFormula.textContent = result;
                dispResult.textContent = result;
        } else {
            if (formula.length === 0) {
                dispFormula.textContent = result;
                dispResult.textContent = result;
            }
        }
    }
    isCalculate = false;
   }
}
