import Carousels from '../components/Carousels'
import Cards from '../components/Cards'
import FooterWeb from '../../components/FooterWeb'
import Coundown from "react-countdown";
import Image from '../assets/image/Hoodie.png'
const HomePage = () => { 
  const timeLeft = () => {
    const rilisDate= new Date("may 30, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const distanceTime = rilisDate - nowDate;
    return distanceTime;
  }


  return (
    <div className="homepages">
    <Carousels/>
    <div className=' pt-5 promo min-vh-100 '> 
    <p className='text-center  pt-5'><span><b>Release date</b></span></p>
      <b className=''><Coundown date={Date.now() + timeLeft() } className='condon d-flex justify-content-center ' /></b>
      <img src={Image} alt="" className='homepage-image pt-3 pb-5' />
    </div>
    <div className='pb-5'>
    <p className='text-center  pt-5'><span><b>On release</b></span></p>
    <Cards />
    </div>
    <FooterWeb/>
    </div>
    )
}
export default HomePage