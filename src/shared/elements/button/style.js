import styled from "styled-components";
import { colors } from "../../theme/color";

export const ButtonContainer = styled.button`
    padding: ${(props) => props.padding};
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fonrSize};
    border-radius: ${(props) => props.radius};
    border: none;
    width: ${(props) => props.block && '100%'};
    display: flex;
    align-items: center;
    justify-content: center;
    & svg{
        margin-right: 5px;
    }
    &:hover{
        background: ${colors.default.SUPPORT_THEME};
        cursor: pointer;
    }
`