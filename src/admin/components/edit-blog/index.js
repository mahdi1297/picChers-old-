import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, MarginTop, Row } from "../../../shared/elements/layout";
import { InputGroup, SelectGroup } from "../../../shared/elements/inputGroup";
import { TitleH1 } from "../../../shared/elements/title";
import { Button } from "../../../shared/elements/button";
import CKEditors from "react-ckeditor-component";
import { colors } from "../../../shared/theme/color";
import { size } from "../../../shared/theme/size";
import useGet from "./../../../queries/useGet";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import { useParams, Redirect } from "react-router";
import { postCall } from "../../../api/methods";
import { useMutation } from "react-query";
import AlertFireld from './../../../shared/elements/alert-field'
import Swal from "sweetalert2";

const EditBlog = ({ width }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [content, setContent] = useState("content");
  const { slug } = useParams();

  //Api calls
  const { data, isLoading, isFetching } = useGet(
    `http://localhost:5000/blog/${slug}`
  );

  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    isFetching: categoryIsFetching,
    error: categoryError,
  } = useGet("http://localhost:5000/blog/blog-categories");

  const editBlogRequset = useMutation((blog) =>
    postCall(blog, "blog/update-blog")
  );

  if (data) {
    setValue("title", data.data.getSlug[0].title);
  }
  const [descriptionVal, setDescriptionVal] = useState("");
  const [mainimageVal, setMainimageVal] = useState("");
  const [thumbnailVal, setThumbnailVal] = useState("");
  const [categoriesVal, setCategoriesVal] = useState("");

  useEffect(() => {
    if (data) {
      setDescriptionVal(data.data.getSlug[0].description);
      setMainimageVal(data.data.getSlug[0].mainimage);
      setThumbnailVal(data.data.getSlug[0].thumbnail);
      setCategoriesVal(data.data.getSlug[0].categories);
      setContent(data.data.getSlug[0].content);
    }
  }, [data]);

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const onCreatePostSubmitHandler = async (info) => {
    let dateNow = Date.now();
    let date_ob = new Date(dateNow);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    await postCall(
      {
        title: data.data.getSlug[0].title,
        description: info.description,
        mainimage: info.mainimage,
        thumbnail: info.thumbnail,
        slug: data.data.getSlug[0].slug,
        content: content,
        authername: data.data.getSlug[0].authername,
        username: data.data.getSlug[0].authername,
        profileimgae: data.data.getSlug[0].profileimgae,
        creationDate: year + "/" + month + "/" + date,
        categories: info.categories,
      },
      "blog/update-blog"
    );
  

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Blog edited successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (editBlogRequset.isSuccess) {
    return <Redirect to="/admin-panel/blog-list" />;
  }
  return (
    <>
      {categoryIsLoading | categoryIsFetching | isLoading | isFetching ? (
        <SmallSpinner />
      ) : (
        <Container
          style={width && { width: `${width}` }}
          background={colors.bg.WHITE}
          padding={"20px"}
        >
          <TitleH1 size={size.default.ex_md} color={colors.default.BLACK}>
            Edit blog
          </TitleH1>
          <form onSubmit={handleSubmit(onCreatePostSubmitHandler)}>
            <InputGroup
              label="Title"
              placeholder="post title"
              type="text"
              disabled={true}
              register={{ ...register("title", { required: true }) }}
              error={errors.title}
              styles={{ cursor: "not-allowed" }}
            />
            <InputGroup
              label="Description"
              placeholder="Post description"
              type="text"
              register={{ ...register("description", { required: true }) }}
              error={errors.description}
              defaultvalue={mainimageVal}
            />
            <InputGroup
              label="Main image url"
              placeholder="https://example.com/example-image"
              type="text"
              register={{ ...register("mainimage", { required: true }) }}
              error={errors.mainimage}
              defaultvalue={thumbnailVal}
            />
            <InputGroup
              label="Thumbnail image url"
              placeholder="https://example.com/example-image"
              type="text"
              register={{ ...register("thumbnail", { required: true }) }}
              error={errors.thumbnail}
              defaultvalue={categoriesVal}
            />
            <SelectGroup
              label={"Category"}
              data={categoryData && categoryData.data.categories}
              register={{ ...register("categories", { required: true }) }}
              error={errors.categories}
              defaultvalue={descriptionVal}
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
                  Edit
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
      )}
      {categoryError && <AlertFireld />}
    </>
  );
};

export default EditBlog;
