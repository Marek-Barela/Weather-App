import { render } from '../test-utils';
import PageWrapper from '../../components/PageWrapper';

describe('PageWrapper', () => {
  it('Should render properly without crashing', () => {
    render(<PageWrapper />);
  });
});
