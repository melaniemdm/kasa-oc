import './style.scss';
import logoHeader from '../../assets/logo-header.jpg';
import Navigate from '../../components/Navigate';




function Header(){
   
  return (
    <header>
      <div className="containerLogoHeader">
        <img src={logoHeader} className="logoHeader" alt="logoHeader"></img>
      </div>
      <Navigate/>

    </header>
  );
        
}
export default Header;