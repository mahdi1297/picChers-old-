import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: auto;
`;

export const Section = styled.div`
  padding: 5px;
  position: relative;
  width: 100%;
  display: block;
  & button {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      margin-left: 5px;
    }
  }
   @media (min-width: 1250px) {
    width: 50%;
  }
`;
