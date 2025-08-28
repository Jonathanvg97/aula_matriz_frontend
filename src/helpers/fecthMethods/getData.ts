import axios, { AxiosResponse, AxiosError } from "axios";

export const getData = async <T>({
  url,
  statusArray = [200, 201, 401, 403, 404, 500],
  isPrivate = true,
  responseType = "json",
}: {
  url: string;
  statusArray?: number[];
  isPrivate?: boolean;
  responseType?: "json" | "blob";
}): Promise<T | null> => {
  try {
    const headers: Record<string, string> = {};

    if (isPrivate) {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("No token available");
      }
      headers.Authorization = `Bearer ${token}`;
    }

    const response: AxiosResponse<T> = await axios.get(url, {
      headers,
      responseType,
    });

    if (
      response.data &&
      typeof response.data === "object" &&
      "status" in response.data
    ) {
      const dataWithStatus = response.data as { status?: number } & T;
      if (
        dataWithStatus.status &&
        !statusArray.includes(dataWithStatus.status)
      ) {
        throw new Error(`Unexpected status: ${dataWithStatus.status}`);
      }
      return dataWithStatus;
    }

    return response.data ?? null;
  } catch (error) {
    const axiosError = error as AxiosError<{
      message: string;
      status?: number;
    }>;

    if (axiosError.response) {
      const { status, data } = axiosError.response;

      if (data?.message) {
        throw new Error(data.message);
      }
      if (status === 401) {
        throw new Error("No tienes autorización para realizar esta acción.");
      }
      if (status === 403) {
        throw new Error("Acceso prohibido.");
      }
    }
    throw error;
  }
};
