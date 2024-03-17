// this is the search box used in the landing page
import styled from 'styled-components';
import CountyDropDown from './CountyDropDown';
import { breakpoints } from '../utils/breakpoints';
import { colors } from '../utils/themeColors';
import { FunctionComponent, useState } from 'react';
import BedroomsDropDown from './BedroomsDropDown';
import Link from 'next/link';
import TextBox from './elements/TextBox';
import { places } from '../data/bedrooms.js';

export interface DivProps extends React.ComponentProps<'div'> {
  active?: boolean;
  mobile?: boolean;
}

export default function SearchBox() {
  const [isActive, setIsActive] = useState('home');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState(places[0]);
  const [price, setPrice] = useState('');
  return (
    <MainDiv>
      <SelectionDiv>
        <SelectionDivItem
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setIsActive('home')
          }
          active={isActive === 'home'}
        >
          Buy Home
        </SelectionDivItem>
        <SelectionDivItem
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setIsActive('land')
          }
          active={isActive === 'land'}
        >
          Buy Land
        </SelectionDivItem>
        <SelectionDivItem
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setIsActive('survey')
          }
          active={isActive === 'survey'}
        >
          Surveying
        </SelectionDivItem>
      </SelectionDiv>
      <MobileSelectionDiv>
        <SelectionDivItem mobile={true}>
          <Link href="/listings">Buy Home</Link>
        </SelectionDivItem>
        <SelectionDivItem mobile={true}>
          <Link href="/landListings">Buy Land</Link>
        </SelectionDivItem>
        <SelectionDivItem mobile={true}>
          <Link href="/bookSurvey">Book Survey</Link>
        </SelectionDivItem>
      </MobileSelectionDiv>
      {isActive === 'home' && (
        <HomeSearchBox>
          <div>
            <TextBox
              type="location"
              location={location}
              setLocation={setLocation}
            />
          </div>
          <div>
            <TextBox type="price" price={price} setPrice={setPrice} />
          </div>
          <Link
            href={{
              pathname: '/listings',
              query: {
                location: location || 'all',
                bedrooms: bedrooms?.value || 'all',
                price: price || 'all',
              },
            }}
          >
            <div className="text-lg">Search Homes</div>
          </Link>
        </HomeSearchBox>
      )}
      {isActive === 'land' && (
        <HomeSearchBox>
          <div>
            <TextBox
              type="location"
              location={location}
              setLocation={setLocation}
            />
          </div>
          <div>
            <TextBox type="price" price={price} setPrice={setPrice} />
          </div>
          <Link
            href={{
              pathname: '/landListings',
              query: { location: location || 'all', price: price },
            }}
          >
            <div className="text-lg">Search Land</div>
          </Link>
        </HomeSearchBox>
      )}
      {isActive === 'survey' && (
        <HomeSearchBox>
          <div>For Survey and Conveyancing -- Book Here</div>
          <Link href="/bookSurvey">
            <div>Book Here!</div>
          </Link>
        </HomeSearchBox>
      )}
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: ${colors.black};
`;

const SelectionDiv = styled.div`
  background-color: ${colors.white};
  height: 3.4em;
  width: 60%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media (max-width: ${breakpoints.mobileMax}) {
    border-radius: 6px;
    width: 90%;
    height: 4em;
    display: none;

    :active {
      background-color: ${colors.blue};
    }
  }
`;

const MobileSelectionDiv = styled.div`
  background-color: ${colors.white};
  height: 3.4em;
  width: 60%;
  display: none;
  flex-flow: row nowrap;
  justify-content: space-around;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  @media (max-width: ${breakpoints.mobileMax}) {
    border-radius: 6px;
    width: 95%;
    height: 4em;
    display: flex;
    background-color: ${colors.blue};
  }
`;

const SelectionDivItem = styled.div<DivProps>`
  width: 33.33%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  background-color: ${(props) =>
    props.active || props.mobile ? `${colors.blue}` : `${colors.white}`};
  color: ${(props) =>
    props.active || props.mobile ? `${colors.white}` : `${colors.blue}`};
  cursor: pointer;

  :nth-child(1) {
    border-top-left-radius: 6px;
  }

  :nth-child(3) {
    border-top-right-radius: 6px;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    :nth-child(1) {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    :nth-child(3) {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

const HomeSearchBox = styled.div`
  background-color: ${colors.white};
  height: 3.4em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  padding: 0.3em 1em;

  > div {
    width: 50%;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    :first-child {
      margin-right: auto;
    }
    :last-child {
      background-color: ${colors.blue};
      color: ${colors.white};
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
    display: none;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.3em 1em;

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
