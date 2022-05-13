import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NotePage from './Components/Note/NotePage';
import {Route, NavLink, HashRouter, Routes, Navigate} from 'react-router-dom';
import TodoPage from './Components/Todo/TodoPage';
import Dashboard from './Components/Dashboard/Dashboard';
import Signup from './Components/SignIn/SignUp';
import Login from './Components/SignIn/LogIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/notepage' element={<NotePage/>}/>
      <Route path='/todopage' element={<TodoPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element = {<Navigate replace to='/login'/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </HashRouter>

  
);


