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

  return "";
};

export const API_BASE_URL = getApiBaseUrl();

export const apiUrl = (path) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return API_BASE_URL ? `${API_BASE_URL}${normalizedPath}` : normalizedPath;
};

export const getApiErrorMessage = (error, fallbackMessage) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  if (
    error.response?.status === 404 &&
    error.config?.url?.includes("/api/")
  ) {
    return "API route not found. Check Vercel rewrite or VITE_API_BASE_URL.";
  }

  if (error.code === "ERR_NETWORK") {
    return "Unable to reach the backend. Check VITE_API_BASE_URL and your deployed API.";
  }

  return fallbackMessage;
};
