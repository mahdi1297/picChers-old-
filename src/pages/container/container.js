import React, { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import GridCard from "../../components/grid";
import Hero from "../../components/hero";
import LoaderSmallSpinner from "./../../shared/elements/loaders/small-spinner";
import Head from "../../components/head";
import { Body } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getallImagesAction } from "../../actions/imagesActions";
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
  console.log('something')

  const isMounted = useRef(false);
  
  const dispatch = useDispatch();
  useEffect(() => {
    isMounted.current = true;
    if(isMounted.current) dispatch(getallImagesAction());
    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);
  
  const theme = useSelector((store) => store.darkMode);
  const images = useSelector((store) => store.images);

  if (theme) {
    if (theme === "no")
      document.getElementById("body").style.background = "none";
    if (theme === "yes")
      document.getElementById("body").style.background = "#404040";
  }

  return (
    <>
      <Head title="Home | pickchers" />
      { images.status > 399 && images.status < 500 && <p>Error</p>}
      <Hero />
      {images.length === 0 ? (
        <LoaderSmallSpinner />
      ) : (
        <Body>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            id="masonry"
          >
            {images &&
              images.result.map((item) => (
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
