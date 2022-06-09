import { useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import UserOpinions from "../components/UserOpinions";
import useUser from "../hooks/useOpinions";

const UpdateUser = () => {

    const { id } = useParams();
    const {user, loading, error} = useUser(id);

    if(loading) return <p>Loading user data...</p>;
    if(error) return <ErrorMessage message={error} />;

    return <main>
        <section>
            <h1>User: {user.username}</h1>
            <p>User email: {user.email}</p>
            <p>User id: {user.idUser}</p>
            <p>Registered on: {new Date(user.created_at).toLocaleString()}</p>

            <UserOpinions id={user.id} />
        </section>
        <section>
            <h1>Update User Email</h1>
            <p>Aquí irá el formulario de actualización del email</p>
        </section>
        <section>
            <h1>Update User Password</h1>
            <p>Aquí irá el formulario de actualización del password</p>
        </section>
    </main>
    }
        

export default UpdateUser