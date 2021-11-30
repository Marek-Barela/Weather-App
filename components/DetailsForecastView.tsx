import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { msToTime } from 'common/helpers/msToTime';
import { useFetchCurrentWeather } from 'common/hooks/useFetchCurrentWeather';
import { useFetchFiveDaysWeatherForecast } from 'common/hooks/useFetchFiveDaysWeatherForecast';
import Image from 'next/image';
import { ChevronsDown, Droplet, Wind } from 'react-feather';

interface DetailsForecastViewProps {
  city: string | string[] | undefined;
}

const DetailsForecastView = ({ city }: DetailsForecastViewProps) => {
  const { currentWeather } = useFetchCurrentWeather({ city });
  const { fiveDaysWeather } = useFetchFiveDaysWeatherForecast({ city });

  const weatherIcon = currentWeather?.data.weather[0].icon;

  console.log(fiveDaysWeather);

  return (
    <>
      {currentWeather ? (
        <Box padding='40px' minH='500px' height='100vh' bgColor='#82B7F1'>
          <Flex minH='100%' bgColor='#F2FBFF' borderRadius='50px'>
            <Box width='70%' padding='30px'>
              <Heading as='h2' textTransform='capitalize' textAlign='center'>
                Weather forecast
              </Heading>
            </Box>
            <Flex
              width='30%'
              padding='50px'
              bgColor='#11103A'
              borderRadius='0 50px 50px 0'
              color='white'
              flexDirection='column'
              alignItems='center'>
              <Flex>
                <Image
                  src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
                  width='50px'
                  height='50px'
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
                  {Math.round(currentWeather.data.main.temp)}
                </Text>
                <Text as='span' fontSize='18px' fontWeight='normal'>
                  &#8451;
                </Text>
              </Flex>
              <Text fontSize='2em' mt='10px' textTransform='capitalize'>
                {city}
              </Text>
              <Text fontSize='0.8em'>
                Feels like {Math.round(currentWeather.data.main.feels_like)} - Sunset{' '}
                {msToTime(currentWeather.data.sys.sunset * 1000)}
              </Text>
              <Flex mt='30px'>
                <Flex alignItems='center'>
                  <Wind width='20px' height='20px' />
                  <Text fontSize='0.8em' ml='5px'>
                    {currentWeather.data.wind.speed} m/h
                  </Text>
                </Flex>
                <Flex alignItems='center' ml='15px'>
                  <Droplet width='20px' height='20px' />
                  <Text fontSize='0.8em' ml='5px'>
                    {currentWeather.data.main.humidity} %
                  </Text>
                </Flex>
                <Flex alignItems='center' ml='15px'>
                  <ChevronsDown width='20px' height='20px' />
                  <Text fontSize='0.8em' ml='5px'>
                    {currentWeather.data.main.pressure} hPa
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      ) : null}
    </>
  );
};

export default DetailsForecastView;
