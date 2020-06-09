class Api {
  constructor(apikey) {
    this.apikey = apikey;
  }

  async optainCurrencyFromApi() {
    const ENPOINT = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

    const ENPOINTCurrency = await fetch(ENPOINT);

    const currency = await ENPOINTCurrency.json();

    return {
      currency
    }
  }

  async optainValue(currency, crytoCurrency) {
    const ENPOINT = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crytoCurrency.value}&tsyms=${currency.value}&api_key=${this.apikey}`;

    const ENPOINTConversion = await fetch(ENPOINT);

    const result = await ENPOINTConversion.json();


    return {
      result

    }

  }

}