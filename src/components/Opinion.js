import { useContext } from "react";
import { Link } from "react-router-dom";
import { deleteOpinionService } from "../services";
// import { AuthContext } from "../context/AuthContext";

const Opinion = ({ opinion, removeOpinion }) => {
    // const navigate = useNavigate();
    // const {user} = useContext(AuthContext);
    // const [error, setError] = useState("");

    // const deleteOpinion = async (id) => {
    //     try {
    //          await deleteOpinionService({id, token})
    //
    //          if (removeOpinion) {removeOpinion(id)
    //          } else {
    //              navigate("/");
    //              }
    //     } catch (error) {
    //         setError(error.message)
    //     }
    // }

    return (
        <article>
            <p>{opinion.text}</p>
            <p>
                By <Link to={`/opinion/${opinion.idUser}`}>{opinion.email}</Link> on {" "}<Link to={`/opinion/${opinion.idOpinion}`}>{new Date(opinion.idOpinion).toLocaleString()}</Link> 

                {/* {user && user.idUser === opinion.idUser ? <section><button onClick={() => {
                    if(window.confirm('Are you shure?')) deleteOpinion(opinion.id)}}>Delete opinion</button>
                {error ? <p>{error}</p>} : null}
                </section> */}

                {/* es necesario modificar la DDBB y el backend para que opinión incluya el nombre de usuario y también que guarde la DDBB la fecha y hora de creación de la opinión */}
            </p>
            {/* Si sobra tiempo se podría incluir que se puedan añadir imágenes en las opiniones */}
        </article>
    )
}

export default Opinion