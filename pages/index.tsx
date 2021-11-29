import PageWrapper from 'components/PageWrapper';
import SearchForecastView from 'components/SearchForecastView';
import type { NextPage } from 'next';

const SearchForecastPage: NextPage = () => {
  return (
    <PageWrapper>
      <SearchForecastView />
    </PageWrapper>
  );
};

export default SearchForecastPage;
