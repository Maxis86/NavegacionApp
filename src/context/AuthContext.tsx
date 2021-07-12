import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


//  Definir como luce, que información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial cuando se habre la aplicación
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContexProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logOut: () => void;
    changeUserName: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext ({} as AuthContexProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch ({type: 'signIn'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch ({type: 'changeFavIcon', payload: iconName})
    }

    const logOut = () => {
        dispatch ({type:'logOut'})
    }

    const changeUserName = (username: string) => {
        dispatch ({type: 'changeUserName', payload: username})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            changeUserName
            }}>
            {children}
        </AuthContext.Provider>
    )
}