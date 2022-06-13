import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteOpinionService } from "../services";
import { AuthContext } from "../context/AuthContext";


const Opinion = ({ opinion, removeOpinion }) => {
    const navigate = useNavigate();
    const { token, user, topic } = useContext(AuthContext);
    const [error, setError] = useState("");

    const deleteOpinion = async (id) => {
        try {
             await deleteOpinionService({ id, token })
    
             if (removeOpinion) {removeOpinion(id)
             } else {
                 navigate("/");
                 }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <article className="opinion">
            <p>{opinion.text}</p>
            <p>
                By <Link to={`/user/${opinion.idUser}`}>{opinion.username}</Link> on {" "}<Link to={`/opinion/${opinion.idOpinion}`}>{new Date(opinion.createdAt).toLocaleString()}</Link>{" "}{/* <Link to={`/opinion/${opinion.idTopic}`}>{topic.description}</Link> */}
            </p>
                {user && user.idUser === opinion.idUser ? (
                <section>
                    <button onClick={() => {
                      if(window.confirm('Are you sure?')) deleteOpinion(opinion.id)
                      }}
                      >
                        Delete opinion
                    </button>
                    {error ? <p>{error}</p> : null}
                </section>
                ) : null}
        </article>
    )
}

export default Opinion