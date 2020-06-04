const form = document.querySelector('.js-form');



form.addEventListener('submit', quote)

function quote(ev) {
  ev.preventDefault();
  const currencySelect = document.querySelector('.js-currency');
  const selectedcurrency = currencySelect.options[currencySelect.selectedIndex].value

  const crytoCurrencySelect = document.querySelector('.js-cryptocurrency');
  const selectedcrytoCurrency = crytoCurrencySelect.options[crytoCurrencySelect.selectedIndex].value

  if (selectedcurrency === '' || selectedcrytoCurrency === '') {
    console.log('completa');
  } else {
    console.log('bien');

  }

}