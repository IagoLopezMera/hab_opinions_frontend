import { useEffect, useState } from 'react';
import { getAllOpinionsService } from '../services';

const useOpinions = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOpinions = async () => {
        try {
            setLoading(true);

            const data = await getAllOpinionsService();

            setOpinions(data);

        } catch (error){
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    loadOpinions();

  }, [])

  const addOpinion = (opinion) => { 
    setOpinions([opinion, ...opinions])
  }

  // const removeOpinion = (opinion) => {
  //   setOpinions(opinion.filter((opinion) => opinion.id !== id))
  // }

  return { opinions, loading, error, addOpinion, {/* removeOpinion */} };
};

export default useOpinions;