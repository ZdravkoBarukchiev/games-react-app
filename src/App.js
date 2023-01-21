import { Routes, Route } from "react-router-dom";
import { Details } from "./components/Details/Details";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/Home/HomePage";
import { LoginPage } from "./components/Login/LoginPage";
import { RegisterPage } from "./components/Register/RegisterPage";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Edit } from "./components/Edit/Edit";
import { Catalogues } from "./components/Catalog/Catalogues";
import { Logout } from "./components/Logout/Logout";
import { GameContext } from "./context/gameContext";
import { gameService } from "./services/gameService";
import { LoginContext } from "./context/loginContext";
import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    gameService("").then((result) => setGames(result));
  }, []);

  const [loginData, setLoginData] = useState({});
  const userLogin = (userData) => {
    setLoginData(userData);
  };
  const userLogout = () => {
    setLoginData({});
  };
  return (
    <div id="box">
      <LoginContext.Provider value={{ loginData, userLogin, userLogout }}>
        <GameContext.Provider value={{ games }}>
          <Header />
          <main id="main-content"></main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreateGame />} />
            <Route path="/edit/*" element={<Edit />} />
            <Route path="/catalog" element={<Catalogues />} />
            <Route path="/catalog/*" element={<Details games={games} />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </GameContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
