import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";

export const Edit = () => {
  const { loginData } = useContext(LoginContext);
  const token = loginData.accessToken;
  const navigate = useNavigate();
  const gameObj = useParams();
  const gameValue = Object.values(gameObj);
  const gameId = gameValue[0];
  const url = `http://localhost:3030/data/games/${gameId}`;

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const category = formData.get("category");
    const maxLevel = formData.get("maxLevel");
    const imageUrl = formData.get("imageUrl");
    const summary = formData.get("summary");
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify({ title, category, maxLevel, imageUrl, summary }),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/");
      });
  };

  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" defaultValue="" />
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" defaultValue="" />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            defaultValue=""
          />
          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" defaultValue={""} />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Edit Game"
          />
        </div>
      </form>
    </section>
  );
};
