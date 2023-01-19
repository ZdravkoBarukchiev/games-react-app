export const deleteService = (gameId, token) => {
  const url = "http://localhost:3030/data/games/" + gameId;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};
