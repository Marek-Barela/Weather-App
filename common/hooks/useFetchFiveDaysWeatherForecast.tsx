import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { FiveDaysWeatherForecast } from 'pages/api/five-days-weather-forecast';
import { useEffect, useState } from 'react';

interface useFetchFiveDaysWeatherForecastProps {
  city: string | string[] | undefined;
}

export const useFetchFiveDaysWeatherForecast = ({
  city,
}: useFetchFiveDaysWeatherForecastProps) => {
  const [fiveDaysWeather, setFiveDaysWeather] = useState<FiveDaysWeatherForecast>();
  const toast = useToast();

  useEffect(() => {
    const asyncRequestWrapper = async () => {
      if (city === undefined) return;
      const fiveDaysWeatherDataRequest = await axios
        .get('/api/five-days-weather-forecast', {
          params: { city },
        })
        .then(res => res.data)
        .catch(() => {
          toast({
            title: 'The city was not found',
            description: 'There are no results for the given city',
            status: 'info',
            duration: 5000,
            isClosable: true,
          });
        });

      setFiveDaysWeather(fiveDaysWeatherDataRequest);
    };

    asyncRequestWrapper();
  }, [city]);

  return { fiveDaysWeather };
};
