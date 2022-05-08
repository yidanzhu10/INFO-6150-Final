import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import NotePage from './Components/NotePage';
import TodoPage from './Components/TodoPage';

// import Signup from './Components/Signup';
// import Login from './Components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Signup /> */}
    {/* <Login />  */}
    {/* <NotePage /> */}
    <TodoPage />
  </React.StrictMode>
);

