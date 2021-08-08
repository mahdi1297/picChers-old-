import React, { useState } from "react";
import { Body } from "./style";
import { FiHome, FiMenu, FiSearch, FiGrid, FiPocket } from "react-icons/fi";
import { Link } from "react-router-dom";
import Modal from "./../../shared/elements/modal";
import PocketView from "../pocket-view";
import Sidebar from "./../sidebar";

const Navigation = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [open, setOpen] = useState(false);
  const modalOpenHandler = () => setOpen(true);
  const modalCloseHandler = () => setOpen(false);

  const openSidebarHandler = () => setOpenSidebar(!openSidebar);
  return (
    <>
      <Sidebar statue={openSidebar} />
      <Modal open={open} onClose={modalCloseHandler}>
        <PocketView />
      </Modal>
      <Body>
        <>  
          <span onClick={openSidebarHandler}>
            <FiMenu size={15} />
          </span>
        </>
        <>
          <span>
            <FiPocket size={15} onClick={modalOpenHandler} />
          </span>
        </>
        <>
          <Link to="/">
            <FiSearch size={15} />
          </Link>
        </>
        <>
          <Link to="/">
            <FiGrid size={15} />
          </Link>
        </>
        <>
          <Link to="/">
            <FiHome size={15} />
          </Link>
        </>
      </Body>
    </>
  );
};

export default Navigation;
