/**
 * note :
 * 1. dapatkan hasil semuanya dari operasi, tampilkan diatas hasil. (✔)
 * 2. apabila operator diklik lebih dari satu kali maka hasilnya akan error.
 * 3. fungsi percent belum dibuat (✔)
 * 4. error pada function percent ketika penambahan result2 (line: 151) (✔)
 */

let prevNumber = '', calculationOperator = '', currentNumber = '0', finalResult = '';

const calculatorScreenTop = document.querySelector(".calc-result > .result2");

const updateScreenTop = (result) => {
    return calculatorScreenTop.value = result;
}

const displayUpdateScreenTop = () => {
    return `${prevNumber} ${calculationOperator} ${currentNumber}`;
}

const calculatorScreen = document.querySelector(".calc-result > .result1");

const updateScreen = (number) => {
    return calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

const inputNumber = (number) => {
    return (currentNumber === '0') ? currentNumber = number : currentNumber += number;
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operand) => {
    operand.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operand) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }

    prevNumber = currentNumber;
    calculationOperator = operand;
    currentNumber = '';
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    showHistory();
    updateScreen(finalResult);
    updateScreenTop(displayUpdateScreenTop());
})

const calculate = () => {
    let result = 0;
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
    }
    return finalResult = result.toString();
}

const showHistory = () => {
    document.querySelector(".result1").style.height = "50%";
}

const allClear = document.querySelector(".all-clear");

allClear.addEventListener("click", () => {
    clear()
    updateScreen(currentNumber);
    updateScreenTop('');
})

const clear = () => {
    prevNumber = '', calculationOperator = '', currentNumber = '0';
}

const dcml = document.querySelector(".decimal");

dcml.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }

    currentNumber += dot;
}

const prevClear = document.querySelector(".prevClear");

prevClear.addEventListener("click", () => {
    clearBackOne();
    updateScreen(currentNumber);
})

const clearBackOne = () => {
    currentNumberArr = currentNumber.split('');
    currentNumberArr.pop();
    return currentNumber = currentNumberArr.join('');
}

const plusMinus = document.querySelector(".plus-minus-sign");

plusMinus.addEventListener("click", () => {
    toPlusOrMinus();
    updateScreen(currentNumber);
})

const toPlusOrMinus = () => {
    if (currentNumber === '0') {
        return currentNumber;
    } else {
        currentNumberArr = currentNumber.split('');
        if (currentNumberArr.includes("-")) {
            currentNumberArr.shift();
        } else {
            currentNumberArr.unshift("-");
        }
        return currentNumber = currentNumberArr.join('');
    }
}

// 4 ----
const percent = document.querySelector(".percent");

percent.addEventListener("click", () => {
    updateScreen(toPercent(toUpdateDisplayPercent()));
})


const toUpdateDisplayPercent = () => {
    if (currentNumber === '0') {
        return currentNumber;
    } else {
        currentNumberArr = currentNumber.split('');
        if (currentNumberArr.includes("%")) {
            currentNumberArr.pop();
        } else {
            currentNumberArr.push("%");
        }


        currentNumber = currentNumberArr.join('');

        return currentNumber;
    }
}

const toPercent = (a) => {
    if (prevNumber === '') {
        a = parseFloat(a) / 100;
    } else {
        currentNumberArr = a.split('');
        if (currentNumberArr.includes("%")) {
            currentNumberArr.pop();
            a = currentNumberArr.join('');
            a = parseFloat(prevNumber) * parseFloat(a) / 100;
        }
    }

    currentNumber = a.toString();
    return currentNumber;
}
// ----->

// play sound effect
let getSound = document.querySelectorAll(".btn");

getSound.forEach((sound) => {
    sound.addEventListener("click", () => {
        myPlay();
    })
})

function myPlay() {
    let audio = new Audio("./asset/sound/button-1.wav");
    audio.volume = 0.5;
    return audio.play();
}