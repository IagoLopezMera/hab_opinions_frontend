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

export const getAllTopicsService = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/topics`);
    
    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

  return json.topics;
  
};


export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${id}`)

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
}

export const deleteOpinionService = async ({id, token}) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/opinions/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token
    }
  })

  const json = await response.json();

  if(!response.ok) {
    throw new Error(json.message)
  }
}