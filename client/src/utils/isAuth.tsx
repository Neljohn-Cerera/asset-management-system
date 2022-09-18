import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const IsAuth = ({
  role,
  children,
}: {
  role: string;
  children: JSX.Element;
}) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const personnel = cookies.get("personnel");

  useEffect(() => {
    if (role === "ADMIN" && personnel.role === "STAFF") {
      window.alert("Unauthorize access");
      return navigate("/dashboard");
    }
  }, [role, personnel, navigate]);

  return children;
};

export default IsAuth;
