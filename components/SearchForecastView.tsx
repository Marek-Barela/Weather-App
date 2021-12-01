import { Flex, Input, InputGroup, Stack,Text } from '@chakra-ui/react';
import { citiesList } from 'common/cities';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface City {
  id?: number;
  country: string;
  lat: number;
  lng: number;
  name: string;
  url?: string;
}

const SearchForecastView = () => {
  const [cityName, setCityName] = useState('');
  const [filtredCities, setFiltredCities] = useState<City[]>([]);
  const router = useRouter();

  const handleInputChange = (cityInput: string) => {
    setCityName(cityInput);

    const matchingCities = [];

    if (cityInput.length >= 2) {
      for (const city of citiesList) {
        if (matchingCities.length >= 5) break;

        const match = city.name.toLowerCase().startsWith(cityInput.toLowerCase());

        if (match) {
          const cityData = {
            ...city,
            url: `${city.name.toLowerCase().replace(/ /g, '-')}-${city.id}`,
          };
          matchingCities.push(cityData);
        }
      }
    }

    setFiltredCities(matchingCities);
  };

  return (
    <Flex
      height='100vh'
      minH='400px'
      justifyContent='flex-start'
      alignItems='center'
      background='linear-gradient(to bottom, #ff7e5f, #feb47b)'
      flexDirection='column'
      paddingY='100px'>
      <InputGroup width='600px'>
        <Input
          variant='solid'
          value={cityName}
          onChange={e => handleInputChange(e.target.value)}
          placeholder='Enter city name'
          backgroundColor='white'
          height='50px'
          pl='30px'
        />
      </InputGroup>
      <Stack width='600px' mt='10px'>
        {filtredCities.map((city, index) => {
          return (
            <Flex
              key={index}
              onClick={() => router.push(`/forecast/${city.url}`)}
              bgColor='white'
              width='100%'
              height='50px'
              alignItems='center'
              borderRadius='5px'
              cursor='pointer'
              _hover={{ color: 'red.500' }}>
              <Text pl='30px' fontWeight='bold'>
                {city.name} - {city.country}
              </Text>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default SearchForecastView;
