import {combineReducers} from 'redux'

import subreddits from './subreddits'
import search from './search'
import load from './load'
import error from './error'

export default combineReducers({
  subreddits,
  search,
  load,
  error
})
