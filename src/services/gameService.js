const url = "http://localhost:3030/data/games/";
export const gameService = (gameId) => {
  return fetch(url + gameId).then((res) => res.json());
};
