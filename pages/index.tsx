import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Weather Forecast</title>
        <meta name='description' content='Weather forecast application' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Text>Hello Weather</Text>
    </Box>
  );
};

export default Home;
