import {Link} from 'react-router-dom';
import './menu-card-items.scss';

export const MenuCardItem = ({title, imgUrl, size}) => {
  return (
    <Link to={`/${title}`} className={`${size} card_container`}>
      <div className="card_content card-bg-img" style={{backgroundImage: `url(${imgUrl})`}}>
        <div className="card_action">
          <h1 className="card_title">{title.toUpperCase()}</h1>
          <span className="card_subtitle">SHOP NOW</span>
        </div>
      </div>
    </Link>
  );
};
