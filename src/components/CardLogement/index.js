import "./style.scss";
//import imageDuLogement from '../../assets/imgLogement.jpg';
import { Link } from "react-router-dom";

function CardLogement(props) {
  return (
   
      <div className="containerOneCard">

 <Link to={"/logement/" + props.idLogement}>
        <div className="linearGradientHome"></div>
        <div className="containerImg">
          <img
            src={props.coverLogement}
            className="imgLogement"
            alt="logements"
          ></img>
        </div>
        <div className="titleLogement">{props.titleLogement}</div>
      </Link>
      </div>
    
  );
}

export default CardLogement;
