// import { useEffect, useState } from "react";
// import { getTopicService } from "../services";

// const useTopic = () => {
//   const [topic, setTopic] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadTopic = async () => {
//       try {
//         setLoading(true);

//         const data = await getTopicService();

//         setTopic(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadTopic();
//   }, []);

//   return { topic, loading, error };
// };

// export default useTopic;
