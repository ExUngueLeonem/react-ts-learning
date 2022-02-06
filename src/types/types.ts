export interface IAddress {
    street: string;
    suite: string;
    city: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
