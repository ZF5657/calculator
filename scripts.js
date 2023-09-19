const display = document.querySelector(".showNum");

const inputBox = document.querySelector(".input");

const clearAllBtn = document.querySelector(".clearAll");

const backspace = document.querySelector(".backspace");

const addBtn = document.querySelector(".add");

const subtractBtn = document.querySelector(".subtract");

const multiplyBtn = document.querySelector(".multiply");

const divideBtn = document.querySelector(".divide");

const operators = document.querySelectorAll('.op');

const numbers = document.querySelectorAll('.number');


let num1 = '';
let num2 = '';
let operate = '';

//function to restrict the input for the textbox (inputBox)
function setInputFilter(textbox, inputFilter, errMsg) {
    [ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (inputFilter(this.value)) {
          // Accepted value.
          if ([ "keydown", "mousedown", "focusout" ].indexOf(e.type) >= 0){
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
  
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        }
        else if (this.hasOwnProperty("oldValue")) {
          // Rejected value: restore the previous one.
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
        else {
          // Rejected value: nothing to restore.
          this.value = "";
        }
      });
    });
  };

  setInputFilter(document.getElementById("inputBox"), function(value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp.
  }, "Only digits and '.' are allowed");

// Allows the calculator numbers to add their designated value into the input box
const numInput = (val) => {
    num1 += val;
};

numbers.forEach((number) => number.addEventListener('click', function(e){
    numInput(e.target.textContent);
    inputBox.value = num1;
}));


// Clears the entries in the input box
const clearInput = () => {
    inputBox.value = '';
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
};


const add = (num1, num2) => {
    let solution = num1 + num2;
    return solution;
};

const subtract = (num1, num2) => {
    let solution = num1 - num2;
    return solution
};

const multiply = (num1, num2) => {
    let solution = num1 * num2;
    return solution;
};

const divide = (num1, num2) => {
    let solution = num1 / num2;
    return solution;
};


const opProcessor = (op) => {
    operator = op;
    num2 = num1;
    num1 = '';
};


operators.forEach((op) => {
    op.addEventListener('click', function(e){
        opProcessor(e.target.textContent)
        display.textContent = num2 + " " + operator;
        inputBox.value = '';
    })
});
