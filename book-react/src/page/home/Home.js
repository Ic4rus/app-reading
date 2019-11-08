import React, { Component } from 'react';
import Pagination from '../../component/pagination/Pagination';

import cover from '../../asset/cover.jpeg';
import './Home.css';

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
  { name: 'Java 8 in Action' },
  { name: 'Java 8 in Action' }
];

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="book-container">
          <div className="book-menu">
            <span className="book-menu-active">NEW</span>
            <span>HOT</span>
            <span>MOST</span>
          </div>
          <div className="book-list">
            {bookList.map(book => {
              return (
                <div class="book-item">
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
