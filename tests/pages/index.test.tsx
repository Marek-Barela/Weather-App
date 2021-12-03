import SearchForecastPage from 'pages/index';
import { render } from 'tests/test-utils';

describe('SearchForecastPage', () => {
  it('Should render properly without crashing', () => {
    render(<SearchForecastPage />);
  });
});
