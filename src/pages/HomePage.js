import useOpinions from "../hooks/useOpinions";
import OpinionsList from "../components/OpinionsList";
import useTopics from "../hooks/useTopics";
import TopicsList from "../components/TopicsList";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

const HomePage = () => {
  const { opinions, loading, error, removeOpinion } = useOpinions();
  const { topics } = useTopics();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main>
      <section>
        <h1>Latest Opinions</h1>
        <OpinionsList opinions={opinions} removeOpinion={removeOpinion} />
      </section>
      <section className="aside-section">
        <h3>Topics</h3>

        <TopicsList topics={topics} />
      </section>
    </main>
  );
};

export default HomePage;
