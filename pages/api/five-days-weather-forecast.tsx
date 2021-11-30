import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface ListItem {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    grnd_level: number;
    humidity: number;
    sea_level: number;
    temp_kf: number;
  };
  pop: number;
  snow: { '3h': number };
  sys: { pod: string };
  visibility: number;
  weather: Weather[];
  wind: { speed: number; deg: number; gust: number };
}

export type FiveDaysWeatherForecast = {
  data: {
    city: {
      coord: { lat: number; lon: number };
      country: string;
      id: number;
      name: string;
      population: number;
      sunrise: number;
      sunset: number;
      timezone: number;
    };
    cnt: number;
    cod: string;
    list: ListItem[];
  };
};

export default async function FiveDaysWeatherForecast(
  req: NextApiRequest,
  res: NextApiResponse<FiveDaysWeatherForecast>
) {
  if (req.method === 'GET') {
    const param = encodeURI(req.query.city as string);

    const fiveDaysWeatherForecastDataRequest = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${param}&units=metric&appid=${process.env.NEXT_PRIVATE_API_FORECAST_KEY}`
      )
      .then(res => res.data)
      .catch(err => {
        throw err.message;
      });

    res.status(200).json({ data: fiveDaysWeatherForecastDataRequest });
  }
}
