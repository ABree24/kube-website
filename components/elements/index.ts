import styled from "styled-components";

type Custom = {
  width?: string;
  defaultType?: boolean;
  textSize?: string;
  margin?: string;
  height?: string;
};

export const Button = styled.button<Custom>`
height: ${props => props.height || "2.5em"};
width: ${(props) => props.width || "7em"};
background-color: ${(props) => (props.defaultType ? "#134275" : "white")};
color: ${(props) => (props.defaultType ? "white" : "#134275")};
border-radius: 6px;
font-size: ${props => props.textSize || "1.1em"};
margin-top: ${props => props.margin || "0em"};
`;
