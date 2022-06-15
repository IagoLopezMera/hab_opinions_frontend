import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import UserOpinions from "../components/UserOpinions";
import useUser from "../hooks/useUser";

const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main>
      <section className="userpage">
        <h1>User {user.username}</h1>
        <p>User email: {user.email}</p>
        <p>User id: {id}</p>

        <UserOpinions id={id} />
      </section>
      <section>
        <h3>
          <Link to={`/updateuser/${id}`}>Update User</Link>
        </h3>
        <h3>
          <Link to={`/updatepassword/${id}`}>Update Password</Link>
        </h3>
      </section>
    </main>
  );
};

export default UserPage;
