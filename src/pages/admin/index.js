import React from "react";
import AdminDashboard from "../../admin";
import Head from "./../../components/head";

const Admin = () => {
  document.getElementById("body").style.background = "#f8f8f8";
  return (
    <>
      <Head title="admin dashboard | pickChers" />
      <div style={{ marginTop: "70px" }}>
        <AdminDashboard />
      </div>
    </>
  );
};

export default Admin;
