import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ApiProvider } from 'api/provider';
import { ThemeProvider } from 'theme/provider';
import { Layout } from 'layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApiProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApiProvider>
  );
};

export default App;
