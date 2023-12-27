export interface UserRepository {
  getNumberOfUsers: () => Promise<number>;
  getCurrentUserName: () => string;
  getCurrentUserId: () => string;
  getUsers: () => Promise<User[]>;
  getUserById: (id: string) => Promise<User>;
  modifyUserById: (id: string, data: User) => Promise<Request>;
  createNewUser: (data: User) => Promise<Request>;
  removeUserById: (id: string) => Promise<Request>;
}

export interface User {
  userName: string;
  token: string | undefined;
}
