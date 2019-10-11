import React from "react";

import {
  Button,
} from "reactstrap";

import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return (
    <div className="nav-container">
              {!isAuthenticated && (
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
              )}
            {isAuthenticated && (
                  <Button
                    id="qsLogoutBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => logoutWithRedirect({})}
                  >
                    Log out
                  </Button>
            )}
    </div>
  );
};

export default NavBar;
