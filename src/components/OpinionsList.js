import Opinion from "./Opinion";
import { Link } from "react-router-dom";

const OpinionsList = ({ opinions }) => {
  return opinions.length ? (
    <ul className="opinions-list">
      {opinions.map((opinion) => (
        <li key={opinion.idOpinion}>
          <Opinion opinion={opinion}>
            <Link className="view-button" to={`/opinion/${opinion.idOpinion}`}>
              View opinion
            </Link>
          </Opinion>
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no opinions yet...</p>
  );
};

export default OpinionsList;
