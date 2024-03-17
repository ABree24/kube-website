import Image from "next/image";
import styled from "styled-components";
import { Button } from "../components/elements";
import { breakpoints } from "../utils/breakpoints";
import ApartmentImage from "/public/apartment3.png";
import { colors } from "../utils/themeColors";

const FindHomeSection = () => {
  return (
    <MainDiv>
      <div>
        <p>Find a Home with us</p>
        <h1>This is our promise to you. We&apos;ll hold all 
          through the journey of purchasing your property.</h1>
        <Button defaultType width={"10em"}>Let&apos;s do it <span>&#x2192;</span></Button>
      </div>
    </MainDiv>
  );
};

export default FindHomeSection;

const MainDiv = styled.div`
  height: 40vh;
  width: 100%;
  background-color: #bdd7ee;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5em 3em 3em 8em;
  color: ${colors.black};

  > div {
    width: 100%;

    :nth-child(1) {
      > p {
        font-size: 1.1em;
      }

      > h1 {
        font-size: 2em;
        font-weight: 900;
        margin-top: .5em;
        width: 80%;
        margin-bottom: .8em;
      }
    }

    :nth-child(2) {
      align-items: flex-end;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 3em;
    height: 60vh;
    margin-top: -5em;

    > div {
      width: 100%;

      :nth-child(1) {
      > p {
        font-size: 1.4em;
      }

      > h1 {
        font-size: 1.8em;
        width: 100%;
      }
    }

      :nth-child(2) {
        display: none;
    }
      
    }
  }
`;
