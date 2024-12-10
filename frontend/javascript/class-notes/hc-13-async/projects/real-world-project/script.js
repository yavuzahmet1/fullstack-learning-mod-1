// const axios = require('axios')
//API'S
//exchange rate:https://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1




//1st function-getExchangeRate

const getExchangeRate = (fromCurrency, toCurrency) => {
    fetch('https://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1')
        .then((response) => {

            console.log(response);
        });
}

getExchangeRate('USD', 'EUR')