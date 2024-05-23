
'use client'
import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useContext, useEffect, useReducer, useState } from 'react';
import { ILogin, ILoginResponse, IUser } from '../../../models/interface';
import { logOutUserRequestAction, loginSuccessAction, setCurrentUserRequestAction } from './actions';
import { INITIAL_STATE, IUserActionContext, IUserStateContext, UserActionContext, UserContext } from './context';
import { reducer } from './reducer';
//import { getRole } from '@/utilis/decoder/decoder';
import { headers } from 'next/headers';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { push } = useRouter();
  
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const encryptedAccessToken = localStorage.getItem(
          "encryptedAccessToken",
        );
        const expireInSeconds_str = localStorage.getItem("expireInSeconds");
        let expireInSeconds =
          expireInSeconds_str === null
            ? 0
            : Number.parseInt(expireInSeconds_str);
        
 
        if (
          accessToken &&
          encryptedAccessToken &&
          expireInSeconds
        ) {
          const payload: ILoginResponse = {
            accessToken,
            encryptedAccessToken,
            expireInSeconds,
          };
          dispatch(loginSuccessAction(payload));
        }
      } catch (error) {
        console.error("Error accessing localStorage: ", error);
      }
    }
  }, []);
 
  useEffect(() => {
    const accessToken = state.UserLogin?.accessToken;
    const encryptedAccessToken = state.UserLogin?.encryptedAccessToken;
    const expireInSeconds = state.UserLogin?.expireInSeconds;
    
    if (typeof window !== "undefined") {
      if (
        accessToken &&
        encryptedAccessToken &&
        expireInSeconds
      ) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("encryptedAccessToken", encryptedAccessToken);
        localStorage.setItem("expireInSeconds", expireInSeconds + "");
      } else {
        //localStorage.clear();
      }
    }
  }, [state]);


  const login = async (payload: ILogin) => {
  
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URI}TokenAuth/Authenticate`, payload)
      .then(response=>{
        
        dispatch(loginSuccessAction({...response.data.result}));
        message.success('Login Success');
        push('/dashboard');
      }
       ). catch (error=> {
        console.error('Login error:', error);
      // Optionally, provide user feedback about the login failure
    })
  }

  const createUser = async (payload: IUser) => {
    
      const response = await axios.post('',payload).then(response=>{
        message.success("User successfully created Login")
        push('/login')
      }).catch(response=>(
        message.error(response.error.message)))
  
  }

  const getUserDetails = () => {
      axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URI}services/app/Session/GetCurrentLoginInformations`,{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }).then(response=>{
        
          dispatch(setCurrentUserRequestAction(response.data.result.user));
        })
        .catch( (error) =>{
          console.log(error)
        }).finally()
  }

  const logOutUser = () => {
    dispatch(logOutUserRequestAction());
    
  };



  return (
    <UserContext.Provider value={{...state}}>
      <UserActionContext.Provider value={{ login, createUser, logOutUser, getUserDetails }}>
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
};


export const useLoginState = (): IUserStateContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useLoginState must be used within a UserProvider");
  }
  return context;
};

export const useLoginActions = (): IUserActionContext => {
  const context = useContext(UserActionContext);
  if (!context) {
    throw new Error("useLoginActions must be used within a UserProvider");
  }
  return context;
};

export const useUser = (): IUserStateContext & IUserActionContext => {
  return {
    ...useLoginState(),
    ...useLoginActions()
  };
};

export default AuthProvider;