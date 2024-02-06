import { createStore } from "redux";
import { persistedReducer } from "./storePersist";
import { composedEnhancers } from "./storeMiddleware";
import persistStore from "redux-persist/lib/persistStore";

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
