import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { fetcher } from 'utils/fetcher';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        onError: (error, key) => console.log(error, key),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default App;
