import React from "react";
import BlogHome from "./../../components/blog";
import { useSelector } from "react-redux";

const Blog = () => {
  const theme = useSelector((store) => store.darkMode);

  if(theme){
    if (theme === "no") document.getElementById("body").style.background = '#fff'
    if (theme === "yes") document.getElementById("body").style.background = "#404040";
  }

  return <BlogHome theme={theme}/>;
};

export default Blog;