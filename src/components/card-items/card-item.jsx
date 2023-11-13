import './cardList.scss';

export const CardList = ({title, imgUrl, size}, index) => {
  return (
    <div className={`${size} card_container`} key={index}>
      <div className="card_content card-bg-img" style={{backgroundImage: `url(${imgUrl})`}}>
        <div className="card_action">
          <h1 className="card_title">{title}</h1>
          <span className="card_subtitle">SHOP NOW</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};
