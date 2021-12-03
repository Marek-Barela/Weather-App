import WeekForecastWidget from 'components/WeekForecastWidget';
import { render, screen } from 'tests/test-utils';

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
  daily: [
    {
      clouds: 100,
      dew_point: 0.47,
      dt: 1638529200,
      feels_like: { day: -0.63, night: 4.89, eve: 1.3, morn: -1.41 },
      humidity: 80,
      moon_phase: 0.97,
      moonrise: 1638511800,
      moonset: 1638544560,
      pop: 1,
      pressure: 1012,
      rain: 8.52,
      sunrise: 1638516326,
      sunset: 1638546950,
      temp: { day: 3.89, eve: 5.05, max: 7.79, min: 1.26, morn: 1.75, night: 7.79 },
      uvi: 0.19,
      weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }],
      wind_deg: 195,
      wind_gust: 16.5,
      wind_speed: 6.37,
    },
    {
      clouds: 97,
      dew_point: 5.27,
      dt: 1638615600,
      feels_like: { day: 5.91, night: 2.48, eve: 4.05, morn: 11 },
      humidity: 77,
      moon_phase: 0,
      moonrise: 1638603480,
      moonset: 1638633360,
      pop: 1,
      pressure: 1001,
      rain: 7.59,
      sunrise: 1638602799,
      sunset: 1638633325,
      temp: { day: 9.33, eve: 7.43, max: 12.15, min: 5.61, morn: 11.57, night: 5.61 },
      uvi: 0.3,
      weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }],
      wind_deg: 233,
      wind_gust: 18.05,
      wind_speed: 8.43,
    },
    {
      clouds: 33,
      dew_point: 1.34,
      dt: 1638702000,
      feels_like: { day: 3.72, night: 1.69, eve: 2.85, morn: 2.13 },
      humidity: 77,
      moon_phase: 0.04,
      moonrise: 1638694860,
      moonset: 1638722940,
      pop: 0.98,
      pressure: 1005,
      rain: 1.46,
      sunrise: 1638689269,
      sunset: 1638719704,
      temp: { day: 5.33, eve: 5.25, max: 6.08, min: 3.23, morn: 4.27, night: 4.47 },
      uvi: 0.56,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      wind_deg: 233,
      wind_gust: 9.72,
      wind_speed: 4.59,
    },
  ],
  hourly: [],
  lat: 51.1,
  lon: 17.0333,
  minutely: [],
};

describe('WeekForecastWidget', () => {
  it('Should render properly without crashing and contain correct weather', async () => {
    render(
      <WeekForecastWidget
        weatherForecast={{
          data: mockData,
        }}
      />
    );

    await screen.findByText('Friday');
    await screen.findByText('Saturday');
    await screen.findByText('Sunday');
  });
});
