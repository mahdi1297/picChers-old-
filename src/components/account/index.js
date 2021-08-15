import React from "react";
import { Body, Wrapper } from "./style";
import { TitleH1 } from "./../../shared/elements/title";
import { Row, Col } from "./../../shared/elements/layout";
import { useForm } from "react-hook-form";
import { InputGroup } from "../../shared/elements/inputGroup";
import Image from "../../shared/elements/image";
import { Button } from "../../shared/elements/button";
import { colors } from "../../shared/theme/color";

const Account = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const accountSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <Body>
      <TitleH1>Account settings</TitleH1>
      <Wrapper>
        <form onSubmit={handleSubmit(accountSubmitHandler)}>
          <Row justify="space-between">
            <Col width="50%" padding="20px">
              <Row justify="center">
                <Image
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt="some alt here"
                  width="184"
                  radius="10px"
                />
              </Row>
              <InputGroup
                label="progile image url"
                placeholder="your name"
                type="text"
                register={{ ...register("profileimage", { required: true }) }}
                error={errors.profileimage}
              />
            </Col>
            <Col width="50%" padding="20px">
              <InputGroup
                label="name"
                placeholder="your name"
                type="text"
                register={{ ...register("name", { required: true }) }}
                error={errors.name}
              />
              <InputGroup
                label="lastname"
                placeholder="your lastname"
                type="text"
                register={{ ...register("lastname", { required: true }) }}
                error={errors.lastname}
              />
              <InputGroup
                label="username"
                placeholder="your username"
                type="text"
                register={{ ...register("username", { required: true }) }}
                error={errors.username}
              />
            </Col>
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
      </Wrapper>
    </Body>
  );
};

export default Account;
