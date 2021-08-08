import styled from "styled-components";


export const ContainerFluid = styled.div`
    width: ${(props) => props.width ? props.width : '95%'};
    height: 100%;
    margin: auto;
    @media (min-width: 820px){
        width: 84%;
    }
`

export const Row = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => (props.type)};  
    align-items: ${props => (props.align)};
`

export const RowAlignCenter = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`