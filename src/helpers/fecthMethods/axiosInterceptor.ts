import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

type FailedRequest = {
  resolve: (token: string) => void;
  reject: (reason?: unknown) => void;
};

let isRefreshing = false;
let failedRequests: FailedRequest[] = [];

const processQueue = (
  error: Error | null,
  token: string | null = null
): void => {
  failedRequests.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });
  failedRequests = [];
};

export const setupAxiosInterceptors = (): void => {
  // Interceptor de solicitud
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) =>
      Promise.reject(error instanceof Error ? error : new Error(String(error)))
  );

  // Interceptor de respuesta
  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as
        | (InternalAxiosRequestConfig & { _retry?: boolean })
        | undefined;

      if (
        error.response?.status === 401 &&
        originalRequest &&
        !originalRequest._retry
      ) {
        if (isRefreshing) {
          return new Promise<string>((resolve, reject) => {
            failedRequests.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers = originalRequest.headers || {};
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return axios(originalRequest);
            })
            .catch((err) =>
              Promise.reject(
                err instanceof Error ? err : new Error(String(err))
              )
            );
        }

        originalRequest._retry = true;
        isRefreshing = true;

        const refreshToken = sessionStorage.getItem("refreshToken");
        if (!refreshToken) {
          processQueue(new Error("No refresh token available"));
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );
};
