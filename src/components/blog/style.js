import styled, { css } from "styled-components";
import { colors } from "./../../shared/theme/color";
import { size } from "./../../shared/theme/size";

export const Body = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 100px;
  max-width: 1700px !important;
  @media (min-width: 700px) {
    width: 95%;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 500px;
`;

export const ItemContainerBody = styled.div`
  width: 85%;
  height: auto;
  margin: auto;
  margin-bottom: 30px;
  padding-top: 50px;
  padding-bottom: 60px;
`;

export const Card = styled.div`
  width: 30%;
  height: auto;
  min-height: 300px;
  margin-top: -20px;
`;
export const CardHeader = styled.div`
  width: 100%;
  height: auto;
  & img {
    width: 100%;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
`;
export const Category = styled.div`
  width: 100%;
  padding-top: 10px;
  & a {
    border: 2px solid ${colors.default.BORDER};
    border-radius: 3px;
    padding: 3px 5px;
    margin-top: 10px;
    color: ${colors.default.BLACK};
    font-size: ${size.default.sm};
  }
      ${(props) =>
      props.theme === 'yes' &&
      css`
        & a {
          color: ${colors.default.WHITE_THEME};
        }
      `}
`;
