import styled from "styled-components";
import {colors} from './../../../shared/theme/color'
import {size} from './../../../shared/theme/size'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    top: 70px;
    border-top: 1px solid ${colors.default.BORDER};
    & ul{
        display: flex;
        width: 100%;
        justify-content: space-around;
        padding: 0;
        position: relative;
        top:-50px;
        border-bottom: 1px solid ${colors.default.BORDER};
        padding-bottom: 10px;
        & li{
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 3px;
            & svg{
                margin-right: 5px;
            }
        }
    }
    & p{
        position: relative;
        top: -60px;
        font-size: ${size.default.xs};
        padding: 5px;
        // max-height: 80px;
        overflow: hidden;
    }
`