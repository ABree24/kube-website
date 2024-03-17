/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../components/common/Layout";
import { useEffect } from "react";
import Image from "next/image";
import Phone from "/public/socials/phone.png";
import Address from "/public/socials/address.png";
import Mail from "/public/socials/mail.png";
import IntroImage from "/public/apartment.png";
import { breakpoints } from '../utils/breakpoints';
import { MainContainer } from "../components/shared";
import Link from "next/link";
import { NextPage } from "next";

const BookSurveyForm: NextPage = () => {
  
    return (
      <Layout>
        <MainContainerExtended>
          <div>
            <Head>
              <title className="sans">Kube Real Estate: Book Survey Service</title>
              <meta name="description" content="Book Survey Services" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
          </div>
          <Wrapper>
            <HeaderDiv>
              <p className="text-blue-900 align-center ">Book Survey</p>
            </HeaderDiv>
            <Column>
              <div>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevyGmCkOlVtUQjJBXu8C5OD0kizGIUuIatfHlb0uJTHJzaOg/viewform?embedded=true" width="900" height="1100" >Loading…</iframe>

              </div>
            </Column>
            <Column>
              <ContactDetails>
                <div>
                  <span className=" float-left inline-block w-10 mr-6">
                    <Image src={Phone} width={100} height={180} alt="add" />
                  </span>
                  <p className="table">
                    <a
                      href="tel:+254(0)794135672"
                      className="hover:text-orange-500 block mb-2 text-black"
                    >
                      +254(0)794135672
                    </a>
                  </p>
                </div>

                <div>
                  <span className=" float-left inline-block w-10 mr-6">
                    <Image src={Address} width={100} height={180} alt="add" />
                  </span>
                    <p className="table text-gray">
                      Wamarema Plaza 4th floor rm 205, <br></br>Limuru
                    </p>
                </div>
                <div>
                  <span className=" float-left inline-block w-10 mr-6">
                    <Image src={Mail} width={100} height={180} alt="add" />
                  </span>
                  <p className="table">
                    <Link
                      href=" mailto:kuberealestate2022@gmail.com"
                      className="hover:text-orange-500 block mb-2 text-black underline underline-offset-8"
                    >
                      kuberealestate2022@gmail.com
                    </Link>
                  </p>
                </div>
              </ContactDetails>
            </Column>
          </Wrapper>
        </MainContainerExtended>
      </Layout>
    );
  }

export default BookSurveyForm;

const MainContainerExtended = styled(MainContainer)`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;

  @media (max-width: ${breakpoints.mobileMax}) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

const HeaderDiv = styled.div`
  height: 50vh;
  width: 100%;
  background-image: url(${IntroImage.src});
  background-position: relative;
  background-repeat: no-repeat;

  > p {
    letter-spacing: 3px;
    font-size: 3em;
    margin-left: 25rem;
    padding: 6rem;
    font-weight: bold;

    @media (max-width: ${breakpoints.mobileMax}) {
      margin-left: 2rem;
      font-size: 4em;
      color: black; 
    }
  }
`;

const Column = styled.div`
  /* width: 50%; */

  :nth-child(1) {
    background-color: #d5dee8;
    width: 50%;

    > div {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;

    :nth-child(1) {
      > div {
        width: 100%;
      }
    }
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  padding: 0 2rem;
  margin-top: 2rem;
  margin-left: 4rem;
  font-size: 1.1em;

  > div {
    margin-bottom: 3em;
    align-items: center;
  }

  > p {
    font-size: 1.1em;
  }

  @media screen and (max-width: ${breakpoints.mobileMax}) {
    margin-top: 2rem;
    margin-left: 0;
    font-size: 1em;

    > div {
      margin-bottom: 1rem;
    }
  }
`;
