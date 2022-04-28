import './style.scss';
import logoFooter from '../../assets/logo-header.jpg';
import Navigate from '../../components/Navigate'

function Header(){
   
    return (
        <header>
<div className="containerLogoFooter">
<img src={logoFooter} className="logoFooter" alt="logoFooter"></img>
</div>
<Navigate/>
        </header>
    )
        
}
export default Header