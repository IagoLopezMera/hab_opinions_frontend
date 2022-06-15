import { useContext, useState } from "react";
import { updatePasswordService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const { user, token, modifyPassword } = useContext(AuthContext);

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
      await updatePasswordService({
        password: pass1,
        id: user.idUser,
        token,
      });

      modifyPassword({
        password: pass1,
      });

      navigate(`/user/${user.idUser}`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (!user) return <Loading />;

  return (
    <main>
      <section className="Update-password-wrapper">
        <h1 className="Update-password-header">Update Pasword</h1>
        <form onSubmit={handleForm} className="Update-password-onsubmit-form">
          <fieldset>
            <label htmlFor="pass1">New password</label>
            <input
              className="Update-password-input"
              placeholder="New password"
              type="password"
              id="pass1"
              name="pass1"
              value={pass1}
              required
              onChange={(e) => setPass1(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="pass2">Confirm new password</label>
            <input
              className="Update-password-input"
              placeholder="Confirm new password"
              type="password"
              id="pass2"
              name="pass2"
              value={pass2}
              required
              onChange={(e) => setPass2(e.target.value)}
            />
          </fieldset>

          <button className="Update-password-button">Update</button>
          {error ? <p>{error}</p> : null}
        </form>
      </section>
    </main>
  );
};

export default UpdatePassword;
