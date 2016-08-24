function error (state = false, action) {
  switch (action.type) {
    case 'ERROR':
      return action.status

    default:
      return state
  }
}

export default error
