import './style.scss';
import bannerHomme from '../../assets/bannerHome.png';
function Banner() {
  //  const txt = "Chez vous, partout et ailleurs";
    return <div id='containerBanner'>
        
         <div className='bannerImg' >
        
        <img src={bannerHomme} alt='banner de la Home page' className='bannerHome' />
        </div>
        <div className="linearGradientBanner"></div>

        <div id='containerTextbanner'>
        <div id="texteBanner">Chez vous, partout et ailleurs</div>

        </div>
        
           
        </div>

}

export default Banner