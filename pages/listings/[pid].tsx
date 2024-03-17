import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Layout } from "../../components/common/Layout";
import { Button } from "../../components/elements";
import ImageGrid from "../../components/ImageGrid";
import { BookViewingAgentDiv, MainContainer } from "../../components/shared";
import { homeData } from "../../data/homeData";
import { breakpoints } from "../../utils/breakpoints";
import ApartmentImage from "/public/apartment1.jpg";

const Listing: NextPage = () => {
  const [homeItem, setHomeItem] = useState(null);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    const { pid } = router.query;
    if (pid) {
      const filteredData = homeData.filter((home) => {
        return home.id.toString() === pid;
      });
      setHomeItem(filteredData?.[0]);
    }
  }, [router.query]);

  return (
    <Layout>
      <MainContainerExtended>
        <Head>
          <title className="sans">{homeItem?.name} | Kube Real Estate</title>
          <meta name="description" content={homeItem?.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TitleDiv>
          <h2>{homeItem?.name}</h2>
        </TitleDiv>
        <ImageCollageDiv>
          <ImageGrid images={homeItem?.images} />
        </ImageCollageDiv>
        <DetailsDiv>
          <PropertyPriceDiv>
            <div>
            <h2>{homeItem?.price}</h2>
            {homeItem?.id !== "2534d763-6ba4-479c-a233-a5fe09dd8d1d" && (
              <p>
              4{" "}
              <Image
                src="https://img.icons8.com/ios/512/bedroom.png"
                alt=""
                height={150}
                width={150}
              />{" "}
              | 3{" "}
              <Image
                src="https://img.icons8.com/ios-glyphs/512/shower.png"
                alt=""
                height={150}
                width={150}
              />{" "}
              | 2500 Sqrft
            </p>
            )}
            
            </div>
            
            <div>
              <p>{homeItem?.description}</p>
            </div>
          </PropertyPriceDiv>
          <div>
            <BookViewingAgentDiv>
              <p>{homeItem?.agent?.name}</p>
              <p>{homeItem?.agent?.phone || "No contact provided"}</p>
              <Link href={`tel:${homeItem?.agent?.phone}`} legacyBehavior>
                <Button defaultType width={"15em"}>
                  Book a Viewing
                </Button>
              </Link>
            </BookViewingAgentDiv>
          </div>
        </DetailsDiv>
      </MainContainerExtended>
    </Layout>
  );
};

export default Listing;

const MainContainerExtended = styled(MainContainer)`
  padding: 3em 10em;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;

  > p {
    font-size: 1.1em;
    margin-bottom: 2em;
    cursor: pointer;

    > span {
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 2em 1em;
  }
`;

const TitleDiv = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #134275;

  > h2 {
    font-size: 1.7em;
    font-weight: 550;
    letter-spacing: 1.1px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    > h2 {
      font-size: 1.5em;
      letter-spacing: normal;
    }
  }
`;

const ImageCollageDiv = styled.div`
  min-height: 50vh;
  margin-top: 1.6em;
  width: 100%;
`;

const DetailsDiv = styled.div`
  margin-top: 1.5em;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;

  > div {
    /* background-color: blueviolet; */

    :nth-child(1) {
      width: 60%;
    }

    :nth-child(2) {
      width: 40%;
      padding: 0em 0em 1.5em 1.5em;
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    flex-flow: column nowrap;

    > div {
      :nth-child(1) {
        width: 100%;
      }

      :nth-child(2) {
        width: 100%;
        padding: 0em 0em 1.5em 1.5em;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

const PropertyPriceDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  /* background-color: blueviolet; */
  > h2 {
    font-size: 1.7em;
  }
  > p {
    margin-left: 3em;
    font-size: 1.5em;
  }

  > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;

    > h2 {
      font-size: 1.7em;
    }
    > p {
      margin-left: 3em;
      font-size: 1.5em;
    }

    :nth-child(2) {
      margin-top: 1em;

      > p {
        margin-left: 0em;
        font-size: 1.2em;
      }
    }

    :nth-child(3) {
      margin-top: 1em;

      > p {
        margin-left: 0em;
        font-size: 1.3em;
      }
    }
  }


  @media (max-width: ${breakpoints.mobileMax}) {
    flex-flow: column nowrap;
    width: 100%;

    > p {
        margin-left: 0em;
    }
  }
`;

