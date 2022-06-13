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

export const registerUserService = async ({ userName, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users`, {
    method: "POST",
    body: JSON.stringify({ userName,email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const updateUserService = async ({ currentEmail, email, currentPassword, password, id }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ currentEmail, email, currentPassword, password }),
    headers: {
      "Content-Type": "application/json",
    },
  }); 

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const getMyDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/${id}`)

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
}

export const getUserOpinionsService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${id}/opinions`
  )

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