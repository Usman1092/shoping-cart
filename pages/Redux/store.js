// import { createStore } from "redux";
// import { rootReducer } from "./rootReducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const isClient = typeof window !== "undefined";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(
//   rootReducer,
//   isClient && window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : (f) => f
// );
// const persistor = persistStore(store);
// export { persistor };



import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

const isClient = typeof window !== 'undefined';

export const store = createStore(
  rootReducer,
  isClient && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);
