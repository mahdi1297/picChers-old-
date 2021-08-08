import React, { useState, useEffect, lazy, Suspense } from "react";
import SmallSpinner from "./../../../shared/elements/loaders/small-spinner";
import { Container } from "../../../shared/elements/layout";
import { TitleH1 } from "../../../shared/elements/title";
import { colors } from "../../../shared/theme/color";
import { size } from "../../../shared/theme/size";
import { Table } from "./../../style";
import Image from "./../../../shared/elements/image";
import { FiEdit, FiDelete } from "react-icons/fi";
import Modal from "./../../../shared/elements/modal";
import { Button } from "./../../../shared/elements/button";
import { MarginTop } from "../../../shared/elements/layout";
import { getCall } from "../../../api/methods";

const EditUser = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./edit-user"));
  });
});

const UsersList = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [modalOpenerId, setModalOpenerId] = useState(0);

  const fetchUsers = async () => {
    const res = await getCall("user");
    setData(res);
  };
  useEffect(() => {
    fetchUsers();
    if (!open) {
      fetchUsers();
    }
  }, [open]);

  const openModalHandler = (id) => {
    setOpen(true);
    setModalOpenerId(id);
  };
  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <Container background={colors.bg.WHITE} padding={"20px"}>
        <TitleH1 size={size.default.ex_md} color={colors.default.BLACK}>
          Users list
        </TitleH1>
        {!data ? (
          <SmallSpinner />
        ) : (
          data && (
            <Table> 
              <thead>
                <tr>
                  <th>operation</th>
                  <th>permission</th>
                  <th>username</th>
                  <th>totla likes</th>
                  <th>role</th>
                  <th>lastname</th>
                  <th>name</th>
                  <th>profile image</th>
                </tr>
              </thead>
              <tbody>
                {data.data.users.map((item) => (
                  <tr key={item._id}>
                    <td>
                      {item.permission === "Admin" ? (
                        <>Admin</>
                      ) : (
                        <>
                          <FiEdit
                            onClick={() => openModalHandler(item._id)}
                            size={"18"}
                            color={colors.bg.PRIMARY}
                          />{" "}
                          <FiDelete size={"18"} color={colors.bg.SECENDORY} />
                        </>
                      )}
                    </td>
                    <td>{item.permission}</td>
                    <td>{item.username}</td>
                    <td>{item.totallikes}</td>
                    <td>{item.role}</td>
                    <td>{item.lastname}</td>
                    <td>{item.name}</td>
                    <td>
                      <Image
                        src={item.profileimage}
                        alt={item.name}
                        width="40"
                        height="40"
                        radius="5px"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}
      </Container>
      {modalOpenerId !== 0 && modalOpenerId !== undefined && (
        <Modal open={open} onClose={closeModalHandler}>
          <Suspense fallback={<SmallSpinner />}>
            <EditUser modalOpenerId={modalOpenerId} />
            <MarginTop margin="30" />
            <Button
              type="submit"
              block={true}
              size={"lg"}
              background={colors.default.BORDER}
              color={colors.default.WHITE_THEME}
              onclick={closeModalHandler}
            >
              Close
            </Button>
          </Suspense>
        </Modal>
      )}
    </>
  );
};

export default UsersList;
