import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../types/types';
import { useParams, useNavigate } from 'react-router-dom';


const UserItemPage :FC = () => {

    const [user, setUser] = useState<IUser | null>();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      fetchUser();
    }, [])
  
    async function fetchUser() {
      try {
        const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(res.data)
      } catch (e) {
        alert(e)
      }
    }
  
    return (
        <>
        <button onClick={() => navigate('/users')}>Back</button>
        <h1>Страица пользователя {user?.name}</h1>
        <div>
            {user?.email}
        </div>
        <div>
            {user?.address.city}, {user?.address.street}, {user?.address.suite}

        </div>
        </>
    );
};

export default UserItemPage;