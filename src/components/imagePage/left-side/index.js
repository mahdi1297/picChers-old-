import React from "react";
import { Row } from "../../../shared/elements/layout";

const LeftSideImagePage = ({ image, isLoading = true, isFetching = true, data }) => {
  return (
    <>
      <Row justify="center" align={true}>
        <img
          src={
            isLoading && isFetching
              ? require("./../../../assets/img/skeleton.gif")
              : data && image
          }
          alt="alt"
          width="60%"
        />
      </Row>
    </>
  );
};



export default LeftSideImagePage;
