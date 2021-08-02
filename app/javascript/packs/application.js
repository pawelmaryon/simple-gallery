require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

console.log('this is working');

const materialName = document.querySelector('.material-name');
const materialList = document.querySelector('.material-list');
const materialItem = document.querySelector('btn-item');
const lengthInput = document.querySelector('length');
const materialLenght = Number(document.querySelector('m-lenght'));
const materialWidth = Number(document.querySelector('m-width'));
const materialHeight = Number(document.querySelector('m-height'));
const totalCost = document.querySelector('.total-cost');
const sumUpBtn = document.querySelector(".sum-up-btn");
// let userInputLength = prompt('please enter length')
// let userInputWidth = prompt('please enter width')
// let userInputHeight = prompt('please enter height')

materialName.addEventListener('click', function() 
{
  console.log('button clicked');
  
  materialList.classList.toggle('hidden');
  // materialLenght.add.addEventListener('click', finction(){
  //   materialLenght.value = prompt('lenght');
  // })
});
// if materialItem === materialItem.textContent('decking') {
// lengthInput.value = 120;
// } else if materialItem === materialItem.textContent('patio') {
//   lengthInput.innerText = 100
// }
// end
sumUpBtn.addEventListener('click', function() {

})