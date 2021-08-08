import styled from "styled-components";

export const ImageContainer = styled.img`
  padding: ${(props) => props.padding && props.padding + "px"};
  border: ${(props) => props.border && props.border};
  border-radius: ${(props) => props.radius && props.radius};
`;
