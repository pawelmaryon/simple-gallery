const materialTypeBtn = document.querySelector('.material-name')
const dropdownContent = document.querySelector('.dropdown');
const deckingItems = document.querySelector('.decking-items');
const deckingType = document.querySelector('.decking-type');
dropdownContent.classList.add('hidden');

materialTypeBtn.addEventListener('click' , function () {
   dropdownContent.classList.remove('hidden')
   deckingType.addEventListener('click', function() {
    deckingItems.classList.remove('hidden')
})
});
