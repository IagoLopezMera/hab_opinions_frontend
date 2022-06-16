import { Link } from "react-router-dom";

const Opinion = ({ opinion, children }) => {
  return (
    <article className="opinion">
      <p>{opinion.text}</p>
      <p className="opiniondata">
        By <Link to={`/user/${opinion.idUser}`}>{opinion.username}</Link> on{" "}
        <Link to={`/opinion/${opinion.idOpinion}`}>
          {new Date(opinion.createdAt).toLocaleString()}
        </Link>{" "}
        {opinion.topicDescription}
      </p>
      <section className="opinion-actions">{children}</section>
    </article>
  );
};

export default Opinion;
