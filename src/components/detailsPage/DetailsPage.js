import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";

export const DetailsPage = () => {
  const { loginData } = useContext(LoginContext);
  const token = loginData.accessToken;
  const navigate = useNavigate();
  const gameObj = useParams();
  const gameValue = Object.values(gameObj);
  const gameId = gameValue[0];
  const url = `http://localhost:3030/data/games/${gameId}`;

  const [currentGame, setCurrentGame] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setCurrentGame(result));
  }, [url]);

  const deleteFn = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/");
      });
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={currentGame.imageUrl} alt="" />
          <h1>{currentGame.title}</h1>
          <span className="levels">MaxLevel:{currentGame.maxLevel} </span>
          <p className="type"></p>
        </div>
        <p className="text"></p>
        {/* Bonus ( for Guests and Users ) */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* list all comments for current game (If any) */}
            <li className="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className="comment">
              <p>{currentGame.summary}</p>
            </li>
          </ul>
          {/* Display paragraph: If there are no games in the database */}
          <p className="no-comment">No comments.</p>
        </div>
        {/* Edit/Delete buttons ( Only for creator of this game )  */}
        <div className="buttons">
          <Link to={`/edit/${gameId}`} className="button">
            Edit
          </Link>
          <a href="/" className="button" onClick={deleteFn}>
            Delete
          </a>
        </div>
      </div>
      {/* Bonus */}
      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form">
          <textarea
            name="comment"
            placeholder="Comment......"
            defaultValue={""}
          />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />
        </form>
      </article>
    </section>
  );
};
