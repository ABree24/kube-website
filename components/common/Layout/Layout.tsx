import Image from 'next/image';
import styled from 'styled-components';
import Twitter from '/public/socials/twitter.png';
import LinkedIn from '/public/socials/linkedin.png';
import Instagram from '/public/socials/instagram.png';
import Link from 'next/link';
import { breakpoints } from '../../../utils/breakpoints';
import Header from './Header';

const year = new Date().getFullYear();
export function Layout({ children }) {
  return (
    <div className="w-full">
      <div className="antialiased font-body">
        <Header />
        <main>{children}</main>
        <FooterContainer className="text-lg font-light">
          <FooterItemsDiv>
            <div>
              {/* <span>Logo here</span> */}
              <p>
                Wamarema plaza,
                <br /> 4th floor room 205,
                <br /> Limuru rd, Kiambu.
              </p>
              <p> P.O. BOX 155-00217 Limuru, Kenya</p>
              <div>
                <Link href="https://twitter.com/KubeRealEstate?t=72jre5PG09ej8u2RrNlDhw&s=09">
                  <div className="w-auto flex flex-col items-start justify-center inline-block">
                    <Image src={Twitter}width={30}
                      height={40} alt="add" />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/company/kube-real-estate/">
                  <div className="w-auto flex flex-col items-start justify-center inline-block ml-4">
                    <Image
                      src={LinkedIn}
                      width={30}
                      height={40}
                      alt="add"
                    />
                  </div>
                </Link>
                <Link href="https://instagram.com/kuberealestate?igshid=ZDdkNTZiNTM=">
                  <div className="w-auto flex flex-col items-start justify-center inline-block ml-4" >
                    <Image
                      src={Instagram}
                      width={30}
                      height={40}
                      alt="add"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <p>
                {' '}
                <Link href="/">
                 Home
                </Link>
              </p>
              <p>
                <Link href="bookSurvey">Survey Services</Link>
              </p>
              <p>
                {' '}
                <Link href="listings"> Buy a home </Link>
              </p>
              <p>
                {' '}
                <Link href="landListings">Buy Land</Link>
              </p>
            </div>
            <div>
              <p>
                {' '}
                <Link href="company"> About Us</Link>
              </p>
              <p>
                {' '}
                <Link href="PrivacyPolicy"> Privacy Policy</Link>
              </p>
              <p>
                {' '}
                <Link href="TermsConditions"> Terms and Conditions </Link>
              </p>
            </div>
          </FooterItemsDiv>
          <CopyrightDiv>
            &#169; {year}. All Rights Reserved. Kube Real Estate Limited
          </CopyrightDiv>
        </FooterContainer>
      </div>
    </div>
  );
}

const FooterContainer = styled.footer`
  height: 60vh;
  width: 100%;
  background-color: #134275;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 4em;

  @media (max-width: ${breakpoints.mobileMax}) {
    height: auto;
    padding: 2rem;
  }
`;

const FooterItemsDiv = styled.div`
  border-bottom: 1px solid white;
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 2em;
  margin-bottom: 4em;
  margin-left: 2em;

  > div {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;

    > p {
      margin: 0.2em 0.3;
    }

    :nth-child(1) {
      width: 40%;
      align-items: flex-start;

      > p {
        font-size: 1em;
      }

      > div {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        width: 50%;
        margin-top: 0.5em;
        margin-right: 4em;
      }
    }
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    flex-flow: row wrap;
    padding-bottom: 2em;

    > div {
      align-items: center;

      :nth-child(1) {
        width: 100%;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        /* background-color: blueviolet; */
        margin-bottom: 2em;

        > div {
          align-items: center;
          width: unset;
        }
      }
    }
  }
`;

const CopyrightDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 1em;
    text-align: center;
    margin-bottom: 2.5em;
  }
`;
