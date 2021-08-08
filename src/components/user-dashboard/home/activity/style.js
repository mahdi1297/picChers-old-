import styled from "styled-components";
import { colors } from "../../../../shared/theme/color";
import { size } from "../../../../shared/theme/size";

export const Body = styled.div`
  width: 100%;
  height: auto;
  padding-left: 20px;
  & h2 {
    padding: 10px;
    margin-top: 0px;
  }
  & ul {
    width: 100%;
    height: auto;
    display: flex;
    padding: 0;
    border-bottom: 1px solid ${colors.default.BLACK};
    & li {
      width: 25%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${size.default.sm};
      color: ${colors.default.BLACK};
      text-align: center;
      & svg {
        margin-right: 3px;
      }
    }
  }
`;
export const SubData = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  maring: 0;
  display: flex;
  flex-wrap: wrap;
  & p {
    width: 50%;
    margin: 0;
    padding: 8px 5px;
    border-bottom: 1px solid #ccc;
    color:${colors.default.BLACK};
    font-size: ${size.default.sm};
    display: flex;
    align-items: center;
    & svg {
      margin-right: 10px;
    }
  }
`;
