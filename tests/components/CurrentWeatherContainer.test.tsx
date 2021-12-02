import CurrentWeatherContainer from 'components/CurrentWeatherContainer';
import { advanceTo } from 'jest-date-mock';
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
  daily: [],
  hourly: [],
  lat: 51.1,
  lon: 17.0333,
  minutely: [],
};

advanceTo(new Date('2022-01-01'));

describe('CurrentWeatherContainer', () => {
  it('Should render properly data sets without crashin', async () => {
    render(
      <CurrentWeatherContainer
        weatherForecast={{
          data: mockData,
        }}
        cityName='Wrocław'
      />
    );

    await screen.findByText('Wrocław');
    await screen.findByText('Today');
    await screen.findByText('1.01.2022');
    await screen.findByText(/Sunset/i);
    await screen.findByText(/14:48/i);
    await screen.findByText('2.24 m/h');
    await screen.findByText('61 %');
    await screen.findByText('988 hPa');
  });

  it('Should render spinner', async () => {
    render(<CurrentWeatherContainer weatherForecast={undefined} cityName='Wrocław' />);

    await screen.findByLabelText('waiting for data');
  });
});
