export const compact = (array: any[]) => {
  const blackList = ['', undefined, null];

  return array.filter((el) => !blackList.includes(el));
};

export const product = (multiDimensionalArray: any[][]) => {
  const twoDimensionalProduct = (array1: any[], array2: any[]): any[][] => {
    let result: any[][] = [];

    array1.forEach((array1El) => {
      array2.forEach((array2El) => {
        result = [...result, [array1El, array2El]];
      });
    });

    return result;
  };

  const reducer = (previousValue: any[], currentValue: any[]): any[][] => {
    if (previousValue.length === 0) {
      return currentValue;
    }

    return twoDimensionalProduct(previousValue, currentValue);
  };

  return multiDimensionalArray.reduce(reducer, []);
};
