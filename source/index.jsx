import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import './index.css';

document.documentElement.style.setProperty('--vh', `${(window.innerHeight * 0.01)}px`);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
