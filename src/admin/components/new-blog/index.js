import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, MarginTop, Row } from "./../../../shared/elements/layout";
import { InputGroup, SelectGroup } from "../../../shared/elements/inputGroup";
import { TitleH1 } from "./../../../shared/elements/title";
import { Button } from "./../../../shared/elements/button";
import CKEditors from "react-ckeditor-component";
import { colors } from "./../../../shared/theme/color";
import urlSlug from "url-slug";
import { size } from "./../../../shared/theme/size";
import { useMutation } from "react-query";
import useGet from "../../../queries/useGet";
import { postCall } from "./../../../api/methods";
import { useSelector } from "react-redux";

const NewBlog = ({ width }) => {
  const [content, setContent] = useState("content");

  const currentUser = useSelector((state) => state.login);

  const {
    data: categoryData,
    isLoading,
    isFetching,
    error: categoryError,
  } = useGet("http://localhost:5000/image-category/all");

  const createBlogRequset = useMutation((blog) =>
    postCall(blog, "blog/new-blog")
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const onCreatePostSubmitHandler = (data) => {
    let dateNow = Date.now();
    let date_ob = new Date(dateNow);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    reset();
    if (content.length === 0) return false;
    const submitedData = {
      title: data.title,
      description: data.description,
      mainimage: data.mainimage,
      thumbnail: data.thumbnail,
      slug: urlSlug(data.title),
      content: content,
      authername: currentUser[0].name + " " + currentUser[0].lastname,
      username: currentUser[0].username,
      profileimgae: currentUser[0].profileimage,
      creationDate: year + "/" + month + "/" + date,
      categories: data.categories,
    };

    console.log(submitedData);
    createBlogRequset.mutate(submitedData);
    setContent("content");
  };

  return (
    <Container
      style={width && { width: `${width}` }}
      background={colors.bg.WHITE}
      padding={"20px"}
    >
      <TitleH1 size={size.default.ex_md} color={colors.default.BLACK}>
        Create new blog
      </TitleH1>
      <form onSubmit={handleSubmit(onCreatePostSubmitHandler)}>
        <InputGroup
          label="Title"
          placeholder="post title"
          type="text"
          register={{ ...register("title", { required: true }) }}
          error={errors.title}
        />
        <InputGroup
          label="Description"
          placeholder="Post description"
          type="text"
          register={{ ...register("description", { required: true }) }}
          error={errors.description}
        />
        <InputGroup
          label="Main image url"
          placeholder="https://example.com/example-image"
          type="text"
          register={{ ...register("mainimage", { required: true }) }}
          error={errors.mainimage}
        />
        <InputGroup
          label="Thumbnail image url"
          placeholder="https://example.com/example-image"
          type="text"
          register={{ ...register("thumbnail", { required: true }) }}
          error={errors.thumbnail}
        />
        <SelectGroup
          label={"Category"}
          data={categoryData && categoryData.data.imageCategories}
          register={{ ...register("categories", { required: true }) }}
          error={errors.categories}
          isLoading={isLoading}
          isFetching={isFetching}
          dataError={categoryError}
          multiple={true}
        />
        <MarginTop margin="50">
          <CKEditors
            activeclassName="p10"
            content={content}
            events={{
              change: onChange,
            }}
          />
        </MarginTop>
        <MarginTop margin="30">
          <Row>
            <Button
              type="submit"
              size={"md"}
              background={colors.default.MAIN_THEME}
              color={colors.default.WHITE_THEME}
            >
              "Create
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

export default NewBlog;
