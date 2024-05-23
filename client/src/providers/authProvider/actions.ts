import { createAction } from 'redux-actions';
import { ILoginResponse, IUser } from '../../../models/interface';
import { IUserStateContext } from './context';

export enum UserActionEnum{
    LOGIN_USER = 'LOGIN',
    LOGOUT_USER = 'LOGOUT',
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    SET_LOGIN_DETAILS= 'LOGIN_DETAILS'

}
export const loginSuccessAction = createAction<
  IUserStateContext,
  ILoginResponse
>(UserActionEnum.SET_LOGIN_DETAILS, (UserLogin) => ({
  isPending: false,
  isError: false,
  isSuccess: true,
  UserLogin
}));

export const logOutUserRequestAction = createAction<IUserStateContext>(UserActionEnum.LOGOUT_USER,()=>({}))
export const setCurrentUserRequestAction = createAction<IUserStateContext, IUser>(UserActionEnum.SET_CURRENT_USER,(currentUser)=>({currentUser}))