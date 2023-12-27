export interface AuthRepository {
  loginUser: (data: Login) => Promise<Request>;
  getToken: () => string | null;
  refreshTokens: (newRefreshToken: string) => Promise<Request>;
}

export interface Login {
  userId: string;
  password: string;
}

export interface Auth {
  userName: string;
  authToken: string;
  refreshToken: string;
}
