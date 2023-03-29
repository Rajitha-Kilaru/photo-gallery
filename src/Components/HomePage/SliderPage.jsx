import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../Images/image1.jpg'
import image2 from '../../Images/image2.jpg'
import image3 from '../../Images/image3.jpg'
import image5 from '../../Images/image5.jpg'
import image6 from '../../Images/image6.jpg'

function SliderPage() {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
      };
      const images = [ image1, image2, image3, image5, image6]
    return (
        <>
        <h1>Design and Function</h1>
             <Slider {...settings}>
          {images.map((item) => (
            <div key={item}>
              <img src={item}  alt="not found" />
            </div>
          ))}
        </Slider>
        </>
    )
}
export default SliderPage