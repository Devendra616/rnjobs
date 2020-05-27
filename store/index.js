import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers';

// WHITELIST
const persistConfig = {
    key: 'root',
    storage:AsyncStorage, //Storage method
    whitelist: ['likedJobs'] ,// only likedJobs will be persisted
    blacklist:[] //dont save these reducers
};
const persistedReducer =  persistReducer(persistConfig,rootReducer);

// Redux: store
const store = createStore(
    persistedReducer,
    {}, //initial state
    compose( //enhancer
        applyMiddleware(thunk)
    )
);

/* const getStore = () => store;
const getState = () => store.getState();
 */
let persistor = persistStore(store);

export  {store, persistor };