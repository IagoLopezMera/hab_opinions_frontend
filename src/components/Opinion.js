import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteOpinionService } from "../services";
import { AuthContext } from "../context/AuthContext";

const Opinion = ({ opinion, removeOpinion }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteOpinion = async (id) => {
    try {
      await deleteOpinionService({ id, token });

      if (removeOpinion) {
        removeOpinion(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article className="opinion">
      <p>{opinion.text}</p>
      <p className="opiniondata">
        By <Link to={`/user/${opinion.idUser}`}>{opinion.username}</Link> on{" "}
        <Link to={`/opinion/${opinion.idOpinion}`}>
          {new Date(opinion.createdAt).toLocaleString()}
        </Link>{" "}
        {opinion.topicDescription}
      </p>
      {user && user.idUser === opinion.idUser ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("Are you sure?")) deleteOpinion(opinion.idOpinion);
            }}
          >
            Delete opinion
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};

export default Opinion;
