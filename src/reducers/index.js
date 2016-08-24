import {combineReducers} from 'redux'

import subreddits from './subreddits'
import search from './search'
import load from './load'

export default combineReducers({
  subreddits,
  search,
  load
})
