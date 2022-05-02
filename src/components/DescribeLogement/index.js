import Tags from "../../components/Tags";
import ContainerOfInformationLogement from "../../components/ContainerOfInformationLogement";
import starRed from "../../assets/starRed.png";
import starGrey from "../../assets/starGrey.png";
import "./style.scss";

function DescribeLogements(props) {
  var stars = [];
  for (let i = 0; i < parseInt(props.logement.rating); i++) {
    stars.push(<img key={i} src={starRed} alt="starRed" />);
  }
  for (let i = parseInt(props.logement.rating); i < 5; i++) {
    stars.push(<img key={i} src={starGrey} alt="starGrey" />);
  }

  return (
    <div id="containerLogement">
     
      
          <div id="titleDuLogement">{props.logement.title}</div>
        


  <div id="personnaLogement">
          <div id="nameOwner">{props.logement.host.name}</div>
          <div id="personna">
            <img
              className="photoOwner"
              id="photoOwner"
              src={props.logement.host.picture}
              alt="id Owner"
            ></img>
          </div>
        </div>
        
        
 <div id="localisationLogement">{props.logement.location}</div>

          <Tags titleTag={props.logement} />
       
      

     
      <div id="stars">{stars}</div>
      
        
     
     
        <div id="titleSection">
          <ContainerOfInformationLogement texteCard={props.logement} listCard={props.logement} />
        </div>
      </div>  
  );
}
export default DescribeLogements;
