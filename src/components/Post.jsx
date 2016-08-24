import React, {PropTypes} from 'react'

const Post = ({title, date, content}) => (
  <div>
    <h1>{title}</h1><br/>
    <h3>{content}</h3><br/><br/>
    {date}<br/>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
