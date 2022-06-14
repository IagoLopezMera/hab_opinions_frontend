import { useContext, useState } from "react";
import { logInUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //TODO: make API call (Login)
    try {
      const token = await logInUserService({ email, password });
      

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
   
  };

  return (
    <section>
      <h1>Sign in</h1>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </fieldset>

        <button>Sign in</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

export default LoginPage