import './style.scss';
import bannerHomme from '../../assets/bannerHome.png';
function Banner() {
  const txt = "Chez vous, partout et ailleurs";
    return <div className='containerBanner'>
        
         <div className='bannerImg' >
        
        <img src={bannerHomme} alt='banner de la Home page' className='bannerHome' />
        </div>
        <div className="linearGradientBanner"></div>

        <div className='containerTextbanner'>
        <div className="texteBanner">{txt}</div>

        </div>
        
           
        </div>

}

export default Banner