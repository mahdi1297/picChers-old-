import React from "react";
import { Row } from "../../../shared/elements/layout";
import Image from "./../../../shared/elements/image";
import { ImageContainer } from "./style";


const LeftSideImagePage = ({
  image,
  isLoading = true,
  isFetching = true,
  data,
}) => {
  return (
    <>
      <ImageContainer>
        <Row justify="center" align={true}>
          <Image
            width="50%"
            src={
              isLoading && isFetching
                ? require("./../../../assets/img/skeleton.gif")
                : data && image
            }
            alt="alt"
          />
        </Row>
      </ImageContainer>
    </>
  );
};

export default LeftSideImagePage;
