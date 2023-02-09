import React, {createContext} from 'react';
const AuthContext = createContext({
  token: null,
  login: () => {},
  user: null,
  logout: () => {},
});

export default AuthContext;
