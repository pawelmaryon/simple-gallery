let materialName = document.querySelector('.material-name');
let materialList = document.querySelector('.material-list');

materialName.addEventListener('click', function() 
{

  console.log('button clicked');
  materialList.classList.toggle('hidden');
});