import React from 'react';
import { Layout } from 'antd';
import Sider from './component/sider/Sider';
import Router from './component/route/Router';

import './App.css';

function App() {
  return (
    <Layout className="app-container">
      <Sider />
      <Layout className="page-container">
        <Router />
      </Layout>
    </Layout>
  );
}

export default App;
