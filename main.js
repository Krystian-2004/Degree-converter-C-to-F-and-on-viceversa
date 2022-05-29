// C to F = °C = (°F − 32) /1.8
// F to C = °F = (°C × 1.8) + 32
const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn= document.querySelector('.change');
const cS= document.querySelector('.c');
const fS= document.querySelector('.f');

let f
let c

// Changes units
const swap = () => {
    if(cS.textContent === '°C'){
        cS.textContent = '°F';
        fS.textContent = '°C';
    }else {
        cS.textContent = '°C';
        fS.textContent = '°F';
    }
    converter.value = '';
    result.textContent = '';
}

// Converts units
const converUnitsC = () => {
    f = (converter.value * 1.8) + 32;
    result.textContent = `${converter.value}°C to ${f.toFixed(1)}°F`;
}

const converUnitsF = () => {
    c = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value}°F to ${c.toFixed(1)}°C`;
}

// Checks the input value and unit
const checkValue = () => {
    if(converter.value !== ''){
        if(cS.textContent === '°C'){
            converUnitsC();
        }else {
            converUnitsF();
        }
        converter.value = '';
    }else {
        result.textContent = 'Musisz podać wartość.';
    }
}

// Restores the default setting
const reset = () => {
    cS.textContent = '°C';
    fS.textContent = '°F';
    converter.value = '';
    result.textContent = '';
}

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', checkValue);
resetBtn.addEventListener('click', reset);