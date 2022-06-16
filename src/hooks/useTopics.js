import { useEffect, useState } from "react";
import { getAllTopicsService } from "../services";

const useTopics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return { topics, loading, error };
};

export default useTopics;
