import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  //state
  const [users, setUsers] = useState<IUser[]>([]);
  //useEffect
  useEffect(() => { fetchUsers() }, [])
  //fetch users
  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      console.log(res.data)
      setUsers(res.data)
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
      <UserList users={users} />
    </div>
  );
};

export default App;