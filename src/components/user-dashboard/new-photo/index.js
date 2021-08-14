import React from "react";
import PropTypes from "prop-types";
import Alert from "../../../shared/elements/alert";
import useGet from "../../../queries/useGet";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { InputGroup, SelectGroup } from "../../../shared/elements/inputGroup";
import { Form } from "./style";
import { Container } from "./../style";
import { TitleH1 } from "./../../../shared/elements/title";
import { colors } from "./../../../shared/theme/color";
import { size } from "../../../shared/theme/size";
import { Button } from "./../../../shared/elements/button";
import { postCall } from "../../../api/methods";

const UserNewPhoto = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const {
    data: categoryData,
    isLoading,
    isFetching,
    error: categoryError,
  } = useGet("http://localhost:5000/image-category/all");

  // eslint-disable-next-line no-unused-vars

  const mutation = useMutation((newPhtot) => postCall(newPhtot, `images`));

  const onSubmitHandler = (data) => {
    reset();
    const dataToCreate = {
      path: data.path,
      ownerId: id,
      alt: data.alt,
      title: data.title,
      link: data.link,
      tags: data.tags,
    };

    console.log(typeof dataToCreate.tags);
    mutation.mutate(dataToCreate);
    if (mutation.isSuccess) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div style={{ background: "#fff" }}>
      <Container background="#f5f5f5" padding="20px">
        <TitleH1 color={colors.default.BLACK} fontSize={size.default.lg}>
          Upload New Photo
        </TitleH1>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <InputGroup
            label={"Title"}
            isRequired={true}
            placeholder="enter your Image Title"
            register={{ ...register("title", { required: true }) }}
            error={errors.title}
          />
          <InputGroup
            label={"Image url"}
            isRequired={true}
            placeholder="enter your Image Url"
            register={{ ...register("path", { required: true }) }}
            error={errors.path}
          />
          <InputGroup
            label={"Link"}
            isRequired={true}
            placeholder="image download link"
            register={{ ...register("link", { required: true }) }}
            error={errors.link}
          />
          <InputGroup
            label={"Alternatinve text of image"}
            isRequired={true}
            placeholder="enter your Image alt"
            register={{ ...register("alt", { required: true }) }}
            error={errors.alt}
          />
          <SelectGroup
            label={"Category"}
            data={categoryData && categoryData.data.imageCategories}
            register={{ ...register("tags", { required: true, maxLength: 2 }) }}
            error={errors.tags}
            isLoading={isLoading}
            isFetching={isFetching}
            dataError={categoryError}
            max={2}
            multiple={true}
          />
          <Alert type="warning">Hold ctl to select multiple items</Alert>
          <Button
            type="submit"
            color={colors.default.WHITE_THEME}
            background={colors.bg.PRIMARY}
            size="lg"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

UserNewPhoto.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserNewPhoto;
