import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface useFetchCurrentWeatherProps {
  city: string | string[] | undefined;
}

export const useFetchCurrentWeather = ({ city }: useFetchCurrentWeatherProps) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const asyncRequestWrapper = async () => {
      if (city === undefined) return;
      const currentWeatherDataRequest = await axios
        .get('/api/current-weather', {
          params: { city },
        })
        .then(res => res.data.weather)
        .catch(() => {
          toast({
            title: 'The city was not found',
            description: 'There are no results for the given city',
            status: 'info',
            duration: 5000,
            isClosable: true,
          });
        });

      setCurrentWeather(currentWeatherDataRequest);
    };

    asyncRequestWrapper();
  }, [city]);

  return { currentWeather };
};
