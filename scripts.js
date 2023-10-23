document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector('.showNum');
  const inputBox = document.querySelector('.inputBox');
  const clearInput = document.querySelector('.clearInput');
  const clearAllBtn = document.querySelector('.clearAll');
  const backBtn = document.querySelector('.backspace');
  const operators = document.querySelectorAll('.op');
  const numbers = document.querySelectorAll('.number');
  const equalBtn = document.querySelector('.equals');
  const retroBtn = document.querySelector('.retro');
  const posNeg = document.querySelector('.posNeg');
  const decimal = document.querySelector('#decimal');
  
  // Retro mode toggle function
  const retroMode = () => {
    document.body.classList.toggle('retro-theme');
  }
  
  // retroBtn calling toggle function when clicked
  retroBtn.addEventListener('click', () => {
    retroMode()
  });
  
  inputBox.textContent = 0
  let num1 = '';
  let num2 = '';
  let solution = '';
  let operator = '';
  let numClicked = false;
  
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
  };

  const divide = (a, b) => {
    if(operator === '/') {
      if(a === 0 || b === 0) {
        display.style = ('font-size: medium');
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

  const sqrRoot = (a) => {
    if(operator === '√x') {
      solution = Math.sqrt(a)
      return solution;
    }
    else {
      return null
    }
  };

  const exponent = (a, b) => {
    if(operator === 'xⁿ') {
      solution = Math.pow(a, b)
      return solution
    }
    else {
      return null
    }
  };

  const percent = (a, b) => {
    if(operator === '%') {
      solution = a / 100
      return solution;
    }
    else {
      return null
    }
  };

  // Function to append each button clicked
  const numInput = (val) => {
    num1 += val;
  };

  // Adds the numInput value(s) into inputBox as textContent
  numbers.forEach((number) => number.addEventListener('click', (e) => {
    // Checks if num1 is storing solution (after = btn is clicked) and resets the equation
    if(numClicked == false && num1 == solution) {
      num1 = ''
      if(e.target.textContent == '.' && num1.indexOf('.') >= 0) {
        return;
      }
      numInput(e.target.textContent);
      inputBox.textContent = num1
      numClicked = true
    }
    else {
      numClicked = true
      if(e.target.textContent == '.' && num1.indexOf('.') >= 0) {
        return;
      }
      numInput(e.target.textContent);
      inputBox.textContent = num1
    }
  }));

  // Function for the negative button
  posNeg.addEventListener('click', () => {
    num1 = num1 * -1
    inputBox.textContent = num1;

  })

  // Adds a clear all function to the "C" button
  clearAllBtn.addEventListener('click', () => {
    inputBox.textContent = 0
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
  });

  // Function for the backspace button (backBtn)
  // Both inputBox and num1 need to be cleared because:
  // 1. inputBox will change but num1 value will not
  // 2. num1 will change but not inputBox textContent
  backBtn.addEventListener('click', () => {
    inputBox.textContent = inputBox.textContent.toString().slice(0, -1)
    num1 = num1.toString().slice(0, -1)
  });

  const clearEntry = () => {
    inputBox.textContent = 0
    num1 = ''
  }

  // Adds function to the clearInput button by clearing out the text content and num1
  // num1 is also clears so that it is not saved when resubmitting another number after clicking "CE"
  clearInput.addEventListener('click', () => {
    clearEntry()
  });

  //operates the equations based on which operator is chosen
  const operate = () => {
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator === '+') {
      return add(num2, num1)
    }
    else if(operator === '-') {
      return subtract(num2, num1)
    }
    else if(operator === '*') {
      return multiply(num2, num1)
    }
    else if(operator === '%') {
      return percent(num1)
    }
    else if(operator === 'xⁿ') {
      return exponent(num2, num1)
    }
    else if(operator === '√x') {
      return sqrRoot(num1)
    }
    else {
      return divide(num2, num1)
    }
  };

  // Function to block the operator symbol from displaying before a number has been clicked
  const displayInput = () => {
    if(num1 === '' && num2 === '') {
      return null
    }
    else if(operator === 'xⁿ') {
      display.textContent = num2 + " " + '^'
    }
    else if(operator === '√x') {
      display.textContent = ''
      num2 = ''
      operate()
      num1 = solution
      inputBox.textContent = num1
    }
    else if(operator === '%' && num2 === '') {
      display.textContent = ''
      num2 = ''
      operate()
      num1 = solution
      inputBox.textContent = num1
    }
    else if(num2 !== '' && operator === '%') {
      operate()
      num1 = solution
      inputBox.textContent = num1
    }
    else {
      display.textContent = num2 + " " + operator
      inputBox.textContent = 0
    }
  }



  // Sets operator to op for other functions; transfers num1 to num2 and then makes num1 blank
  const opProcessor = (op) => {
    operator = op
    if(operator === '√x') {
      num2 = ''
    }
    else if(operator === '%' && num2 === '') {
      num2 = ''
    }
    // else if(num2 !== '' && operator === '%') {
    //   num1 = solution
    //   inputBox.textContent = num1
    // }
    else if(!num2 == '' && numClicked == true) {
      num2 = solution
      num1 = ''
    }
    else {
      num2 = num1
      num1 = ''
    }
  };

  // Each operator clicked will pop up in the display with the first number of the equation
  operators.forEach((op) => {
      op.addEventListener('click', (e) => {
        operate()
        display.style = ('font-weight: 400')
        opProcessor(e.target.textContent)
        displayInput()
        numClicked = false
      });
  });

  // Function fo equal button and will save the solution and add operator to it if no number is hit first
  equalBtn.addEventListener('click', () => {
    if(num2 == '' || num1 == '') {
      return;
    }
    else {
      operate()
      display.style = ('font-size: large; font-weight: bold')
      display.textContent = display.textContent + " " + num1 + " " + `=` + " " + solution;
      inputBox.textContent = '';
      numClicked = false;
      num1 = solution
      num2 = '';
    }
  });
});



// if num2 = '' and numClicked = true,
// when another operator or equals is clicked,
// calculate and display