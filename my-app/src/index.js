/*React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you
 to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library
  for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or
   components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process
    is called Routing and it is made possible with the help of React Router Dom.
The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked,
 for example. Moreover, it is fast, very fast compared to traditional page navigation. This means that the user experience
  is better and the app has overall better performance. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App></App>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
