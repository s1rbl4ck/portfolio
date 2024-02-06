import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
