import React, { Component } from 'react';
import { Icon } from 'antd';
import './Sider.css';
import ic_book from '../../asset/ic_book.svg';
import ic_filter from '../../asset/ic_filter.svg';

class Sider extends Component {
  render() {
    return (
      <div className='sider-container'>
        <div className='sider-menu-container'>
          <div className='sider-menu-item'>
            <img
              src='https://img.icons8.com/cute-clipart/100/000000/book.png'
              className='sider-menu-item-icon'
            />
          </div>
          <div className='sider-menu-item'>
            <img
              src='https://img.icons8.com/cute-clipart/100/000000/search.png'
              className='sider-menu-item-icon'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sider;
