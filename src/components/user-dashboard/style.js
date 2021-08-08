import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 3.5%;
  top: 120px;
  width: 75%;
  height: auto;
  margin: auto;
  background: ${(props) => props.background};
  border-radius: 10px;
  box-shadow: ${(props) => props.background && '0 0 20px rgb(8, 21, 66, 5%)'};
  ${(props) => props.padding && `padding: ${props.padding}`}
`;

export const ContainerBody = styled.div`
  width: ${(props) => props.width};
  height: auto;
  background: #fff;
  box-shadow: 0 0 20px rgb(8, 21, 66, 5%);
  border-radius: 10px;
  ${(props) => props.padding && `padding: ${props.padding}`}
`;
