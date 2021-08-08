import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { colors } from "../../theme/color";
import { LoaderSpinner } from "./style";

const Spinner = () => {
  return (
    <LoaderSpinner
    >
      <ClipLoader color={colors.default.MAIN_THEME} style={{width: '100%', textAlign: 'center'}} size={90} />
    </LoaderSpinner>
  );
};

export default Spinner;
