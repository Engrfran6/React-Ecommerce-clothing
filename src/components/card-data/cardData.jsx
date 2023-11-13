import React, {Component} from 'react';
import img from '../../assets/babe.jpeg';
import {CardList} from '../card-items/card-item';
import './cardData.scss';

export default class CardData extends Component {
  constructor() {
    super();

    this.state = {
      datas: [
        {title: 'HATS', imgUrl: img},
        {title: 'JACKETS', imgUrl: img},
        {title: 'SNEAKERS', imgUrl: img},
        {title: 'WOMENS', imgUrl: img, size: 'large'},
        {title: 'MENS', imgUrl: img, size: 'large'},
      ],
    };
  }
  render() {
    return (
      <div className="card-data">
        {this.state.datas.map(({title, imgUrl, size}, index) => (
          <CardList title={title} imgUrl={imgUrl} index={index} size={size} />
        ))}
      </div>
    );
  }
}
