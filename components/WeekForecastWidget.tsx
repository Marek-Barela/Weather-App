import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { OneCallWeatherForecast } from 'pages/api/one-call-weather-forecast';

interface HoursForecastChartProps {
  weatherForecast: OneCallWeatherForecast | undefined;
}

const WeekForecastWidget = ({ weatherForecast }: HoursForecastChartProps) => {
  return (
    <Flex justifyContent='center' mt='20px' flexDirection='column'>
      <Heading as='h3' textAlign='center' fontWeight='bold' fontSize='1.2em'>
        7 Days Forecast
      </Heading>
      <Flex width='100%'>
        {weatherForecast?.data.daily.map((forecast, index) => (
          <Flex
            key={index}
            direction='column'
            padding='15px'
            margin='10px'
            borderRadius='5px'
            bgColor='white'
            alignItems='center'>
            <Text fontSize='0.7em' fontWeight='bold' textAlign='center'>
              {new Date(forecast.dt * 1000).toLocaleString('en-us', {
                weekday: 'long',
              })}
            </Text>
            <Image
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              width='50px'
              height='50px'
            />
            <Flex fontSize='0.7em' justifyContent='center' fontWeight='bold'>
              <Text mr='6px'>{Math.round(forecast.temp.day)}&#8451;</Text> |
              <Text color='gray.400' ml='6px'>
                {Math.round(forecast.temp.night)}&#8451;
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default WeekForecastWidget;
