import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import Card, { CardVariant } from '../../components/Card';
import EventsExample from '../../components/EventsExample';
import List from '../../components/List';
import UserItem from '../../components/UserItem';
import { IUser } from '../../types/types';

const UserPage :FC = () => {

  //state
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
    </div>
  );
};

export default UserPage;