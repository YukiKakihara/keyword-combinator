import { compact } from 'utils/array';

export const useResult = (keywordCounties: string[]): string => {
  const compactedKeywordCounties = compact(keywordCounties);

  const splittedkeywordCounties: string[][] = compactedKeywordCounties.map(
    (keywordCounty) => keywordCounty.split(/\n/)
  );

  console.log(makeComb(splittedkeywordCounties).join('\n'));

  return makeComb(splittedkeywordCounties).join('\n');
};

const make = (arr1: string[], arr2: string[]) => {
  if (arr1.length === 0) {
    return arr2;
  }

  return arr1.reduce((arr: any, v1: any) => {
    arr2.forEach((v2: any) => {
      const group: string[] = [].concat(v1, v2);
      arr.push(group);
    });
    return arr;
  }, []);
};

const makeComb = (array: string[][]) => {
  return array.reduce(make, []);
};
