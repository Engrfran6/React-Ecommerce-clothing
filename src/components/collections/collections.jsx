import './collections.scss';
import CollectionPreview from '../collection-preview/collection-preview';
import {ItemCard} from '../item-card/item-card';

export const Collections = ({isLoading, error, products}) => {
  if (isLoading)
    return (
      <div className="collections_container">
        <div className="loading_container">....Loading</div>
      </div>
    );

  if (!products && error)
    return (
      <div className="no_collections-data">
        <h2>No Preview Data Available, please check back later</h2>
        <br />
        <div style={{color: 'red'}}>Error: {error}</div>
      </div>
    );

  return (
    <div className="collections_container">
      <div className="collections-items">
        {products.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
      )
    </div>
  );
};
