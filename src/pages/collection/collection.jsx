import {useParams} from 'react-router-dom';

import './collection.scss';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectCollectionData} from '../../redux/selectors/selector';
import {ItemCard} from '../../components/item-card/item-card';

export const Collection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {collectionId} = useParams();
  const collectionData = useSelector((state) => selectCollectionData(state, collectionId));
  const title = collectionId;

  useEffect(() => {
    if (collectionData) {
      setIsLoading(false);
    }
  }, [collectionData]);

  if (isLoading) {
    return (
      <div className="loading_container">
        <div>Loading...</div>
      </div>
    );
  }

  if (collectionData == '') {
    return (
      <div className="no-data_container">
        <div>
          No data available for <span style={{color: 'red'}}>{title}</span> collection.
        </div>
      </div>
    );
  }

  return (
    <div className="collection_container">
      <h1 className="collection_title">{title.toUpperCase()}</h1>

      <div className="collection_items">
        {collectionData?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
