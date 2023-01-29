import logo from './logo.svg';
import React , {useState, useEffect} from 'react';
import './App.css';
import Chat from './chat';
import Listofpatients from './listpatient';
import Axios from 'axios';
import Tes from './test';
import { Outlet, Link } from "react-router-dom";
function App() {

  // const [messageList, setMessageList] = useState(["Welcome"]);

  // const getJoke = () => {
  //   fetch("http://localhost:5000/input/question")
  //   .then((response) => {
  //     console.log(response);
  //     return response.text();
  //   }).then((data) => console.log(data))
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  return (
    <div>
       <div className='titlebar'> Patient Conversations </div>
      <div className='content'>
      <div className='verticalbar'>
        <Link to={'/mark'}>canvas</Link>
        <Link to={'/dashboard'}>conversations</Link>
        {/* <Link to={'/dashboard'}>conversations</Link> */}
      </div>
      <div className='chatmain'><Chat/></div>
      {/* <Listofpatients/> */}
      {/* <Tes/> */}
      </div>
      </div>
  );
}

export default App;
