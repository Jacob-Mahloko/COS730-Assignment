import { createContext } from 'react';
import { ILogin,ILoginResponse,IUser } from '../../../models/interface';

export const INITIAL_STATE: IUserStateContext={}

export interface IUserStateContext {
    isLoading?:boolean;
    isSuccess?:boolean;
    isError?:boolean;
    readonly UserLogin? :ILoginResponse;
    readonly currentUser?: IUser;   
}

export interface IUserActionContext{
    login?:(payload:ILogin) => void;
    createUser?:(payload:IUser) => void;
    logOutUser?:() => void;
    getUserDetails?:() => void;
}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE);

const UserActionContext = createContext<IUserActionContext>({});

export {UserContext, UserActionContext};