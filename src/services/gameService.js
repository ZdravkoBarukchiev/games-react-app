export const gameService=()=>{
  return  fetch("http://localhost:3030/data/games")
    .then((res) => res.json())
}