const materialName = document.querySelector('.material-name');
const materialList = document.querySelector('.material-list');
const materialItem = document.querySelector('btn-item');
const lengthInput = document.querySelector('length');


materialName.addEventListener('click', function() 
{
  console.log('button clicked');
  materialList.classList.toggle('hidden');
});
// if materialItem === materialItem.textContent('decking') {
// lengthInput.value = 120;
// } else if materialItem === materialItem.textContent('patio') {
//   lengthInput.innerText = 100
// }
// end
materialItem.addEventListener('click', function()
{
  console.log('Material item clicked');
})