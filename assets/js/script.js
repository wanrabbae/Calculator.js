const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}

function updateDisplayNumber() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearNumber() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('clear')) {
            clearNumber();
            updateDisplayNumber();
            return;
        }

        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplayNumber();
            return;
        }
        if (target.classList.contains('equals')) {
            performCalculation();
            updateDisplayNumber();
            return;
        }
        if (target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }

        inputDigit(target.innerText);
        updateDisplayNumber();
    });
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        calculator.displayNumber = '0';
    } else {
        alert('Wahh!! Operator sudah di masukan!');
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        aler("Anda belum memasukan operator!");
        return;
    }

    let result = 0;

    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if (calculator.operator === "x") {
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
    } else if (calculator.operator === "/") {
        result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}