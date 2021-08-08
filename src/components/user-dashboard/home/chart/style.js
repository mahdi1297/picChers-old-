import styled from "styled-components";
import { colors } from "../../../../shared/theme/color";
import {size} from './../../../../shared/theme/size'

export const Footer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  & p{
      padding: 3px 5px;
      margin: 5px;
      font-size: ${size.default.sm};
      color: ${colors.default.GRAY};
      display: flex;
      align-items: center;
      background: ${colors.default.LIGNT_GRAY};
  }
  & p:first-child{
    border-left: 2px solid ${colors.bg.SECENDORY};
  }
  }
  & p:last-child{
    border-left: 2px solid ${colors.bg.PRIMARY};
  }
}
`;
