import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";

import "./RegisterPage.css";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUserService({ userName, email, password: pass1 });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="Register-wrapper">
      <h1 className="Register-header">Register</h1>
      <form onSubmit={handleForm} className="Register-onsubmit-form">
        <fieldset>
          <label htmlFor="userName"></label>
          <input
            className="Register-input"
            placeholder="Username"
            type="text"
            id="userName"
            name="userName"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email"></label>
          <input
            className="Register-input"
            placeholder="Email address"
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1"></label>
          <input
            className="Register-input"
            placeholder="Password"
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2"></label>
          <input
            className="Register-input"
            placeholder="Repeat password"
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <button className="Register-button">Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
