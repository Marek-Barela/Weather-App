import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import type { City } from 'common/cities';
import { useFetchOneCallWeatherForecast } from 'common/hooks/useFetchOneCallWeatherForecast';
import CurrentWeatherContainer from 'components/CurrentWeatherContainer';
import HoursForecastChart from 'components/HoursForecastChart';
import WeekForecastWidget from 'components/WeekForecastWidget';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-feather';

interface DetailsForecastViewProps {
  city: City | undefined;
}

const DetailsForecastView = ({ city }: DetailsForecastViewProps) => {
  const { weatherForecast } = useFetchOneCallWeatherForecast({
    lat: city?.lat,
    lng: city?.lng,
  });
  const router = useRouter();

  return (
    <Box minH='600px' height='100vh'>
      <Flex minH='100%'>
        <Flex width='100%' padding='60px' direction='column'>
          <Box>
            <Button
              aria-label='Back to the previous page'
              borderRadius='full'
              width='40px'
              height='40px'
              mb='20px'
              padding='12px'
              colorScheme='blue'
              onClick={() => router.back()}>
              <ArrowLeft />
            </Button>
          </Box>
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
