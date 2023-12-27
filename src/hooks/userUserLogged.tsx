import { authService } from "../modules/auth/auth.service.ts";
import { createAuthRepository } from "../modules/auth/auth.repository.ts";

export default function useUserLogged() {
  const authRepository = createAuthRepository();
  const auth = authService(authRepository);
  const userIsLogged = auth.getToken();

  return [userIsLogged];
}
