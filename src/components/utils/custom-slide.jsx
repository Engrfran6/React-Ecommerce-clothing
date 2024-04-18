import {Link} from 'react-router-dom';
import bannerImgOne from '../../assets/images/banner/bannerImgOne.webp';

export const slideContents = [
  {
    imgSrc: bannerImgOne,
    text: 'Enhance Your Printing Experience',
    Subtext: 'Explore our premium printers and consumables for exceptional results',
    buttonLink: '/offer',
    buttonText: 'Shop Now',
  },
  {
    imgSrc: bannerImgOne,
    text: 'Quality Printing Solutions',
    Subtext:
      'Discover our wide range of printers and consumables designed for professional printing needs.',
    buttonLink: '/shop',
    buttonText: 'About-us',
  },
  {
    imgSrc: bannerImgOne,
    text: 'Efficiency Redefined',
    Subtext: 'Maximize productivity with our advanced printers and high-quality consumables. ',
    buttonLink: '/contact',
    buttonText: 'Contact-us',
  },

  // Add more slides as needed
];

export const CustomSlideContainer = ({Subtext, imgSrc, text, buttonText}) => (
  <div
    style={{
      position: 'relative',
      // backgroundColor: '#F5F5F3',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <div
      style={{
        maxWidth: '450px',
        marginRight: '100px',
      }}>
      <h1
        style={{
          marginBottom: '15px',
          fontSize: '2.5rem',
          color: '#000',
          fontWeight: '700',
        }}>
        {text}
      </h1>
      <p
        style={{
          marginBottom: '25px',
          fontSize: '1.5rem',
          color: '#666',
        }}>
        {Subtext}
      </p>

      <Link to="/about">
        <button>{buttonText}</button>
      </Link>
    </div>
    <div style={{marginLeft: '100px'}}>
      <img src={imgSrc} />
    </div>
  </div>
);
