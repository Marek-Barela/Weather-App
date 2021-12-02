import PageWrapper from 'components/PageWrapper';
import { render } from 'tests/test-utils';

describe('PageWrapper', () => {
  it('Should render properly without crashing', () => {
    render(<PageWrapper />);
  });
});
