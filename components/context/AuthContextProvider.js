import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MainLink } from '../BaseUrl/BaseUrl';
import { getCookie } from 'cookies-next';


export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {

  const [login, setLogin] = useState([]);
  const [token, setToken] = useState('');

  useEffect(async () => {

    if (getCookie('token')) {
      await axios.get(`${MainLink}/user_t_d/`, {
        headers: {
          'Authorization': 'Token ' + token,
        }
      }).then(response => {
        if (response.status == 200) {
          setLogin(response.data)
        }
      }
      ).catch(error => { if (error.response) { console.log(error.message) } });
    }
  }, [token, login.length <= 0 ? login : null]);
  return (
    <AuthContext.Provider value={login}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider