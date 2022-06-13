import { useState } from "react";
import { updateUserService } from "../services"
import { useNavigate } from "react-router-dom"

const UpdateUser = () => {
    const navigate = useNavigate()
    
    const [currentEmail, setCurrentEmail] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();
        if (email1 !== email2 | pass1 !== pass2) {
          setError("Do not match");
          return;
        }
    
        try {
          await updateUserService({ currentEmail, email: email1, currentPassword, password: pass1 });
          navigate("/user");
        } catch (error) {
          setError(error.message);
        }
      };
      

    return <main>

        <section>
        <h1>Update User Email</h1>
      <form onSubmit={handleForm}>

      <fieldset>
          <label htmlFor="currentEmail">Current Email</label>
          <input
            type="email"
            id="currentEmail"
            name="currentEmail"
            value={currentEmail}
            required
            onChange={(e) => setCurrentEmail(e.target.value)}
          />
        </fieldset>
        
        <fieldset>
          <label htmlFor="email1">New email</label>
          <input
            type="email"
            id="email1"
            name="email1"
            value={email1}
            required
            onChange={(e) => setEmail1(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email2">Repeat new email</label>
          <input
            type="email"
            id="email2"
            name="email2"
            value={email2}
            required
            onChange={(e) => setEmail2(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={currentPassword}
            required
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </fieldset>

        <button>Update</button>
        {error ? <p>{error}</p> : null}
      </form>
        </section>


        <section>
        <h1>Update Password</h1>
      <form onSubmit={handleForm}>

      <fieldset>
          <label htmlFor="currentPassword">Current password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            required
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass1">New password</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Repeat new password</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <button>Update</button>
        {error ? <p>{error}</p> : null}
      </form>
        </section>
    </main>
    }
        

export default UpdateUser
