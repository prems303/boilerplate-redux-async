import request from 'superagent'

export const receivePosts = (subreddit, posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export const setSubreddit = subredditSearch => {
  return {
    type: 'SUBREDDIT_SEARCH',
    subredditSearch
  }
}

export function fetchPosts () {
  return (dispatch, getState) => {
    const subreddit = getState().search
    return request
      .get(`https://www.reddit.com/r/${subreddit}.json`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePosts(subreddit, res.body.data.children))
      })
  }
}
