import ContainerOfInformation from '../../components/ContainerOfInformation';
import BannerPropos from '../../components/BannerPropos';
import Footer from '../../layout/Footer';
import './style.scss';

function ProposPages (){
    
    const textOfFiabilite = "Les annonces postées sur Kasa garantissent une fiablité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes.";

    const textOfRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    
    const textOfService ="Nos équipes se tiennent à votre disposition pour vous fournir une experience parfaite. N'hesitez pas à nous contacter si vous avez la moindre question.";
    
    const textOfResponsabilite ="  La sécurité est la priorité de Kasa. Aussi pour nos hôtes que pour les voyageurs, chaque logement correspond aux criteres de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la securité domestique pour nos hôtes.";

    return( 
    <div>
    <BannerPropos/>
    <div className="containerAProposDetail">
    <ContainerOfInformation id="fiabilite" name ="Fiabilite" label="Fiabilité" textCard={textOfFiabilite} />
    <ContainerOfInformation id="respect" name ="Respect" label="Respect" textCard={textOfRespect} />      
    <ContainerOfInformation id="service" name ="Service" label="Service" textCard={textOfService} />   
    <ContainerOfInformation id="responsabilite" name ="Responsabilite" label="Responsabilite" textCard={textOfResponsabilite} />         
            
            </div>
            <Footer/>
      </div>      
            
            )
}
export default ProposPages