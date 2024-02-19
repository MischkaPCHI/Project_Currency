const currencyValue = document.querySelector('.value-input')
const convertFrom = document.querySelector('#cur1');
const convertTo = document.querySelector('#cur2');

const result = document.querySelector('#result');

const createButtonElement = document.querySelector("#calculate");
const resetButtonElement = document.querySelector("#clear");
const alertSound = document.querySelector('#alertSound');
const alertSound2 = document.querySelector('#alertSound2');

let userInputCurrencyValue;
let userInputConvertFrom;
let userInputConvertTo;

const inputFieldCurrencyValue = (evt) => {
    userInputCurrencyValue = evt.target.value;
    if(isNaN(userInputCurrencyValue)){
        showAlertNaN();
    }
}

const inputFieldConvertFrom = (evt) => {
    userInputConvertFrom = evt.target.value;
}

const inputFieldConvertTo = (evt) => {
    userInputConvertTo = evt.target.value;
}

const showAlertNaN = () => {
    if (alertSound2.canPlayType) {
        alertSound2.play();
        alert("Лось! Введи сумму!");
    }
}

function convertCurrency(evt) {
    evt.preventDefault();
    if (userInputCurrencyValue === undefined){
        showAlertWithSound();
        return;
    }
    switch(userInputConvertFrom){
        case 'GBP': firstRate = 0.93;
        break;
        case 'USD': firstRate = 1.17;
        break;
        default:
            firstRate = 1;
    }

    switch(userInputConvertTo){
        case 'GBP': secondRate = 0.85;
        break;
        case 'USD': secondRate = 1.08;
        break;
        default:
            secondRate = 1;
    }

    result.textContent = userInputCurrencyValue / firstRate * secondRate;
}

const resetButtonHandler = () => {
    let resetResult = "";
    userInputCurrencyValue = ""; 
    result.textContent = resetResult;
    userInputCurrencyValue.textContent = userInputCurrencyValue;
}

const showAlertWithSound = () => {
   if (alertSound.canPlayType) {
        alertSound.play();
        alert("Лось! Введи сумму!");
    }
}


currencyValue.addEventListener('input', inputFieldCurrencyValue);
convertFrom.addEventListener('input', inputFieldConvertFrom);
convertTo.addEventListener('input', inputFieldConvertTo);

createButtonElement.addEventListener('click', convertCurrency);
resetButtonElement.addEventListener('click', resetButtonHandler);
