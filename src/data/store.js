import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createLogger } from 'redux-logger';
import { userProfile } from '@edx/frontend-auth';

import apiClient from './apiClient';

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const initialState = apiClient.getAuthenticationState();
const store = createStore(
  userProfile,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
