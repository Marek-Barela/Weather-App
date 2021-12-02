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
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const asyncRequestWrapper = async () => {
      const weatherForecastDataRequest = await axios
        .get('/api/one-call-weather-forecast', {
          params: { lat, lng },
        })
        .then(res => {
          if (res.data.data === 'Request failed with status code 400') {
            toast({
              title: 'The city was not found',
              description: 'There are no results for the given city',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });

            setIsLoading(false);
            return undefined;
          } else {
            setIsLoading(false);
            return res.data;
          }
        })
        .catch(() => {
          toast({
            title: 'Error',
            description: 'Error occured during city searching',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        });

      setWeatherForecast(weatherForecastDataRequest);
    };

    asyncRequestWrapper();
  }, [lat, lng]);

  return { weatherForecast, isLoading };
};
