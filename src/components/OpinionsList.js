import Opinion from "./Opinion"

const OpinionsList = ({ opinions, removeOpinion }) => {
    return opinions.length ? (
        <ul className="opinions-list">
            {opinions.map((opinion) => (
                <li key={opinion.idOpinion}>
                    <Opinion opinion={opinion} removeOpinion={removeOpinion}/>
                </li>
            ))}
        </ul>
    ) : (
      <p>There are no opinions yet...</p>
    )
}

export default OpinionsList