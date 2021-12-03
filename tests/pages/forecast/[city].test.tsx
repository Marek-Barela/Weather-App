import type { GetServerSidePropsContext } from 'next';
import DetailsForecastPage, { getServerSideProps } from 'pages/forecast/[city]';
import { ParsedUrlQuery } from 'querystring';
import { render } from 'tests/test-utils';

describe('SearchForecastPage', () => {
  it('Should render properly without crashing', () => {
    render(<DetailsForecastPage url='wrocław-89763' />);
  });

  it('should test getServerSideProps', async () => {
    const context = {
      params: { city: 'wrocław-89763' } as ParsedUrlQuery,
    };
    const value = await getServerSideProps(context as GetServerSidePropsContext);

    expect(value).toEqual({ props: { url: 'wrocław-89763' } });
  });
});
