import styled, { css } from "styled-components";
import { colors } from "../../theme/color";

export const H1 = styled.h1`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.align};
  border: ${(props) => props.border};
  ${(props) => props.theme === 'yes' &&  css`
    color: ${colors.bg.WHITE}!important;
  `}
`;
export const H2 = styled.h2`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.align};
  border: ${(props) => props.border};
  ${(props) => props.theme === 'yes' &&  css`
    color: ${colors.bg.WHITE}!important;
  `}
`;
export const H3 = styled.h3`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.align};
  border: ${(props) => props.border};
  ${(props) => props.theme === 'yes' &&  css`
    color: ${colors.bg.WHITE}!important;
  `}
`;
export const H4 = styled.h4`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.align};
  border: ${(props) => props.border};
  ${(props) => props.theme === 'yes' &&  css`
    color: ${colors.bg.WHITE}!important;
  `}
`;
export const H5 = styled.h5`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.align};
  border: ${(props) => props.border};
  ${(props) => props.theme === 'yes' &&  css`
    color: ${colors.bg.WHITE}!important;
  `}
`;
export const H6 = styled.h6`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.align};
  border: ${(props) => props.border};
  ${(props) => props.theme === 'yes' &&  css`
    color: ${colors.bg.WHITE}!important;
  `}
`;
