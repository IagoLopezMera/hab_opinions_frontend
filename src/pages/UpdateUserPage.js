import { useContext, useState } from "react";
import { updateUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { user, token, modifyUser } = useContext(AuthContext);

  const [newUserName, setNewUserName] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    if (email1 !== email2) {
      setError("Emails do not match");
      return;
    }

    try {
      await updateUserService({
        userName: newUserName,
        email: email1,
        id: user.idUser,
        token,
      });

      modifyUser({
        email: email1,
        username: newUserName,
      });

      navigate(`/user/${user.idUser}`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (!user) return <Loading />;

  return (
    <main>
      <section className="Update-user-wrapper">
        <h1 className="Update-user-header">Update User Email</h1>
       <form onSubmit={handleForm} className="Register-onsubmit-form">
          <fieldset>
            <input
              className="Update-user-input"
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              value={newUserName}
              required
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              className="Update-user-input"
              placeholder="New email address"
              type="email"
              id="email1"
              name="email1"
              value={email1}
              required
              onChange={(e) => setEmail1(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <input
              className="Register-input"
              placeholder="Repeat new email address"
              type="email"
              id="email2"
              name="email2"
              value={email2}
              required
              onChange={(e) => setEmail2(e.target.value)}
            />
          </fieldset>

          <button className="Register-button">Update</button>
          {error ? <p>{error}</p> : null}
        </form>
      </section>
    </main>
  );
};

export default UpdateUser;
