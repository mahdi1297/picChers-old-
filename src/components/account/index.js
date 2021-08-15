/* eslint-disable no-unused-vars */
import React from "react";
import { Body, Wrapper } from "./style";
import { TitleH1 } from "./../../shared/elements/title";
import { Row, Col } from "./../../shared/elements/layout";
import { useForm } from "react-hook-form";
import { InputGroup } from "../../shared/elements/inputGroup";
import Image from "../../shared/elements/image";
import { Button } from "../../shared/elements/button";
import { colors } from "../../shared/theme/color";
import { useSelector, useDispatch } from "react-redux";
import SmallSpinner from "./../../shared/elements/loaders/small-spinner";
import { updateUserAction } from "../../actions/usersAction";

const Account = () => {
  const currentUser = useSelector((store) => store.token);
  const updateResult = useSelector((store) => store.updateUser);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const accountSubmitHandler = (data) => {
    const overRideData = {
      _id: currentUser._id,
      name: data.name,
      lastname: data.lastname,
      username: data.username,
      profileimage: data.profileimage,
      description: data.description,
    };
    dispatch(updateUserAction(overRideData));
    window.location.href = "/account";
  };

  console.log(updateResult);

  return (
    <Body>
      <TitleH1>Account settings</TitleH1>
      <Wrapper>
        {currentUser.length === 0 ? (
          <SmallSpinner />
        ) : (
          <form onSubmit={handleSubmit(accountSubmitHandler)}>
            <Row justify="space-between">
              <Col width="50%" padding="20px">
                <Row justify="center">
                  <Image
                    src={currentUser.profileimage}
                    alt="some alt here"
                    width="184"
                    radius="10px"
                  />
                </Row>
                <InputGroup
                  label="progile image url"
                  placeholder="url of profile image"
                  type="text"
                  register={{ ...register("profileimage", { required: true }) }}
                  error={errors.profileimage}
                  defaultvalue={currentUser.profileimage}
                />
              </Col>
              <Col width="50%" padding="20px">
                <InputGroup
                  label="name"
                  placeholder="your name"
                  type="text"
                  register={{ ...register("name", { required: true }) }}
                  error={errors.name}
                  defaultvalue={currentUser.name}
                />
                <InputGroup
                  label="lastname"
                  placeholder="your lastname"
                  type="text"
                  register={{ ...register("lastname", { required: true }) }}
                  error={errors.lastname}
                  defaultvalue={currentUser.lastname}
                />
                <InputGroup
                  label="username"
                  placeholder="your username"
                  type="text"
                  register={{ ...register("username", { required: true }) }}
                  error={errors.username}
                  defaultvalue={currentUser.username}
                />
              </Col>
            </Row>
            <Row padding="20px">
              <InputGroup
                label="description"
                placeholder="your description"
                type="text"
                register={{
                  ...register("description", {
                    required: true,
                    maxLength: 255,
                  }),
                }}
                error={errors.username}
                defaultvalue={currentUser.description}
              />
            </Row>
            <Row padding="20px">
              <Button
                type="submit"
                size={"md"}
                background={colors.default.MAIN_THEME}
                color={colors.default.WHITE_THEME}
              >
                Update information
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
          </form>
        )}
      </Wrapper>
    </Body>
  );
};

export default Account;
