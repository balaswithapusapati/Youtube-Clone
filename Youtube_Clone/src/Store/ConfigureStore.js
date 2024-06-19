import { compose, createStore, applyMiddleware } from 'redux';
import videoReducer from './Reducers/videoReducer';
import thunk from 'redux-thunk';

export function ConfigureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    videoReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
