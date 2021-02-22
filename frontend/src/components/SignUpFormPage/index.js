import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignUpForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return <Redirect to="/home" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const errors = [];
      return dispatch(
        sessionActions.signUp({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    } else {
      errors.push(
        "Confirm Password field must be the same as the Password field"
      );
    }
    if (!email) errors.push("An email is required");
    if (!username) errors.push("A username is required");

    setErrors(errors);
  };

  /* useEffect(() => {
    const errors = [];
      if (!email) errors.push("An email is required")
      if (!username) errors.push("A username is required")

   }*/

  const handleAlreadyRegistered = (e) => {
    e.preventDefault();
    history.push("/home/login");
  };

  return (
    <div className="signUpForm">
      <form className="form-container">
        <div className="form-title">Registration Page</div>
        <div>
          <label>
            <input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              placeholder="Username/Artist Name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <label>
            <input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button
            className="signup-button"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div>
          <button
            className="already-registered-button"
            type="submit"
            onClick={handleAlreadyRegistered}
          >
            Already Registered?
          </button>
        </div>
        {errors.length ? (
          <ul>
            {errors.map((error, idx) => (
              <li className="errors" key={idx}>
                {error}
              </li>
            ))}
          </ul>
        ) : null}
      </form>
    </div>
  );
}

export default SignupFormPage;
