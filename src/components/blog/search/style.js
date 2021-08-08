import styled from "styled-components";

export const SearchBody = styled.div`
    width: 80%;
    height: 50px;
`
export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    & input{
        position: relative;
        top: -20px;
        height: 50px;
        width: 100%;
        border: none;
        padding-left: 40px;
    }
    & button{
        width: 10%;
    }
`
export const Span = styled.span`
    display: block;
    width: 40px;
    height: 40px;
    direction: rtl;
    padding-top: 15px;
    position: relative;
    left: 30px;
    z-index: 99999;
`
export const SearchSuggestBody = styled.div`
    width: 88%;
    left: 3%;
    height: auto;
    min-height: 300px;
    position: relative;
    z-index:9999999;
    background: #fff;
    box-shadow: 0 19px 27px -1px rgb(8 ,21 ,66 , 32%)
`
export const SearchBoxRow = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img{
        border-radius: 10px;
    }
    & a{
        color: #404040;
    }
`