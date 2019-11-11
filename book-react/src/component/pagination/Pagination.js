import React, { Component } from 'react';
import './Pagination.css';
import ic_up_arrow from '../../asset/ic_up_arrow.svg';
import ic_up_arrows from '../../asset/ic_up_arrows.svg';
import ic_down_arrow from '../../asset/ic_down_arrow.svg';
import ic_down_arrows from '../../asset/ic_down_arrows.svg';

class Pagination extends Component {
  render() {
    // const max = 15;
    // const current = 5;
    // const first = current < 5 ? true : false;
    // const last = max - current > 3 ? true : false;
    // const items;
    // if (first) {
    //   items = [1, 2, 3, 4, 5];
    // }

    return (
      <div className="pagination-container">
        <span>
          <img src={ic_up_arrow} />
        </span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
        <span>100</span>
        <span>
          <img src={ic_down_arrow} />
        </span>
      </div>
    );
  }
}

export default Pagination;
