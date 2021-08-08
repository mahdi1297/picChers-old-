import styled from "styled-components";
import { colors } from "./../../shared/theme/color";

export const Body = styled.div`
  width: 100%;
  height: 650px;
  background-size: cover;
  image-size: cover;
  background: url(${require("./../../assets/img/hero.jpg")}) center no-repeat;
  &::after {
    margin-top: -10px;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 77777;
  }
  @media (min-width: 710px) {
    margin-top: 80px;
  }
`;

export const InnerBox = styled.div`
  position: absolute;
  z-index: 8888888;
  top: 50%;
  transform: translateY(-40%);
  width: 100%;
  height: 250px;
`;
export const Insider = styled.div`
  width: 70%;
  min-width: 350px;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  @media (max-width: 600px) {
    width: 95%;
  }
`;
export const MainTitle = styled.h1`
  font-size: 35px;
  color: ${colors.default.WHITE_THEME};
  margin: 0;
`;

export const SupportTitle = styled.h3`
  font-size: 20px;
  color: ${colors.default.WHITE_THEME};
  margin: 20px 0;
`;
export const Input = styled.input`
  width: 90%;
  height: 50px;
  font-size: 20px;
  padding: 0 10px;
  margin-top: 10px;
  border: none;
`;
export const Button = styled.button`
  width: 10%;
  margin-top: 10px;
  background: ${colors.default.WHITE_THEME};
  border: none;
  cursor: pointer;
  &:hover svg {
    color: #cdf0ea !important;
  }
`;
export const SearchSuggestionBody = styled.div`
  // display: none;
  padding: 30px;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 350px;
  background: #fff;
  box-shadow: 0 19px 27px -1px rgb(8, 21, 66, 32%);
`;
