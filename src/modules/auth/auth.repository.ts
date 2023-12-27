import { AuthRepository, Login } from "./auth.model";

export function createAuthRepository(): AuthRepository {
  return {
    getToken,
    loginUser,
    refreshTokens,
  };
}

function getToken(): string | null {
  //TODO: change this fake implementation

  const userToken: string | null = "asdasd";
  return userToken;
}

function loginUser(data: Login): Promise<Request> {
  //TODO: change this fake implementation
  console.log(data);
  return Promise.resolve({} as Request);
}

function refreshTokens(newRefreshToken: string): Promise<Request> {
  //TODO: change this fake implementation
  console.log(newRefreshToken);
  return Promise.resolve({} as Request);
}
