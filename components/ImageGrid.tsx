import styled from "styled-components";
import Apartment from "public/apartment1.jpg";
import { breakpoints } from "../utils/breakpoints";

export default function ImageGrid({ images }) {
  return (
    <MainDiv>
      <div>
        <ImageEl src={images?.[0]} alt=""></ImageEl>
      </div>
      {images?.length > 4 ? (
        <InnerImagesDiv>
          {images?.slice(1, 5)?.map((image: string) => (
            <ImageEl src={image} alt="" key={image}></ImageEl>
          ))}
        </InnerImagesDiv>
      ) : (
        <InnerImagesDiv>
          {images?.map((image: string) => (
            <ImageEl src={image} alt="" key={image}></ImageEl>
          ))}
        </InnerImagesDiv>
      )}
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  height: 50vh;
  border-radius: 9px;
  /* background-color: blueviolet; */

  > * {
    flex: 1;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    display: flex;
    flex-flow: column nowrap;
    height: 55vh;

    > div {
      height: 45%;
    }
  }
`;

const ImageEl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9px;
`;

const InnerImagesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
  margin-left: 0.5em;

  > * {
    width: 49%;
    height: 49%;

    :nth-child(1) {
      margin-bottom: 0.5em;
    }

    :nth-child(2) {
      margin-left: 0.5em;
    }

    :nth-child(4) {
      margin-left: 0.5em;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    height: 45%;
    flex-wrap: wrap;
    margin-left: unset;
    justify-content: unset;

    > * {
      width: 48.5%;
      height: 48.5%;

      :nth-child(1) {
        margin-top: 0.5em;
        margin-left: none;
      }

      :nth-child(2) {
        margin-top: 0.5em;
        margin-left: none;
      }
    }
  }
`;
