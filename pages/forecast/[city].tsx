import { citiesList } from 'common/cities';
import DetailsForecastView from 'components/DetailsForecastView';
import PageWrapper from 'components/PageWrapper';
import type { GetServerSideProps } from 'next';

const getCity = (city: string) => {
  const splitCity = city.trim().split('-');
  const id = splitCity[splitCity.length - 1];
  return citiesList.find(city => city.id.toString() === id);
};

interface DetailsForecastPageProps {
  url: string;
}

const DetailsForecastPage = ({ url }: DetailsForecastPageProps) => {
  const city = getCity(url);

  return (
    <PageWrapper>
      <DetailsForecastView city={city} />
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: { url: context?.params?.city },
  };
};

export default DetailsForecastPage;
