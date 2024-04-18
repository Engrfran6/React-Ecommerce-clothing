import {ItemCard} from '../item-card/item-card';
import './collection-preview.scss';
import {Link} from 'react-router-dom';

export default function CollectionPreview({items}) {
  // const noOfItemsToDisplay = items.slice(0, 4);
  const title = 'shoping page';
  return (
    <div className="collection_preview-container">
      <h1 className="collection_preview-title">
        <Link to={`/collection/${title}`} className="collection_preview-link">
          {title?.toUpperCase()}
        </Link>
      </h1>

      <div className="collection_preview-items">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <Link to={`/collection/${title}`} className="collection_preview-link">
        <span className="collection_container-view-more">View More...</span>
      </Link>
    </div>
  );
}
