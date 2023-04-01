let slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

const selectFilter = document.querySelector('.select--filter');
const selectSort = document.querySelector('.select--sort');

const selectBtnSort = document.querySelector('.select__button--sort span');

const selectDropdownFilter = document.querySelector('.select__dropdown-filter');
const selectDropdownSort = document.querySelector('.select__dropdown-sort');

selectFilter.addEventListener('click', function(){
    selectDropdownFilter.classList.toggle('select__dropdown--active');
})

selectSort.addEventListener('click', function(){
    selectDropdownSort.classList.toggle('select__dropdown--active');
})

const sortItem = document.querySelectorAll('.select__dropdown-sort__item');

function resetSortItems(){
    sortItem.forEach(item => {
        item.classList.remove('select__dropdown-sort__item--active')
    })
}

sortItem.forEach(item => {
    item.addEventListener('click', () => {
        resetSortItems();
        item.classList.add('select__dropdown-sort__item--active');
        selectBtnSort.textContent = item.textContent;
    })
})