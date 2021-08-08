import styled from "styled-components";
import { size } from "./../../theme/size";
import { colors } from "./../../theme/color";

export const Body = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;
export const Label = styled.label`
  width: 100%;
  display: block;
  padding: 10px 0;
  color: ${colors.default.BLACK};
  font-size: ${size.default.ex_sm}
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border: 1px solid ${colors.default.BORDER};
  padding: 10px;
  font-size: ${size.default.md};
`;
export const Error = styled.p`
  width: 100%;
  margin: 10px 0;
  color: red;
`;
export const Select = styled.select`
  width: 100%;
  height: auto;
  border: none;
  border: 1px solid ${colors.default.BORDER};
  padding: 10px;
  max-height: 150px!important;
  font-size: ${size.default.md};
  & option{
    border: 1px solid ${colors.default.LIGHT_BLUE_THEME};
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
  }
`;
export const Span = styled.span`
  margin-left: 10px;
  color: ${colors.bg.SECENDORY}
`
export const TextAreaContainer = styled.textarea`
  width: 100%;
  min-height: 250px;
  border: none;
  border: 1px solid ${colors.default.BORDER};
  max-width: 100%;
  font-size: 16px;
  padding: 10px;
`