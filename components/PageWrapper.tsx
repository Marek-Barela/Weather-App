import { Box } from '@chakra-ui/react';
import Head from 'next/head';

interface PageWrapperProps {
  children?: JSX.Element[] | JSX.Element;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box>
      <Head>
        <title>Weather Forecast</title>
        <meta name='description' content='Weather forecast application' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </Box>
  );
};

export default PageWrapper;
