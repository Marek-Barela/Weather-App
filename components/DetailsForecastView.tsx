import { Box, Flex, Heading } from '@chakra-ui/react';
import { useFetchFiveDaysWeatherForecast } from 'common/hooks/useFetchFiveDaysWeatherForecast';
import CurrentWeatherContainer from 'components/CurrentWeatherContainer';

interface DetailsForecastViewProps {
  city: string | string[] | undefined;
}

const DetailsForecastView = ({ city }: DetailsForecastViewProps) => {
  const { fiveDaysWeather } = useFetchFiveDaysWeatherForecast({ city });

  console.log(fiveDaysWeather);

  return (
    <Box padding='40px' minH='500px' height='100vh' bgColor='#82B7F1'>
      <Flex minH='100%' bgColor='#F2FBFF' borderRadius='50px'>
        <Box width='70%' padding='30px'>
          <Heading as='h2' textTransform='capitalize' textAlign='center'>
            Weather forecast
          </Heading>
        </Box>
        <CurrentWeatherContainer city={city} />
      </Flex>
    </Box>
  );
};

export default DetailsForecastView;
