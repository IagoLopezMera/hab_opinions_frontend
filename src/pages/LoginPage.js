import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //TODO: make API call (Login)
    setEmail("");
    setPassword("");
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
      </form>
    </section>
  );
};
