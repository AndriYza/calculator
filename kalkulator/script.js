const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
//fungsi yang mengambil element html di code javascript
numbers.forEach((number) => {
//foreach untuk mendapatkan angka dari contant "numbers"
    number.addEventListener("click", (event) => {
      // event clik ke setiap element
        inputNumber(event.target.value)
     // memperbaharui layar pada tampilan kalkulator
        updateScreen(currentNumber)
    })
})
// varialble pada semua oparator
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
// if statment untuk penyelesaian saat 0 di klik lebih dulu
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
// menjalankan fungsi dari input operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
// menjalankan fungsi dari operasi kalkulator
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}
// fungsi tombol sama-degan = saat di klik dan memperbaharui layar
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
// fungsi clear All saat selesai melakukan operasi kalkulator
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const persen = document.querySelector (".percentage")

persen.addEventListener ("click", (event) => {
    inputPersen(event.target.value)
    updateScreen(currentNumber)
})

const inputPersen = () => {
    currentNumber /= 100
}
