import React, { useEffect } from "react";
import { InputGroup } from "../../shared/elements/inputGroup";
import { useForm } from "react-hook-form";
import { MarginTop } from "../../shared/elements/layout";
import { colors } from "../../shared/theme/color";
import { Button } from "../../shared/elements/button";
import { useDispatch } from "react-redux";
import { addUserLoginAction } from "./../../actions/loginActions";
import { useMutation } from "react-query";
import { postCall } from "../../api/methods";
import Toasts from "../../shared/elements/toasts";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("login");
    const storage = localStorage.getItem("login");
    dispatch(addUserLoginAction(storage));
  }, [dispatch]);

  const mutation = useMutation((login) => postCall(login, "user/login"));

  const loginSubmitHandler = (data) => {
    mutation.mutate({ username: data.username, password: data.password });
  };

  if (mutation.isSuccess) {
    localStorage.setItem("login", JSON.stringify(mutation.data.data.user));
    setTimeout(() => {
      return (window.location.href = "/");
    }, 1000);
  }

  return (
    <>
      {mutation.isError && (
        <Toasts type="error" message="login faild" />
      )}
      {mutation.isSuccess && (
        <Toasts type="success" message="successfull login" />
      )}

      <form onSubmit={handleSubmit(loginSubmitHandler)}>
        <InputGroup
          label="userName"
          placeholder="your userName"
          type="text"
          register={{ ...register("username", { required: true }) }}
          error={errors.username}
        />
        <InputGroup
          label="password"
          placeholder="your password"
          type="password"
          register={{ ...register("password", { required: true }) }}
          error={errors.password}
        />
        <MarginTop margin="40">
          <Button
            type="submit"
            block={true}
            size={"lg"}
            background={colors.default.MAIN_THEME}
            color={colors.default.WHITE_THEME}
          >
            {mutation.isSuccess ? "redirecting to home....." : "login"}
          </Button>
        </MarginTop>
      </form>
    </>
  );
};

export default Login;
