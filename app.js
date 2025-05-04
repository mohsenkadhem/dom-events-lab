/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let input = ''; 

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
    input = '';
    display.textContent = '';
    return;
  }

  if (value === '=') {
    try {
      const result = eval(input);
      display.textContent = result;
      input = result.toString();
    } catch (e) {
      display.textContent = 'Error';
      input = '';
    }
    return;
  }

  input += value;
  display.textContent = input;
});