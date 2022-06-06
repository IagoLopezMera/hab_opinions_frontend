import { useEffect, useState } from "react"

const useOpinion = (id)=> {

const [opinion, setOpinion] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
    const loadOpinion = async () => {
        try {
            setLoading(true);

        } catch(error) {

        }  finally {

        }

    }

    loadOpinion();
    }, [id])

}

export default useOpinion