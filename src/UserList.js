import React from "react";

function UserList({ match, location }) {
  const {
    params: { id },
  } = match;
  return (
    <div>
      <h1>{id} </h1>
    </div>
  );
}

export default UserList;
