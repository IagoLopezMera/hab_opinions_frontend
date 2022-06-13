import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";
import UserOpinions from "../components/UserOpinions";
import useUser from "../hooks/useUser";

const UserPage = () => {
    
    const { id } = useParams();
    const {user, loading, error} = useUser(id);

    if(loading) return <p>Loading user data...</p>;
    if(error) return <ErrorMessage message={error} />;

    return <main>
        <section>
            <h1>User {user.username}</h1>
            <p>User email: {user.email}</p>
            <p>User id: {user.idUser}</p>
            <p>Registered on: {new Date(user.createdAt).toLocaleString()}</p>

            <UserOpinions id={user.idUser} />
        </section>
        <section>
            <h1>
                <Link to={`/updateuser/${id}`}>Update User</Link>
            </h1>
        </section>
    </main>
    }
        

export default UserPage
