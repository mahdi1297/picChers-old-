import styled from "styled-components";
export const Table = styled.table`
  width: 100%;
  overflow-x: scroll;
  & thead {
    background: #c490e4;
    color: #fff;
  }
  & th {
    text-align: center;
    padding: 10px;
  }
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  & svg {
    cursor: pointer;
  }
`;

export const Modals = styled.div`
  position: absolute;
  top: -20px;
  width: 90% !important;
  height: 700px;
  overflow-y: scroll;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  z-index: 99999999999999999999999999999999999999999999999999 !important;
  border: 1px solid black;
  display: ${(props) => props.display};
`;

