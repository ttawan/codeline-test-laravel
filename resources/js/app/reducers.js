/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';

import home from './containers/HomePage/reducer';
import user from './containers/UserPage/reducer';
import detail from './containers/FilmDetailPage/reducer';

export default combineReducers({
  router: connectRouter(history),
  user,
  home,
  detail,
});
