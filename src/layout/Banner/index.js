import './style.scss';
function Banner(props) {
 
  return <div className='containerBanner'>
        
    <div className='bannerImg' >
        
      <img src={props.img} alt='banner ' className='banner homeBannerMobile proposImgMobile' />
    </div>
    <div className="linearGradientBanner"></div>

    <div className='containerTextbanner'>
      <div className="texteBanner">{props.txt}</div>

    </div>
        
           
  </div>;

}

export default Banner;