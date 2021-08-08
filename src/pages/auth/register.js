import React from "react";
import { InputGroup } from "../../shared/elements/inputGroup";
import { useForm } from "react-hook-form";
import { MarginTop } from "../../shared/elements/layout";
import { colors } from "../../shared/theme/color";
import { Button } from "../../shared/elements/button";
import { EmailPattern } from "./../../constants";
import { useMutation } from "react-query";
import { postCall } from "./../../api/methods";
import { Redirect } from "react-router";

const Register = () => {
  const registerMutation = useMutation((register) =>
    postCall(register, "user/register")
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerSubmitHandler = (data) => {
    const dataToSubmit = {
      username: data.username,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };
    registerMutation.mutate(dataToSubmit);
  };
  if (registerMutation.isSuccess) {
    console.log(registerMutation.data);
    return <Redirect to="/auth" />;
  }
  if (registerMutation.isError) {
    console.log(registerMutation.data);
  }

  return (
    <form onSubmit={handleSubmit(registerSubmitHandler)}>
      <InputGroup
        label="Username"
        placeholder="@mahdi14585"
        type="text"
        register={{
          ...register("username", {
            required: true,
            minLength: 8,
            maxLength: 150,
          }),
        }}
        error={errors.username}
        min={8}
        max={150}
      />
      <InputGroup
        label="Name"
        placeholder="mahdi"
        type="text"
        register={{
          ...register("name", { required: true, minLength: 8, maxLength: 100 }),
        }}
        error={errors.name}
        min={8}
        max={100}
      />
      <InputGroup
        label="Lastname"
        placeholder="alipour"
        type="text"
        register={{
          ...register("lastname", {
            required: true,
            minLength: 8,
            maxLength: 100,
          }),
        }}
        error={errors.lastname}
        min={8}
        max={100}
      />
      <InputGroup
        label="email"
        placeholder="mahdi@email.com"
        type="text"
        register={{
          ...register("email", {
            required: true,
            pattern: EmailPattern,
            minLength: 8,
            maxLength: 150,
          }),
        }}
        error={errors.email}
        min={8}
        max={150}
      />
      <InputGroup
        label="password"
        placeholder="strong password here"
        type="password"
        register={{
          ...register("password", {
            required: true,
            minLength: 8,
            maxLength: 150,
          }),
        }}
        error={errors.password}
        min={8}
        max={150}
      />
      <MarginTop margin="40">
        <Button
          type="submit"
          block={true}
          size={"lg"}
          background={colors.default.MAIN_THEME}
          color={colors.default.WHITE_THEME}
        >
          Register
        </Button>
      </MarginTop>
    </form>
  );
};

export default Register;
