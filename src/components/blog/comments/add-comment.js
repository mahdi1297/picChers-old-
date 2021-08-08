import React, { useState, useEffect } from "react";
import { AddCommentBody, Modal } from "./style";
import { Button } from "../../../shared/elements/button";
import { colors } from "../../../shared/theme/color";
import { useForm } from "react-hook-form";
import { InputGroup } from "./../../../shared/elements/inputGroup";
import { TextArea } from "./../../../shared/elements/inputGroup";
import { MarginTop } from "./../../../shared/elements/layout";
import { useMutation } from "react-query";
import { postCall } from "./../../../api/methods";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AlertField from "../../../shared/elements/alert-field";

const AddComment = ({ currentUser }) => {
  const { slug } = useParams();
  const [commentModal, setCommentModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const commentMutation = useMutation((comment) =>
    postCall(comment, "comments/")
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (commentMutation.isSuccess) {
      setCommentModal(false);
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 4000);
    }
    if (commentMutation.isError) {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 4000);
    }
  }, [commentMutation.isError, commentMutation.isSuccess]);

  const commentModalHandler = () => {
    if (currentUser.length !== 0) {
      setCommentModal(!commentModal);
    }
  };

  const submitHandler = (data) => {
    reset();
    commentMutation.mutate(data);
  };

  return (
    <>
      <AddCommentBody>
        <p>Share your ideas with others by leaving a comment</p>
        <Button
          type="submit"
          block={true}
          size={"lg"}
          background={colors.default.MAIN_THEME}
          color={colors.bg.WHITE}
          onclick={commentModalHandler}
        >
          {currentUser ? (
            " Add Comment"
          ) : (
            <Link to="/auth">login/ register to submit a comment</Link>
          )}
        </Button>
        {showSuccessAlert && (
          <AlertField
            type="success"
            message="Comment added successfully. wait for be accepted by admin"
          />
        )}
        {showErrorAlert && (
          <AlertField type="danger" message="Comment adding failed" />
        )}
        {commentModal && slug && (
          <Modal>
            <form onSubmit={handleSubmit(submitHandler)}>
              {currentUser !== undefined && (
                <>
                  <InputGroup
                    type="hidden"
                    defaultvalue={slug}
                    register={{ ...register("blogSlug") }}
                  />
                  <InputGroup
                    type="hidden"
                    defaultvalue={currentUser.name}
                    register={{ ...register("name") }}
                  />
                  <InputGroup
                    type="hidden"
                    defaultvalue={currentUser.lastname}
                    register={{ ...register("lastname") }}
                  />
                  <InputGroup
                    type="hidden"
                    defaultvalue={currentUser.profileimage}
                    register={{ ...register("profileimage") }}
                  />
                  <MarginTop margin="-110">
                    <TextArea
                      placeholder={"your comment"}
                      register={{ ...register("content", { required: true }) }}
                      error={errors.content}
                    ></TextArea>
                  </MarginTop>
                  <MarginTop margin="30">
                    <Button
                      type="submit"
                      block={true}
                      size={"lg"}
                      background={colors.default.BORDER}
                      color={colors.default.BLACK}
                    >
                      Submit Comment
                    </Button>
                  </MarginTop>
                </>
              )}
            </form>
          </Modal>
        )}
      </AddCommentBody>
    </>
  );
};

export default AddComment;
