import '@fontsource/montserrat';
import '@fontsource/montserrat/800.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

export const fonts = {
  heading: 'Montserat, sans-serif',
  body: 'Montserat, sans-serif',
};

const theme = extendTheme({
  fonts,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
