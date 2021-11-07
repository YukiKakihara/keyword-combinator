import { useState } from 'react';

export const useKeywordCounties = (): {
  addKeywordCountyCategory: () => void;
  keywordCounties: string[];
  updateKeywordCounties: (
    newkeywordCounty: string,
    categoryIndex: number
  ) => void;
} => {
  const defaultKeywordCounties = ['', '', ''];

  const [keywordCounties, setKeywordCounties] = useState<string[]>(
    defaultKeywordCounties
  );

  const addKeywordCountyCategory = (): void => {
    const maximumCategoryCount = 100;

    if (keywordCounties.length >= maximumCategoryCount) {
      return;
    }

    setKeywordCounties((prevState) => [...prevState, '']);
  };

  const updateKeywordCounties = (
    newkeywordCounty: string,
    categoryIndex: number
  ): void => {
    setKeywordCounties((prevState) =>
      prevState.map((keywordCounty, index) =>
        index === categoryIndex ? newkeywordCounty : keywordCounty
      )
    );
  };

  return { addKeywordCountyCategory, keywordCounties, updateKeywordCounties };
};
