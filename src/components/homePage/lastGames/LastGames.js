import { Link } from "react-router-dom";

export const LastGames = (props) => {
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={props.img} alt="" />
      </div>
      <h3>{props.name}</h3>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <div className="data-buttons">
        <Link to= {`/catalog/${props._id}`} className="btn details-btn">
          Details
        </Link>
      </div>
    </div>
  );
};
