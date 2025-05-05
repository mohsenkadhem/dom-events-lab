/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let secondNumber = '';
let operation = '';
let result = '';

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', function(event) {
  const clickedElement = event.target;

  if (!clickedElement.classList.contains('button')) return;

  console.log(event.target.innerText);

  const value = clickedElement.innerText;

  /*-------------------------------- Functions --------------------------------*/
  if (value === 'C') {
    firstNumber = '';
    secondNumber = '';
    operation = '';
    result = '';
    display.textContent = '';
    return;
  }

  if (value === '=' && firstNumber && secondNumber && operation) {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (operation === '+') {
      result = num1 + num2;
    } else if (operation === '-') {
      result = num1 - num2;
    } else if (operation === '*') {
      result = num1 * num2;
    } else if (operation === '/') {
      result = num1 / num2;
    }

    display.textContent = result;
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
    return;
  }

  if (['+', '-', '*', '/'].includes(value)) {
    if (firstNumber) {
      operation = value;
    }
    return;
  }

  if (!operation) {
    firstNumber += value;
    display.textContent = firstNumber;
  } else {
    secondNumber += value;
    display.textContent = secondNumber;
  }
});
