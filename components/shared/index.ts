import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const MainContainer = styled.div`
  padding: 2em 1.5em;
  background-color: #e8eef3;
  min-height: 60vh;

  > p {
    font-size: 1.1em;
    margin-bottom: 1em;
    cursor: pointer;

    > span {
    }
  }
`;


export const BookViewingAgentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 3em;
  height: 12em;
  width: 25em;
  background-color: #ffffff;
  border: 1px solid #e3e2e2;
  border-radius: 9px;
  background: linear-gradient(315deg, #fbf9f9, #f0f0f0);
  box-shadow: 12px 12px 21px #e3e2e2, -12px -12px 21px #ffffff;

  > p {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }

  @media (max-width: ${breakpoints.mobileMax}) {
    margin-top: 3em;
    padding: unset;
  }
`