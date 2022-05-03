import bannerHomeImg from '../../assets/bannerHome.png';
import Banner from '../../layout/Banner';


function BannerHome() {
  const txt = 'Chez vous, partout et ailleurs';
  return <div id='cardBanner'>
        
        
    <Banner img={bannerHomeImg} txt={txt}/> 
  </div>;

}

export default BannerHome;