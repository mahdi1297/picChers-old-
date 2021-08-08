import styled, { css } from "styled-components";
import { colors } from "./../../../shared/theme/color";
import { size } from "./../../../shared/theme/size";

export const AddCommentBody = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 10px;
  border-radius: 5px;
`;

export const Body = styled.div`
  background: ${(props) => props.background};
  margin-top: 30px;
  width: ${(props) => props.background ? '80%' : '100%'};
  height: auto;
  padding: 30px;
  border-radius: 10px;
  background: #eee;
  ${(props) => props.theme === 'yes' && css`
    background-color: #fff;
  `}
`;
export const Card = styled.div`
  width: %;
  height: auto;
`;
export const CardInfo = styled.div`
  width: 15%;
  padding: 5px;
  height: 100%;
`;
export const CardContent = styled.div`
  width: 85%;
  height: auto;
  padding-left: 10px;
`;
export const Username = styled.div`
  color: ${colors.default.BLACK};
  margin-top: 10px;
  font-size: ${size.default.sm};
`;
export const CardHeader = styled.div`
  width: 100%;
  height: 30px;
`;
export const Metas = styled.div`
  padding: 3px 5px;
  display: flex;
  align-items: center;
  font-size: ${size.default.sm};
  & span{
    margin-left: 5px;
  }
`;
export const Content = styled.p`
  width: 100%;
  padding: 10px;
  font-size: ${size.default.sm};
`;
export const Modal = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  border-bottom: 1px solid ${colors.default.BLACK};
  padding: 30px;
`