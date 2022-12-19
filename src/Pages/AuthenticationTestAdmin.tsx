import React from "react";
import { withAdminAuth } from "../HOC";

function AuthenticationTestAdmin() {
  return (
    <div>This page can only be accessed if role of logged in user is ADMIN</div>
  );
}

export default withAdminAuth(AuthenticationTestAdmin);
