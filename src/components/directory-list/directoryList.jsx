import React, {Component} from 'react';
import img from '../../assets/babe.jpeg';
import {MenuCardItem} from '../menu-card-items/menu-card-items';
import './directory-list.scss';

export default class DirectoryList extends Component {
  constructor() {
    super();

    this.state = {
      datas: [
        {id: 1, title: 'hats', imgUrl: img},
        {id: 2, title: 'jackets', imgUrl: img},
        {id: 3, title: 'sneakers', imgUrl: img},
        {id: 4, title: 'womens', imgUrl: img, size: 'large'},
        {id: 5, title: 'mens', imgUrl: img, size: 'large'},
      ],
    };
  }
  render() {
    return (
      <section className="card-data">
        {this.state.datas.map(({id, ...otherProps}) => (
          <MenuCardItem key={id} {...otherProps} />
        ))}
      </section>
    );
  }
}
