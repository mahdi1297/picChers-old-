import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 30px;
  & svg {
    margin-right: 20px;
  }
`;
