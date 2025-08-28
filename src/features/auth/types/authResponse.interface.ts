export interface AuthResponse {
  message: {
    token: string;
    refreshToken: string;
    user: {
      id: string;
      userName: string;
      email: string;
      role: string;
    };
  };
  success: boolean;
  status: number;
}

export interface RefreshResponse {
  message: {
    token: string;
    refreshToken: string;
  };
  success: boolean;
  status: number;
}
