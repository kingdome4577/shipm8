import { combineReducers } from 'redux';

// import all reducers here
import appReducers from './appReducers';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  app: appReducers,
});

// make the combined reducers available for import
export default reducers;