// src/js/store/index.js

import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from "../reducers/index";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)
const storeobject = {
	'store' : store,
	'persistor' : persistor
}

export default storeobject;