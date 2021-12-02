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
  const { weatherForecast, isLoading } = useFetchOneCallWeatherForecast({
    lat: city?.lat,
    lng: city?.lng,
  });
  const router = useRouter();

  const cityNotFound = !isLoading && weatherForecast === undefined;

  return (
    <>
      {cityNotFound ? null : (
        <Box minH='600px' height='100vh'>
          <Flex minH='100%'>
            <Flex width='100%' padding='60px' direction='column'>
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
      )}
    </>
  );
};

export default DetailsForecastView;
