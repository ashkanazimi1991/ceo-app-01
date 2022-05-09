import React,{useState , useEffect} from 'react'
import axios from 'axios';
import * as cookie from 'cookie'
import { MainLink } from '../BaseUrl/BaseUrl';


export const TokenContext = React.createContext();

const TokenContextProvicer = ({children}) => {

  const [token , setToken] = useState('');
  
  useEffect(async() =>{
    const parsedCookies = cookie.parse(document.cookie);
    setToken(parsedCookies.token);

  },[]);
  return (
    <TokenContext.Provider value={token}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenContextProvicer