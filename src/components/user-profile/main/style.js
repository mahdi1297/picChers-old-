import styled, { css } from "styled-components";
import { colors } from "./../../../shared/theme/color";
import { size } from "./../../../shared/theme/size";

export const Body = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  padding: 10px;
  @media (min-width: 1000px) {
    left: 20%;
    width: 60%;
    padding: 0px;
  }
`;
export const Suggestion = styled.div`
  width: 100%;
  height: 130px;
  padding: 10px;
`;
export const SuggestionBody = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: no-wrap;
  height: 90px;
  padding-bottom: 20px;
  & div {
    margin-right: 30px;
    width: 100px;
    height: 90px;
    & p {
      margin: 0;
      width: 100%;
      text-align: center;
      font-size: ${size.default.xs};
      color: ${colors.default.BLACK};
      padding: 0;
    }
  }
  ${(props) =>
    props.theme === "yes" &&
    css`
      & p {
        color: ${colors.bg.WHITE}!important;
      }
    `}
`;

export const MasornryBody = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 100px;
  @media (min-width: 700px) {
    width: 95%;
  }
`;
