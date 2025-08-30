export interface AuthResponse {
  data: {
    access: string;
    refresh: string;
    requires_2fa: boolean;
    user_id: number;
    rol: string;
  };
  message: string;
  status: string;
}
