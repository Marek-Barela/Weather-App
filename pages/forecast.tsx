import DetailsForecastView from 'components/DetailsForecastView';
import PageWrapper from 'components/PageWrapper';
import type { NextPage } from 'next';

const DetailsForecastPage: NextPage = () => {
  return (
    <PageWrapper>
      <DetailsForecastView />
    </PageWrapper>
  );
};

export default DetailsForecastPage;
