import React from "react";
import BlogItem from "../blog-item";
import { Row } from "./../../../shared/elements/layout";
import { ItemContainerBody } from "./../style";
import { TitleH2, TitleH3 } from "./../../../shared/elements/title";
import { colors } from "./../../../shared/theme/color";
import { size } from "./../../../shared/theme/size";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import useGet from "./../../../queries/useGet";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";

const BlogContainer = ({ path, theme }) => {
  const { data, isLoading, isFetching } = useGet(
    `http://localhost:5000/blog/${path}`
  );

  // const [scroll, setScroll] = useState(0);

  // document.addEventListener("scroll", () =>
  //   setScroll(Math.ceil(window.scrollY))
  // );
  // const fetchArea = document.getElementById("fetch-area");

  // if (fetchArea !== null) {
  //   if (scroll - 200 > Math.ceil(fetchArea.offsetTop)) {
  //     console.log(scroll, Math.ceil(fetchArea.offsetTop));
  //     // const fetcher = async () => {
  //     //   const request = await axios.get(
  //     //     `http://localhost:5000/blog/all-blogs/pagination?limit=${2}&skip=${1}`
  //     //   );
  //     //   console.log(request);
  //     // };
  //     // fetcher();
  //   }
  // }

  return (
    <>
      {isLoading && isFetching ? (
        <SmallSpinner />
      ) : (
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
                data.data.blogs.map((item) => (
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
      )}
    </>
  );
};

export default BlogContainer;
