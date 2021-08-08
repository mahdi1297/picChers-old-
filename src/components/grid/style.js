import styled from "styled-components";
import { colors } from "./../../shared/theme/color";

export const Item = styled.div`
  height: auto;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  zindex: 200000;
  & div {
    display: none;
  }
  &:hover div {
    display: block !important;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  margin-top: 18px;
  float: right;
  margin-right: 5px;
  border-radius: 2px;
  & svg {
    color: black !important;
    margin-left: 0px !important;
  }
`;
export const TopHovered = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.412),
    rgba(255, 255, 255, 0)
  );
  color: #fff;
  display: inline-flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 13px;
  & svg {
    position: relative;
    top: -2px;
    margin-left: 15px;
  }
`;
export const ButtomHovered = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 5px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.412),
    rgba(255, 255, 255, 0)
  );
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  float: left;
  color: ${(props) => props.color && props.color};
  & svg {
    color: ${(props) => props.color && props.color}!important;
  }
  & sup {
    color: ${(props) => props.color && props.color}!important;
  }
  & img {
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #ccc;
    margin-top: 12px;
    margin-left: 5px;
  }
  & span {
    position: relative;
    top: 0;
    color: ${colors.default.WHITE_THEME};
    font-size: 12px;
    top: -12px;
    margin-left: 5px;
  }
  & p {
    color: ${colors.default.BLACK};
    font-size: 14px;
    margin-top: 23px;
    margin-left: 5px;
  }
`;
export const PhotoModal = styled.div`
  width: 300px;
  height: auto;
  position: absolute;
  margin-top: -90px;
  margin-left: 30px;
  z-index: 99999999999999999999999999999999999999;
  background: #fbfbfb;
  border-radius: 5px;
  box-shadow: 1px 3px 12px #ccc;
`;

export const LoaderImage = styled.div`
  display: block !important;
  width: 100%;
  height: 350px;
  background: url(${require("./../../assets/img/skeleton.gif")});
  background-position: center;
  background-size: cover;
  image-size: cover;
`;

export const LikeMeta = styled.div`
  &:hover svg {
    color: red !important;
  }
`;
