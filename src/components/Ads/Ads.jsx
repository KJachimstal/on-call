import React from 'react';
import howToCutTicket from '../../assets/images/How-to-cut-ticket-RIVER.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Ads = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true
    // className: "slide"
  };

  return (
    <div className="ads">
      <div className="ads__ad">
        <Slider {...settings}>
          <div>
            <img src={howToCutTicket} alt="howToCutTicket" className = "slide"/>
          </div>
          <div>
          <img src={howToCutTicket} alt="howToCutTicket" className = "slide" />
          </div>
          <div>
          <img src={howToCutTicket} alt="howToCutTicket" className = "slide" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Ads