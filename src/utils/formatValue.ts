const formatValue = (value: number, valueType: string): string => {
  return valueType === 'outcome'
    ? `- R$ ${value.toString().replace('.', ',')}`
    : `R$ ${value.toString().replace('.', ',')}`;
};

export default formatValue;
