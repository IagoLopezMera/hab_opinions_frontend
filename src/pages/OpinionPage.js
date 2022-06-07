import { useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Opinion from "../components/Opinion"
import useOpinion from "../hooks/useOpinion"

const OpinionPage = () => {    
        const {id} = useParams()

        const {opinion, loading, error} = useOpinion(id);

        

        if (loading) return <p>cargando opinión...</p>;
        if (error) return <ErrorMessage message={error} />;

        return (
        <section>
            <h1>Opinion from {opinion.userNameOpinion}</h1>
            <Opinion opinion={opinion} />
        </section>
        )
    
}

export default OpinionPage