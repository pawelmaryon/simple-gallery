require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

console.log('this is working');
const pine = document.querySelector(".pine");
const larch = document.querySelector(".larch");
const balau = document.querySelector(".balau");
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
//decking
const calculatorHeight = document.getElementById("calculator_height");
const calculatorWidth = document.getElementById("calculator_width");
const calculatorLength = document.getElementById("calculator_length");

//patio
const patioLength = document.querySelector(".p-length"); 
const patioWidth = document.querySelector(".p-width");
const patioSlabSize = document.querySelector(".p-size");
const patioValue = document.querySelector(".patio-cost");
const patioButton = document.querySelector(".patio-btn");

//turf
const lawnLength = document.querySelector(".t-length");
const lawnWidth = document.querySelector(".t-width");
const turfBtn = document.querySelector(".t-btn");
const turfValue = document.querySelector(".turf-cost");

//fence

const fenceLength = document.querySelector(".fence-length");
const fenceHight = document.querySelector(".fence-height");
const fenceValue = document.querySelector(".fence-cost");
const fenceButton = document.querySelector(".fence-button");

//estimated cost summary

const estimatedCost = document.querySelector(".total-figure");

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
      const lawnWidthValue = Number(lawnWidth.value);
      const lawnLengthValue = Number(lawnLength.value)

      const lawnArea = (lawnWidthValue * lawnLengthValue)*30
      turfValue.textContent = "£" + lawnArea.toString()
      console.log('turf');
      break;
    case 'fence':
      const fenceLenghtValue = Number(fenceLength.value)
      const fenceHeightValue = Number(fenceHight.value)
      const fenceTotal = (fenceLenghtValue + fenceHeightValue)*90
      fenceValue.textContent = "£" + fenceTotal.toString();
      console.log('fence');
      break;
  }
};

sumUpBtn.addEventListener('click', function (event) {
  event.preventDefault();
  materialCalculations('decking');
  return estimatedCost.textContent = totalCost.textContent
});

patioButton.addEventListener("click", function(event) {
event.preventDefault();
materialCalculations('patio');
const updatedEstimatedCost = Number(estimatedCost.textContent.substring(1));
const updatedPatioValue = Number(patioValue.textContent.substring(1));
const updatedCost = updatedEstimatedCost + updatedPatioValue
 return estimatedCost.textContent = "£" + updatedCost.toString();
});

turfBtn.addEventListener("click", function(event) {
  event.preventDefault();
  materialCalculations('turf');
  const updatedEstimatedCost = Number(estimatedCost.textContent.substring(1));
  const updatedTurfValue = Number(turfValue.textContent.substring(1))
  const updatedCost = updatedEstimatedCost + updatedTurfValue
  return estimatedCost.textContent = "£" + updatedCost.toString();
});
fenceButton.addEventListener("click", function (event) {
  event.preventDefault()
  materialCalculations('fence');
  const updatedEstimatedCost = Number(estimatedCost.textContent.substring(1));
  const updatedFenceValue = Number(fenceValue.textContent.substring(1))
  const updatedCost = updatedEstimatedCost + updatedFenceValue
   return estimatedCost.textContent = "£" + updatedCost.toString();
})
// const costSumUp = Number(materialCalculations('decking') + materialCalculations('patio') + materialCalculations('turf') + materialCalculations('fence'))
// estimatedCost.textContent = costSumUp.toString()