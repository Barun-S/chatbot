import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700");
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';
import Canvasviewer from './canvasviewer';
import Listofpatients from './listpatient';
import Conversation from './pc';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement : <ErrorPage/>
  },
  {
    path : "/mark",
    element : <Canvasviewer/>
  },
  {
    path : "/dashboard",
    element : <Listofpatients/>
  },
  {
    path : "/patientconvo",
    element : <Conversation/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
