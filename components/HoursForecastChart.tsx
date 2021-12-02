import { Box, Heading } from '@chakra-ui/react';
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

  const data =
    weatherForecast?.data.hourly.map(hour => Math.round(hour.temp)).slice(0, 24) || [];

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
    <Box alignItems='center' width={{ base: '100%', lg: '50%' }}>
      <Heading as='h3' textAlign='center' fontWeight='bold' fontSize='1.2em'>
        24 hour Forecast
      </Heading>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type='line'
        width='100%'
      />
    </Box>
  );
};

export default HoursForecastChart;
