import React from "react";
import Redirect from "./redirect";
import Cookies from "universal-cookie";

type Props = {
  children: JSX.Element;
};

const PrivateRoute: React.FC<Props> = ({ children }): JSX.Element => {
  const cookies = new Cookies();
  const personnel = cookies.get("personnel");

  if (!personnel) {
    return <Redirect to="/" />;
  }

  return children;
};

export default PrivateRoute;
