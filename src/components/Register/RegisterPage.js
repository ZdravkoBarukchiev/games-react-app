import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
import { loginService } from "../../services/loginService";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(LoginContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const url = "http://localhost:3030/users/register";
    if (password !== confirmPassword) {
      return;
    }
    
    loginService(url, email, password).then((result) => {
      userLogin(result);
      navigate("/");
    });
  };
  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Register</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
          />
          <label htmlFor="pass">Password:</label>
          <input type="password" name="password" id="register-password" />
          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
          <input className="btn submit" type="submit" defaultValue="Register" />
          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
