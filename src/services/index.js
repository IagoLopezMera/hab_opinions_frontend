export const getAllOpinionsService = async () => {
  console.log(process.env.REACT_APP_BACKEND);
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/opinions`);

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

  return json.data;
};

export const getSingleOpinionService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/opinions/${id}`)

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};