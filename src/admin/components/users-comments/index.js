import React, { useEffect, useState } from "react";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import { Container } from "../../../shared/elements/layout";
import { TitleH1 } from "../../../shared/elements/title";
import { colors } from "../../../shared/theme/color";
import { size } from "../../../shared/theme/size";
import { Table } from "./../../style";
import { FiX, FiCheck } from "react-icons/fi";
import { useMutation } from "react-query";
import Toasts from "../../../shared/elements/toasts";
import { getCall, postCall } from "./../../../api/methods";
import { Link } from "react-router-dom";


const UsersComments = () => {
  const [getData, setGetData] = useState("");

  const confirmRequestMutation = useMutation((confirmObj) =>
    postCall(confirmObj, "comments/confirm-comment")
  );
  const removeRequestMutation = useMutation((removeObj) =>
    postCall(removeObj, "comments/indicate-comment")
  );
  const requestData = async () => {
    const response = await getCall("comments");
    setGetData(response);
  };
  useEffect(() => {
    requestData();
  }, []);

  const confirmRequester = async (status, _id) => {
    if ((!status, !_id)) return false;
    const data = {
      _id: _id,
      isConfirmed: status,
    };
    confirmRequestMutation.mutate(data);
    requestData();
  };

  const removeRequester = async (status, _id) => {
    if ((!status, !_id)) return false;
    const data = {
      _id: _id,
      isRemoved: status,
    };
    removeRequestMutation.mutate(data);
    requestData();
  };
  return (
    <>
      <Container background={colors.bg.WHITE} padding={"20px"}>
        <TitleH1 size={size.default.ex_md} color={colors.default.BLACK}>
          Manage comments
        </TitleH1>
        {!getData ? (
          <SmallSpinner />
        ) : (
          getData && (
            <Table>
              <thead>
                <tr>
                  <th>remove</th>
                  <th>confirm</th>
                  <th>content</th>
                  <th>blog</th>
                </tr>
              </thead>
              <tbody>
                {getData.data.response.map((item) => (
                  <tr key={item._id}>
                    <td>
                      {item.isRemoved ? (
                        <span onClick={() => removeRequester(false, item._id)}>
                          <FiCheck size={"20"} color={colors.bg.SUCCESS} />
                        </span>
                      ) : (
                        <span onClick={() => removeRequester(true, item._id)}>
                          <FiX size={"18"} color={colors.bg.SECENDORY} />
                        </span>
                      )}
                    </td>
                    <td>
                      {item.isConfirmed ? (
                        <span onClick={() => confirmRequester(false, item._id)}>
                          <FiCheck size={"20"} color={colors.bg.SUCCESS} />
                        </span>
                      ) : (
                        <span onClick={() => confirmRequester(true, item._id)}>
                          <FiX size={"18"} color={colors.bg.SECENDORY} />
                        </span>
                      )}
                    </td>
                    <td>{item.content}</td>
                    <td>
                      <Link to={`/blog/${item.blogSlug}`}>{item.blogSlug}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}
      </Container>
      {confirmRequestMutation.isSuccess && (
        <Toasts type="success" message="successfully updated" />
      )}
      {confirmRequestMutation.isError && (
        <Toasts type="error" message="Something bad happend, try agein later" />
      )}
      {removeRequestMutation.isSuccess && (
        <Toasts type="success" message="successfully updated" />
      )}
      {removeRequestMutation.isError && (
        <Toasts type="error" message="Something bad happend, try agein later" />
      )}
    </>
  );
};

export default UsersComments;
