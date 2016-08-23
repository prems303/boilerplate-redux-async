import React from 'react'
import {connect} from 'react-redux'
import {setSubreddit, fetchPosts} from '../actions'

function search (evt, dispatch) {
  if (evt.keyCode === 13) {
    dispatch(setSubreddit(evt.currentTarget.value))
    dispatch(fetchPosts())
    evt.currentTarget.value = ''
  }
}

// <button
//   onClick={e => dispatch(fetchPosts('newzealand'))}
//   >Fetch Posts</button>
let LoadSubreddit = ({dispatch}) => (
  <input type="text" placeholder="Find a Sub"
    onKeyUp={evt => search(evt, dispatch)}/>
)

LoadSubreddit = connect()(LoadSubreddit)

export default LoadSubreddit
