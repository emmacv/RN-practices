import React from "react";

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

type AuthAction = 
  | { type: 'signIn' | 'logout'; } 
  | { type: 'changeFavIcon'; payload: string; };

export type AuthContextProps = {
  authState: AuthState;
  signIn: () => void;
  onChangeFavIcon: (payload: string) => void;
  logOut: () => void;
}

const initialState: AuthState = {
  isLoggedIn: false,
}

const AuthContext = React.createContext({} as AuthContextProps);

export const useAuth = () => React.useContext(AuthContext);

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'pablito',
      };
    case 'logout':
      return {
        isLoggedIn: false,
      }
    case 'changeFavIcon':
      return {
        ...state,
        isLoggedIn: true,
        favoriteIcon: action.payload,
        userName: 'pablito',
      };

    default:
      break;
  }
};

const AuthProvider: React.FC = ({ children }) => {
  const [authState, authDispatch] = React.useReducer(reducer, initialState);

  const signIn = () => {
    authDispatch({ type: 'signIn' });
  }

  const onChangeFavIcon = (payload: string) => {
    authDispatch({ type: 'changeFavIcon', payload })
  }

  const logOut = () => authDispatch({ type: 'logout' })

  return (
    <AuthContext.Provider
      value={{
        authState,
        onChangeFavIcon,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
