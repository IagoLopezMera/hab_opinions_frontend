import ErrorMessage from "../components/ErrorMessage";
import OpinionsList from "../components/OpinionsList";
import useOpinions from "../hooks/useOpinions"
import addOpinion from "../hooks/useOpinions"

const HomePage = () => {

    const { opinions, loading, error, addOpinion, removeOpinion  } = useOpinions()

    if (loading) return <p>cargando opiniones...</p>;
    if (error) return <ErrorMessage message={error} />;

    return <section>
        <h1>Latest Opinions</h1>

        {/* {user ? <NewOpinion addOpinion={addOpinion} /> : null} */}

        <OpinionsList opinions={opinions} removeOpinion={removeOpinion}/>
    </section>
}

export default HomePage