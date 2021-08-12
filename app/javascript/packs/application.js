require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

console.log('this is working');
const calculatorHeight = document.getElementById("calculator_height");
const calculatorWidth = document.getElementById("calculator_width");
const calculatorLength = document.getElementById("calculator_length");
const materialName = document.querySelector('.material-name');
const materialList = document.querySelector('.material-list');
const materialItem = document.querySelector('btn-item');
const lengthInput = document.querySelector('length');
const materialLenght = Number(document.querySelector('m-lenght'));
const materialWidth = Number(document.querySelector('m-width'));
const materialHeight = Number(document.querySelector('m-height'));
const totalCost = document.querySelector('.total-cost');
const sumUpBtn = document.querySelector(".sum-up-btn");


materialName.addEventListener('click', function() 
{
  console.log('button clicked'); 
  materialList.classList.toggle('hidden');
  
});
sumUpBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const widthValue = Number(calculatorWidth.value);
  const heightValue = Number(calculatorHeight.value);
  const lengthValue = Number(calculatorLength.value);
  console.log(typeof calculatorLength, lengthValue);
  console.log(typeof calculatorWidth,  widthValue);
  console.log(typeof calculatorHeight, heightValue);
  const totalValue = lengthValue * widthValue * heightValue;

  console.log(typeof totalValue, totalValue.toString());

  console.log(totalCost.textContent = totalValue.toString())


  

})