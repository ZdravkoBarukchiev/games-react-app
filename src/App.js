import { Routes, Route } from "react-router-dom";
import { DetailsPage } from "./components/detailsPage/DetailsPage";
import { Header } from "./components/header/Header";
import { HomePage } from "./components/homePage/HomePage";
import { LoginPage } from "./components/loginPage/LoginPage";
import { RegisterPage } from "./components/registerPage/RegisterPage";
import { CreatePage } from "./components/createPage/CreatePage";
import { EditPage } from "./components/editPage/EditPage";
import { Catalogues } from "./components/catalog/Catalogues";
import { Logout } from "./components/Logout/Logout";
import { GameContext } from "./context/gameContext";
import { useGameService } from "./services/gameService";
import { LoginContext } from "./context/loginContext";
import { useState } from "react";

function App() {
  const games = useGameService();
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
            <Route path="/create" element={<CreatePage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/catalog" element={<Catalogues />} />
            <Route path="/catalog/*" element={<DetailsPage games={games} />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </GameContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
