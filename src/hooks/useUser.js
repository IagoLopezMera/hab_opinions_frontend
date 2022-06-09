import { useEffect, useState  } from "react";

const useUser = (id) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true);
                const data = await    
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        loadUser();
    }, [id])
}

export default useUser;