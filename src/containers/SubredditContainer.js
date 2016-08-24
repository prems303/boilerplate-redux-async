import {connect} from 'react-redux'

import Subreddit from '../components/Subreddit'

const mapStateToProps = (state) => {
  return {
    loading: state.load,
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
