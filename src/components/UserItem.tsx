import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';

interface IUserItemProps {
    user: IUser;
}

const UserItem :FC<IUserItemProps> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div 
        onClick={() => navigate(`./${user.id}`)}
        style={{padding: '15px', border: '1px solid grey'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}.
        </div>
    );
};

export default UserItem;