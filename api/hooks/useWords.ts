import useSWR, { SWRConfiguration } from 'swr';
import type { Word } from 'types';
import { apiKey } from 'api/keys';

export const useWords = (options?: SWRConfiguration) => {
  const { data } = useSWR<Word[]>(apiKey.words, options);

  return {
    words: data,
  };
};
