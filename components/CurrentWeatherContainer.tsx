import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { msToTime } from 'common/helpers/msToTime';
import Image from 'next/image';
import type { OneCallWeatherForecast } from 'pages/api/one-call-weather-forecast';
import { ChevronsDown, Droplet, Wind } from 'react-feather';

interface CurrentWeatherContainerProps {
  weatherForecast: OneCallWeatherForecast | undefined;
  cityName: string | undefined;
}

const CurrentWeatherContainer = ({
  weatherForecast,
  cityName,
}: CurrentWeatherContainerProps) => {
  const currentWeather = weatherForecast?.data.current;

  return (
    <Flex
      padding='50px'
      width={{ base: '100%', lg: '50%' }}
      bgColor='#11103A'
      color='white'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      mb={{ base: '30px', lg: '0px' }}>
      {currentWeather ? (
        <>
          <Flex>
            <Image
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
              width='50px'
              height='50px'
              alt={`${currentWeather.weather[0].description}`}
            />
            <Box>
              <Text fontSize='1.2em' fontWeight='bold'>
                Today
              </Text>
              <Text fontSize='0.6em' fontWeight='bold'>
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
          </Flex>
          <Flex mt='30px'>
            <Text fontSize='5em' position='relative' lineHeight='70px'>
              {Math.round(currentWeather.temp)}
            </Text>
            <Text as='span' fontSize='18px' fontWeight='normal'>
              &#8451;
            </Text>
          </Flex>
          <Text fontSize='2em' mt='10px' textTransform='capitalize'>
            {cityName}
          </Text>
          <Text fontSize='0.8em'>
            Feels like {Math.round(currentWeather.feels_like)} - Sunset{' '}
            {msToTime(currentWeather.sunset * 1000)}
          </Text>
          <Flex mt='30px'>
            <Flex alignItems='center'>
              <Wind width='20px' height='20px' />
              <Text fontSize='0.8em' ml='5px'>
                {currentWeather.wind_speed} m/h
              </Text>
            </Flex>
            <Flex alignItems='center' ml='15px'>
              <Droplet width='20px' height='20px' />
              <Text fontSize='0.8em' ml='5px'>
                {currentWeather.humidity} %
              </Text>
            </Flex>
            <Flex alignItems='center' ml='15px'>
              <ChevronsDown width='20px' height='20px' />
              <Text fontSize='0.8em' ml='5px'>
                {currentWeather.pressure} hPa
              </Text>
            </Flex>
          </Flex>
        </>
      ) : (
        <Spinner aria-label='waiting for data' size='xl' thickness='4px' />
      )}
    </Flex>
  );
};

export default CurrentWeatherContainer;
