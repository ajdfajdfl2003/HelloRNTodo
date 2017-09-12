import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './reducers/indexReducer';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const store = compose(applyMiddleware(thunk), autoRehydrate())(createStore)(indexReducer);
persistStore(store, { blacklist: [], storage: AsyncStorage });

export default store;
