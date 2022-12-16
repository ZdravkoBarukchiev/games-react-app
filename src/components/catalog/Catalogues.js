import { useGameService } from "../../services/gameService";
import { Game } from "./game/Game";
export const Catalogues = () => {
  const games = useGameService();
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
