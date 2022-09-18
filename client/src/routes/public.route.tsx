import React from "react";
import Redirect from "./redirect";
import Cookies from "universal-cookie";

type Props = {
  children: JSX.Element;
};

const PublicRoute: React.FC<Props> = ({ children }): JSX.Element => {
  const cookies = new Cookies();
  const personnel = cookies.get("personnel");

  if (personnel) {
    return <Redirect to="/dashboard" />;
  }

  return children;
};

export default PublicRoute;
