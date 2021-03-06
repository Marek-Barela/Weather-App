import cities from 'cities.json';

export interface City {
  id?: number;
  country: string;
  lat: string;
  lng: string;
  name: string;
}

const warsaw: City = {
  country: 'PL',
  name: 'Warszawa',
  lat: '52.22977',
  lng: '21.01178',
};

// There is no native name for capital city so let's replace it
const citiesJSONToArray: City[] = Object.values(cities).map(city =>
  city.name === 'Warsaw' && city.country === 'PL' ? warsaw : city
);

// Lets add id to each element
const citiesList = citiesJSONToArray.map((city, index) => {
  return { ...city, id: index };
});

export { citiesList };
