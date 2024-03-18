import styled from "styled-components";
import { Button } from "../components/elements";
// assets
import IntroImage from "/public/apartment.png";
import Land from "/public/land.jpg";
import Apartment from "/public/apartment1.jpg";
import { breakpoints } from "../utils/breakpoints";
import Link from "next/link";

const Services = () => {
  return (
    <MainDiv>
      <div>
        <div>
          <h1>Buy a home</h1>
          <p>
            We&apos;ll provide you with all the necessary information to help you make a decision effortlessly.
          </p>
          <Link href="/listings">
          <Button
            defaultType={true}
            textSize={"1em"}
            margin={".4em"}
            height={"3em"}
            width={"9em"}
          >
            Browse Homes
          </Button>
          </Link>
          
        </div>
      </div>
      <div>
        <div>
          <h1>Buy Land</h1>
          <p>
            Our team of experts will do all the due diligence on your behalf. So you can be sure of the safety of your money.
          </p>
          <Link href="/landListings">
          <Button
            defaultType={true}
            textSize={"1em"}
            margin={".4em"}
            height={"3em"}
            width={"9em"}
          >
            Browse Land
          </Button>
          </Link>
          
        </div>
      </div>
      <div>
        <div>
          <h1>Commercial Property</h1>
          <p>
            Discover the best deals before they get to the market.
          </p>
          <Link href="/">
          <Button
            defaultType={true}
            textSize={"1em"}
            margin={".4em"}
            height={"3em"}
            width={"12em"}
          >
            Browse Properties
          </Button>
          </Link>
          
        </div>
      </div>
      <div>
        <div>
          <h1>Survey and Conveyancing</h1>
          <p>
            Get free consultation on land subdivisions, title processing, searches & green cards, land transfers.
          </p>
          <Button
            defaultType={true}
            textSize={"1em"}
            margin={".4em"}
            height={"3em"}
            width={"9em"}
          >
            Book 
          </Button>
        </div>
      </div>
    </MainDiv>
  );
};

export default Services;

interface Custom {
  defaultType?: boolean;
  image?: string;
}

const MainDiv = styled.div<Custom>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;

  > div {
    position: relative;
    width: 20%;
    height: 18em;
    border-radius: 6px;
    background-color: #d5dee8;
    background-size: cover;
    background-repeat: no-repeat;

    :nth-child(1) {
      background-image: url(${Apartment.src});
    }

    :nth-child(2) {
      background-image: url(${Land.src});
    }

    :nth-child(3) {
      background-image: url(${Apartment.src});
    }

    :nth-child(4) {
      background-image: url(${Land.src});
    }

    > div {
      position: absolute;
      bottom: 0;
      height: 80%;
      width: 100%;
      padding: 0 1em;
      background-color: none;
      color: white;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: center;

      > h1 {
        margin-top: 0.4em;
        font-size: 1.4em;
        font-weight: 500;
        word-spacing: -2px;
      }

      > p {
        margin-top: 0.4em;
        font-size: 0.9em;
        margin-bottom: .5em;
      }
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    > div {
      position: relative;
      width: 80%;
      height: 22em;
      margin-bottom: 1.3em;

      > div {
        > h1 {
        font-size: 1.8em;
      }
      > p {
        font-size: 1.1em;
      }
      }
    }
  }
`;
