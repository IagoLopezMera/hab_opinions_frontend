import { useState } from "react";

export const CreateOpinionPage = () => {
  const [opinion, setOpinion] = useState("");
  const handleOpinionChange = (e) => setOpinion(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //TODO: make API call (Login)
    setOpinion("");
  };

  return (
    <section>
      <h1>Tell us your Opinion</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Opinion</label>
        <textarea
          id="opinionText"
          name="opinionText"
          value={opinion}
          rows="4"
          cols="50"
          required
          onChange={handleOpinionChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
