import styled, { css } from "styled-components";
import { colors } from "../../../shared/theme/color";
import { size } from "../../../shared/theme/size";

export const Body = styled.div`
  width: 95%;
  max-width: 1000px;
  height: auto;
  margin: auto;
  position: relative;
  top: 40px !important;
  position: relative;
  z-index: 999999;
  @media (min-width: 700px) {
    width: 80%;
  }
  @media (min-width: 1000px) {
    width: 50%;
    top: -30px !important;
  }
`;
export const Meta = styled.div`
  margin: 0 10px;
  color: ${colors.default.GRAY};
  font-size: ${size.default.ex_sm};
  ${(props) => props.theme === 'yes' && css`
    color: ${colors.bg.WHITE}!important
  `}
`;

export const SidebarBody = styled.div`
  width: 50px;
  height: auto;
  position: sticky;
  top: 250px;
  left: 15%;
  display: none;
  flex-direction: column;
  & svg {
    color: #808080;
    margin: 10px;
  }
  @media (min-width: 1000px) {
    display: flex;
  }
  ${(props) =>
    props.theme === "yes" &&
    css`
      & svg {
        color: ${colors.default.WHITE_THEME};
        margin: 10px;
      }
    `}
`;

export const ContentContainer = styled.article`
${(props) =>
  props.theme === "yes" &&
  css`
    & p {
      color: ${colors.default.WHITE_THEME}!important;
    }
    & a {
      color: ${colors.default.SUPPORT_THEME}!important;
    }
    & pre {
      background: ${colors.default.BORDER}!important;
      color: ${colors.default.BLACK}!important;
    }
  `}
`