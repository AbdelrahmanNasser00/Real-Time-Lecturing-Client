import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://realtime-lecturing-api.onrender.com/api",
  timeout: 5000,
});
// const apiClient = axios.create({
//   baseURL: "http://localhost:8080/api",
//   timeout: 5000,
// });

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// public routes

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const verify = async (data) => {
  try {
    return await apiClient.post("/auth/verify", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
