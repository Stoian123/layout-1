const select = () => {
  const selectHeader = document.querySelectorAll('.select__header');
  const selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    const text = this.innerText;
    const select = this.closest('.select');
    const currentText = select.querySelector('.select__current'); 
    
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
}

select();