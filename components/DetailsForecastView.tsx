import { Box, Text } from '@chakra-ui/react';
import { useFetchCurrentWeather } from 'common/hooks/useFetchCurrentWeather';

interface DetailsForecastViewProps {
  city: string | string[] | undefined;
}

const DetailsForecastView = ({ city }: DetailsForecastViewProps) => {
  const { currentWeather } = useFetchCurrentWeather({ city });

  console.log(currentWeather);

  return (
    <Box>
      <Text>{city}</Text>
    </Box>
  );
};

export default DetailsForecastView;
