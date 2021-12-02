import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface DailyWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: { day: number; night: number; eve: number; morn: number };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  uvi: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

interface HourlyWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  rain: { '1h': number };
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

interface MinutelyWeather {
  dt: number;
  precipitation: number;
}

export type OneCallWeatherForecast = {
  data: {
    lat: number;
    lon: number;
    current: {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: number;
      humidity: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: number;
      uvi: number;
      visibility: number;
      weather: Weather[];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    };
    daily: DailyWeather[];
    hourly: HourlyWeather[];
    minutely: MinutelyWeather[];
  };
};

export default async function oneCallWeatherForecast(
  req: NextApiRequest,
  res: NextApiResponse<OneCallWeatherForecast>
) {
  if (req.method === 'GET') {
    const lat = encodeURI(req.query.lat as string);
    const lng = encodeURI(req.query.lng as string);

    const weatherForecastDataRequest = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.NEXT_PRIVATE_API_FORECAST_KEY}`
      )
      .then(res => res.data)
      .catch(err => err.message);

    res.status(200).json({ data: weatherForecastDataRequest });
  }
}
