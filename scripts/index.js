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
    if(userInputConvertFrom === undefined) {
        userInputConvertFrom = 'EUR';
        switch(userInputConvertFrom){
        case 'EUR':
            switch(userInputConvertTo) {
                case 'USD': rate = 1.12; break;
                case 'GBP': rate = 0.85; break;
            }
            break;
        }
    } else{

        switch(userInputConvertFrom) {

            case 'EUR':
            switch(userInputConvertTo) {
                case 'USD': rate = 1.12; break;
                case 'GBP': rate = 0.85; break;
            }
            break;

            case 'USD':
                switch(userInputConvertTo) {
                    case 'EUR': rate = 0.89; break;
                    case 'GBP': rate = 0.76; break;
                }
                break;
            case 'GBP':
                switch(userInputConvertTo) {
                    case 'EUR': rate = 1.17; break;
                    case 'USD': rate = 1.31; break;
                }
                break;
        }
    }
    result.textContent = userInputCurrencyValue * rate;
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