import React from 'react';
import { Layout } from 'antd';
import Sider from './component/sider/Sider';
import Header from './component/header/Header';
import Home from './page/home/Home';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Layout className="app-container">
      <Sider />
      <Layout className="page-container">
        <Home />
      </Layout>
    </Layout>
  );
}

export default App;
