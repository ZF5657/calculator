const display = document.querySelector(".showNum");
const inputBox = document.querySelector(".inputBox");
const clearInput = document.querySelector(".clearInput");
const clearAllBtn = document.querySelector(".clearAll");
const backBtn = document.querySelector(".backspace");
const operators = document.querySelectorAll('.op');
const numbers = document.querySelectorAll('.number');
const equalBtn = document.querySelector('.equals');
const darkBtn = document.querySelector('.dark');

const darkMode = () => {
  document.body.classList.toggle('dark-theme');
  if(darkBtn.textContent = 'Dark Mode') {
    darkBtn.textContent = 'Light Mode';
  }
  else {
    darkBtn.textContent = 'Dark Mode';
  }
}

darkBtn.addEventListener('click', () => {
  darkMode();

});

// adds functions to the operators
const add = (a, operator, b) => {
  if(operator === '+') {
    solution = a + b;
    return solution
  }
  else {
    return null;
  }
};

const subtract = (a, operator, b) => {
  if(operator === '-') {
    solution = a - b;
    return solution
  }
  else {
    return null;
  }
};

const multiply = (a, operator, b) => {
  if(operator === '*') {
    solution = a * b;
    return solution
  }
  else {
    return null;
  }
}

const divide = (a, operator, b) => {
  if(operator === '/') {
    if(a === 0 || b === 0) {
      display.textContent = 'You cannot divide by zero!'
      return null;
    }
    else {
      let solution = a / b;
      return solution;
    }
  }
  else {
    return null;
  }
};

// const sqrRoot = (a, operator) => {
//   if(operator === '√x') {
//  
// ***** NEEDS FUNCTION *****  
//
//     return solution;
//   }
//   else {
//     return null
//   }
// }

let num1 = '';
let num2 = '';

const numInput = (val) => {
  num1 += val;
};

numbers.forEach((number) => number.addEventListener('click', (e) => {
    numInput(e.target.textContent);
    inputBox.textContent = num1;
}));

//adds a clear all function to the "C" button
clearAllBtn.addEventListener('click', () => {
  inputBox.textContent = '';
  display.textContent = '';
  num1 = '';
  num2 = '';
  operator = '';
});

//adds function to the clearInput button by clearing out the text content and num1
//num1 is also clears so that it is not saved when resubmitting another number after clicking "CE"
clearInput.addEventListener('click', () => {
  inputBox.textContent = '';
  num1 = '';
});

const opProcessor = (op) => {
    operator = op;
    num2 = num1;
    num1 = '';
};

operators.forEach((op) => {
    op.addEventListener('click', (e) => {
      opProcessor(e.target.textContent)
      display.textContent = num2 + " " + operator;
      inputBox.textContent = '';
        
    })
    
});

equalBtn.addEventListener('click', () => {
  operate()
  inputBox.textContent = '';
  if (operator === '/'){
  }
  else {
    display.textContent = num2 + ` ` + operator + ` ` + num1 + ` ` + `= ` + solution;
    display.style = ('font-weight: bold');
  }
  num1='';
});

const operate = () => {
  num1 = Number(num1);
  num2 = Number(num2);
  if(operator === '+') {
    return add(num2, '+', num1)
  }
  else if(operator === '-') {
    return subtract(num2, '-', num1)
  }
  else if(operator === '*') {
    return multiply(num2, '*', num1)
  }
  else if(operator === '/') {
    return divide(num2, '/', num1)
  }
};