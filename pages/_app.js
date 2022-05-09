import '../styles/globals.css'
import '../styles/login.css'
import '../styles/Sidebar.css'
import 'antd/dist/antd.css';


//import redux
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store , persistedStore} from "../components/redux/store"

// import AuthContextProvider
import AuthContextProvider from '../components/context/AuthContextProvider';
import TokenContextProvicer from '../components/context/TokenContextProvider';


function MyApp({ Component, pageProps }) {
  return(
  <>
  <AuthContextProvider>
    <TokenContextProvicer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </TokenContextProvicer>
  </AuthContextProvider>
  </>
  )
}

export default MyApp