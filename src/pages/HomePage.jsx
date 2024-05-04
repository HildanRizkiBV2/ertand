import Carousels from "../components/Carousels";
import FooterWeb from "../../components/FooterWeb";
import Coundown from "react-countdown";
import Image from "../assets/image/Hoodie.png";
import GalleryComp from "../components/GalleryComp.jsx";

const HomePage = () => {
  const timeLeft = () => {
    const rilisDate = new Date("may 30, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const distanceTime = rilisDate - nowDate;
    return distanceTime;
  };

  return (
    <div className="homepages">
      <Carousels />
      <div className=" pt-5 promo ">
        <p className="text-center  pt-5">
          <span>
            <b>Release date</b>
          </span>
        </p>
        <b className="">
          <Coundown
            date={Date.now() + timeLeft()}
            className="condon d-flex justify-content-center "
          />
        </b>
        <img
          src={Image}
          alt=""
          className="animate__animated animate__bounce  animate__delay-2s homepage-image pt-3 pb-5"
        />
      </div>
      <div className="pb-5">
        <h1 className="text-center">My produck</h1>
        <GalleryComp />
      </div>
      <FooterWeb />
    </div>
  );
};
export default HomePage;
