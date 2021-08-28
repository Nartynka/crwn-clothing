import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './root-reducer';
import logger from 'redux-logger';

const middleware = [ logger ];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware))
);

export default store;
