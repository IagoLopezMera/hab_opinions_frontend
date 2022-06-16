import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Opinion from "../components/Opinion";
import useOpinion from "../hooks/useOpinion";
import Loading from "../components/Loading";
import { AuthContext } from "../context/AuthContext";
import { deleteOpinionService } from "../services";

const OpinionPage = () => {
  const { id } = useParams();
  const { opinion, loading, error: opinionLoadingError } = useOpinion(id);
  const { token, user } = useContext(AuthContext);

  const [deleteOpinionError, setDeleteOpinionError] = useState("");

  const navigate = useNavigate();

  if (loading) return <Loading />;
  if (opinionLoadingError)
    return <ErrorMessage message={opinionLoadingError} />;

  const deleteOpinion = async (id) => {
    try {
      await deleteOpinionService({ id, token });

      navigate("/");
    } catch (error) {
      setDeleteOpinionError(error.message);
    }
  };

  return (
    <section>
      <h1>Opinion from {opinion.username}</h1>
      <Opinion opinion={opinion}>
        {user && user.idUser === opinion.idUser ? (
          <>
            <button
              className="delete-button"
              onClick={() => {
                if (window.confirm("Are you sure?"))
                  deleteOpinion(opinion.idOpinion);
              }}
            >
              Delete opinion
            </button>
            {deleteOpinionError ? <p>{deleteOpinionError}</p> : null}
          </>
        ) : null}
      </Opinion>
    </section>
  );
};

export default OpinionPage;
