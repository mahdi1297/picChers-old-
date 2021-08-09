import React from "react";
import Masonry from "react-masonry-css";
import useGet from "../../queries/useGet";
import GridCard from "../../components/grid";
import Hero from "../../components/hero";
import LoaderSmallSpinner from "./../../shared/elements/loaders/small-spinner";
import Head from "../../components/head";
import { Body } from "./style";
import { useSelector } from "react-redux";
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
  const { data, isLoading, error } = useGet(
    `${process.env.REACT_APP_API_KEY}images`
  );

  const theme = useSelector((store) => store.darkMode);
  const login = useSelector((store) => store.login);

  if (theme) {
    if (theme === "no")
      document.getElementById("body").style.background = "none";
    if (theme === "yes")
      document.getElementById("body").style.background = "#404040";
  }

  return (
    <>
      <Head title="Home | pickchers" />
      {error && <p>Error</p>}
      <Hero />
      {isLoading && <LoaderSmallSpinner />}
      <Body>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          id="masonry"
        >
          {data &&
            data.data.result.map((item) => (
              <GridCard
                key={item._id}
                id={item._id}
                image={item.path}
                likes={item.likes}
                tags={item.tags}
                title={item.title}
                alt={item.alt}
                ownerId={item.ownerId}
                isShownInUserDashboard={false}
                theme={theme}
                currentUser={login && login._id}
              />
            ))}
        </Masonry>
      </Body>
    </>
  );
};

export default Container;