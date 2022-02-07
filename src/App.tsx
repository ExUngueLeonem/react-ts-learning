import React from 'react';

import UserPage from './pages/UserPage';
import TodoPage from './pages/TodoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список задач</NavLink>
        <Routes>
          <Route path='/todos' element={<TodoPage />} />
          <Route path='/users' element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
};

export default App;

/*       <Routes>
         <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список задач</NavLink>
       <Route path='/todos' element={<TodoPage />} />
 <Route path='/users' element={<UserPage />} />
 </Routes>
*/