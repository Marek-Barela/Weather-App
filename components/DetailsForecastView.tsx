import { Box, Divider, Flex } from '@chakra-ui/react';
import type { City } from 'common/cities';
import { useFetchOneCallWeatherForecast } from 'common/hooks/useFetchOneCallWeatherForecast';
import CurrentWeatherContainer from 'components/CurrentWeatherContainer';
import HoursForecastChart from 'components/HoursForecastChart';
import WeekForecastWidget from 'components/WeekForecastWidget';

interface DetailsForecastViewProps {
  city: City | undefined;
}

const DetailsForecastView = ({ city }: DetailsForecastViewProps) => {
  const { weatherForecast } = useFetchOneCallWeatherForecast({
    lat: city?.lat,
    lng: city?.lng,
  });

  return (
    <Box minH='600px' height='100vh'>
      <Flex minH='100%'>
        <Flex width='100%' padding='60px' direction='column'>
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
