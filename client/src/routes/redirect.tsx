import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  to: string;
};

const Redirect: React.FC<Props> = ({ to }): any => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, [navigate, to]);
  return null;
};

export default Redirect;
