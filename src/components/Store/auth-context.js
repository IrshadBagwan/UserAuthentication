import React, { useState } from "react";

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  autologout:()=>{}
});

export const AuthContextProvider = (props) => {
  
  const initialtoken = localStorage.getItem('token');
  const [token, setToken] = useState(initialtoken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);

  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const autologoutHandler = () =>{
    setTimeout(() => {
     
      logoutHandler();
      
    }, 50000);
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    autologout: autologoutHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
