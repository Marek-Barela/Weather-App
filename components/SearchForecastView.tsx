import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { citiesList } from 'common/cities';
import { popularCities } from 'common/popularCities';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';

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
  const [isActiveInput, setIsActiveInput] = useState(false);
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
    <Flex height='100vh' alignItems='center' flexDirection='column' paddingY='100px'>
      <Heading
        as='h1'
        fontSize='3.5em'
        textTransform='uppercase'
        my='20px'
        textAlign='center'
        fontWeight='bold'
        mb='40px'
        letterSpacing='10px'>
        Weather Forecast
      </Heading>
      <Flex flexDirection='column' width='100%' maxWidth='600px' padding='0 30px'>
        <InputGroup>
          <Input
            variant='outline'
            value={cityName}
            onChange={e => handleInputChange(e.target.value)}
            onFocus={() => setIsActiveInput(true)}
            onBlur={() => setIsActiveInput(false)}
            placeholder='Enter city name'
            backgroundColor='white'
            height='50px'
            focusBorderColor='#B83280'
            pl='30px'
          />
        </InputGroup>
        <Flex position='relative' flexDirection='column'>
          {isActiveInput && filtredCities.length > 0 && (
            <Stack
              mt='10px'
              position='absolute'
              width='100%'
              backgroundColor='white'
              padding='20px'
              borderRadius='10px'
              border='2px solid #B83280'
              zIndex='1000'>
              {filtredCities.map((city, index) => {
                return (
                  <Fragment key={index}>
                    {index !== 0 && <Divider />}
                    <Flex
                      onMouseDown={e => e.preventDefault()}
                      onMouseUp={() => router.push(`/forecast/${city.url}`)}
                      bgColor='white'
                      minW='300px'
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
                  </Fragment>
                );
              })}
            </Stack>
          )}
        </Flex>
      </Flex>
      <Flex width='100%' maxWidth='1200px' padding='0 30px' flexDirection='column'>
        <Heading
          as='h2'
          fontSize='1.3em'
          textTransform='uppercase'
          my='30px'
          textAlign='center'
          fontWeight='bold'>
          Popular Cities
        </Heading>
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
          {popularCities.map(city => (
            <Box key={city.id} m='0 15px 30px 15px'>
              <Box
                onClick={() => router.push(`/forecast/${city.url}`)}
                width='200px'
                height='280px'
                borderRadius='20px'
                backgroundImage={city.image}
                backgroundSize='cover'
                justifyContent='center'
                alignItems='center'
                cursor='pointer'
                _hover={{ opacity: 0.8 }}
              />
              <Text
                fontSize='15px'
                textTransform='uppercase'
                textAlign='center'
                fontWeight='bold'>
                {city.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SearchForecastView;
