import Topic from "./Topic"

const TopicsList = ({ topics }) => {
    return topics.length ? (
        <ul className="topics-list">
            {topics.map((topic) => (
                <li key={topic.idTopic}>
                    <Topic topic={topic} />
                </li>
            ))}
        </ul>
    ) : (
      <p>There are no topics yet...</p>
    )
}

export default TopicsList