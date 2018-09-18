import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const logger = createLogger();


export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant(), logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
