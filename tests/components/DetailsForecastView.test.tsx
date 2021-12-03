import DetailsForecastView from 'components/DetailsForecastView';
import { render } from 'tests/test-utils';

const mockCity = {
  id: 1,
  country: 'PL',
  name: 'Warszawa',
  lat: 52.22977,
  lng: 21.01178,
};

describe('DetailsForecastView', () => {
  it('Should render properly without crashin', async () => {
    render(<DetailsForecastView city={mockCity} />);
  });
});
