import { useEffect, useState } from "react";
export const useGameService = () => {
  const [games, setGame] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/data/games")
      .then((res) => res.json())
      .then((result) => setGame(result));
  }, []);
  return games;
};
