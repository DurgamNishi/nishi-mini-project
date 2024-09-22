import "./Login.css";

const Login = () => {
  return (
    <div className="login-screen">
      <div className="login-card">
        <h1 className="login-title">Daily Mood Tracker</h1>
        <div className="login-input-container">
          <label className="login-label" htmlFor="username">
            USERNAME
          </label>
          <input className="login-input" type="text" id="username" />
        </div>
        <div className="login-input-container">
          <label className="login-label" htmlFor="password">
            PASSWORD
          </label>
          <input className="login-input" type="text" id="password" />
        </div>
        <div className="login-checkbox-container">
          <input
            id="show-password"
            type="checkbox"
            className="login-checkbox"
          />
          <label className="login-checkbox-label" htmlFor="show-password">
            Show Password
          </label>
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};
export default Login;
