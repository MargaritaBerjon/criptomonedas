const api = new Api('f8d165fc79caa15f493934f4b3c05477f9bcd48b7da79b1e005d60310e653a43');
const ui = new Interface();

const form = document.querySelector('.js-form');


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
    api.optainValue(currencySelect, crytoCurrencySelect)
      .then(data => {
        ui.pintResult(data.result.RAW, selectedcurrency, selectedcrytoCurrency);

      }
      )

  }

}