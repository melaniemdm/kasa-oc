import "./style.scss";
import ContainerOfInformation from '../../components/ContainerOfInformation'

function ContainerOfInformationLogement(props) {
  const texteCard = (
    <div id="texteCard">
      <div>{props.texteCard.description}</div>
    </div>
  );

  const listeCard = (
    <div id="listeCard">
      <ul>
        {" "}
        <li>
          {props.listCard.equipments.map((list, index) => (
            <div key={index} id="listeDescribe">
              {list}
            </div>
          ))}
        </li>
      </ul>
    </div>
  );

  
  return (
    <div className="containerlogement">

     <ContainerOfInformation id="description" name ="Describe" label="Description" textCard={texteCard} />
     <ContainerOfInformation id="equipement" name ="Equipement" label="Equipement" textCard={listeCard} />

        </div>
  );
}
export default ContainerOfInformationLogement;
