import React, { useState, useEffect } from "react";
import { Container, Row } from "../../../shared/elements/layout";
import { TitleH1 } from "../../../shared/elements/title";
import { colors } from "../../../shared/theme/color";
import { InputGroup } from "../../../shared/elements/inputGroup";
import { useForm } from "react-hook-form";
import { Button } from "../../../shared/elements/button";
import { MarginTop } from "../../../shared/elements/layout";
import { useMutation } from "react-query";
import { getCall, postCall } from "./../../../api/methods";

const UserAccountSettings = ({ currentUser }) => {
  const [nameInpVal, setNameInpVal] = useState("");
  const [lastnameInpVal, setLastnameInpVal] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setNameInpVal(currentUser.name);
    setLastnameInpVal(currentUser.lastname);
  }, [currentUser.lastname, currentUser.name]);

  const changeSettingsMutation = useMutation((settings) =>
    postCall(settings, "user/user-update")
  );

  const getFreshUserData = async (id) => {
    const response = await getCall(`user/${id}`);

    if (response.length !== 0 || response !== undefined) {
      localStorage.setItem("login", JSON.stringify(response.data.user));
    }
    return false;
  };

  const onEditAccountSubmitHandler = (data) => {
    const info = {
      id: currentUser._id,
      name: data.name,
      lastname: data.lastname,
      profileimage: data.profileimage,
      description: data.description,
    };
    console.log(info);
    changeSettingsMutation.mutate(info);
    getFreshUserData(data._id);
  };
  if (changeSettingsMutation.isSuccess) {
    const login = JSON.parse(localStorage.getItem("login"));
    Object.keys(changeSettingsMutation.data.data.response).forEach((key) => {
      login[key] = changeSettingsMutation.data.data.response[key];
    });
    localStorage.setItem("login", JSON.stringify(login));
  }

  return (
    <Container background={colors.bg.WHITE}>
      <TitleH1>Account settings</TitleH1>
      {!currentUser ? (
        <p>Access Denied</p>
      ) : (
        <form onSubmit={handleSubmit(onEditAccountSubmitHandler)}>
          <input type="hidden" {...register("_id")} value={currentUser._id} />
          <InputGroup
            label="Name"
            type="text"
            register={{ ...register("name", { required: true }) }}
            placeholder={nameInpVal}
            error={errors.name}
          />
          <InputGroup
            label="Lastname"
            type="text"
            register={{ ...register("lastname", { required: true }) }}
            error={errors.lastname}
            placeholder={lastnameInpVal}
          />
          <InputGroup
            label="Description"
            type="text"
            placeholder={currentUser.profileimage}
            register={{ ...register("description", { required: true }) }}
            error={errors.description}
          />
          <InputGroup
            label="Profile image"
            type="text"
            placeholder={currentUser.profileimage}
            register={{ ...register("profileimage", { required: true }) }}
            error={errors.profileimage}
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
      )}
    </Container>
  );
};

export default UserAccountSettings;
