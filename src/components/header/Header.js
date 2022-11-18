import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";

export const Header = () => {
  const { loginData } = useContext(LoginContext);
  return (
    <header>
      {/* Navigation */}
      <h1>
        <Link className="home" to="/">
          GamesPlay
        </Link>
      </h1>
      <nav>
        {loginData._id && <span>{loginData.email}</span>}
        <Link to="/catalog">All games</Link>
        {loginData._id ? (
          <div id="user">
            <Link to="/create">Create Game</Link>
            <Link to="/logout">Logout</Link>
          </div>
        ) : (
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};
