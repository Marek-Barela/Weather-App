import userEvent from '@testing-library/user-event';
import DetailsForecastView from 'components/DetailsForecastView';
import { render, screen } from 'tests/test-utils';

const mockCity = {
  id: 1,
  country: 'PL',
  name: 'Warszawa',
  lat: '52.22977',
  lng: '21.01178',
};

describe('DetailsForecastView', () => {
  it('Should render properly without crashing and back to previous page', async () => {
    render(<DetailsForecastView city={mockCity} />);

    const backButton = await screen.findByLabelText('Back to the previous page');
    userEvent.click(backButton);
  });

  it('Should render no results message and back to previous page', async () => {
    render(<DetailsForecastView city={undefined} />);

    await screen.findByText('There are no results for this city');
    const backButton = await screen.findByLabelText('Back to the previous page');
    userEvent.click(backButton);
  });
});
