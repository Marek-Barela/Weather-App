import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useFetchFiveDaysWeatherForecast } from 'common/hooks/useFetchFiveDaysWeatherForecast';
import CurrentWeatherContainer from 'components/CurrentWeatherContainer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Search } from 'react-feather';

interface DetailsForecastViewProps {
  city: string | string[] | undefined;
}

const DetailsForecastView = ({ city }: DetailsForecastViewProps) => {
  const [cityName, setCityName] = useState('');
  const { fiveDaysWeather } = useFetchFiveDaysWeatherForecast({ city });
  const router = useRouter();

  console.log(fiveDaysWeather);

  return (
    <Box padding='40px' minH='500px' height='100vh' bgColor='#82B7F1'>
      <Flex minH='100%' bgColor='#F2FBFF' borderRadius='50px'>
        <Flex width='70%' padding='60px' direction='column'>
          <Flex justifyContent='space-between' alignItems='center'>
            <Heading as='h2' fontSize='3em' textTransform='capitalize'>
              Weather forecast
            </Heading>
            <form
              onSubmit={e => {
                e.preventDefault();
                router.push(`/forecast/${cityName}`);
              }}>
              <InputGroup width='350px'>
                <Input
                  variant='solid'
                  value={cityName}
                  onChange={e => setCityName(e.target.value)}
                  boxShadow='0px 0px 10px 0px rgba(0, 0, 0, 0.2)'
                  borderRadius='25px'
                  paddingLeft='25px'
                  placeholder='Search by the city name'
                />
                <InputRightElement width='50px' height='100%'>
                  <Button borderRadius='20px' variant='ghost' type='submit'>
                    <Search />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </form>
          </Flex>
        </Flex>
        <CurrentWeatherContainer city={city} />
      </Flex>
    </Box>
  );
};

export default DetailsForecastView;
