let answer;
let a = 2;
let b = 4;
let firstNumber;
let secondNumber;
let operator = [];
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

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
    getNumbers.push(0);
    display.textContent = getNumbers.join('');
});

const addition = document.querySelector('.add');
addition.addEventListener('click', () => {
    if (operator[0] === 'addition') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('addition');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'subtraction') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('addition');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'multiplication') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('addition');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'division') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('addition');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else {
        operator.push('addition');
        firstNumber = parseInt(getNumbers.join(''));
        getNumbers = [];
    }
});

const subtraction = document.querySelector('.subtract');
subtraction.addEventListener('click', () => {
    if (operator[0] === 'addition') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('subtraction');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'subtraction') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('subtraction');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'multiplication') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('subtraction');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'division') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('subtraction');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else {
        operator.push('subtraction');
        firstNumber = parseInt(getNumbers.join(''));
        getNumbers = [];
    }
});

const multiplication = document.querySelector('.x');
multiplication.addEventListener('click', () => {
    if (operator[0] === 'addition') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('multiplication');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'subtraction') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('multiplication');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'multiplication') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('multiplication');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'division') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('multiplication');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else {
        operator.push('multiplication');
        firstNumber = parseInt(getNumbers.join(''));
        getNumbers = [];
    }
});

const division = document.querySelector('.divide');
division.addEventListener('click', () => {
    if (operator[0] === 'addition') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('division');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'subtraction') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('division');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'multiplication') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('division');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else if (operator[0] === 'division') {
        secondNumber = parseInt(getNumbers.join(''));
        operate();
        operator = [];
        operator.push('division');
        firstNumber = parseInt(getNumbers.join(''))
        getNumbers = [];
    } else {
        operator.push('division');
        firstNumber = parseInt(getNumbers.join(''));
        getNumbers = [];
    }
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', ()=> {
    secondNumber = parseInt(getNumbers.join(''));
    operate();
    operator = [];
})

let result;

function add (a,b) {
    result = (a + b);
    getNumbers = [result];
    display.textContent = getNumbers;
}

function subtract (a,b) {
    result = (a - b);
    getNumbers = [result];
    display.textContent = getNumbers;
}

function multiply (a,b) {
    result = (a * b);
    getNumbers = [result];
    display.textContent = getNumbers;
}

function divide (a,b) {
    result = (a / b);
    getNumbers = [result];
    display.textContent = getNumbers;
}

const display = document.querySelector('.display');
display.textContent = getNumbers;

function operate () {
    if (operator[0] === 'addition') {
        add(firstNumber, secondNumber);
    } else if (operator[0] === 'subtraction') {
        subtract(firstNumber, secondNumber);
    } else if (operator[0] === 'multiplication') {
        multiply(firstNumber, secondNumber);
    } else if (operator[0] === 'division') {
        divide(firstNumber, secondNumber);
    }
}

