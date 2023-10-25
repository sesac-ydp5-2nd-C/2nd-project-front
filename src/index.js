import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './screen/main';
import { Provider } from 'react-redux';
import store from './store';
import './config/Fonts/Font.css';
import MypageDashboard from './screen/mypage/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <MypageDashboard />
  </Provider>,
  // </React.StrictMode>
);
