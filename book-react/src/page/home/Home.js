import React, { Component } from 'react';
import { Card } from 'antd';
import cover from '../../asset/cover.jpeg';
import './Home.css';

const bookList = [{ name: 'Truyen 1' }, { name: 'Truyen 2' }];

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div class="book-item">
          <div className="book-image"></div>
          <div className="book-info">
            <p>Title</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
