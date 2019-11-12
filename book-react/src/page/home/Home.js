import React, { Component } from 'react';
import Pagination from '../../component/pagination/Pagination';
import './Home.css';
import * as RouteMap from '../../constants/RouteMap';
import * as Dummy from '../../dummy/Dummy';

const menuItems = [
  { name: 'New', route: RouteMap.ROUTE_LIST_NEW },
  { name: 'Hot', route: RouteMap.ROUTE_LIST_HOT },
  { name: 'Most', route: RouteMap.ROUTE_LIST_MOST }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  handleChangeMenu = key => (window.location.href = `#${key}`);

  onChangePage = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { location } = this.props;
    return (
      <div className='home-container'>
        <div className='book-container'>
          {/* <div className="book-menu">
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
          </div> */}
          <div className='book-list'>
            {Dummy.BOOK_LIST.map((book, index) => {
              return (
                <div className='book-item' key={index}>
                  <img src={book.imageUrl} className='book-image' />
                  <div className='book-info'>
                    <span className='book-name'>{book.name}</span>
                    <div className='book-chapter'>
                      <span>Chương 2</span>
                      <span>Chương 1</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}

export default Home;
