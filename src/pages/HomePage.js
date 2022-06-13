import useOpinions from "../hooks/useOpinions"
import OpinionsList from "../components/OpinionsList";
import useTopics from "../hooks/useTopics";
import TopicsList from "../components/TopicsList";
import ErrorMessage from "../components/ErrorMessage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const HomePage = () => {

    const { opinions, loading, error, addOpinion, removeOpinion  } = useOpinions()
    const { topics } = useTopics()
    const { user } = useContext(AuthContext)
   
    if (loading) return <Loading />;
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