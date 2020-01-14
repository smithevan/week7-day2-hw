import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      euros: null,
      currencies: {
        rates: {}
      },
      selectedCurrency: null
    },
    mounted: function() {
     this.fetchCurrencies()
    },
    methods: {
      fetchCurrencies: function (){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(currencies => this.currencies = currencies)
      },
      calculateCurrency: function (){
        const calculatedCurrency = selectedCurrency * currencies.rates
        return calculatedCurrency
      }
    }
  });
});
