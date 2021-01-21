const materialName = document.querySelector('.material-name');
const materialList = document.querySelector('.material-list');
const materialItem = document.querySelector('btn-item')


materialName.addEventListener('click', function() 
{
  console.log('button clicked');
  materialList.classList.remove('hidden');
  materialItem.addEventListener('click', function()
  {
    console.log('Material item clicked');
  })
});