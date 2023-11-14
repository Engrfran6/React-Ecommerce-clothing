import {CollectionCard} from '../collection-card/collection-card';
import './collections.scss';
import {Link} from 'react-router-dom';

export default function CollectionPreview({title, items}) {
  return (
    <div className="collection_preview-container">
      <h1 className="collection_preview-title">
        <Link to={`/collection/${title}`} className="collection_preview-link">
          {title.toUpperCase()}
        </Link>
      </h1>

      <div className="collection_preview-items">
        {items.slice(0, 4).map(({id, ...otherItemsProps}) => (
          <CollectionCard key={id} {...otherItemsProps} />
        ))}
      </div>
      <Link to={`/collection/${title}`} className="collection_preview-link">
        <span className="collection_container-view-more">View More...</span>
      </Link>
    </div>
  );
}
