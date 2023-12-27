import { AuthRepository, Login } from "./auth.model";

export const authService = (
  authRepository: AuthRepository
): AuthRepository => ({
  getToken: () => {
    return authRepository.getToken();
  },

  loginUser: (data: Login) => {
    return authRepository.loginUser(data);
  },

  refreshTokens: (newRefreshToken: string) => {
    return authRepository.refreshTokens(newRefreshToken);
  },
});
