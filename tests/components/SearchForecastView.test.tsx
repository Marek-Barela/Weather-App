import userEvent from '@testing-library/user-event';
import SearchForecastView from 'components/SearchForecastView';
import { render, screen } from 'tests/test-utils';

describe('SearchForecastView', () => {
  it('User can enter city name and see results in search bar', async () => {
    render(<SearchForecastView />);

    const cityInput = await screen.findByLabelText('Enter city name');
    userEvent.type(cityInput, 'Wro');

    const cityResult = await screen.findByText('Wronki - PL');
    await screen.findAllByText('Wroxall - GB');
    await screen.findByText('Wroughton - GB');
    await screen.findByText('Wrotham - GB');

    userEvent.clear(cityInput);
    userEvent.type(cityInput, 'Wrocław');

    await screen.findByText('Wrocław - PL');

    expect(cityResult).not.toBeVisible();
  });

  it('User can select city and go to details page', async () => {
    render(<SearchForecastView />);

    const cityInput = await screen.findByLabelText('Enter city name');
    userEvent.type(cityInput, 'Wrocław');

    const result = await screen.findByText('Wrocław - PL');

    userEvent.click(result);
  });

  it('User can select popular city and go to details page', async () => {
    render(<SearchForecastView />);

    const popularCity = await screen.findByLabelText(/select london/i);

    userEvent.click(popularCity);
  });

  it('Check if input hide results when is not focus', async () => {
    render(<SearchForecastView />);

    const cityInput = await screen.findByLabelText('Enter city name');
    userEvent.type(cityInput, 'Wa');

    const cityResult = await screen.findByText('Warth - AT');

    expect(cityResult).toBeVisible();

    const title = await screen.findByText('Weather Forecast');
    userEvent.click(title);

    expect(cityResult).not.toBeVisible();
  });
});
