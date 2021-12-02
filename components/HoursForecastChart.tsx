import { Flex, Heading } from '@chakra-ui/react';
import { msToTime } from 'common/helpers/msToTime';
import dynamic from 'next/dynamic';
import { OneCallWeatherForecast } from 'pages/api/one-call-weather-forecast';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface HoursForecastChartProps {
  weatherForecast: OneCallWeatherForecast | undefined;
}

const HoursForecastChart = ({ weatherForecast }: HoursForecastChartProps) => {
  const categories = weatherForecast?.data.hourly
    .map(hour => msToTime(hour.dt * 1000))
    .slice(0, 24);

  const data = weatherForecast?.data.hourly
    .map(hour => Math.round(hour.temp))
    .slice(0, 24);

  const chartData = {
    options: {
      chart: {
        id: 'weather-forecast',
      },
      xaxis: {
        categories: categories,
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
    <Flex mt='50px' alignItems='center' flexDirection='column'>
      <Heading as='h3' textAlign='center' fontWeight='bold' fontSize='1.2em'>
        24 hour Forecast
      </Heading>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type='line'
        width='686px'
      />
    </Flex>
  );
};

export default HoursForecastChart;
