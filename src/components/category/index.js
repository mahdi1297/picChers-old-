import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import GridCard from "../../components/grid";
import LoaderSmallSpinner from "./../../shared/elements/loaders/small-spinner";
import Head from "../../components/head";
import { Body } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAllImageCateogoriesAction } from "../../actions/categoryActions";
import "./style.css";

const breakpointColumnsObj = {
  default: 3,
  1600: 4,
  1500: 3,
  900: 2,
  700: 2,
  500: 1,
};

const CategoryPage = () => {
  const { slug } = useParams();

  const categories = useSelector((store) => store.allImageCategories);
  const currentUser = useSelector((store) => store.token);
  const theme = useSelector((store) => store.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImageCateogoriesAction(slug));
  }, [dispatch, slug]);

  return (
    <>
      <Head title="Category page | pickchers" />

      {categories.length === 0 ? (
        <LoaderSmallSpinner />
      ) : (
        <Body>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            id="masonry"
          >
            {/* {categories.length !== 0 && categories !== undefined &&
              categories.map((item) => (
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
              ))} */}
          </Masonry>
        </Body>
      )}
    </>
  );
};

export default CategoryPage;
