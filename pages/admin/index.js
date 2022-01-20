import React from "react";
import withAuth from "../../context/withAuth/WithAuth";

function DashBoard() {
  return (
    <>
      <h1>Dash Board</h1>
    </>
  );
}

export default withAuth(DashBoard);
