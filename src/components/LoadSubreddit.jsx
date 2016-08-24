import React from 'react'
import {connect} from 'react-redux'
import {setSubreddit, fetchPosts, search} from '../actions'

let LoadSubreddit = ({dispatch}) => (
  <input type="text"
    placeholder="Find a Sub"
    onKeyUp={evt => search(evt, dispatch)}/>
)

LoadSubreddit = connect()(LoadSubreddit)

export default LoadSubreddit
