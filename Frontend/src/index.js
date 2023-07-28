import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./components/store/Store";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import AdminPanel from './components/AdminPage/viewVoters';
import { BrowserRouter } from 'react-router-dom';
import FeedBack from './FeedBack/feedback';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Provider store={store}>
    <App/>
    {/* <AdminPanel></AdminPanel> */}
    {/* <FeedBack/> */}
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
