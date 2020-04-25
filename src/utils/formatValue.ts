const formatValue = (value: number, valueType: string): string => {
  let formattedValue: string;

  if (valueType === 'income') {
    formattedValue = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  } else if (valueType === 'outcome') {
    formattedValue = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value * -1);
  } else {
    formattedValue = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
  return formattedValue;
};

export default formatValue;
