const trimTrailingSlashes = (value = "") => value.replace(/\/+$/, "");

const getApiBaseUrl = () => {
  const configuredBaseUrl = trimTrailingSlashes(
    import.meta.env.VITE_API_BASE_URL || ""
  );

  if (configuredBaseUrl) {
    return configuredBaseUrl;
  }

  if (import.meta.env.DEV) {
    return "http://localhost:5000";
  }

  if (typeof window !== "undefined") {
    return trimTrailingSlashes(window.location.origin);
  }

  return "";
};

export const API_BASE_URL = getApiBaseUrl();

export const apiUrl = (path) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

export const getApiErrorMessage = (error, fallbackMessage) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  if (error.code === "ERR_NETWORK") {
    return "Unable to reach the backend. Check VITE_API_BASE_URL and your deployed API.";
  }

  return fallbackMessage;
};
