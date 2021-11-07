import { useState } from 'react';

export const useKeywordCounties = (): {
  addKeywordCountyCategory: () => void;
  keywordCounties: string[];
  updateKeywordList: (newkeywordCounty: string, listIndex: number) => void;
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

  const updateKeywordList = (
    newkeywordCounty: string,
    listIndex: number
  ): void => {
    setKeywordCounties((prevState) =>
      prevState.map((keywordCounty, index) =>
        index === listIndex ? newkeywordCounty : keywordCounty
      )
    );
  };

  return { addKeywordCountyCategory, keywordCounties, updateKeywordList };
};
