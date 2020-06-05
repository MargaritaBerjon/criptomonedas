
const form = document.querySelector('.js-form');

const ui = new Interface();

form.addEventListener('submit', quote)

function quote(ev) {
  ev.preventDefault();
  const currencySelect = document.querySelector('.js-currency');
  const selectedcurrency = currencySelect.options[currencySelect.selectedIndex].value

  const crytoCurrencySelect = document.querySelector('.js-cryptocurrency');
  const selectedcrytoCurrency = crytoCurrencySelect.options[crytoCurrencySelect.selectedIndex].value

  if (selectedcurrency === '' || selectedcrytoCurrency === '') {
    ui.showMesage('Todos los campos son obligatorios', 'alert');
  } else {
    console.log('bien');

  }

}