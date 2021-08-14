import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: ${(props) => props.wrap ? props.wrap : 'wrap'};
  justify-content: ${(props) => props.justify};
  ${(props) => props.direction && `flex-direction: ${props.direction};`};
  ${(props) => props.align && "align-items: center;"};
  ${(props) => props.padding && `padding: ${props.padding}`};
`;

export const Column = styled.div`
  width: ${(props) => props.size + "%"};
  height: auto;
`;

export const MarginTop = styled.div`
  margin-top: ${(props) => props.margin + "px"};
`;

export const Col = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  ${(props) => props.direction && `flex-direction: ${props.direction};`};
  ${(props) => props.align && "align-items: center;"};
  ${(props) => props.padding && `padding: ${props.padding}` };
`;

export const Container = styled.div`
  position: absolute;
  right: 3.5%;
  top: 120px;
  width: 75%;
  height: auto;
  margin: auto;
  background: ${(props) => props.background};
  border-radius: 10px;
  box-shadow: ${(props) => props.background && "0 0 20px rgb(8, 21, 66, 5%)"};
  ${(props) => props.padding && `padding: ${props.padding}`}
`;
