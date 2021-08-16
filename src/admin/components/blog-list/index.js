import React from "react";
import useGet from "./../../../queries/useGet";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import { Container } from "../../../shared/elements/layout";
import { TitleH1 } from "../../../shared/elements/title";
import { colors } from "../../../shared/theme/color";
import { size } from "../../../shared/theme/size";
import { Table } from "./../../style";
import { FiEdit, FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";

// /all-blogs
const BlogList = () => {
  const { data, isLoading, isFetching } = useGet(
    `${process.env.PORT}/blog/all-blogs`
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
                  <th>title</th>
                  <th>slug</th>
                  <th>thumbnail</th>
                  <th>author</th>
                </tr>
              </thead>
              <tbody>
                {data.data.blogs.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <Link to={`/admin-panel/edit-blog/${item.slug}`}>
                        <FiEdit size={"18"} color={colors.bg.PRIMARY} />{" "}
                      </Link>
                      <FiDelete size={"18"} color={colors.bg.SECENDORY} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.slug}</td>
                    <td>
                      <img src={item.thumbnail} alt="thumbnail" width="100" />
                    </td>
                    <td>mahdi alipour</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}
      </Container>
    </>
  );
};

export default BlogList;
