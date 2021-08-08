import styled from "styled-components";
import { size } from "../../theme/size";

export const Body = styled.div`
    width: 100%;
    height: auto;
    background: ${(props) => props.background};
    padding: 20px;
    font-size: ${size.default.md};
    position: relative;
    top: 10px;
    color: ${(props) => props.color};
    margin-bottom: 10px;
    & svg{
        margin-right: 10px;
    }
`