import { Link } from "react-router-dom";

const ErrorMessage = ({ message }) => {
    return (
      <>
        <p>{message}</p>
        <Link to="/">Go back to Home Page</Link>
      </>
    )    
}

export default ErrorMessage