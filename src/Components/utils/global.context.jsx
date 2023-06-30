import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios'

export const url = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
  theme: JSON.parse(localStorage.getItem('theme')) || 'light',
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  user: {
    name: '',
    email: ''
  }
};

export const ActionType = {
  SetTheme: 'SET_THEME',
  SetData: 'SET_DATA',
  SetFav: 'SET_FAV',
  SetUserName: 'SET_NAME',
  SetUserEmail: 'SET_EMAIL'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SetTheme:
      return { ...state, theme: action.payload };
    case ActionType.SetData:
      return { ...state, data: action.payload };
    case ActionType.SetFav:
      return { ...state, favs: [...state.favs, action.payload]}
    case ActionType.SetUserName:
      return { ...state, user: {...state.user, name: action.payload} }
    case ActionType.SetUserEmail:
      return { ...state, user: {...state.user, email: action.payload} }
    default:
      // throw new Error('Unknown action');
    }
};
  
export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
    
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(url)
    .then((res) => dispatch({ type: ActionType.SetData, payload: res.data }))
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(state.theme));
  }, [state.theme]);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs));
  }, [state.favs])

  // console.log(state.data);
  // console.log(state.favs);

  return( 
    <GlobalContext.Provider value={{
      state, dispatch
    }}>
      {children}
    </GlobalContext.Provider>
  )
};

export const useGlobalContext = () => useContext(GlobalContext);
