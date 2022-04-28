import './style.scss';
import imageDuLogement from '../../assets/imgLogement.jpg';

function CardLogement(){

    return (
        <div className="containerCard">
<div className="containerImg">

<img src={imageDuLogement} className="logoHeader" alt="logoHeader"></img>

</div>
<div className="titleLogement">Appartement cosy</div>
        </div>
    )
}

export default CardLogement