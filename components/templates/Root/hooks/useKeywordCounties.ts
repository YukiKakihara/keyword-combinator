import { useState } from 'react';

export const useKeywordCounties = (): {
  addKeywordCountyCategory: () => void;
  keywordCounties: string[];
  updateKeywordList: (newkeywordCounty: string, listIndex: number) => void;
} => {
  const [keywordCounties, setKeywordCounties] = useState<string[]>([
    '',
    '',
    '',
  ]);

  const addKeywordCountyCategory = (): void => {
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
