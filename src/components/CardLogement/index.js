import './style.scss';
//import imageDuLogement from '../../assets/imgLogement.jpg';

function CardLogement(props){
    function handleClick(e) {
        e.preventDefault();
     
    window.location.href="/logement/"+ props.idLogement;
    
      }
    return (
        <div className="containerOneCard" onClick={handleClick}>
            <div className="linearGradientHome"></div>
<div className="containerImg">

<img src={props.coverLogement} className="imgLogement" alt="logements"></img>

</div>
<div className="titleLogement">{props.titleLogement}</div>
        </div>
    )
}

export default CardLogement