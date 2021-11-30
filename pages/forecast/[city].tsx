import DetailsForecastView from 'components/DetailsForecastView';
import PageWrapper from 'components/PageWrapper';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const DetailsForecastPage: NextPage = () => {
  const router = useRouter();

  return (
    <PageWrapper>
      <DetailsForecastView city={router.query.city} />
    </PageWrapper>
  );
};

export default DetailsForecastPage;
