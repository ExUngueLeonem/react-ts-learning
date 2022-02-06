import React, { FC } from 'react';
import {IUser} from '../types/types';
import UserItem from './UserItem';

interface IUserList {
    users: IUser[]
}

const UserList: FC<IUserList> = ({users}) => {
    
    return (
        <div>
            {users.map( user => <UserItem key={user.id} user={user}/>)}
        </div>
    );
};

export default UserList;