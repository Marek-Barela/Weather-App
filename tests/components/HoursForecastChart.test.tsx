import HoursForecastChart from 'components/HoursForecastChart';
import { render } from 'tests/test-utils';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

const mockData = {
  current: {
    clouds: 20,
    dew_point: -1.97,
    dt: 1638452483,
    feels_like: 2.71,
    humidity: 61,
    pressure: 988,
    sunrise: 1638426899,
    sunset: 1638456480,
    temp: 4.64,
    uvi: 0.1,
    visibility: 10000,
    weather: [
      {
        description: 'few clouds',
        icon: '02d',
        id: 801,
        main: 'Clouds',
      },
    ],
    wind_deg: 270,
    wind_gust: 6.71,
    wind_speed: 2.24,
  },
  daily: [],
  hourly: [
    {
      clouds: 19,
      dew_point: 0.25,
      dt: 1638500400,
      feels_like: -0.24,
      humidity: 90,
      pop: 0,
      pressure: 1015,
      temp: 1.71,
      uvi: 0,
      visibility: 10000,
      weather: [],
      wind_deg: 229,
      wind_gust: 4.09,
      wind_speed: 1.82,
    },
    {
      clouds: 0,
      dew_point: 0.4,
      dt: 1638504000,
      feels_like: -1.52,
      humidity: 94,
      pop: 0,
      pressure: 1015,
      temp: 1.26,
      uvi: 0,
      visibility: 10000,
      weather: [],
      wind_deg: 237,
      wind_gust: 6.4,
      wind_speed: 2.49,
    },
    {
      clouds: 19,
      dew_point: 0.13,
      dt: 1638507600,
      feels_like: -1.41,
      humidity: 89,
      pop: 0,
      pressure: 1015,
      temp: 1.75,
      uvi: 0,
      visibility: 10000,
      weather: [],
      wind_deg: 223,
      wind_gust: 7.63,
      wind_speed: 3.02,
    },
  ],
  lat: 51.1,
  lon: 17.0333,
  minutely: [],
};

describe('HoursForecastChart', () => {
  it('Should render properly without crashing', () => {
    render(<HoursForecastChart weatherForecast={{ data: mockData }} />);
  });
});
