import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const CityNotFound = () => {
  const router = useRouter();

  return (
    <Flex justifyContent='center' alignItems='center' minH='100vh' flexDirection='column'>
      <Text fontSize='2em' mb='20px'>
        There are no results for this city
      </Text>
      <Button
        colorScheme='blue'
        width='100px'
        onClick={() => router.back()}
        aria-label='Back to the previous page'>
        Back
      </Button>
    </Flex>
  );
};

export default CityNotFound;
