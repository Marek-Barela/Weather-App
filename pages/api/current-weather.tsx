import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export type CurrentWeather = {
  data: {
    base: string;
    clouds: { all: number };
    cod: number;
    coord: { lon: number; lat: number };
    dt: number;
    id: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    name: string;
    snow: { '1h': string };
    sys: { type: number; id: number; country: string; sunrise: number; sunset: number };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: { speed: number; deg: number; gust: number };
  };
};

export default async function CurrentWeather(
  req: NextApiRequest,
  res: NextApiResponse<CurrentWeather>
) {
  if (req.method === 'GET') {
    const param = encodeURI(req.query.city as string);

    const currentWeatherDataRequest = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=${process.env.NEXT_PRIVATE_API_FORECAST_KEY}`
      )
      .then(res => res.data)
      .catch(err => {
        throw err.message;
      });

    res.status(200).json({ data: currentWeatherDataRequest });
  }
}
