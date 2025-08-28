import axios, { AxiosResponse, AxiosError } from "axios";

export const deleteData = async <T>({
  url,
  statusArray = [200, 401, 403, 404, 500],
  isPrivate = true,
}: {
  url: string;
  statusArray?: number[];
  isPrivate?: boolean;
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

    const response: AxiosResponse<T & { status?: number }> = await axios.delete(
      url,
      { headers }
    );

    if (response.data?.status && !statusArray.includes(response.data.status)) {
      throw new Error(`Unexpected status: ${response.data.status}`);
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
