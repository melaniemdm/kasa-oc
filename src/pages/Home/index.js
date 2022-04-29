
import CardLogement from '../../components/CardLogement';
import BannerHome from '../../components/BannerHome';
import {logements} from '.././../datas/logements'
import './style.scss';

function HomePages(){
    return(
        <div>
        <BannerHome/>
<div>

<div className="containerListeLogement"> {logements.map(logement=><CardLogement  key={logement.id} titleLogement={logement.title} coverLogement={logement.cover} idLogement={logement.id} />  )}   </div>



</div></div>
    )
}

export default HomePages