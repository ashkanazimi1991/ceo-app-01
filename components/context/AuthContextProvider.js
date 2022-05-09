import React,{useState , useEffect} from 'react'
import axios from 'axios';
import * as cookie from 'cookie'
import { MainLink } from '../BaseUrl/BaseUrl';


export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

  const [login , setLogin] = useState([]);
  const [token , setToken] = useState('');
  
  useEffect(async() =>{
    const parsedCookies = cookie.parse(document.cookie);
    setToken(parsedCookies.token);

    if (token) {
      token.length > 0 && await axios.get(`${MainLink}/user_t_d/`,{
        headers:{
          'Authorization': 'Token '+  token, 
        }
      }).then(response => setLogin(response.data)).catch(error => {if (error.response) {console.log(error.message) }});
    }
  },[token , login.length <= 0 ? login : null]);
  return (
    <AuthContext.Provider value={login}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider