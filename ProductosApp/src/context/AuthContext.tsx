import React, {createContext, useReducer} from 'react';
import {LoginData, LoginResponse, User} from '../interfaces/appInterfaces';
import {AuthState, authReducer} from './AuthReducer';
import pichichosApi from '../api/pichichosApi';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: (loginData: LoginData) => void;
  logout: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = async ({email, password}: LoginData) => {
    try {
      const {data} = await pichichosApi.post<LoginResponse>('/auth/login', {email,password});
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.user,
        },
      });
      
    } catch (error:any) {
      console.log(error.response.data.error)
      dispatch({
        type: 'addError',
        payload: error.response.data.error || 'Información incorrecta',
      });
    }
  };

  const signUp = () => {};
  const logout = () => {};
  const removeError = () => {
    dispatch({
      type: 'removeError',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logout,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
