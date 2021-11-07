export const compact = (array: any[]) => {
  const blackList = ['', undefined, null];

  return array.filter((el) => !blackList.includes(el));
};
