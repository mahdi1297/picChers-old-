import styled from "styled-components";

export const SubList = styled.div`
  width: 400px;
  height: auto;
  position: absolute;
  background: #fff;
  z-index: 99999999999999999;
  box-shadow: 1px 2px 18px #eee;
  border-radius: 5px;
  right: 15%;
  margin-top: 20px;
  & ul {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0 !important;
    margin-bottom: -40px !important;
  }
  & p {
    color: #c490e4;
    margin-bottom: -10px;
  }
  & span {
    display: block;
    color: #707070;
    padding: 10px 20px;
  }
  & img {
    border-radius: 5px;
  }
`;

export const List = styled.li`
  & a {
    width: 50%;
  }
`;
