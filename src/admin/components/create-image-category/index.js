import React, { useEffect } from "react";
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
import Swal from "sweetalert2";

const OperateImageCategory = ({ width }) => {
  const createBlogCategory = useMutation((blog) =>
    postCall(blog, "image-category")
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (createBlogCategory.isSuccess) {
      Swal.fire({
        title: "Image category createed successfully",
        icon: "success",
        timer: 2000,
      });
    }
    if (createBlogCategory.isError) {
      Swal.fire({
        title: "Something bad happeng",
        icon: "error",
        timer: 2000,
      });
    }
  }, [createBlogCategory.isError, createBlogCategory.isSuccess]);

  const onCreatePostSubmitHandler = (data) => {
    reset();
    const dataToSubmit = {
      title: data.name,
      slug: urlSlug(data.name),
    };
    createBlogCategory.mutate(dataToSubmit);
  };

  return (
    <Container
      style={width && { width: `${width}` }}
      background={colors.bg.WHITE}
      padding={"20px"}
    >
      <TitleH1 size={size.default.ex_md} color={colors.default.BLACK}>
        Create new image category
      </TitleH1>
      <form onSubmit={handleSubmit(onCreatePostSubmitHandler)}>
        <InputGroup
          label="Category name"
          placeholder="category name"
          type="text"
          register={{ ...register("name", { required: true }) }}
          error={errors.name}
        />
        <MarginTop margin="30">
          <Row>
            <Button
              type="submit"
              size={"md"}
              background={colors.default.MAIN_THEME}
              color={colors.default.WHITE_THEME}
            >
              Create
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

export default OperateImageCategory;
