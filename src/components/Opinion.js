import { Link } from "react-router-dom";

const Opinion = ({ opinion }) => {
    return (
        <article>
            <p>{opinion.text}</p>
            <p>
                By {opinion.email} on {" "}<Link to={`/opinion/${opinion.idOpinion}`}>{new Date(opinion.idOpinion).toLocaleString()}</Link> 
                {/* es necesario modificar la DDBB y el backend para que opinión incluya el nombre de usuario y también que guarde la DDBB la fecha y hora de creación de la opinión */}
            </p>
            {/* Si sobra tiempo se podría incluir que se puedan añadir imágenes en las opiniones */}
        </article>
    )
}

export default Opinion