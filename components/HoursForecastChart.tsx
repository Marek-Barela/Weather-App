import { Flex, Spinner } from '@chakra-ui/react';
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { msToTime } from 'common/helpers/msToTime';
import { OneCallWeatherForecast } from 'pages/api/one-call-weather-forecast';
import { Line } from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  resposive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '24 hour forecast',
      font: {
        size: 20,
      },
      color: 'black',
    },
  },
  maintainAspectRatio: false,
};

interface HoursForecastChartProps {
  weatherForecast: OneCallWeatherForecast | undefined;
}

const HoursForecastChart = ({ weatherForecast }: HoursForecastChartProps) => {
  const categories =
    weatherForecast?.data.hourly.map(hour => msToTime(hour.dt * 1000)).slice(0, 24) || [];

  const data =
    weatherForecast?.data.hourly.map(hour => Math.round(hour.temp)).slice(0, 24) || [];

  const dataChartJs = {
    labels: categories,
    datasets: [
      {
        label: 'Temperature',
        data: data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Flex
      alignItems={weatherForecast ? 'flex-end' : 'center'}
      justifyContent='center'
      width={{ base: '100%', lg: '50%' }}
      marginX={{ base: '0', lg: '25px' }}
      minH='350px'>
      {weatherForecast ? (
        <Line options={options} data={dataChartJs} />
      ) : (
        <Spinner size='xl' thickness='4px' />
      )}
    </Flex>
  );
};

export default HoursForecastChart;
