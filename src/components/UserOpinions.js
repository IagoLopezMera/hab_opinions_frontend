import ErrorMessage from "./ErrorMessage";
import OpinionsList from "./OpinionsList";
import useOpinions from "../hooks/useOpinions";



const UserOpinions = ({ id }) => {
    const { opinions, loading, error, removeOpinion } = useOpinions(id);

    if (loading) return <p>Loading opinions...</p>;
    if (error) return <ErrorMessage message={{error}} />;

    return <OpinionsList opinions={opinions} removeOpinion={removeOpinion} /> 
}

export default UserOpinions