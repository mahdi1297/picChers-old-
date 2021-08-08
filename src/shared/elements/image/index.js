import React from "react";
import { ImageContainer } from "./style";

const Image = ({ src, alt, width, height, padding, border, radius }) => {
  return (
    <ImageContainer
      src={src}
      alt={alt}
      width={width}
      height={height}
      padding={padding}
      border={border}
      radius={radius}
    />
  );
};

export default Image;