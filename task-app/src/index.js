import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NotePage from './Components/NotePage';
import {Route, NavLink, HashRouter, Routes, Navigate} from 'react-router-dom';
// import TodoPage from './Components/TodoPage';
import Dashboard from './Dashboard/Dashboard';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Signup />
  //   {/* <Login />  */}
  //   {/* <NotePage /> */}
  //   {/* <TodoPage /> */}
  //   <Dashboard />
  // </React.StrictMode>

  <HashRouter>
    <Routes>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/' element = {<Navigate replace to='/login'/>}/>
      <Route path='/notepage' element={<NotePage/>}/>
    </Routes>

    {/* <Signup /> */}
    {/* <Login /> */}
    {/* <NotePage /> */}
   </HashRouter>

  
);

