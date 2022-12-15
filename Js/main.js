import tipCalculator from './modules/tipCalculator.js';
import totalFinal from './modules/totalFinal.js';

//Guardar valores en variables
let subtotal = 142.55;
let porcenTip = 0.15;
let personas = 5;

const resultadoTip = tipCalculator(subtotal, porcenTip, personas);

console.dir(resultadoTip.toFixed(2));

const resultadoFinal = totalFinal(subtotal, personas, resultadoTip);

console.log(resultadoFinal.toFixed(2));