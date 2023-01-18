//import { useGameService } from "../../services/gameService";
import { Game } from "./game/Game";
import { gameService } from "../../services/gameService";
import { useEffect, useState } from "react";
export const Catalogues = () => {
  //const games = useGameService();
  const [games, setGame] = useState([]);
  useEffect(() => {
    gameService("").then((result) => setGame(result));
  }, []);
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {games.length > 0 ? (
        games.map((x) => (
          <Game
            key={x._id}
            _id={x._id}
            name={x.title}
            type={x.category}
            img={x.imageUrl}
          />
        ))
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
};
