import { useEffect, useState } from 'react';
import { getAllOpinionsService, getUserOpinionsService } from '../services';

const useOpinions = (id) => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOpinions = async () => {
        try {
            setLoading(true);

            const data = id
            ? await getUserOpinionsService(id)
            : await getAllOpinionsService();

            setOpinions(data);

        } catch (error){
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    loadOpinions();

  }, [id])

  const addOpinion = (data) => { 
    setOpinions([data, ...opinions])
  }

  const removeOpinion = (id) => {
    setOpinions(opinions.filter((opinion) => opinion.id !== id))
  }


  return { opinions, loading, error, addOpinion, removeOpinion };
};

export default useOpinions;