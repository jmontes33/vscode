import { UserRepository, User } from "./user.model";

export const userService = (
  userRepository: UserRepository
): UserRepository => ({
  getNumberOfUsers: () => {
    return userRepository.getNumberOfUsers();
  },

  getCurrentUserName: () => {
    return userRepository.getCurrentUserName();
  },

  getCurrentUserId: () => {
    return userRepository.getCurrentUserId();
  },

  getUsers: () => {
    return userRepository.getUsers();
  },

  getUserById: (id: string) => {
    return userRepository.getUserById(id);
  },

  modifyUserById: (id: string, data: User) => {
    return userRepository.modifyUserById(id, data);
  },

  createNewUser: (data: User) => {
    return userRepository.createNewUser(data);
  },

  removeUserById: (id: string) => {
    return userRepository.removeUserById(id);
  },
});
