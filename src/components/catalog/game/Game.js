import { Link } from "react-router-dom";



export const Game = (props) => {
  
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={props.img} alt="" />
        <h6>{props.name}</h6>
        <h2>{props.type}</h2>
       
       
        <Link to={`/catalog/${props._id}`} className="details-button">
          Game Details
        </Link>

      </div>
    </div>
  );
};
