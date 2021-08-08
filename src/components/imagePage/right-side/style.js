import styled, { css } from "styled-components";
import { colors } from "../../../shared/theme/color";

export const Body = styled.div`
  width: 100%;
  height: 500px;
  background: rgb(248, 248, 258);
  border-left: 1px solid ${colors.default.LIGNT_GRAY};
  padding: 10px;
  box-shadow: 0 0 20px rgb(8, 21, 66, 12%);
  ${(props) =>
    props.theme === "yes" &&
    css`
      background: ${colors.default.BORDER};
      box-shadow: none;
      border-radius: 5px & svg {
        color: ${colors.default.WHITE_THEME}!important;
      }
    `}
`;
export const SideHeader = styled.div`
  width: 100%;
  height: 60px;
  & img {
    border-radius: 50%;
    padding: 2px;
    border: 1px solid ${colors.default.BLACK};
  }
  & p {
    color: ${colors.default.BLACK};
    font-size: 14px;
    margin-left: 10px;
    margin-top: 8px;
  }
  & p:hover {
    color: ${colors.default.SUPPORT_THEME};
  }
  & img:hover {
    background-color: ${colors.default.SUPPORT_THEME};
    opacity: 50%;
  }
`;
export const ImageTitle = styled.h1`
  color: ${colors.default.BLACK};
  width: 100%;
  font-size: 18px;
  margin: 25px 0;
  ${(props) => props.theme === "yes" && css``}
`;

export const Section = styled.div`
  margin-right: 20px;
  font-size: 14px;
  color: ${colors.default.GRAY};
  & svg {
    margin-right: 5px;
  }
`;

export const Socials = styled.ul`
  width: 100%;
  height: 30px;
  padding: 0;
  & a {
    display: block;
    width: 40px;
    height: 22px;
    & svg {
      color: #808080;
    }
    & svg:hover {
      color: ${colors.default.LIGNT_GRAY};
    }
  }
  margin-bottom: -10px;
`;

export const ButtonContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  margin-top: 10px;
  margin-bottom: -30px;
`;
