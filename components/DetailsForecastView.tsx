import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import type { City } from 'common/cities';
import { msToTime } from 'common/helpers/msToTime';
import { useFetchOneCallWeatherForecast } from 'common/hooks/useFetchOneCallWeatherForecast';
import CurrentWeatherContainer from 'components/CurrentWeatherContainer';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Search } from 'react-feather';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DetailsForecastViewProps {
  city: City | undefined;
}

const DetailsForecastView = ({ city }: DetailsForecastViewProps) => {
  const [cityName, setCityName] = useState('');
  const { weatherForecast } = useFetchOneCallWeatherForecast({
    lat: city?.lat,
    lng: city?.lng,
  });
  const router = useRouter();

  const categories = weatherForecast?.data.hourly
    .map(hour => msToTime(hour.dt * 1000))
    .slice(0, 24);

  const data = weatherForecast?.data.hourly
    .map(hour => Math.round(hour.temp))
    .slice(0, 24);

  const chartData = {
    options: {
      chart: {
        id: 'line-chart',
      },
      xaxis: {
        categories: categories,
      },
      title: {
        text: '24 hour forecast',
        style: {
          fontSize: '18px',
        },
      },
    },
    series: [
      {
        name: 'Temperature',
        data: data,
      },
    ],
  };

  return (
    <Box minH='600px' height='100vh'>
      <Flex minH='100%'>
        <Flex width='70%' padding='60px' direction='column'>
          <Flex justifyContent='space-between' alignItems='center' mb='20px'>
            <Heading as='h2' fontSize='3em' textTransform='capitalize'>
              Weather forecast
            </Heading>
            <form
              onSubmit={e => {
                e.preventDefault();
                router.push(`/forecast/${cityName}`);
              }}>
              <InputGroup width='350px'>
                <Input
                  variant='solid'
                  value={cityName}
                  onChange={e => setCityName(e.target.value)}
                  boxShadow='0px 0px 10px 0px rgba(0, 0, 0, 0.2)'
                  borderRadius='25px'
                  paddingLeft='25px'
                  placeholder='Search by the city name'
                />
                <InputRightElement width='50px' height='100%'>
                  <Button borderRadius='20px' variant='ghost' type='submit'>
                    <Search />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </form>
          </Flex>
          <Divider />
          <Flex mt='50px' justifyContent='center'>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type='line'
              width='686px'
            />
          </Flex>
          <Divider />
          <Flex justifyContent='center' mt='20px'>
            {weatherForecast?.data.daily.map((forecast, index) => (
              <Flex
                key={index}
                direction='column'
                padding='15px'
                margin='10px'
                borderRadius='5px'
                bgColor='white'
                width='300px'>
                <Text fontSize='0.7em' fontWeight='bold' textAlign='center'>
                  {new Date(forecast.dt * 1000).toLocaleString('en-us', {
                    weekday: 'long',
                  })}
                </Text>
                <Image
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  width='35px'
                  height='55px'
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
        <CurrentWeatherContainer
          weatherForecast={weatherForecast}
          cityName={city?.name}
        />
      </Flex>
    </Box>
  );
};

export default DetailsForecastView;
