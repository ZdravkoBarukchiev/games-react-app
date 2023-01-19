import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
import { logoutService } from "../../services/logoutService";
import { useEffect } from "react";

export const Logout = () => {
  const navigate = useNavigate();
  const { loginData, userLogout } = useContext(LoginContext);
  const token = loginData.accessToken;
  const url = "http://localhost:3030/users/logout";
  useEffect(() => {
    logoutService(url, token).then(userLogout());
    navigate("/");
  }, [userLogout, navigate, token]);

  return null;
};
