import { useContext, useEffect, useState } from "react";
import { createNewOpinionService } from "../services";
import { getAllTopicsService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CreateOpinionPage = () => {
  const navigate = useNavigate();

  const [topic, setTopic] = useState();
  const handleTopicChange = (e) => setTopic(e.target.value);

  const [opinion, setOpinion] = useState("");
  const handleOpinionChange = (e) => setOpinion(e.target.value);

  const [error, setError] = useState("");
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        setLoading(true);

        const data = await getAllTopicsService();

        setTopics(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
  }, []);

  const { token } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await createNewOpinionService({
        token,
        text: opinion,
        topic,
      });

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading === true) return <h1>Loading...</h1>;

  return (
    <section>
      <h1>Tell us your Opinion</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Opinion</label>
        <label htmlFor="topics">Choose a topic:</label>

        <select onChange={handleTopicChange} name="topics" id="topics">
          <option value="">--Please choose an option--</option>

          {topics.map((topic) => (
            <option key={topic.idTopic} value={topic.idTopic}>
              {topic.description}
            </option>
          ))}
        </select>
        <textarea
          id="opinionText"
          name="opinionText"
          value={opinion}
          rows="4"
          cols="50"
          required
          onChange={handleOpinionChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
