// Define exchange rates (you can update these as needed)
const exchangeRates = {
    USD: 1.00,
    EUR: 0.85,
    GBP: 0.74,
    JPY: 114.30,
    CAD: 1.25,
    AUD: 1.30,
    INR: 83.23,
    'USD': 1.0868,
    'JPY': 163.39,
    'BGN': 1.9558,
    'CZK': 24.506,
    'DKK': 7.4588,
    'GBP': 0.87188,
    'HUF': 377.30,
    'PLN': 4.3970,
    'RON': 4.9704,
    'SEK': 11.4510,
    'CHF': 0.9640,
    'ISK': 153.90,
    'NOK': 11.7460,
    'TRY': 31.1558,
    'AUD': 1.6648,
    'BRL': 5.2829,
    'CAD': 1.4854,
    'CNY': 7.8702,
    'HKD': 8.4852,
    'IDR': 16825.84,
    'ILS': 4.0943,
    'INR': 90.2937,
    'KRW': 1410.50,
    'MXN': 18.8419,
    'MYR': 5.0781,
    'NZD': 1.7985,
    'PHP': 60.546,
    'SGD': 1.4645,
    'THB': 38.560,
    'ZAR': 19.7127
};


const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const convertedAmount = document.getElementById('convertedAmount');
const convertBtn = document.getElementById('convertBtn');

// Populate the currency dropdowns
for (const currency in exchangeRates) {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.text = currency;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = currency;
    option2.text = currency;
    toCurrency.appendChild(option2);
}

// Event listener for conversion
convertBtn.addEventListener('click', () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = parseFloat(amount.value);
    
    if (isNaN(amountValue)) {
        alert('Please enter a valid amount.');
        return;
    }

    if (from === to) {
        convertedAmount.value = amountValue;
    } else {
        const conversionRate = exchangeRates[to] / exchangeRates[from];
        const result = amountValue * conversionRate;
        convertedAmount.value = result.toFixed(2);
    }
});
