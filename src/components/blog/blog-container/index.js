import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BlogItem from "../blog-item";
import { Row } from "./../../../shared/elements/layout";
import { ItemContainerBody } from "./../style";
import { TitleH2, TitleH3 } from "./../../../shared/elements/title";
import { colors } from "./../../../shared/theme/color";
import { size } from "./../../../shared/theme/size";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogsActions } from "./../../../actions/blogActions";

const BlogContainer = ({ path, theme }) => {
  const data = useSelector((store) => store.allBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogsActions());
  }, [dispatch]);

  return (
    <>
      {data.length === 0 ? (
        <SmallSpinner />
      ) : (
        data.length !== 0 &&
        data.status !== 400 &&
        data.staus !== 404 && (
          <>
            <ItemContainerBody>
              <Row justify="space-between" align={true}>
                <TitleH2 theme={theme} fontSize={size.default.lg}>
                  Most Favorite
                </TitleH2>
                <Link to="/">
                  <TitleH3 theme={theme} the fontSize={size.default.md}>
                    <Row align={true}>
                      View All
                      <FiChevronRight
                        color={colors.default.GRAY}
                        size={size.default.md}
                      />
                    </Row>
                  </TitleH3>
                </Link>
              </Row>
              <Row justify="space-between">
                {data &&
                  data.blogs.map((item) => (
                    <BlogItem
                      theme={theme}
                      key={item._id}
                      title={item.title}
                      slug={item.slug}
                      thumbnail={item.thumbnail}
                      category={item.categories}
                    />
                  ))}
              </Row>
            </ItemContainerBody>
          </>
        )
      )}
      {data.length !== 0 && (data.status === 400) | (data.status === 404) && (
        <p>something bad happened</p>
      )}
    </>
  );
};

BlogContainer.propTypes = {
  path: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default BlogContainer;
