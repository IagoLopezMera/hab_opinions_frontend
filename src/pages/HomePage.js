import ErrorMessage from "../components/ErrorMessage";
import OpinionsList from "../components/OpinionsList";
import TopicsList from "../components/TopicsList";
import useOpinions from "../hooks/useOpinions"
import useTopics from "../hooks/useTopics";
import addOpinion from "../hooks/useOpinions";

const HomePage = () => {

    const { opinions, loading, error, addOpinion, removeOpinion  } = useOpinions()
    const { topics } = useTopics()
   
    if (loading) return <p>cargando ...</p>;
    if (error) return <ErrorMessage message={error} />;

    return <main>
        <section>
          <h1>Latest Opinions</h1>

        {/* {user ? <NewOpinion addOpinion={addOpinion} /> : null} */}

          <OpinionsList opinions={opinions} removeOpinion={removeOpinion}/>
        </section>
        <section>
          <h1>Topics</h1>

          <TopicsList topics={topics} />

        </section>
        
        </main>
}

export default HomePage