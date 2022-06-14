import { useEffect, useState } from "react"
import { getSingleOpinionService } from "../services";

const useOpinion = (id) => {

const [opinion, setOpinion] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
    const loadOpinion = async () => {
        try {
            setLoading(true);

            const data = await getSingleOpinionService(id);

            setOpinion(data);

        } catch(error) {
            setError(error.message)
        }  finally {
            setLoading(false);
        }

    }

    loadOpinion();
    }, [id])

    return { opinion, loading, error };
}

export default useOpinion