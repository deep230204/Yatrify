export const getAuthData = () => {
  try {
    return JSON.parse(localStorage.getItem("auth")) || null;
  } catch (error) {
    return null;
  }
};

export const setAuthData = (authData) => {
  localStorage.setItem("auth", JSON.stringify(authData));
  localStorage.setItem("user", JSON.stringify(authData?.user || null));
};

export const clearAuthData = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
};

export const getAuthToken = () => getAuthData()?.token || "";

export const getCurrentUser = () => getAuthData()?.user || null;
