import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { OneCallWeatherForecast } from 'pages/api/one-call-weather-forecast';
import { useEffect, useState } from 'react';

interface useFetchOneCallWeatherForecastProps {
  lat: number | undefined;
  lng: number | undefined;
}

export const useFetchOneCallWeatherForecast = ({
  lat,
  lng,
}: useFetchOneCallWeatherForecastProps) => {
  const [weatherForecast, setWeatherForecast] = useState<OneCallWeatherForecast>();
  const toast = useToast();

  useEffect(() => {
    const asyncRequestWrapper = async () => {
      if (lat === undefined || lng === undefined) return;
      const weatherForecastDataRequest = await axios
        .get('/api/one-call-weather-forecast', {
          params: { lat, lng },
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

      setWeatherForecast(weatherForecastDataRequest);
    };

    asyncRequestWrapper();
  }, [lat, lng]);

  return { weatherForecast };
};
