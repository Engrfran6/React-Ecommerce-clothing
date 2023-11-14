import React, {Component} from 'react';
import CollectionPreview from '../../components/collections/collections';
import './shops.scss';
import {ShopData as SHOP_DATA} from './shop-data';

export default class Shop extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <>
        {SHOP_DATA ? (
          <div className="shop_container">
            <h1 className="shop_title"> Collections</h1>

            <div className="shop-items">
              {this.state.collections.map(({id, ...collection}) => (
                <CollectionPreview key={id} {...collection} />
              ))}
            </div>
          </div>
        ) : (
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '10rem'}}>
            <h2>No Preview Data Avalaible, please check back later</h2>
          </div>
        )}
      </>
    );
  }
}
