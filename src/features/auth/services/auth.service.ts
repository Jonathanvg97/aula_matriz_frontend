import { postData } from "@/helpers/fecthMethods";
import { LOGIN_ENDPOINT } from "@/utils/paths";
import { AuthBodyInterface, AuthResponse } from "../types";

export const singIn = async (
  body: AuthBodyInterface
): Promise<AuthResponse | null> => {
  try {
    const response = (await postData<AuthBodyInterface, AuthResponse>({
      url: LOGIN_ENDPOINT,
      data: body,
      statusArray: [200],
      returnPromise: true,
      isPrivate: false,
    })) as AuthResponse | null;

    // Verifica que `response` no sea `false` antes de acceder a `data`
    if (response && typeof response === "object" && "data" in response) {
      return response.data as AuthResponse;
    }

    return null;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw error;
  }
};
