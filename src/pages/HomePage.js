import OpinionsList from "../components/OpinionsList";
import useOpinions from "../hooks/useOpinions"

const HomePage = () => {

    const { opinions, loading, error } = useOpinions()

    if (loading) return <p>cargando opiniones...</p>;
    if (error) return <p>{error}</p>;

    console.log(opinions);

    return <section>
        <h1>Latest Opinions</h1>

        <OpinionsList opinions={opinions} />
    </section>
}

export default HomePage