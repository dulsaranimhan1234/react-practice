function UserGreeting(props) {
  const welcomeMsg = (
    <h1 className="welcome-msg">
      Welcome back {props.username}!
    </h1>
  );

  const signUpMsg = (
    <h1 className="sign-up-msg">
      Please sign up.
    </h1>
  );

  return props.isLoggedIn ? welcomeMsg : signUpMsg;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest"
};

export default UserGreeting;