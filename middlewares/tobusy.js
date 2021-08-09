import toobusy from "toobusy-js";

export default (req, res, next) => {
  if (
    process.env.NODE_ENV !== "development" &&
    process.env.NODE_ENV !== "test" &&
    toobusy()
  ) {
    res.end("Sorry!! i am busy now, please try again later");
  } else {
    next();
  }
};
