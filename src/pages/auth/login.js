import React, { useEffect } from "react";
import { InputGroup } from "../../shared/elements/inputGroup";
import { useForm } from "react-hook-form";
import { MarginTop } from "../../shared/elements/layout";
import { colors } from "../../shared/theme/color";
import { Button } from "../../shared/elements/button";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { postCall } from "../../api/methods";
import Toasts from "../../shared/elements/toasts";
import { getLoginUser } from "./../../actions/loginActions";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const mutation = useMutation((login) => postCall(login, "user/login"));

  const currentUser = useSelector((store) => store.login);

  useEffect(() => {}, [dispatch, mutation]);

  const loginSubmitHandler = async (data) => {
    dispatch(
      getLoginUser({
        username: data.username,
        password: data.password,
      })
    );
  };

  if (currentUser.status === 200) {
    localStorage.setItem("login", JSON.stringify(currentUser.user));
    setTimeout(() => {
      return (window.location.href = "/");
    }, 1000);
  }

  return (
    <>
      {(currentUser.status === 400) ? (
        <Toasts type="error" message="login faild" />
      ) : (
        <> </>
      )}
      {currentUser.status === 200 && (
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



