import { handleActions } from "redux-actions";
import { UserActionEnum } from "./actions";
import { IUserStateContext } from "./context";


export const reducer = handleActions({
    [UserActionEnum.SET_LOGIN_DETAILS]:(State: IUserStateContext, action: ReduxActions.Action<IUserStateContext>)=>({...State,...action.payload}),
    [UserActionEnum.SET_CURRENT_USER]:(State: IUserStateContext, action: ReduxActions.Action<IUserStateContext>)=>({...State,...action.payload}),
    [UserActionEnum.LOGOUT_USER]:(State: IUserStateContext, action: ReduxActions.Action<IUserStateContext>)=>({...action.payload})
},{});