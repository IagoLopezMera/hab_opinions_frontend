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

  export const getMyDataService = async (token) => {
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
  export const createNewOpinionService = async ({token, text, topic }) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/opinions`, {
      method: "POST",
      body: JSON.stringify({ text, topic }),
      headers: {
        "Content-Type": "application/json",
        "Authorization":token
      },
    });
  
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
