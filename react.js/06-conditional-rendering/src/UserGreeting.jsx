import PropTypes from 'prop-types'
function UserGreeting(props) {

  /*
    default if else and return value to pages
    if (props.isLoggedIn) {
      return <h2>Welcome {props.username}</h2>
    } else {
      return <h2>Please log in to continue..</h2>
    }
  */

  const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
  const loginPrompt = <h2 className="login-prompt">Please log in to continue..</h2>

  return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest"
}

export default UserGreeting