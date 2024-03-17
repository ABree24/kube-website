import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import IntroImage from "/public/apartment.png";
import { Layout } from "../components/common/Layout";


const AboutUs: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
      <div>
        <Head>
          <title className="sans">Kube Real Estate</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainHero>
          <MainHeaderTextDiv>

            <h1>A Real Estate Organization with a purpose</h1>
            <p>
            Kube Real Estate exists to create exceptional real estate
            experiences for all stakeholders. We are committed to delivering<br></br>
            customized solutions that meet the unique needs and aspirations
            of our clients, while contributing to the social, economic, and<br></br>
            environmental well-being of the communities we serve.

            </p>
          </MainHeaderTextDiv>
          </MainHero>

        </div>

        <MainContainerDiv>
          <h1>Our Mission:</h1>

          <p>
            To provide exceptional real estate development, consultation,
            and brokerage services that help our clients achieve their goals<br></br>
            and exceed their expectations. While creating meaningful
            and lasting connections between people and properties,<br></br>
            by delivering personalized real estate servicesand exceptional customer experiences.
          </p>

          <h1>Our Vision:</h1>

          <p>
            
            To be the leading trusted and sought-after real estate firm in our
            local and global markets,<br></br> recognized for our commitment to excellence,
            innovation, and social responsibility, <br></br>plus our unwavering commitment to
            integrity and ethics.
          </p>

          <h1>Motto:</h1>

          <p>Real estate, redefined with you in mind.</p>
        </MainContainerDiv>

        </MainContainer>
</Layout>

 );
};
export default AboutUs;

const MainHero = styled.div`
  height: 70vh;
  width: 100%;
  background-color: #d5dee8;
  background-image: url(${IntroImage.src});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;

  


`;

const MainHeaderTextDiv = styled.div`
  position: absolute;
  right: 5%;
  top: 20%;
  background-color: none;
  width: 50%;

  > h1 {
    
    font-size: 2.3em;
    letter-spacing: -1.8px;
    font-weight: 500;
  }

  > p {
    letter-spacing: 1px;
    
    font-size: 0.8em;
    margin-left: 25px;
    
  }
  `;
  const MainContainer = styled.div`
  padding: 0.005em 0.005em;
  
`;
const MainContainerDiv = styled.div`

background-color: #d5dee8;
letter-spacing: 1px;
font-size: 0.8em;
padding:30px;

>h1{
text-align:center;
font-weight:800;
font-size:20px;

}
>p{
  margin-left:5rem;
  text-align:center;
  font-size: 13px;
  font-weight: 400;
}

`;