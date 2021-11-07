import { compact, product } from 'utils/array';

export const useResult = (keywordCounties: string[]): string => {
  const compactedKeywordCounties = compact(keywordCounties);
  const splittedkeywordCounties: string[][] = compactedKeywordCounties.map(
    (keywordCounty) => keywordCounty.split(/\n/)
  );
  const productedkeywordCounties = product(splittedkeywordCounties);

  return productedkeywordCounties.join('\n');
};
