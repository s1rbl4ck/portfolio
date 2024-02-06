import { applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [
    process.env.NODE_ENV !== "production" && logger,
    thunk,
].filter(Boolean);

const composeEnhancer =
    (process.env.NODE_ENV !== "production" && typeof window !== 'undefined' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
