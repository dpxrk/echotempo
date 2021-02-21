import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/home" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    return dispatch(
      sessionActions.login({ credential: "Demo-User", password: "password" })
    );
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div>Login Page</div>
      <div>
        <label className="username-box">
          <input
            placeholder="Username"
            className="username-entry-box"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <button className="login-button" type="submit">
          Log In
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cancel-button"
          onClick={handleDemoSubmit}
        >
          Demo User?
        </button>
      </div>
    </form>
  );
}

export default LoginFormPage;
