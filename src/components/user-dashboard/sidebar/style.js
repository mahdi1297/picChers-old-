import styled from "styled-components";
import {colors} from './../../../shared/theme/color'

export const Body = styled.div`
    width: 17%;
    height: 100vh;
    box-shadow: 0 0 20px rgb(8, 21, 66, 15%);
    position: fixed;
    top: 68px;
    background:#fff;
    & svg{
        margin-right: 10px;
        position: relative;
        top: 2px;
    }
`
export const Head = styled.div`
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    & img{
        border-radius: 50%;
        padding: 5px;
        border: 1px solid #ccc;
        margin-right: 10px;
    }
    & span{
        font-size: 14px;
    }
`
export const Ul = styled.ul`
    width: 100%;
    height: auto;
    padding: 0;
    & li{
        height: auto;
    }
    & a{
        padding: 15px 30px;
        display: block;
        color: ${colors.default.BLACK};
        font-size: 14px;
    }
    & a:hover{
        background: ${colors.default.SUPPORT_THEME}
    }
`