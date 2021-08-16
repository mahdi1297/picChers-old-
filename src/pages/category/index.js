import React, { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import GridCard from "../../components/grid";
import LoaderSmallSpinner from "./../../shared/elements/loaders/small-spinner";
import Head from "../../components/head";
import { Body } from "./style";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCall } from "../../api/methods";
import { TitleH1 } from "./../../shared/elements/title";
import {MarginTop} from './../../shared/elements/layout'
import "./grid.css";

const breakpointColumnsObj = {
  default: 3,
  1600: 4,
  1500: 3,
  900: 2,
  700: 2,
  500: 1,
};

const Container = () => {
  const { slug } = useParams();
  const [image, setImages] = useState("");

  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      const request = async (slug) => {
        const res = await getCall(`images/category/${slug}`);
        setImages(res);
      };
      request(slug);
    }
    return () => {
      isMounted.current = false;
    };
  }, [slug]);

  const theme = useSelector((store) => store.darkMode);
  const currentUser = useSelector((store) => store.login);

  if (theme) {
    if (theme === "no")
      document.getElementById("body").style.background = "none";
    if (theme === "yes")
      document.getElementById("body").style.background = "#404040";
  }

  return (
    <>
      <Head title="Categories | pickchers" />
      {!image ? (
        <LoaderSmallSpinner />
      ) : (
        <Body>
          <TitleH1>Categories- {slug}</TitleH1>
          <MarginTop margin="60"/>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            id="masonry"
          >
            {image &&
              image.data.images.map((item) => (
                <GridCard
                  key={item._id}
                  id={item._id}
                  image={item.path}
                  likes={item.likes}
                  tags={item.tags}
                  title={item.title}
                  alt={item.alt}
                  ownerId={item.ownerId}
                  totalLikes={item.totalLikes}
                  currentUser={currentUser._id}
                  isShownInUserDashboard={false}
                  theme={theme}
                />
              ))}
          </Masonry>
        </Body>
      )}
    </>
  );
};

export default Container;
