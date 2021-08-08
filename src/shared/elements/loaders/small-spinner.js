import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { colors } from "../../theme/color";
import { LoaderSmallSpinner } from "./style";

const SmallSpinner = ({styles}) => {
  return (
    <LoaderSmallSpinner style={styles}>
      <ClipLoader
        color={colors.default.MAIN_THEME}
        size={30}
      />
    </LoaderSmallSpinner>
  );
};

export default SmallSpinner;
