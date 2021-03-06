import { useContext, useEffect, useState } from "react";
import { createNewOpinionService } from "../services";
import { getAllTopicsService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import './CreateOpinionPage.css';

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
    <section className="create-opinion-wrapper">
      <h1 className="Create-opinion-header">Tell us your Opinion</h1>
      <form onSubmit={handleFormSubmit} className="create-opinion-submit-form">
        

        <select onChange={handleTopicChange} className="select-menu-top"name="topics" id="topics">
          <option value="">--Please choose a topic--</option>

          {topics.map((topic) => (
            <option key={topic.idTopic} value={topic.idTopic}>
              {topic.description}
            </option>
          ))}
        </select>
        <textarea
          className="create-opinion-textarea"
          placeholder="Tell us your opinion..."
          id="opinionText"
          name="opinionText"
          value={opinion}
          rows="4"
          cols="50"
          required
          onChange={handleOpinionChange}
        />
        <button type="submit" className="Opinion-submit-button">Submit</button>
      </form>
    </section>
  );
};
