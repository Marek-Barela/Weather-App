import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import type { City } from 'common/cities';
import { useFetchOneCallWeatherForecast } from 'common/hooks/useFetchOneCallWeatherForecast';
import CurrentWeatherContainer from 'components/CurrentWeatherContainer';
import HoursForecastChart from 'components/HoursForecastChart';
import WeekForecastWidget from 'components/WeekForecastWidget';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Search } from 'react-feather';

interface DetailsForecastViewProps {
  city: City | undefined;
}

const DetailsForecastView = ({ city }: DetailsForecastViewProps) => {
  const [cityName, setCityName] = useState('');
  const { weatherForecast } = useFetchOneCallWeatherForecast({
    lat: city?.lat,
    lng: city?.lng,
  });
  const router = useRouter();

  return (
    <Box minH='600px' height='100vh'>
      <Flex minH='100%'>
        <Flex width='100%' padding='60px' direction='column'>
          <Flex justifyContent='space-between' alignItems='center' mb='20px'>
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
          <Flex direction={{ base: 'column', lg: 'row' }} mb='20px'>
            <CurrentWeatherContainer
              weatherForecast={weatherForecast}
              cityName={city?.name}
            />
            <HoursForecastChart weatherForecast={weatherForecast} />
          </Flex>
          <Divider />
          <WeekForecastWidget weatherForecast={weatherForecast} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DetailsForecastView;
