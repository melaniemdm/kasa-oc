import './style.scss';
import {Link} from 'react-router-dom';


function Navigate(){

    return <div className="containerNavigate">
   <nav className="navigate">
   <Link to="/home " className="accueil">Accueil</Link> 
   <Link to="/propos" className="apropos">A propos</Link>
    </nav>
    </div>
}
export default Navigate