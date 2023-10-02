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
}

darkBtn.addEventListener('click', () => {
  darkMode();

});

// adds functions to the operators
const add = (a, b) => {
  if(operator === '+') {
    return a + b;
  }
  else {
    return null;
  }
};

const subtract = (a, b) => {
  if(operator === '-') {
    return a - b;
  }
  else {
    return null;
  }
};

const multiply = (a, b) => {
  if(operator === '*') {
    return a * b;
  }
  else {
    return null;
  }
}

let randomResponses = () => {
  Math.floor(Math.random() * 6)
  const randomChoice = Math.floor(Math.random() * 9);
  switch (randomChoice) {
    case 0:
      display.textContent = `You can't divide by zero.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 1:
      display.textContent = `You should know that you can't divide by zero...`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 2:
      display.textContent = `Come on now, you know you can't divide by zero.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 3:
      display.textContent = `How many times have you tried dividing by zero?`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 4:
      display.textContent = `This is elementary-level math. You can't divide be zero.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 5:
      display.textContent = `You keep trying, but you'll never divide by zero.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 6:
      display.textContent = `Bruh`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 7:
      display.textContent = `This is getting ridiculous.`;
      num1 = '';
      inputBox.textContent = '';
    break;
    case 8:
      display.textContent = `I don't have an infinite number of responses you know!`;
      num1 = '';
      inputBox.textContent = '';
    break;
  };

}

const divide = (a, b) => {
  if(operator === '/') {
    if(a === 0 || b === 0) {
      randomResponses()
    }
    else {
      return a / b;
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
  display.textContent = '';
  inputBox.textContent = num2;
  num1 = num2;
});

// const operate = () => {
//   num1 = Number(num1);
//   num2 = Number(num2);
//   if(operator === '+') {
//     add(num2, num1);
//     num2 = num2.toString();
//     num1 = num1.toString();
//   }
//   else if(operator === '-') {
//     return subtract(num2, num1)
//   }
//   else if(operator === '*') {
//     return multiply(num2, num1)
//   }
//   else {
//     return divide(num2, num1)
//   }
// };

const operate = () => {
  num1 = Number(num1);
  num2 = Number(num2);
  if(operator === '+') {
    return add(num2, num1)
  }
  else if(operator === '-') {
    num2 -= num1;
  }
  else if(operator === '*') {
    num2 *= num1;
  }
  else {
    num2 /= num1;
  }
  num2 = num2.toString();
  num1 = num1.toString();
};