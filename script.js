let answer;
let a = 2;
let b = 4;

function add () {
    answer = a + b;
    console.log('add' + answer);
    return answer;
}

function subtract () {
    answer = a - b;
    console.log('subtract' + answer);
    return answer;
}

function multiply () {
    answer = a * b;
    console.log('multiply' + answer);
    return answer;
}

function divide () {
    answer = a / b;
    console.log('divide' + answer);
    return answer;
}

function operate () {
    if ('user selected add') {
        add(firstNumber, secondNumber);
    } else if ('user selected subtract') {
        subtract(firstNumber, secondNumber)
    } else if ('user selected multiply') {
        multiply(firstNumber, secondNumber);
    } else if ('user selected divide') {
        divide(firstNumber, secondNumber);
    }
}

add();
subtract();
multiply();
divide();

