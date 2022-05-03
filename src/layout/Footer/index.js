import './style.scss';
import logoFooter from '../../assets/logo-footer.jpg';


function Footer() {
  
  return <footer >
    <div className="containerLogoFooter">
      <img src={logoFooter} className="logoFooter" alt="logoFooter"></img>
    </div>
    <div className="texteFooter">© 2020 Kasa. All rights reserved</div>
  </footer>;

}

export default Footer;