import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookViewingAgentDiv, MainContainer } from "../../components/shared";
import { Layout } from "../../components/common/Layout";
import { Button } from "../../components/elements";
import ImageGrid from "../../components/ImageGrid";
import { breakpoints } from "../../utils/breakpoints";
import LandImage from "/public/land.jpg";
import { LandData } from "../../data/landData";
import LocationImage from "/public/images/location.png";

const Listing: NextPage = () => {
  const [landItem, setLandItem] = useState(null);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    const { pid } = router.query;
    if (pid) {
      const filteredData = LandData.filter((land) => {
        return land.id.toString() === pid;
      });
      setLandItem(filteredData?.[0]);
    }
  }, [router.query]);

  return (
    <Layout>
      <MainContainerExtended>
        <Head>
          <title className="sans">{landItem?.name} | Kube Real Estate</title>
          <meta name="description" content={landItem?.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TitleDiv>
          <h2>{landItem?.name}</h2>
        </TitleDiv>
        <ImageCollageDiv>
          <ImageGrid images={landItem?.images} />
        </ImageCollageDiv>
        <DetailsDiv>
          <PropertyPriceDiv>
            <div>
              <h2>KES {landItem?.price}</h2>
              <p>{landItem?.size}</p>
            </div>
            <div>
              <p>{landItem?.description}</p>
            </div>
            <div>
              <p><Image src={LocationImage} alt="" height={20} width={20} /> {"  "}{landItem?.location}</p>
            </div>
          </PropertyPriceDiv>
          <div>
            <BookViewingAgentDiv>
              <p>{landItem?.agent?.name}</p>
              <p>{landItem?.agent?.phone || "No contact provided"}</p>
              <Link href={`tel:${landItem?.agent?.phone}`} legacyBehavior>
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
        /* display: flex; */
        /* justify-content: flex-end; */
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
    flex-flow: column wrap;
    width: 100%;

    > div {
      :nth-child(1) {
        flex-flow: column;
        align-items: flex-start;

        > p {
          margin-left: 0em;

          > span {
            display: none;
          }

        }
      }

      :nth-child(3) {
      margin-top: 1em;

      > p {
        margin-left: 0em;
      }
    }
    }

    > p {
      margin-left: 0em;
    }
  }
`;
