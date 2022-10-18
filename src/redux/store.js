import { combineReducers, configureStore } from '@reduxjs/toolkit'
import phoneBoockSlice  from './contacts/counterSlice'
import { authReducer } from './auth/authSlise'
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['filter']
  }
const rootReduser = combineReducers({
  contact: phoneBoockSlice.reducer, 
  auth:authReducer
})
  const persistedReducer = persistReducer(persistConfig, rootReduser)


export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store)