import React from "react";
import { Row } from "../../../shared/elements/layout";
import PropTypes from "prop-types";

const LeftSideImagePage = ({ image, isLoading, isFetching, data }) => {
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


LeftSideImagePage.propTypes = {
  data: PropTypes.bool,
  image: PropTypes.string,
  isFetching: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default LeftSideImagePage;
