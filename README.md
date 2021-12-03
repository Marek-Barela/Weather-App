![alt text](https://github.com/Marek-Barela/Weather-App/blob/main/public/project-image.png?raw=true)

# Weather Forecast

React / Next.js application for providing weather information [Open Weather API](https://openweathermap.org/api)

## Features

- Weather forecast for the given city name
- Providing information about the current weather
- 24 hour weather forecast
- Forecast for 7 days
- List of popular cities

## Live

You can see the full project [here](https://weather-forecast-next.herokuapp.com/)

## Tech - Stack

- HTML5
- CSS3
- Typescript
- Next.js
- ChakraUI
- Axios
- ChartJS
- Jest / React Testing Library

## Installation

Clone repository, install the dependencies and start the server.

```sh
npm install
```

or

```sh
yarn
```

After installation run command:

```sh
npm run dev
```

or

```sh
yarn run dev
```

Environment variables are protected in the back-end, so informations about API_KEY are not exposed in the browser

You can create file in the root:

```sh
.env.local
```

And you can paste you API_KEY from [Open Weather API](https://openweathermap.org/api) like so:

```sh
NEXT_PRIVATE_API_FORECAST_KEY=xyzsupersecureapikey
```

To run tests use this command:

```sh
npm run test
```

or

```sh
yarn run test
```

For generating coverage folder use:

```sh
npm run coverage
```

or

```sh
yarn run coverage
```
