function search (state = 'ama', action) {
  switch (action.type) {
    case 'SUBREDDIT_SEARCH':
      return action.subredditSearch

    default:
      return state
  }
}

export default search
