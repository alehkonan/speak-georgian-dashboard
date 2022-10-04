import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ApiProvider } from 'api/provider';
import { ThemeProvider } from 'theme/provider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApiProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApiProvider>
  );
};

export default App;
