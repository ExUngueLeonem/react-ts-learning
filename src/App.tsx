import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';

import { ITodo, IUser } from './types/types';

const App = () => {
  //state
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
   }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (e) {
      alert(e)
    }
  }

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(res.data)
    } catch (e) {
      alert(e)
    }
  }


  return (
    <div className='card-Wrapper'>
      <Card width='300px' height='400px' variant={CardVariant.primary} onClick={(num: number) => { console.log(`вы нажали на кнопку ${num} раз`) }}>
        блок с текстом внутрт карточки
        <button >Click</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />

    </div>
  );
};

export default App;