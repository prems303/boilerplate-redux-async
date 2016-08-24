import {connect} from 'react-redux'

import Subreddit from '../components/Subreddit'

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits,
    loading: state.load,
    error: state.error
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
