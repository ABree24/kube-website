import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout } from '../components/common/Layout';
import { MainContainer } from '../components/shared';
import LargeSearchComponent from '../components/LargeSearchComponent';
import { LandData } from '../data/landData';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '../components/elements';
import LocationImage from "/public/images/location.png";
import { colors } from '../utils/themeColors';

const LandListings: NextPage = () => {
  const [data, setData] = useState(LandData);
  const router = useRouter();
  const { location, price } = router.query;

  useEffect(() => {
    const { location, price } = router.query;
    // TODO: Filter by price - Expound the filter functionality and make it reusable
    if (location && price) {
      const filteredData = LandData.filter((land) => {
        return land.location
          .toLowerCase()
          .includes(location.toString().toLowerCase());
      });
      setData(filteredData);
    }
  }, [router.query]);

  const filterData = (location: string, price: string) => {
    const filteredData = LandData.filter((land) => {
      return land.location.toLowerCase().includes(location.toLowerCase());
    });
    setData(filteredData);
  };
  return (
    <Layout>
      <MainContainer>
        <Head>
          <title className="sans">Land Listings | Kube Real Estate</title>
          <meta name="description" content="Property Listings" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SearchContainer>
          <LargeSearchComponent type="Land" filterData={filterData} />
        </SearchContainer>
        <ListingsDiv>
          {data &&
            data.map((land) => (
              <Link href={`/landListings/${land.id}`} key={land.id} legacyBehavior>
                <ListingsCard>
                  <ImageDiv>
                    <Image
                      src={land.images[0]}
                      alt={land?.name}
                      objectFit="cover"
                      layout="fill"
                      style={{
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                      }}
                    />
                  </ImageDiv>
                  <InfoDiv>
                    <h2>
                      <strong>{land?.size}</strong>{' '}
                      {land?.sizeInAcres ? 'Acres' : ''}
                    </h2>
                    <p>
                      KES <strong>{land?.price}</strong>
                    </p>
                    <p><Image src={LocationImage} alt="" height={15} width={15} />&nbsp; {land?.location}</p>
                  </InfoDiv>
                </ListingsCard>
              </Link>
            ))}

          {data.length === 0 && (
            <NoListingsDiv>
              <h1>
                Sorry - No land listings available in {location} the moment
              </h1>
              <Button defaultType onClick={() => setData(LandData)}>
                Reset Filter
              </Button>
            </NoListingsDiv>
          )}
        </ListingsDiv>
      </MainContainer>
    </Layout>
  );
};
export default LandListings;

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: auto;
`;

const ListingsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  min-height: 50vh;
  margin-top: 3em;
  margin-bottom: 3em;

  ::after {
    content: '';
    flex: auto;
  }
`;

const ListingsCard = styled.div`
  height: 25em;
  width: 20em;
  margin: 1em;
  cursor: pointer;
  border-radius: 12px;
  background: ${colors.white};
  color: ${colors.black};
  box-shadow: 13px 13px 37px #dedede, -13px -13px 37px #ffffff;

  :hover {
    transition: 0.2s 0.5s ease-in-out;
    box-shadow: 43px 43px 45px #dedede, -43px -43px 45px #ffffff;
  }
`;

const ImageDiv = styled.div`
  height: 70%;
  width: 100%;
  border-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: relative;
`;

const InfoDiv = styled.div`
  height: 30%;
  padding: 0.2em 1em;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;

  > h2 {
    font-size: 1.3em;
    font-weight: 500;
    margin-top: -1.2em;
  }

  > p {
    font-size: 1em;
    font-weight: 400;

    :nth-child(2) {
      font-size: 1.2em;
    }

    /* :nth-child(2){
        margin-bottom: auto;
    }  */
  }
`;

const NoListingsDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100%;
  margin-top: 1em;

  > h1 {
    font-size: 1.5em;
    font-weight: 500;
    margin-bottom: 1em;
    text-align: center;
  }
`;
