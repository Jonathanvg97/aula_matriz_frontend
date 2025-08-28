import axios, { AxiosResponse, AxiosError } from "axios";

export const putData = async <T, R>({
  url,
  data,
  statusArray = [200, 201],
  returnPromise = false,
  isPrivate = true,
}: {
  url: string;
  data: T;
  statusArray?: number[];
  returnPromise?: boolean;
  isPrivate?: boolean;
}): Promise<R | boolean | AxiosResponse<R> | null> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (isPrivate) {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("No token available"); // 🔴 Ahora lanza un error
      }
      headers.Authorization = `Bearer ${token}`;
    }

    const response: AxiosResponse<R> = await axios.put(url, data, { headers });

    if (!statusArray.includes(response.status)) {
      throw new Error(`Unexpected status: ${response.status}`);
    }

    return returnPromise ? response : response.data ?? true;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;

    if (axiosError.response) {
      const { status, data } = axiosError.response;

      if (data?.message) {
        throw new Error(data.message);
      }
      // 🔹 Mensaje genérico para errores 401 y 403
      if (status === 401) {
        throw new Error("No tienes autorización para realizar esta acción.");
      }
      if (status === 403) {
        throw new Error("Acceso prohibido.");
      }
    }
    throw error; // 🔥 Lanza el error para manejarlo en el `catch`
  }
};
