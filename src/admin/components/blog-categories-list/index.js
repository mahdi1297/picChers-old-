import React from "react";
import useGet from "../../../queries/useGet";
import SmallSpinner from "../../../shared/elements/loaders/small-spinner";
import { Container } from "../../../shared/elements/layout";
import { TitleH1 } from "../../../shared/elements/title";
import { colors } from "../../../shared/theme/color";
import { size } from "../../../shared/theme/size";
import { Table } from "../../style";
import { FiX } from "react-icons/fi";

const BlogCategoryList = () => {
  const { data, isLoading, isFetching, error } = useGet(
    "http://localhost:5000/blog/blog-categories"
  );

  return (
    <>
      <Container background={colors.bg.WHITE} padding={"20px"}>
        <TitleH1 size={size.default.ex_md} color={colors.default.BLACK}>
          Blogs List
        </TitleH1>
        {isLoading && isFetching ? (
          <SmallSpinner />
        ) : (
          data && (
            <Table>
              <thead>
                <tr>
                  <th>operation</th>
                  <th>name</th>
                  <th>slug</th>
                </tr>
              </thead>
              <tbody>
                {data.data.categories.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <FiX size={"18"} color={colors.bg.SECENDORY} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                  </tr>
                ))}
                {error && <p>Something wrong happened</p>}
              </tbody>
            </Table>
          )
        )}
      </Container>
    </>
  );
};

export default BlogCategoryList;
