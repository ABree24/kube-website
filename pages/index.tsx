import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../components/common/Layout";
import {colors } from "../utils/themeColors";
import { breakpoints } from "../utils/breakpoints";


//components
import SearchBox from "../components/SearchBox";
import FindHomeSection from "../sections/FindHomeSection";

// sections
import Services from "../sections/Services";

// assets
import IntroImage from "/public/apartment.png";
import IntroImage1 from "/public/apartment1.jpg";
import IntroImage2 from "/public/apartment2.png";
import IntroImage3 from "/public/apartment3.png";

const Landing: NextPage = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title className="sans">Kube Real Estate</title>
          <meta name="description" content="" />
          <meta
            name="google-site-verification"
            content="t1YJMRh54BVKQ2ix-wuLrSGMIr013Ds1qrZ5qkFlIIw"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainHero>
          <MainHeaderTextDiv>
            <h1>
              <span style={{ color: `${colors.white}` }}>Discover th</span>e
              best Real Estate Deals
            </h1>
          </MainHeaderTextDiv>
          <SearchBoxDiv>
            <SearchBox />
          </SearchBoxDiv>
        </MainHero>
        <ServicesSection>
          <Services />
        </ServicesSection>
        <FindHomeSection />
      </div>
    </Layout>
  );
};

export default Landing;

const MainHero = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #d5dee8;
  background-image: url(${IntroImage.src});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  color: ${colors.black};

  @media (max-width: ${breakpoints.mobileMax}) {
    height: 70vh;
    backgroung-image: url(${IntroImage1.src});
    background-size: cover;
    color: #ffffff;
    /* background-image: none; */
    /* background-position: bottom; */
  }
`;

const MainHeaderTextDiv = styled.div`
  position: absolute;
  right: 5%;
  top: 30%;
  background-color: none;
  width: 70%;

  > h1 {
    font-size: 2.9em;
    font-weight: 500;
  }

  > p {
    font-size: 1.4em;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    right: 0;
    left: 0;
    top: 20%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 3em;

    > h1 {
      font-size: 2em;
    }

    > p {
      margin-top: 1em;
    }
  }
`;

const SearchBoxDiv = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  width: 70%;

  @media (max-width: ${breakpoints.mobileMax}) {
    right: 0;
    left: 0;
    padding-left: 3em;
    padding-right: 1em;
    margin-top: -1em;
    width: 100%;
  }
`;

const ServicesSection = styled.div`
  height: 50vh;
  width: 100%;
  padding: 2em 5em;
  margin: 3.5em 0;
  background-color: ${colors.white};

  @media (max-width: ${breakpoints.mobileMax}) {
    height: auto;
    padding: 1.5em 1.5em;
  }
`;
