const setTotals = (values) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sumTotal = values.reduce(reducer, 0);
  return sumTotal;
};

export default setTotals;
