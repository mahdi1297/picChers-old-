import styled from "styled-components";

export const LoaderSkeleton = styled.div`
  display: block !important;
  width: 100%;
  height: 350px;
  background: url(${require("./../../../assets/img/skeleton.gif")});
  background-position: center;
  background-size: cover;
  image-size: cover;
  margin: 20px;
`;

export const LoaderSpinner = styled.div`
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  background: rgba(255, 255, 255, 0.418);
  z-index: 999999999999999999999999999999999999999999999999999999;
`;
export const LoaderSmallSpinner = styled.div`
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  z-index: 999999999999999999999999999999999999999999999999999999;
`;
