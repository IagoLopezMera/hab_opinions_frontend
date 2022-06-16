import { useContext, useState } from "react";
import { logInUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./LoginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await logInUserService({ email, password });    

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="wrapper">
      <h1 className="signIn-header">Sign in</h1>
      <form onSubmit={handleFormSubmit} className="Login-submit-form">
        <fieldset>
          <label htmlFor="email" className="email-login-label"></label>
          <input
            className="login-input"
            placeholder="Email address"
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password"></label>
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </fieldset>

        <button className="sign-in-button">Sign in</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
