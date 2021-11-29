import { Button, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Search } from 'react-feather';

const SearchForecastView = () => {
  const [city, setCity] = useState('');
  const router = useRouter();

  return (
    <Flex
      height='100vh'
      minH='400px'
      justifyContent='center'
      alignItems='center'
      background='linear-gradient(to bottom, #ff7e5f, #feb47b)'>
      <form
        onSubmit={e => {
          e.preventDefault();
          router.push(`/forecast/${city}`);
        }}>
        <InputGroup width='600px'>
          <Input
            variant='solid'
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder='Enter city name'
            backgroundColor='white'
            borderRadius='50px'
            height='50px'
            pl='30px'
          />
          <InputRightElement width='50px' height='100%' mr='20px'>
            <Button borderRadius='20px' variant='ghost' type='submit'>
              <Search />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Flex>
  );
};

export default SearchForecastView;
