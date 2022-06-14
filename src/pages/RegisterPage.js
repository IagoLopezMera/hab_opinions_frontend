import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
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
      //TODO will implement API register call
      await registerUserService({ userName, email, password: pass1 });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass2">Repeat password</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

export default RegisterPage;
