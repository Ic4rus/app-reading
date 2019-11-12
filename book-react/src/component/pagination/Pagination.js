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
    const current =
      currentPage === min
        ? currentPage + 1
        : currentPage === max
        ? currentPage - 1
        : currentPage;
    let start =
      (Math.floor(current / range) +
        Math.floor(((current % range) * 2) / range)) *
        range -
      Math.floor(range / 2);
    if (max - start >= 1 && max - start < range) {
      start = start - (start + range - max);
    }

    const pages = [{ key: min, value: min }];
    if (start > min + range) {
      pages.push({ key: '...', value: Math.floor(start / 2) });
    }

    for (let i = start; i < start + range; i++) {
      pages.push({ key: i, value: i });
    }

    if (start < max - range) {
      pages.push({
        key: '...',
        value: start + range - 1 + Math.floor((max - start - range + 1) / 2)
      });
    }
    pages.push({ key: max, value: max });

    return (
      <div className="pagination-container">
        <span
          className="page-number"
          style={
            currentPage === min ? { pointerEvents: 'none', opacity: '0.4' } : {}
          }
          onClick={() => this.onChangePage(currentPage - 1)}
        >
          <img src={ic_up_arrow} alt="" />
        </span>
        {pages.map((page, index) => (
          <span
            className={
              page.value === currentPage
                ? 'page-number page-number-active'
                : 'page-number'
            }
            key={index}
            onClick={() => this.onChangePage(page.value)}
            style={currentPage === page.value ? { pointerEvents: 'none' } : {}}
          >
            {page.key}
          </span>
        ))}
        <span
          className="page-number"
          onClick={() => this.onChangePage(currentPage + 1)}
          style={
            currentPage === max ? { pointerEvents: 'none', opacity: '0.4' } : {}
          }
        >
          <img src={ic_down_arrow} alt="" />
        </span>
      </div>
    );
  }
}

export default Pagination;
