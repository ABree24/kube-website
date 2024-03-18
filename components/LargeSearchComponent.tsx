import styled from "styled-components";
import CountyDropDown from "./CountyDropDown";
import TextBox from "./elements/TextBox";
import { breakpoints } from "../utils/breakpoints";
import { FunctionComponent, useState } from "react";
import BedroomsDropDown from "./BedroomsDropDown";
import Link from "next/link";
import LandSizeDropDown from "./LandSizeDropDown";
import { places } from "../data/bedrooms.js";
import { landSizes } from "../data/landSize";
import { Button } from "./elements";
import React from "react";

export interface DivProps extends React.ComponentProps<"div"> {
  active?: boolean;
}

export default function LargeSearchComponent({ type, filterData }) {
  const [bedrooms, setBedrooms] = useState(places[0]);
  const [location, setLocation] = useState(filterData?.location || "");
  const [price, setPrice] = useState(filterData?.price || "");
  const [landSize, setLandSize] = useState(landSizes[0]);
  if (type === "Homes") {
    return (
      <MainDiv>
        <div>
          <h2>Search for {type} to Buy</h2>
        </div>
        <HomeSearchBox>
          <div>
            <TextBox
              type="location"
              location={location}
              setLocation={setLocation}
            />
          </div>
          <div>
            <BedroomsDropDown
              bedrooms={bedrooms}
              setBedrooms={setBedrooms}
              places={places}
            />
          </div>
          <div>
            <TextBox type="price" price={price} setPrice={setPrice} />
          </div>
          <div
            className="text-lg"
            onClick={() => alert("serch not yet implemented")}
          >
            Search {type}
          </div>
        </HomeSearchBox>
      </MainDiv>
    );
  }

  if (type === "Land") {
    return (
      <MainDiv>
        <div>
          <h2>Search for {type} to Buy</h2>
        </div>
        <HomeSearchBox>
          <div>
          <TextBox
              type="location"
              location={location}
              setLocation={setLocation}
            />
          </div>
          <div>
            <LandSizeDropDown landSizes={landSizes} landSize={landSize} setLandSize={setLandSize}/>
          </div>
          <div>
          <TextBox type="price" price={price} setPrice={setPrice} />
          </div>
          <Button onClick={() => filterData(location, price)} defaultType width="9em">
            Search {type}
          </Button>
        </HomeSearchBox>
      </MainDiv>
    );
  }
}

const MainDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #134275;
  padding: 1em 3em 1.5em 3em;
  border-radius: 9px;

  > div {
    margin-bottom: 0.5em;

    > h2 {
      font-size: 1.8em;
      color: white;
      font-weight: 650;
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    > div {
      > h2 {
        font-size: 1.5em;
      }
    }
  }
`;

const HomeSearchBox = styled.div`
  background-color: white;
  height: 3.4em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: 9px;
  padding: 0.3em 1em;

  > div {
    width: 30%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    :first-child {
      margin-right: auto;
    }
    :last-child {
      background-color: #134275;
      color: white;
      width: 20%;
      border-radius: 6px;
      height: 2.6em;
      margin-left: auto;
      cursor: pointer;
    }
  }

  // main div styles
  @media (max-width: ${breakpoints.mobileMax}) {
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.3em 1em;
    margin-top: 1em;

    > div {
      width: 90%;
      margin-right: auto;
      font-size: 1.3em;

      :last-child {
        width: 90%;
        margin: 0.5em;
        font-size: 1.1em;
      }
    }
  }
`;
