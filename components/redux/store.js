import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer , applyMiddleware(thunk));

export const persistedStore = persistStore(store)