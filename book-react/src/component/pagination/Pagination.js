import React, { Component } from 'react';
import './Pagination.css';
import ic_up_arrow from '../../asset/ic_up_arrow.svg';
import ic_down_arrow from '../../asset/ic_down_arrow.svg';

class Pagination extends Component {
  onChangePage = page => {
    this.props.onChangePage(page);
  };

  render() {
    const { currentPage } = this.props;
    const min = 1;
    const max = 15;
    const range = 3;
    const current = currentPage;
    const start =
      (Math.floor(current / range) +
        Math.floor(((current % range) * 2) / range)) *
        range -
      Math.floor(range / 2);
    const pages = [min];
    if (current > min + range) {
      pages.push('...');
    }

    for (let i = start; i < start + range; i++) {
      pages.push(i);
    }

    if (current < max - range) {
      pages.push('...');
    }
    pages.push(max);

    return (
      <div className="pagination-container">
        <span>
          <img src={ic_up_arrow} />
        </span>
        {pages.map((page, index) => (
          <span key={index} onClick={() => this.onChangePage(page)}>
            {page}
          </span>
        ))}
        <span onClick={() => this.onChangePage(current + 1)}>
          <img src={ic_down_arrow} />
        </span>
      </div>
    );
  }
}

export default Pagination;
