import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../components/common/Layout";
import { MainContainer } from "../components/shared";
import LargeSearchComponent from "../components/LargeSearchComponent";
import Apartment from "/public/apartment1.jpg";
import Link from "next/link";
import { homeData } from "../data/homeData";
import { useRouter } from "next/router";
import LocationImage from "/public/images/location.png";
import { colors } from "../utils/themeColors";


const Listings: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <MainContainer>
        <Head>
          <title className="sans">House Listings | Kube Real Estate</title>
          <meta name="description" content="Property Listings" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SerchContainer>
          <LargeSearchComponent type="Homes" filterData={""}/>
        </SerchContainer>
        <ListingsDiv>
          {homeData.length > 0 && homeData.map((home) => (
            <Link href={`/listings/${home?.id}`} key={home.id} legacyBehavior>
            <ListingsCard>
              <ImageDiv>
                <Image
                  src={home?.images?.[0] || Apartment}
                  alt={home?.name}
                  objectFit="cover"
                  layout="fill"
                  style={{
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                  }}
                />
              </ImageDiv>
              <InfoDiv>
                <h2>{home?.price}</h2>
                <p>
                  {home?.id === "2534d763-6ba4-479c-a233-a5fe09dd8d1d" ? (
                    <p>{home?.name.slice(0,70)}...</p>
                  ) : (
                    <>
                    <strong>4</strong> bds | <strong>3</strong> ba |{" "}
                  <strong>2000</strong> sqft
                    </>
                  )}
                  
                </p>
                <p><Image src={LocationImage} alt="" height={15} width={15} />&nbsp;{home?.location}</p>
              </InfoDiv>
            </ListingsCard>
          </Link>
          ))}
          {homeData.length === 0 && (
            <NoListingsDiv><h1>Sorry - No home listings available at the moment</h1></NoListingsDiv>
          )}
          
        </ListingsDiv>
      </MainContainer>
    </Layout>
  );
};
export default Listings;

const SerchContainer = styled.div`
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
  justify-content: space-around;
  min-height: 50vh;
  margin-top: 3em;
  margin-bottom: 3em;

  ::after {
    content: "";
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
  }

  > p {
    font-size: 1em;
    font-weight: 400;

    /* :nth-child(1){
        margin-top: 1em;
    }

    :nth-child(2){
        margin-bottom: auto;
    } */
  }
`;

const NoListingsDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  margin-top: 1em;

  > h1 {
    font-size: 1.5em;
    font-weight: 500;
  }
`;
