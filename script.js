let answer;
let a = 2;
let b = 4;
let firstNumber;
let secondNumber;
let operator;
let getNumbers = [];

const one = document.querySelector('.one');
one.addEventListener('click', () => {
    getNumbers.push(1);
    display.textContent = getNumbers.join('');
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    getNumbers.push(2);
    display.textContent = getNumbers.join('');
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    getNumbers.push(3);
    display.textContent = getNumbers.join('');
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
    getNumbers.push(4);
    display.textContent = getNumbers.join('');
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
    getNumbers.push(5);
    display.textContent = getNumbers.join('');
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
    getNumbers.push(6);
    display.textContent = getNumbers.join('');
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    getNumbers.push(7);
    display.textContent = getNumbers.join('');
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    getNumbers.push(8);
    display.textContent = getNumbers.join('');
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    getNumbers.push(9);
    display.textContent = getNumbers.join('');
});

const display = document.querySelector('.display');
display.textContent = getNumbers;

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate () {
    if (operator === addition) {
        add(firstNumber, secondNumber);
    } else if (operator === subtraction) {
        subtract(firstNumber, secondNumber);
    } else if (operator === multiplication) {
        multiply(firstNumber, secondNumber);
    } else if (operator === division) {
        divide(firstNumber, secondNumber);
    }
}

add();
subtract();
multiply();
divide();

console.log(add(a,b))