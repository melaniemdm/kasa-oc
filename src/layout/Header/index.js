import './style.scss';
import logoFooter from '../../assets/logo-header.jpg';
import Navigate from '../../components/Navigate';
import Banner from '../../layout/Banner';



function Header(){
   
    return (
        <header>
<div className="containerLogoFooter">
<img src={logoFooter} className="logoFooter" alt="logoFooter"></img>
</div>
<Navigate/>
<Banner/>
        </header>
    )
        
}
export default Header