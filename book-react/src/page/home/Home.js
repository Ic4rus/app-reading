import React, { Component } from 'react';
import Pagination from '../../component/pagination/Pagination';
import cover from '../../asset/cover.jpeg';
import './Home.css';
import * as RouteMap from '../../constants/RouteMap';

const bookList = [
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' }
];

const menuItems = [
  { name: 'New', route: RouteMap.ROUTE_LIST_NEW },
  { name: 'Hot', route: RouteMap.ROUTE_LIST_HOT },
  { name: 'Most', route: RouteMap.ROUTE_LIST_MOST }
];

class Home extends Component {
  handleChangeMenu = key => (window.location.href = `#${key}`);
  render() {
    const { location } = this.props;
    return (
      <div className="home-container">
        <div className="book-container">
          <div className="book-menu">
            {menuItems.map((menuItem, index) => (
              <span
                className={
                  location.pathname === menuItem.route
                    ? 'book-menu-item book-menu-item-active'
                    : 'book-menu-item'
                }
                key={index}
                onClick={() => this.handleChangeMenu(menuItem.route)}
              >
                {menuItem.name}
              </span>
            ))}
          </div>
          <div className="book-list">
            {bookList.map((book, index) => {
              return (
                <div className="book-item" key={index}>
                  <img src={cover} className="book-image" />
                  <div className="book-info">
                    <span className="book-name">{book.name}</span>
                    <div className="book-chapter">
                      <span>Chương 2</span>
                      <span>Chương 1</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Home;
