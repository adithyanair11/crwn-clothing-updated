import {compose,legacy_createStore as createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import { rootReducer } from './root-reducer';
import {persistStore,persistReducer} from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    blackList:['user']
}



const persistedReducer = persistReducer(persistConfig,rootReducer);


const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer,undefined,composedEnhancers);



export const persistor = persistStore(store);



