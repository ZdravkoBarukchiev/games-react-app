import { LastGames } from "./lastGames/LastGames";
import { gameService } from "../../services/gameService";
import { useEffect, useState } from "react";
export const HomePage = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    gameService("").then((result) => setGames(result));
  }, []);
  let revercedGames = [];
  games.forEach((g) => revercedGames.unshift(g));
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />
      <div id="home-page">
        <h1>Latest Games</h1>
        {revercedGames.length > 0 ? (
          revercedGames.map((x) => (
            <LastGames
              key={x._id}
              name={x.title}
              img={x.imageUrl}
              _id={x._id}
            />
          ))
        ) : (
          <p className="no-articles">No games yet</p>
        )}
      </div>
    </section>
  );
};
