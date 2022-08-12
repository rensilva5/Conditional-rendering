const result = document.getElementById('result')
const firstNumber = document.getElementById('firstNumber')
const secondnumber = document.getElementById('secondNumber')

const buttons = document.getElementsByClassName('operator')
console.log(buttons)
// result.innerText = 'hello';

const showResult = (value) => {
    result.innerHTML = `<b>${value}</b>`
}

// make sum

const sum = () => {
    let total = parseInt(firstNumber.value) + parseInt(secondnumber.value);
    showResult(total)
}

const substract = () => {
    let total = parseInt(firstNumber.value) - parseInt(secondnumber.value);
    showResult(total)
}

const multiply = () => {
    let total = parseInt(firstNumber.value) * parseInt(secondnumber.value);
    showResult(total)
}
