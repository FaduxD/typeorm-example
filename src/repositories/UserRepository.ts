import { User } from "@models/User";
import AppDataSource from "src/AppDataSource";

const userRepository = AppDataSource.getRepository(User);

export const create = async (user: User) => {
  await userRepository.save(user);
};

export const getAll = async () => {
  return await userRepository.find({});
};
