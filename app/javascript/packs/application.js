require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

console.log('this is working');
const pine = document.querySelector(".pine");
const larch = document.querySelector(".larch");
const balau = document.querySelector(".balau");
const calculatorHeight = document.getElementById("calculator_height");
const calculatorWidth = document.getElementById("calculator_width");
const calculatorLength = document.getElementById("calculator_length");
const materialName = document.querySelector('.material-name');
const materialList = document.querySelector('.material-list');
const materialItem = document.getElementsByClassName('btn-item');
const lengthInput = document.querySelector('length');
const materialLenght = Number(document.querySelector('m-lenght'));
const materialWidth = Number(document.querySelector('m-width'));
const materialHeight = Number(document.querySelector('m-height'));
const totalCost = document.querySelector('.total-cost');
const sumUpBtn = document.querySelector(".sum-up-btn");
const hiddenBtn = document.querySelector(".hidden");
const patioButton = document.querySelector(".patio-btn");

const patioLength = document.querySelector(".p-length"); 
const patioWidth = document.querySelector(".p-width");
const patioSlabSize = document.querySelector(".p-size");
const patioValue = document.querySelector(".patio-cost");


 function materialCalculations (type) {
  switch (type) { 
    case 'decking':
      const widthValue = Number(calculatorWidth.value);
      const heightValue = Number(calculatorHeight.value);
      const lengthValue = Number(calculatorLength.value);
      console.log(typeof calculatorLength, lengthValue);
      console.log(typeof calculatorWidth, widthValue);
      console.log(typeof calculatorHeight, heightValue);
      const totalValue = "£" + lengthValue * widthValue * heightValue;

      console.log(typeof totalValue, totalValue.toString());
      console.log(totalCost.textContent = totalValue.toString());
      break;
    case 'patio':
      const patioWidthValue = Number(patioWidth.value);
      const patioLengthValue = Number(patioLength.value);
      const patioArea = (patioWidthValue * patioLengthValue)*120
      
      patioValue.textContent = "£" + patioArea.toString()
      break;
    case 'turf':
      console.log('turf');
      break;
    case 'fence':
      console.log('fence');
      break;
  }
};

sumUpBtn.addEventListener('click', function (event) {
  event.preventDefault();
  materialCalculations('decking');
});

patioButton.addEventListener("click", function(event) {
event.preventDefault();
materialCalculations('patio')
})
