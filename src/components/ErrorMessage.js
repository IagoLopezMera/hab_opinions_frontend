import { Link } from "react-router-dom";

const ErrorMessage = ({ message }) => {
    return (
      <section className="error">
        <h1>Error</h1>
        <p>{message}</p>
        <Link to={"/"}>Go back to Home Page</Link>
      </section>
    )    
}

export default ErrorMessage