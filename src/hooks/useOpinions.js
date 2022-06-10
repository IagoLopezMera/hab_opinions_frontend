import { useEffect, useState } from 'react';
import { getAllOpinionsService } from '../services';

const useOpinions = (id) => {
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

  }, [id])

  const addOpinion = (opinion) => { 
    setOpinions([opinion, ...opinions])
  }

  // const removeOpinion = (opinion) => {
  //   setOpinions(opinion.filter((opinion) => opinion.id !== id))
  // }

  // add removeOpinion to return

  return { opinions, loading, error, addOpinion, };
};

export default useOpinions;