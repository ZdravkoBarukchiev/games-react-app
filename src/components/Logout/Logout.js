import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
import { useEffect } from "react";

export const Logout = () => {
  const navigate = useNavigate();
  const { loginData, userLogout } = useContext(LoginContext);
  const url = "http://localhost:3030/users/logout";
  useEffect(() => {
    fetch(url, {
      headers: {
        "X-Authorization": loginData.accessToken,
      },
    });
    userLogout();
    navigate("/");
  }, [userLogout, navigate, loginData.accessToken]);

  return null;
};
