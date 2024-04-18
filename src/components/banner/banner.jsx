import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState} from 'react';
import {CustomSlideContainer, slideContents} from '../utils/custom-slide';

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-7%',
          transform: 'translateY(-50%)',
        }}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0px',
          }}>
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: '30px',
                color: '#262626',
                borderRight: '3px #262626 solid',
                padding: '8px 0',
                cursor: 'pointer',
              }
            : {
                width: '30px',
                color: 'transparent',
                borderRight: '3px white solid',
                padding: '8px 0',
                cursor: 'pointer',
              }
        }>
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '2%',
                transform: 'translateY(-50%)',
              }}>
              <ul style={{margin: '0px'}}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: '25px',
                      color: '#262626',
                      borderRight: '3px #262626 solid',
                      cursor: 'pointer',
                      fontSize: '12px',
                    }
                  : {
                      width: '25px',
                      color: 'transparent',
                      borderRight: '3px white solid',
                      cursor: 'pointer',
                      fontSize: '12px',
                    }
              }>
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="banner_container">
      <Slider {...settings}>
        {slideContents.map((content, index) => (
          <CustomSlideContainer key={index} {...content} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
