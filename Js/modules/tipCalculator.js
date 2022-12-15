function tipCalculator(subtotal, porcenTip, personas) {
  let propina;

  propina = (subtotal * porcenTip) / personas;

  //Redondea sin decimales, es decir a numeros decimales
  //propina = Math.round(propina);

  //Redondea a cifras decimales
  propina = propina;

  return propina;
}

export default tipCalculator;