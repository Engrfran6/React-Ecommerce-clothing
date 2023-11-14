import './collection-card.scss';

export const CollectionCard = ({name, price, imgUrl}) => {
  return (
    <div className="collection_content">
      <div style={{backgroundImage: `url(${imgUrl})`}} className="collection_img" />
      <span>Add to Cart</span>

      <div className="collection_footer">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};
