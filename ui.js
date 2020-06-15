
class Interface {

  constructor() {
    this.init();
  }

  init() {
    this.paintSelect();
  }

  paintSelect() {
    api.optainCurrencyFromApi()
      .then(currency => {
        const select = document.querySelector('.js-cryptocurrency');
        for (const [key, value] of Object.entries(currency.currency.Data)) {
          const option = document.createElement('option');
          option.value = value.Symbol;
          option.appendChild(document.createTextNode(value.CoinName));
          select.append(option)
        }
      })
  }


  showMesage(mensaje, clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.classList.add('border', 'border-danger');
    div.appendChild(document.createTextNode(mensaje));

    const divMesage = document.querySelector('.js-mensage');
    divMesage.appendChild(div);

    setTimeout(() => {
      document.querySelector('.js-mensage div').remove();
    }, 3000);
  }

  pintResult(result, currency, cryptocurrency) {
    const isResult = document.querySelector('.card');

    if (isResult) {
      isResult.remove();
    }

    const currencyData = result[cryptocurrency][currency];
    console.log(currencyData);
    let price = currencyData.PRICE.toFixed(2),
      update = new Date(currencyData.LASTUPDATE * 1000).toLocaleDateString('es-SPAIN');


    let html = `<div class="card border border-info p-3 border bg-light"> 
<h2>Resultado</h2>
<p>Precio de ${currencyData.FROMSYMBOL} a ${currencyData.TOSYMBOL} es de: $ ${price}</p>
<p> Variación: ${currencyData.CHANGEPCTDAY.toFixed(2)}%</p>
<p> Última actualización: ${update}</p>

</div>`
    this.spinnerDisplay('block');

    setTimeout(() => {

      document.querySelector('.js-result').innerHTML = html;
      this.spinnerDisplay('none');
    }, 3000);

  }

  spinnerDisplay(display) {
    const spinner = document.querySelector('.js-spinner');
    spinner.style.display = display;
  }

}

