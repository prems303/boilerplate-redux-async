import {combineReducers} from 'redux'

import subreddits from './subreddits'
import search from './search'

export default combineReducers({
  subreddits,
  search
})
