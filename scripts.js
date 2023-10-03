const display = document.querySelector(".showNum");
const inputBox = document.querySelector(".inputBox");
const clearInput = document.querySelector(".clearInput");
const clearAllBtn = document.querySelector(".clearAll");
const backBtn = document.querySelector(".backspace");
const operators = document.querySelectorAll('.op');
const numbers = document.querySelectorAll('.number');
const equalBtn = document.querySelector('.equals');
const darkBtn = document.querySelector('.dark');

// Darkmode toggle function
const darkMode = () => {
  document.body.classList.toggle('dark-theme');
}

// Darkmodebutton calling toggle function when clicked
darkBtn.addEventListener('click', () => {
  darkMode();
});

let num1 = '';
let num2 = '';
let solution = '';
let operator = '';

// Adds functions to the operators
const add = (a, b) => {
  if(operator === '+') {
    solution = a + b;
    return solution;
  }
  else {
    return null;
  }
};

const subtract = (a, b) => {
  if(operator === '-') {
    solution = a - b;
    return solution;
  }
  else {
    return null;
  }
};

const multiply = (a, b) => {
  if(operator === '*') {
    solution = a * b;
    return solution;
  }
  else {
    return null;
  }
}

// Random responses when user tries to divide zero
let randomResponses = () => {
  display.style = ('font-size: medium');
  const randomChoice = Math.floor(Math.random() * 9);
  switch (randomChoice) {
    case 0:
      return `You can't divide by zero.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 1:
      return `You should know that you can't divide by zero...`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 2:
      return `Come on now, you know you can't divide by zero.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 3:
      return `How many times have you tried dividing by zero?`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 4:
      return `This is elementary-level math. You can't divide be zero.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 5:
      return`You keep trying, but you'll never divide by zero.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 6:
      return `Bruh`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 7:
      return `This is getting ridiculous.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 8:
      return `I don't have an infinite number of responses you know!`;
      num1 = '';
      inputBox.textContent = '';

    break;
  };
}

const divide = (a, b) => {
  if(operator === '/') {
    if(a === 0 || b === 0) {
      solution = randomResponses();
      return solution;
    }
    else {
      solution = a / b;
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

// const squared = (a, operator) => {
//   if(operator === 'x²') {
//  
// ***** NEEDS FUNCTION *****  
//
//     return solution;
//   }
//   else {
//     return null
//   }
// }

// const squared = (a, operator) => {
//   if(operator === '%') {
//  
// ***** NEEDS FUNCTION *****  
//
//     return solution;
//   }
//   else {
//     return null
//   }
// }

// Function to append each button clicked
const numInput = (val) => {
  num1 += val;
};

// Adds the numInput value(s) into inputBox as textContent
numbers.forEach((number) => number.addEventListener('click', (e) => {
    numInput(e.target.textContent);
    inputBox.textContent = num1;
}));

// Adds a clear all function to the "C" button
clearAllBtn.addEventListener('click', () => {
  inputBox.textContent = '';
  display.textContent = '';
  num1 = '';
  num2 = '';
  operator = '';
});

// Adds function to the clearInput button by clearing out the text content and num1
// num1 is also clears so that it is not saved when resubmitting another number after clicking "CE"
clearInput.addEventListener('click', () => {
  inputBox.textContent = '';
  num1 = '';
});

// Function to block the operator symbol from displaying before a number has been clicked
const displayInput = () => {
  if(num1 === '' && num2 === '') {
    return null
  }
  else {
    display.textContent = num2 + " " + operator;
  }
}

// Sets operator to op for other functions; transfers num1 to num2 and then makes num1 blank
const opProcessor = (op) => {
    operator = op;
    num2 = num1;
    num1 = '';
};

// Each operator clicked will pop up in the display with the first number of the equation
operators.forEach((op) => {
    op.addEventListener('click', (e) => {
      opProcessor(e.target.textContent)
      displayInput()
      inputBox.textContent = '';
    })
    
});

equalBtn.addEventListener('click', () => {
  operate()
  display.textContent = solution;
  inputBox.textContent = '';
  num1 = '';
});

const operate = () => {
  num1 = Number(num1);
  num2 = Number(num2);
  if(operator === '+') {
    return add(num2, num1);
  }
  else if(operator === '-') {
    return subtract(num2, num1);
  }
  else if(operator === '*') {
    return multiply(num2, num1);
  }
  else {
    return divide(num2, num1);
  }
};