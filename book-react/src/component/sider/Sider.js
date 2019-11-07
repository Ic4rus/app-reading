import React, { Component } from 'react';
import { Icon } from 'antd';
import './Sider.css';
import ic_book from '../../asset/ic_book.svg';
import ic_filter from '../../asset/ic_filter.svg';

class Sider extends Component {
  render() {
    return (
      <div className="sider-container">
        <div className="sider-menu-container">
          <div className="sider-menu-item">
            <img src={ic_book} className="sider-menu-item-icon" />
          </div>
          <div className="sider-menu-item">
            <img src={ic_filter} className="sider-menu-item-icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sider;
