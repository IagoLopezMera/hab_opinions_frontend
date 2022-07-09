import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  function logoutAndNavigateToHomepage() {
    logout();
    navigate("/");
  }

  return user ? (
    <>
      <ul>
        <li>
          <Link to="/opinion/new" className="create_opinion">
            <button className="create-opinion-button">Create Opinion</button>
          </Link>
        </li>
      </ul>
      <section className="logged-in">
        Logged in as <Link to={`/user/${user.idUser}`}>{user.username}</Link>{" "}
        <button
          onClick={() => logoutAndNavigateToHomepage()}
          className="logout"
        >
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
