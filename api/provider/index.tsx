import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';
import { fetcher } from 'api/utils/fetcher';

export const ApiProvider = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        onError: (error, key) => console.log(error, key),
      }}
    >
      {children}
    </SWRConfig>
  );
};
