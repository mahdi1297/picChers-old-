import React from "react";
import { useForm } from "react-hook-form";
import urlSlug from "url-slug";
import { Container, MarginTop, Row } from "./../../../shared/elements/layout";
import { InputGroup } from "../../../shared/elements/inputGroup";
import { TitleH1 } from "./../../../shared/elements/title";
import { Button } from "./../../../shared/elements/button";
import { colors } from "./../../../shared/theme/color";
import { size } from "./../../../shared/theme/size";
import { useMutation } from "react-query";
import { postCall } from "../../../api/methods";


const OperateBlogCategory = ({ isUpdate, width }) => {
  const createBlogCategory = useMutation((blog) =>
    postCall(blog, "blog/blog-category")
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onCreatePostSubmitHandler = (data) => {
    if (!isUpdate) {
      reset();
      const dataToSubmit = {
        name: data.name,
        slug: urlSlug(data.name),
      };
      createBlogCategory.mutate(dataToSubmit)
    }
  };

  return (
    <Container
      style={width && { width: `${width}` }}
      background={colors.bg.WHITE}
      padding={"20px"}
    >
      <TitleH1 size={size.default.ex_md} color={colors.default.BLACK}>
        {isUpdate ? "Update blog category" : "Create new blog category"}
      </TitleH1>
      <form onSubmit={handleSubmit(onCreatePostSubmitHandler)}>
        <InputGroup
          label="Category name"
          placeholder="category title"
          type="text"
          disabled={isUpdate && true}
          register={{ ...register("name", { required: !isUpdate && true }) }}
          error={!isUpdate && errors.name}
        />
        <MarginTop margin="30">
          <Row>
            <Button
              type="submit"
              size={"md"}
              background={colors.default.MAIN_THEME}
              color={colors.default.WHITE_THEME}
            >
              {isUpdate ? "Update" : "Create"}
            </Button>
            <Button
              type="submit"
              size={"md"}
              background={colors.default.WHITE_THEME}
              color={colors.default.BLACK}
            >
              Cancel
            </Button>
          </Row>
        </MarginTop>
      </form>
    </Container>
  );
};

export default OperateBlogCategory;
