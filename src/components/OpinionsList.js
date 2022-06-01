import Opinion from "./Opinion"

const OpinionsList = ({ opinions }) => {
    return opinions.length ? (
        <ul>
            {opinions.map((opinion) => (
                <li key={opinion.idOpinion}>
                    <Opinion opinion={opinion} />
                </li>
            ))}
        </ul>
    ) : (
      <p>There are no opinions yet...</p>
    )
}

export default OpinionsList