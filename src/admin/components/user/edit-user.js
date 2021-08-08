import React, { useState, useEffect } from "react";
import { TitleH1 } from "../../../shared/elements/title";
import { InputGroup, SelectGroup } from "../../../shared/elements/inputGroup";
import { useForm } from "react-hook-form";
import { Button } from "../../../shared/elements/button";
import { colors } from "../../../shared/theme/color";
import { getCall, postCall } from "./../../../api/methods";
import { useMutation } from "react-query";

const accessControll = [
  { _id: 1, title: "user" },
  { _id: 2, title: "comment-checker" },
  { _id: 3, title: "blogger" },
];
const EditUser = ({ theme, modalOpenerId, onclick }) => {
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchUserData = async (modalOpenerId) => {
      const request = await getCall(`user/${modalOpenerId}`);
      setData(request);
    };
    fetchUserData(modalOpenerId);
  }, [modalOpenerId]);

  const updateUserMution = useMutation((userObj) =>
    postCall(userObj, "user/user-update")
  );

  const editUserSubmitHandler = (info) => {
    if (data) {
      const dataToSubmit = {
        _id: data.data.user._id,
        username: info.username,
        name: info.name,
        lastname: info.lastname,
        description: info.description,
        profileimage: info.profileimage,
        permission: info.useraccess,
      };
      updateUserMution.mutate(dataToSubmit);
    }
  };

  return (
    <div style={{ padding: "10px 20px" }}>
      <TitleH1 theme={theme}>Edit user</TitleH1>
      {data && (
        <form onSubmit={handleSubmit(editUserSubmitHandler)}>
          <InputGroup
            label="Username"
            placeholder={data.data.user.username}
            type="text"
            defaultvalue={data.data.user.username}
            register={{ ...register("username", { required: true }) }}
            error={errors.username}
          />
          <InputGroup
            label="Name"
            placeholder={data.data.user.name}
            defaultvalue={data.data.user.name}
            type="text"
            register={{ ...register("name", { required: true }) }}
            error={errors.lastname}
          />
          <InputGroup
            label="Lastname"
            placeholder={data.data.user.lastname}
            defaultvalue={data.data.user.lastname}
            type="text"
            register={{ ...register("lastname", { required: true }) }}
            error={errors.lastname}
          />
          <InputGroup
            label="Description"
            placeholder={data.data.user.description}
            defaultvalue={data.data.user.description}
            type="text"
            register={{ ...register("description", { required: true }) }}
            error={errors.description}
          />
          <InputGroup
            label="Image profile"
            defaultvalue={data.data.user.profileimage}
            type="text"
            register={{ ...register("profileimage", { required: true }) }}
            error={errors.profileimage}
          />
          <SelectGroup
            label={"User access"}
            data={accessControll}
            register={{ ...register("useraccess", { required: true }) }}
            error={errors.useraccess}
          />
          <Button
            type="submit"
            size={"md"}
            background={colors.default.MAIN_THEME}
            color={colors.default.WHITE_THEME}
            onclick={onclick}
          >
            Edit
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditUser;
