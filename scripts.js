const inputBox = document.querySelector(".input");

const clearBtn = document.querySelector(".clear");

const clearAllBtn = document.querySelector(".clearAll");

const backspace = document.querySelector(".backspace");

const addBtn = document.querySelector(".add");

const subtractBtn = document.querySelector(".subtract");

const multiplyBtn = document.querySelector(".multiply");

const divideBtn = document.querySelector(".divide");

const oneBtn = document.querySelector("#one");

const twoBtn = document.querySelector("#two");

const threeBtn = document.querySelector("#three");

const fourBtn = document.querySelector("#four");

const fiveBtn = document.querySelector("#five");

const sixBtn = document.querySelector("#six");

const sevenBtn = document.querySelector("#seven");

const eightBtn = document.querySelector("#eight");

const nineBtn = document.querySelector("#nine");

const zeroBtn = document.querySelector("#zero");


const numInput = (val) => {
    inputBox.value += val;
}
