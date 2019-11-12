import React, { Component } from 'react';
import './Sider.css';
import * as RouteMap from '../../constants/RouteMap';

const menuItems = [
  {
    key: 'Home',
    imageUrl: 'https://img.icons8.com/cute-clipart/100/000000/book.png',
    route: RouteMap.ROUTE_LIST_NEW
  },
  {
    key: 'Search',
    imageUrl: 'https://img.icons8.com/cute-clipart/100/000000/search.png',
    route: RouteMap.ROUTE_LIST_NEW
  }
];

class Sider extends Component {
  onChangeMenu = route => (window.location.href = `#${route}`);

  render() {
    return (
      <div className="sider-container primary-background">
        <div className="sider-menu-container">
          {menuItems.map(menuItem => (
            <div
              className="sider-menu-item"
              onClick={() => this.onChangeMenu(menuItem.route)}
            >
              <img
                src={menuItem.imageUrl}
                className="sider-menu-item-icon"
                alt={menuItem.key}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Sider;
