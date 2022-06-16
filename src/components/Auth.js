import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <>
      <ul>
        <li>
          <Link to="/opinion/new">Create Opinion</Link>
        </li>
      </ul>
      <section className="logged-in">
        Logged in as <Link to={`/user/${user.idUser}`}>{user.username}</Link>{" "}
        <button onClick={() => logout()} className="logout">
          Logout
        </button>
      </section>
    </>
  ) : (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};

export default Auth;
