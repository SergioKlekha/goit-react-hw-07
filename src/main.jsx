import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);