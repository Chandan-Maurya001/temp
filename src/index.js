import React from 'react';
// import { creaeRoot } from 'react-dom'; // Corrected importt
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

   reportWebVitals();


