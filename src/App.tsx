import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import UserPage from './pages/UserPage';
import TodoPage from './pages/TodoPage';
import UserItemPage from './pages/UserItemPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список задач</NavLink>
        <Routes>
          <Route path='/todos' element={<TodoPage />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
};

export default App;